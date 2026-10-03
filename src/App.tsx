import { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Copy, 
  Check, 
  Bookmark, 
  BookmarkCheck, 
  Shuffle, 
  RotateCcw, 
  Sparkles, 
  BookOpen, 
  Zap, 
  FileText, 
  X,
  Search,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WORD_DATABASE, POPULAR_CHIPS, type WordEntry } from './data/words';
import { lookupWord, speakWord } from './services/dictionary';
import { LegalModal } from './components/LegalModal';
import { ComplianceBanner } from './components/ComplianceBanner';

type TabMode = 'formula' | 'directory' | 'quiz' | 'upgrader';

export function App() {
  const [activeTab, setActiveTab] = useState<TabMode>('formula');
  
  // Legal & Compliance State (Sue-Proof)
  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(false);
  const [legalModalTab, setLegalModalTab] = useState<'terms' | 'privacy' | 'ada' | 'disclaimer'>('terms');

  const openLegal = (tab: 'terms' | 'privacy' | 'ada' | 'disclaimer') => {
    setLegalModalTab(tab);
    setLegalModalOpen(true);
  };
  
  // Formula State
  const [inputValue, setInputValue] = useState<string>('big');
  const [currentWord, setCurrentWord] = useState<WordEntry | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedSentence, setCopiedSentence] = useState<boolean>(false);
  const [copiedWord, setCopiedWord] = useState<boolean>(false);
  
  // Saved Words State
  const [savedWords, setSavedWords] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('very_vocab_saved');
      return saved ? JSON.parse(saved) : ['colossal', 'furious', 'exquisite'];
    } catch {
      return ['colossal', 'furious', 'exquisite'];
    }
  });
  const [showSavedModal, setShowSavedModal] = useState<boolean>(false);

  // Directory State
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Quiz State
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizStreak, setQuizStreak] = useState<number>(0);
  const [quizSelectedAnswer, setQuizSelectedAnswer] = useState<string | null>(null);
  const [quizCurrentQuestion, setQuizCurrentQuestion] = useState<{
    entry: WordEntry;
    options: string[];
    correct: string;
  } | null>(null);

  // Upgrader State
  const [paragraphInput, setParagraphInput] = useState<string>(
    "It was a very cold morning. I was very tired and felt very hungry, but the sunrise over the mountains was very beautiful."
  );

  const searchDebounceRef = useRef<number | null>(null);

  // Initial load
  useEffect(() => {
    handleLookup('big');
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('very_vocab_saved', JSON.stringify(savedWords));
    } catch {
      // ignore
    }
  }, [savedWords]);

  // Handle typing lookup
  const handleLookup = (val: string) => {
    const trimmed = val.trim().toLowerCase();
    if (!trimmed) {
      setCurrentWord(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    if (searchDebounceRef.current) {
      clearTimeout(searchDebounceRef.current);
    }

    searchDebounceRef.current = window.setTimeout(async () => {
      const result = await lookupWord(trimmed);
      setCurrentWord(result);
      setIsLoading(false);
    }, 180);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInputValue(val);
    handleLookup(val);
  };

  const handleChipClick = (chip: string) => {
    setInputValue(chip);
    handleLookup(chip);
  };

  const handleRandomWord = () => {
    const random = WORD_DATABASE[Math.floor(Math.random() * WORD_DATABASE.length)];
    setInputValue(random.base);
    setCurrentWord(random);
  };

  const toggleSaveWord = (word: string) => {
    const lower = word.toLowerCase();
    if (savedWords.includes(lower)) {
      setSavedWords(savedWords.filter(w => w !== lower));
    } else {
      setSavedWords([...savedWords, lower]);
    }
  };

  const copyToClipboard = (text: string, isSentence = false) => {
    navigator.clipboard.writeText(text);
    if (isSentence) {
      setCopiedSentence(true);
      setTimeout(() => setCopiedSentence(false), 2000);
    } else {
      setCopiedWord(true);
      setTimeout(() => setCopiedWord(false), 2000);
    }
  };

  // Setup Quiz Question
  const generateQuizQuestion = () => {
    const available = WORD_DATABASE;
    const target = available[Math.floor(Math.random() * available.length)];
    const distractors: string[] = [];

    while (distractors.length < 3) {
      const cand = available[Math.floor(Math.random() * available.length)].strong;
      if (cand !== target.strong && !distractors.includes(cand)) {
        distractors.push(cand);
      }
    }

    const options = [...distractors, target.strong].sort(() => Math.random() - 0.5);

    setQuizCurrentQuestion({
      entry: target,
      options,
      correct: target.strong
    });
    setQuizSelectedAnswer(null);
  };

  useEffect(() => {
    if (activeTab === 'quiz' && !quizCurrentQuestion) {
      generateQuizQuestion();
    }
  }, [activeTab]);

  const handleQuizAnswer = (option: string) => {
    if (quizSelectedAnswer !== null || !quizCurrentQuestion) return;
    setQuizSelectedAnswer(option);

    if (option === quizCurrentQuestion.correct) {
      const newStreak = quizStreak + 1;
      setQuizStreak(newStreak);
      setQuizScore(s => s + 10 * newStreak);
      if (newStreak % 3 === 0) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      setQuizStreak(0);
    }

    setTimeout(() => {
      setQuizIndex(i => i + 1);
      generateQuizQuestion();
    }, 1200);
  };

  // Directory categories
  const categories = ['All', 'Scale', 'Emotion', 'Intellect', 'Physical', 'Speed', 'Quality', 'Character', 'Atmosphere', 'Appearance'];

  const filteredWords = WORD_DATABASE.filter(w => {
    const matchesCategory = selectedCategory === 'All' || w.category === selectedCategory;
    const matchesSearch = 
      w.base.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.strong.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.definition.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Paragraph Upgrader parsing
  const renderUpgradedParagraph = () => {
    if (!paragraphInput.trim()) return null;

    let text = paragraphInput;
    const replacementsMade: { from: string; to: string }[] = [];

    // Check each word in database
    WORD_DATABASE.forEach(item => {
      const regex = new RegExp(`\\bvery\\s+${item.base}\\b`, 'gi');
      if (regex.test(text)) {
        replacementsMade.push({ from: `very ${item.base}`, to: item.strong.toLowerCase() });
        text = text.replace(regex, `___REPLACE_${item.id}___`);
      }
    });

    const parts = text.split(/(___REPLACE_[a-zA-Z0-9_-]+___)/g);

    return (
      <div className="upgrader-output">
        {parts.map((part, idx) => {
          if (part.startsWith('___REPLACE_')) {
            const id = part.replace('___REPLACE_', '').replace('___', '');
            const found = WORD_DATABASE.find(w => w.id === id);
            return (
              <span key={idx} className="highlight-replaced" title={`Replaced "very ${found?.base}"`}>
                {found?.strong.toLowerCase()}
              </span>
            );
          }
          return <span key={idx}>{part}</span>;
        })}
      </div>
    );
  };

  return (
    <div className="app-wrapper">
      {/* ADA Title III Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Brand Header */}
      <header className="brand-bar" role="banner">
        <div className="logo-block">
          <span className="logo-title">VERY+</span>
          <span className="logo-tag">drop the "very"</span>
        </div>

        <div className="header-actions">
          <button 
            className="nb-btn nb-btn-sm nb-btn-yellow"
            onClick={handleRandomWord}
            title="Random word"
          >
            <Shuffle size={15} />
            random
          </button>

          <button 
            className="nb-btn nb-btn-sm"
            onClick={() => setShowSavedModal(true)}
            title="Saved words"
          >
            <Bookmark size={15} />
            saved ({savedWords.length})
          </button>
        </div>
      </header>

      {/* Neobrutalist Navigation Tabs */}
      <nav className="nav-tabs">
        <button 
          className={`nav-tab-btn ${activeTab === 'formula' ? 'active' : ''}`}
          onClick={() => setActiveTab('formula')}
        >
          <Zap size={15} />
          formula
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'directory' ? 'active' : ''}`}
          onClick={() => setActiveTab('directory')}
        >
          <BookOpen size={15} />
          all words ({WORD_DATABASE.length})
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          <Sparkles size={15} />
          quick quiz
        </button>

        <button 
          className={`nav-tab-btn ${activeTab === 'upgrader' ? 'active' : ''}`}
          onClick={() => setActiveTab('upgrader')}
        >
          <FileText size={15} />
          paragraph fixer
        </button>
      </nav>

      {/* TAB 1: THE FORMULA (Main Core Feature) */}
      {activeTab === 'formula' && (
        <main id="main-content" className="formula-stage" tabIndex={-1}>
          {/* Card 1: VERY */}
          <div className="prefix-card">
            <span className="card-label">START WITH</span>
            <div className="prefix-text">VERY</div>
          </div>

          {/* Plus Sign */}
          <div className="operator-sign" aria-hidden="true">+</div>

          {/* Card 2: User Input */}
          <div className="input-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="card-label">YOUR WORD</span>
              <span className="font-mono uppercase" style={{ fontSize: '0.75rem', fontWeight: 700, color: '#777' }}>
                {inputValue ? `${inputValue.length} CHARS` : 'TYPE ANY WORD'}
              </span>
            </div>

            <div className="input-row">
              <input 
                type="text"
                className="formula-input"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="type a word... e.g. tired, cold, big, angry"
                autoFocus
                spellCheck="false"
                aria-label="Enter word to enhance"
              />
              {inputValue && (
                <button 
                  className="input-clear-btn" 
                  onClick={() => { setInputValue(''); handleLookup(''); }}
                  title="Clear input"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Quick Word Chips */}
            <div className="chips-container">
              <span className="chips-title">QUICK PICKS:</span>
              <div className="chips-wrap">
                {POPULAR_CHIPS.map(chip => (
                  <button
                    key={chip}
                    className={`quick-chip ${inputValue.toLowerCase() === chip ? 'active' : ''}`}
                    onClick={() => handleChipClick(chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Equals Sign */}
          <div className="operator-sign" aria-hidden="true">=</div>

          {/* Card 3: Elevated Vocabulary Result */}
          {isLoading ? (
            <div className="empty-state-card" aria-live="polite">
              <div className="empty-state-icon" style={{ backgroundColor: 'var(--yellow)' }}>
                <Sparkles size={28} />
              </div>
              <h2 className="empty-state-title">LOOKING UP WORDS...</h2>
              <p className="empty-state-desc">Finding cleaner, stronger alternatives.</p>
            </div>
          ) : currentWord ? (
            <article className="result-card" role="region" aria-label="Elevated Vocabulary Result" aria-live="polite">
              {/* Header with power word */}
              <div className="result-card-header">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="card-label">BETTER WORD</span>
                  <span className="nb-badge" style={{ backgroundColor: '#000', color: '#fff' }}>
                    {currentWord.category || 'Quality'}
                  </span>
                </div>

                <div className="result-headline-row">
                  <h1 className="result-word">{currentWord.strong}</h1>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button 
                      className="nb-btn nb-btn-sm nb-btn-yellow" 
                      onClick={() => speakWord(currentWord.strong)}
                      title="Listen to pronunciation"
                    >
                      <Volume2 size={16} />
                      LISTEN
                    </button>

                    <button 
                      className="nb-btn nb-btn-sm" 
                      onClick={() => toggleSaveWord(currentWord.strong)}
                      title="Save word"
                    >
                      {savedWords.includes(currentWord.strong.toLowerCase()) ? (
                        <>
                          <BookmarkCheck size={16} color="#000" />
                          SAVED
                        </>
                      ) : (
                        <>
                          <Bookmark size={16} />
                          SAVE
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="result-meta">
                  <span className="result-phonetic">{currentWord.phonetic}</span>
                  <span className="result-pos-badge">{currentWord.partOfSpeech}</span>
                </div>
              </div>

              {/* Body */}
              <div className="result-card-body">
                {/* Definition */}
                <div className="definition-box">
                  "{currentWord.definition}"
                </div>

                {/* Before vs After comparison */}
                <div>
                  <div className="section-label" style={{ marginBottom: '0.5rem' }}>
                    <TrendingUp size={16} />
                    IN CONTEXT
                  </div>
                  <div className="transformation-grid">
                    <div className="transformation-pane pane-bad">
                      <span className="trans-tag" style={{ color: '#C53030' }}>BEFORE:</span>
                      <p className="trans-sentence">"{currentWord.example.before}"</p>
                    </div>
                    <div className="transformation-pane pane-good">
                      <span className="trans-tag" style={{ color: '#276749' }}>BETTER:</span>
                      <p className="trans-sentence">"{currentWord.example.after}"</p>
                    </div>
                  </div>
                </div>

                {/* Nuance spectrum / alternatives */}
                {currentWord.alternatives && currentWord.alternatives.length > 0 && (
                  <div className="alternatives-box">
                    <div className="section-label">
                      <Sparkles size={16} />
                      OTHER WAYS TO SAY IT
                    </div>
                    <div className="alternatives-grid">
                      {currentWord.alternatives.map((alt, idx) => (
                        <div 
                          key={idx} 
                          className="alt-card"
                          onClick={() => speakWord(alt.word)}
                          title="Click to hear pronunciation"
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span className="alt-word">{alt.word}</span>
                            <Volume2 size={13} style={{ opacity: 0.6 }} />
                          </div>
                          {alt.nuance && <span className="alt-nuance">{alt.nuance}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Actions */}
                <div className="result-actions-bar">
                  <button 
                    className="nb-btn nb-btn-sm"
                    onClick={() => copyToClipboard(currentWord.example.after, true)}
                  >
                    {copiedSentence ? <Check size={16} /> : <Copy size={16} />}
                    {copiedSentence ? 'COPIED!' : 'COPY SENTENCE'}
                  </button>

                  <button 
                    className="nb-btn nb-btn-sm"
                    onClick={() => copyToClipboard(currentWord.strong, false)}
                  >
                    {copiedWord ? <Check size={16} /> : <Copy size={16} />}
                    {copiedWord ? 'COPIED!' : 'COPY WORD'}
                  </button>
                </div>
              </div>
            </article>
          ) : (
            <div className="empty-state-card">
              <div className="empty-state-icon">
                <ArrowRight size={28} />
              </div>
              <h2 className="empty-state-title">TYPE A WORD TO GET STARTED</h2>
              <p className="empty-state-desc">
                Enter any basic adjective like <strong>tired</strong>, <strong>cold</strong>, <strong>big</strong>, <strong>angry</strong>, or pick one from above.
              </p>
            </div>
          )}
        </main>
      )}

      {/* TAB 2: DIRECTORY */}
      {activeTab === 'directory' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="bank-controls">
            <div className="bank-search-row">
              <div style={{ display: 'flex', alignItems: 'center', flex: 1, position: 'relative' }}>
                <Search size={20} style={{ position: 'absolute', left: '12px', color: '#666' }} />
                <input 
                  type="text"
                  className="bank-search-input"
                  style={{ paddingLeft: '2.5rem' }}
                  placeholder="search any word or synonym..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="nb-badge" style={{ backgroundColor: 'var(--yellow)' }}>
                  {filteredWords.length} words
                </span>
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="category-filter-chips">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`quick-chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Words Grid */}
          <div className="words-grid">
            {filteredWords.map((item) => (
              <div key={item.id} className="word-grid-card">
                <div className="card-top">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="card-formula-badge">
                      <span>very + <strong>{item.base}</strong></span>
                    </div>
                    <span className="nb-badge" style={{ fontSize: '0.65rem' }}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="card-formula-strong">{item.strong}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span className="font-mono" style={{ fontSize: '0.8rem', background: '#000', color: '#fff', padding: '0.1rem 0.4rem' }}>
                      {item.phonetic}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#666' }}>
                      {item.partOfSpeech}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.9rem', color: '#333', marginTop: '0.35rem' }}>
                    {item.definition}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #000', paddingTop: '0.75rem' }}>
                  <button 
                    className="quick-chip"
                    onClick={() => speakWord(item.strong)}
                    title="Pronounce"
                  >
                    <Volume2 size={14} />
                    listen
                  </button>

                  <button 
                    className="nb-btn nb-btn-sm nb-btn-yellow"
                    onClick={() => {
                      setInputValue(item.base);
                      setCurrentWord(item);
                      setActiveTab('formula');
                    }}
                  >
                    use this word
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: DRILL & QUIZ */}
      {activeTab === 'quiz' && quizCurrentQuestion && (
        <section className="quiz-container">
          <div className="quiz-header-bar">
            <div className="quiz-stat">
              score: <span style={{ color: 'var(--coral)' }}>{quizScore}</span>
            </div>
            <div className="quiz-stat">
              streak: <span style={{ color: '#2B6CB0' }}>{quizStreak} 🔥</span>
            </div>
            <div className="quiz-stat">
              question #{quizIndex + 1}
            </div>
          </div>

          <div className="quiz-card">
            <span className="quiz-prompt-badge">WHAT'S A BETTER WORD FOR:</span>
            <div className="quiz-question">
              VERY + <span style={{ color: 'var(--coral)', textDecoration: 'underline' }}>{quizCurrentQuestion.entry.base}</span>
            </div>

            <p style={{ fontSize: '1rem', color: '#555', fontStyle: 'italic', maxWidth: '440px' }}>
              hint: "{quizCurrentQuestion.entry.definition}"
            </p>

            <div className="quiz-options-grid">
              {quizCurrentQuestion.options.map((opt, i) => {
                let statusClass = '';
                if (quizSelectedAnswer) {
                  if (opt === quizCurrentQuestion.correct) {
                    statusClass = 'correct';
                  } else if (opt === quizSelectedAnswer) {
                    statusClass = 'wrong';
                  }
                }

                return (
                  <button
                    key={i}
                    className={`quiz-option-btn ${statusClass}`}
                    onClick={() => handleQuizAnswer(opt)}
                    disabled={quizSelectedAnswer !== null}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          <button 
            className="nb-btn nb-btn-sm"
            onClick={() => {
              setQuizStreak(0);
              setQuizScore(0);
              setQuizIndex(0);
              generateQuizQuestion();
            }}
          >
            <RotateCcw size={16} />
            reset stats
          </button>
        </section>
      )}

      {/* TAB 4: PARAGRAPH UPGRADER */}
      {activeTab === 'upgrader' && (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="upgrader-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="card-label">PASTE YOUR TEXT</span>
              <button 
                className="quick-chip"
                onClick={() => setParagraphInput(
                  "It was a very cold morning. I was very tired and felt very hungry, but the sunrise over the mountains was very beautiful."
                )}
              >
                try an example
              </button>
            </div>

            <textarea 
              className="upgrader-textarea"
              value={paragraphInput}
              onChange={(e) => setParagraphInput(e.target.value)}
              placeholder="paste anything you wrote with 'very + word' here. we'll highlight words you can swap out..."
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span className="font-mono" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                live word replacement active
              </span>

              <button 
                className="nb-btn nb-btn-sm nb-btn-yellow"
                onClick={() => {
                  navigator.clipboard.writeText(paragraphInput);
                }}
              >
                <Copy size={16} />
                copy text
              </button>
            </div>
          </div>

          {/* Output Display */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span className="section-label">
              <Sparkles size={16} />
              improved version:
            </span>
            {renderUpgradedParagraph()}
          </div>
        </section>
      )}

      {/* SAVED WORDS MODAL */}
      {showSavedModal && (
        <div className="nb-modal-overlay" onClick={() => setShowSavedModal(false)}>
          <div className="nb-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="nb-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookmarkCheck size={20} />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase' }}>
                  saved words ({savedWords.length})
                </h3>
              </div>
              <button 
                className="input-clear-btn" 
                style={{ position: 'static', transform: 'none' }}
                onClick={() => setShowSavedModal(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div className="nb-modal-body">
              {savedWords.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#666', padding: '2rem 0' }}>
                  no saved words yet. click save on any word card to keep it here.
                </p>
              ) : (
                savedWords.map((word) => {
                  const entry = WORD_DATABASE.find(w => w.strong.toLowerCase() === word || w.base.toLowerCase() === word);
                  return (
                    <div 
                      key={word} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '0.75rem 1rem',
                        border: '2px solid #000',
                        boxShadow: '2px 2px 0px #000',
                        backgroundColor: '#fff'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase' }}>
                          {entry ? entry.strong : word.toUpperCase()}
                        </span>
                        {entry && (
                          <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.2rem' }}>
                            replaces: <strong>very {entry.base}</strong>
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <button 
                          className="quick-chip"
                          onClick={() => speakWord(entry ? entry.strong : word)}
                        >
                          <Volume2 size={14} />
                        </button>
                        <button 
                          className="quick-chip"
                          onClick={() => toggleSaveWord(word)}
                          style={{ backgroundColor: '#FF5A36', color: '#fff' }}
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {savedWords.length > 0 && (
              <div style={{ padding: '1rem 1.5rem', borderTop: '3px solid #000', display: 'flex', justifyContent: 'space-between' }}>
                <button 
                  className="nb-btn nb-btn-sm"
                  onClick={() => {
                    navigator.clipboard.writeText(savedWords.join(', '));
                    alert('copied saved words to clipboard');
                  }}
                >
                  <Copy size={16} />
                  copy all
                </button>
                <button 
                  className="nb-btn nb-btn-sm nb-btn-coral"
                  onClick={() => setSavedWords([])}
                >
                  clear all
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sue-Proof Legal & Compliance Footer */}
      <footer 
        style={{ 
          borderTop: 'var(--border-thick) solid var(--ink)', 
          paddingTop: '2rem', 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1.25rem',
          marginTop: '2.5rem'
        }}
        role="contentinfo"
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span className="nb-badge" style={{ backgroundColor: '#000', color: '#fff', fontSize: '0.8rem' }}>
              100% FREE
            </span>
            <span className="nb-badge" style={{ backgroundColor: 'var(--yellow)', fontSize: '0.8rem' }}>
              NO ADS
            </span>
            <span className="nb-badge" style={{ backgroundColor: 'var(--lime)', fontSize: '0.8rem' }}>
              NO TRACKING
            </span>
            <span className="nb-badge" style={{ backgroundColor: 'var(--cyan)', fontSize: '0.8rem' }}>
              ACCESSIBLE
            </span>
          </div>

          {/* Legal Navigation Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <button 
              className="nb-btn nb-btn-sm" 
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
              onClick={() => openLegal('terms')}
            >
              terms
            </button>
            <button 
              className="nb-btn nb-btn-sm" 
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
              onClick={() => openLegal('privacy')}
            >
              privacy
            </button>
            <button 
              className="nb-btn nb-btn-sm" 
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
              onClick={() => openLegal('ada')}
            >
              accessibility
            </button>
            <button 
              className="nb-btn nb-btn-sm" 
              style={{ fontSize: '0.75rem', padding: '0.35rem 0.65rem' }}
              onClick={() => openLegal('disclaimer')}
            >
              disclaimers
            </button>
          </div>
        </div>

        {/* Legal Disclaimer Micro-Notice */}
        <div style={{ 
          border: '2px solid #000', 
          padding: '0.85rem 1rem', 
          backgroundColor: '#FFFFFF', 
          fontSize: '0.78rem', 
          lineHeight: '1.5',
          color: '#333'
        }}>
          <p>
            <strong>NOTICE & DISCLAIMER:</strong> VERY+ is a free vocabulary utility for writing and educational exploration. Provided "as is" under fair use (17 U.S.C. § 107). Word suggestions are intended for stylistic exploration. No tracking cookies or personal data collected. All disputes subject to binding individual arbitration.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '1rem',
          fontSize: '0.75rem',
          fontFamily: 'JetBrains Mono',
          color: '#666'
        }}>
          <div>
            © 2026 VERY+. free forever. zero tracking.
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span>100% FREE</span>
            <span>•</span>
            <span>ZERO ADS</span>
            <span>•</span>
            <span>CLIENT STORAGE ONLY</span>
            <span>•</span>
            <span>ZERO TRACKING</span>
          </div>
        </div>
      </footer>

      {/* Compliance / Privacy Consent Banner */}
      <ComplianceBanner onOpenLegal={openLegal} />

      {/* Sue-Proof Legal Modal */}
      <LegalModal 
        isOpen={legalModalOpen} 
        onClose={() => setLegalModalOpen(false)} 
        initialTab={legalModalTab} 
      />
    </div>
  );
}

export default App;
