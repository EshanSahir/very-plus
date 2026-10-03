import { WORD_DATABASE, findWordByBase, type WordEntry } from '../data/words';

// In-memory cache for dynamic lookups
const dynamicCache = new Map<string, WordEntry>();

interface DatamuseResult {
  word: string;
  score: number;
  tags?: string[];
  defs?: string[];
}

interface FreeDictionaryResult {
  word: string;
  phonetic?: string;
  phonetics?: { text?: string; audio?: string }[];
  meanings?: {
    partOfSpeech?: string;
    definitions?: { definition?: string; example?: string }[];
    synonyms?: string[];
  }[];
}

/**
 * Enhanced lookup: checks local database first, then queries online API if not found.
 */
export async function lookupWord(input: string): Promise<WordEntry | null> {
  const clean = input.trim().toLowerCase();
  if (!clean) return null;

  // 1. Local curated database check
  const localMatch = findWordByBase(clean);
  if (localMatch) {
    return localMatch;
  }

  // 2. Check dynamic cache
  if (dynamicCache.has(clean)) {
    return dynamicCache.get(clean)!;
  }

  // 3. Online dynamic enhancement via Datamuse & FreeDictionary API
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    // Fetch related words for "very + [clean]"
    const datamusePromise = fetch(
      `https://api.datamuse.com/words?ml=very+${encodeURIComponent(clean)}&md=d&max=8`,
      { signal: controller.signal }
    ).then(res => (res.ok ? res.json() : [])) as Promise<DatamuseResult[]>;

    // Fetch definition of the candidate
    const [datamuseData] = await Promise.all([
      datamusePromise.catch(() => [])
    ]);

    clearTimeout(timeoutId);

    if (datamuseData && datamuseData.length > 0) {
      // Pick best candidate: not the exact same word
      const candidates = datamuseData.filter(
        d => d.word.toLowerCase() !== clean && !d.word.includes(' ') && d.word.length > 2
      );

      if (candidates.length > 0) {
        const topCandidate = candidates[0].word;

        // Try getting definition from Free Dictionary API
        let phonetic = `/${topCandidate}/`;
        let definition = `Characterized by being exceedingly or intensely ${clean}.`;
        let partOfSpeech = "adjective";
        let exampleSentence = `The outcome was remarkably ${topCandidate}.`;

        try {
          const dictRes = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(topCandidate)}`
          );
          if (dictRes.ok) {
            const dictData = (await dictRes.json()) as FreeDictionaryResult[];
            if (dictData && dictData.length > 0) {
              const entry = dictData[0];
              if (entry.phonetic) {
                phonetic = entry.phonetic;
              } else if (entry.phonetics && entry.phonetics.length > 0) {
                const foundPhonetic = entry.phonetics.find(p => p.text);
                if (foundPhonetic?.text) phonetic = foundPhonetic.text;
              }

              if (entry.meanings && entry.meanings.length > 0) {
                const meaning = entry.meanings[0];
                partOfSpeech = meaning.partOfSpeech || "adjective";
                if (meaning.definitions && meaning.definitions.length > 0) {
                  definition = meaning.definitions[0].definition || definition;
                  if (meaning.definitions[0].example) {
                    exampleSentence = meaning.definitions[0].example;
                  }
                }
              }
            }
          }
        } catch {
          // ignore network failure for dict lookup, use fallback
        }

        const altWords = candidates.slice(1, 4).map(c => ({
          word: c.word.toUpperCase(),
          nuance: c.defs && c.defs.length > 0 ? c.defs[0].replace(/^[a-z]+\t/, '') : `Alternate high-intensity form of ${clean}.`
        }));

        const dynamicEntry: WordEntry = {
          id: `dyn-${clean}`,
          base: clean,
          strong: topCandidate.toUpperCase(),
          phonetic: phonetic,
          partOfSpeech: partOfSpeech,
          definition: definition,
          alternatives: altWords,
          example: {
            before: `It was very ${clean}.`,
            after: exampleSentence
          },
          category: "Quality"
        };

        dynamicCache.set(clean, dynamicEntry);
        return dynamicEntry;
      }
    }
  } catch {
    // If online lookup fails or times out, check if any fuzzy match exists in database
  }

  // Fallback: check if any word contains the input substring
  const fuzzy = WORD_DATABASE.find(w => w.base.includes(clean) || clean.includes(w.base));
  if (fuzzy) return fuzzy;

  return null;
}

/**
 * Text-to-speech pronunciation utility
 */
export function speakWord(text: string) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // cancel previous speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  }
}
