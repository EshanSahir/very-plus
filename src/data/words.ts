export interface WordEntry {
  id: string;
  base: string;          // e.g. "big"
  strong: string;        // e.g. "COLOSSAL"
  phonetic: string;      // e.g. "/kəˈlɒs.əl/"
  partOfSpeech: string;  // e.g. "adjective"
  definition: string;    // concise explanation
  note?: string;         // dry, relatable context note
  alternatives: { word: string; nuance?: string }[];
  example: {
    before: string;
    after: string;
  };
  category: 'Scale' | 'Emotion' | 'Intellect' | 'Physical' | 'Speed' | 'Quality' | 'Atmosphere' | 'Character' | 'Appearance';
}

export const WORD_DATABASE: WordEntry[] = [
  // --- SCALE & SIZE ---
  {
    id: "big",
    base: "big",
    strong: "COLOSSAL",
    phonetic: "/kəˈlɒs.əl/",
    partOfSpeech: "adjective",
    definition: "Extremely large, gigantic, or monumental in scale or power.",
    note: "Because 'super humongous big' isn't cutting it in college.",
    alternatives: [
      { word: "MASSIVE", nuance: "Dense, heavy, and immense in physical volume." },
      { word: "GIGANTIC", nuance: "Resembling a giant; towering over surroundings." },
      { word: "MAMMOTH", nuance: "Used for massive projects, creatures, or efforts." },
      { word: "ENORMOUS", nuance: "Far exceeding typical dimensions or expectations." }
    ],
    example: {
      before: "The new space telescope captured a very big asteroid.",
      after: "The new space telescope captured a colossal asteroid."
    },
    category: "Scale"
  },
  {
    id: "small",
    base: "small",
    strong: "MINUSCULE",
    phonetic: "/ˈmɪn.ə.skjuːl/",
    partOfSpeech: "adjective",
    definition: "Extremely small; tiny or barely perceptible.",
    note: "Like your remaining patience on a Monday morning.",
    alternatives: [
      { word: "MICROSCOPIC", nuance: "Invisible to the naked eye; requiring magnification." },
      { word: "DIMINUTIVE", nuance: "Charming or notably compact in stature." },
      { word: "TINY", nuance: "Much smaller than regular dimensions." },
      { word: "PETITE", nuance: "Attractively small and trim, often of people." }
    ],
    example: {
      before: "The engineer noticed a very small crack on the lens.",
      after: "The engineer noticed a minuscule crack on the lens."
    },
    category: "Scale"
  },
  {
    id: "huge",
    base: "huge",
    strong: "GARGANTUAN",
    phonetic: "/ɡɑːrˈɡæn.tʃu.ən/",
    partOfSpeech: "adjective",
    definition: "Of immense, staggering, or boundless proportions.",
    alternatives: [
      { word: "TITANIC", nuance: "Possessing astronomical power or proportions." },
      { word: "IMMENSE", nuance: "Extending without obvious boundary." },
      { word: "MONUMENTAL", nuance: "Great in importance and physical presence." }
    ],
    example: {
      before: "The project faced a very huge obstacle right before launch.",
      after: "The project faced a gargantuan obstacle right before launch."
    },
    category: "Scale"
  },
  {
    id: "tiny",
    base: "tiny",
    strong: "INFINTESIMAL",
    phonetic: "/ˌɪn.fɪ.nɪˈtes.ɪ.məl/",
    partOfSpeech: "adjective",
    definition: "Immeasurably small or negligible in quantity or degree.",
    alternatives: [
      { word: "NEGLIGIBLE", nuance: "So slight as to be safely disregarded." },
      { word: "ATOMIC", nuance: "Relating to the most fundamental unit scale." }
    ],
    example: {
      before: "The margin of error was very tiny.",
      after: "The margin of error was infinitesimal."
    },
    category: "Scale"
  },
  {
    id: "tall",
    base: "tall",
    strong: "TOWERING",
    phonetic: "/ˈtaʊə.rɪŋ/",
    partOfSpeech: "adjective",
    definition: "Reaching a high elevation; soaring high above surrounding objects.",
    alternatives: [
      { word: "SKY-SCRAPING", nuance: "Piercing into high altitudes." },
      { word: "LOFTY", nuance: "Elevated physically or morally." }
    ],
    example: {
      before: "They hiked past very tall redwood trees in California.",
      after: "They hiked past towering redwood trees in California."
    },
    category: "Scale"
  },
  {
    id: "short",
    base: "short",
    strong: "FLEETING",
    phonetic: "/ˈfliː.tɪŋ/",
    partOfSpeech: "adjective",
    definition: "Lasting for only a brief or imperceptible moment in time.",
    alternatives: [
      { word: "BRIEF", nuance: "Short duration or concise expression." },
      { word: "TRANSIENT", nuance: "Passing quickly without enduring roots." },
      { word: "TRUNCATED", nuance: "Cut short abruptly." }
    ],
    example: {
      before: "We shared a very short glance before he departed.",
      after: "We shared a fleeting glance before he departed."
    },
    category: "Scale"
  },
  {
    id: "long",
    base: "long",
    strong: "INTERMINABLE",
    phonetic: "/ɪnˈtɜː.mɪ.nə.bəl/",
    partOfSpeech: "adjective",
    definition: "Endless, unceasing, or dragging on tediously.",
    alternatives: [
      { word: "PROTRACTED", nuance: "Extended longer than expected." },
      { word: "UNENDING", nuance: "Seeming to lack an expiration point." }
    ],
    example: {
      before: "We endured a very long wait in the airport terminal.",
      after: "We endured an interminable wait in the airport terminal."
    },
    category: "Scale"
  },
  {
    id: "wide",
    base: "wide",
    strong: "EXPANSIVE",
    phonetic: "/ɪkˈspæn.sɪv/",
    partOfSpeech: "adjective",
    definition: "Covering a wide space, scope, or breadth.",
    alternatives: [
      { word: "VAST", nuance: "Boundless horizontal or spatial reach." },
      { word: "SWEEPING", nuance: "Extending in a broad, fluid curve or reach." }
    ],
    example: {
      before: "From the summit, we saw a very wide valley.",
      after: "From the summit, we saw an expansive valley."
    },
    category: "Scale"
  },
  {
    id: "crowded",
    base: "crowded",
    strong: "TEEMING",
    phonetic: "/ˈtiː.mɪŋ/",
    partOfSpeech: "adjective",
    definition: "Overflowing or alive with a dense, bustling swarm of people or life.",
    alternatives: [
      { word: "BUSTLING", nuance: "Full of energetic and chaotic activity." },
      { word: "SWARMING", nuance: "Dense pack moving in collective motion." },
      { word: "JAM-PACKED", nuance: "Completely full with zero remaining space." }
    ],
    example: {
      before: "The subway station was very crowded during rush hour.",
      after: "The subway station was teeming during rush hour."
    },
    category: "Scale"
  },
  {
    id: "empty",
    base: "empty",
    strong: "DESOLATE",
    phonetic: "/ˈdes.ə.lət/",
    partOfSpeech: "adjective",
    definition: "Devoid of inhabitants, bleak, and somberly deserted.",
    alternatives: [
      { word: "BARREN", nuance: "Incapable of producing life or growth." },
      { word: "VACANT", nuance: "Unoccupied or without content." }
    ],
    example: {
      before: "The old mining town was very empty after the winter freeze.",
      after: "The old mining town was desolate after the winter freeze."
    },
    category: "Scale"
  },

  // --- EMOTION & MOOD ---
  {
    id: "angry",
    base: "angry",
    strong: "FURIOUS",
    phonetic: "/ˈfjʊə.ri.əs/",
    partOfSpeech: "adjective",
    definition: "Extremely angry; full of violent wild rage or resentment.",
    note: "Save this for when someone unplugs your phone at 3%.",
    alternatives: [
      { word: "IRATE", nuance: "Incensed with sharp verbal indignation." },
      { word: "LIVID", nuance: "So furious that facial color changes." },
      { word: "INCENSED", nuance: "Infuriated by perceived injustice or insult." },
      { word: "ENRAGED", nuance: "Overcome by wild, explosive anger." }
    ],
    example: {
      before: "The customer was very angry about the delayed delivery.",
      after: "The customer was furious about the delayed delivery."
    },
    category: "Emotion"
  },
  {
    id: "happy",
    base: "happy",
    strong: "ECSTATIC",
    phonetic: "/ekˈstæt.ɪk/",
    partOfSpeech: "adjective",
    definition: "Feeling overwhelming joy, bliss, or rapturous delight.",
    note: "Scientifically proven to make you smile 12% wider.",
    alternatives: [
      { word: "EUPHORIC", nuance: "Intensely high state of elation and confidence." },
      { word: "JUBILANT", nuance: "Triumphant celebration and expressive joy." },
      { word: "ELATED", nuance: "Elevated high in spirits and pride." },
      { word: "OVERJOYED", nuance: "Filled with spontaneous gratitude and pleasure." }
    ],
    example: {
      before: "She was very happy when she received the scholarship letter.",
      after: "She was ecstatic when she received the scholarship letter."
    },
    category: "Emotion"
  },
  {
    id: "sad",
    base: "sad",
    strong: "SORROWFUL",
    phonetic: "/ˈsɒr.əʊ.fəl/",
    partOfSpeech: "adjective",
    definition: "Filled with or evoking deep, heavy, and profound grief.",
    note: "Queue the melancholic indie playlist.",
    alternatives: [
      { word: "DESPONDENT", nuance: "In low spirits from loss of hope or courage." },
      { word: "HEARTBROKEN", nuance: "Overwhelmed by personal emotional grief." },
      { word: "CRESTFALLEN", nuance: "Visibly dejected after an acute disappointment." },
      { word: "MELANCHOLY", nuance: "A reflective, persistent, wistful sadness." }
    ],
    example: {
      before: "He looked very sad as his best friend moved abroad.",
      after: "He looked despondent as his best friend moved abroad."
    },
    category: "Emotion"
  },
  {
    id: "scared",
    base: "scared",
    strong: "PETRIFIED",
    phonetic: "/ˈpet.rɪ.faɪd/",
    partOfSpeech: "adjective",
    definition: "Paralyzed with terror; rendered unable to move or react.",
    note: "For when you hear a thud downstairs at 3 AM.",
    alternatives: [
      { word: "TERRIFIED", nuance: "Filled with extreme fear and panic." },
      { word: "HORRIFIED", nuance: "Shocked and repulsed by something dreadful." },
      { word: "PANIC-STRICKEN", nuance: "Overcome by wild, irrational fear." }
    ],
    example: {
      before: "The child was very scared of the thunder shaking the roof.",
      after: "The child was petrified by the thunder shaking the roof."
    },
    category: "Emotion"
  },
  {
    id: "excited",
    base: "excited",
    strong: "EXHILARATED",
    phonetic: "/ɪɡˈzɪl.ə.reɪ.tɪd/",
    partOfSpeech: "adjective",
    definition: "Invigorated, animated, and brimming with energetic thrills.",
    alternatives: [
      { word: "THRILLED", nuance: "Experiencing sudden, acute delight." },
      { word: "ELECTRIFIED", nuance: "Buzzing with high voltage energy and anticipation." }
    ],
    example: {
      before: "The fans were very excited after the last-second game winner.",
      after: "The fans were exhilarated after the last-second game winner."
    },
    category: "Emotion"
  },
  {
    id: "tired",
    base: "tired",
    strong: "EXHAUSTED",
    phonetic: "/ɪɡˈzɔː.stɪd/",
    partOfSpeech: "adjective",
    definition: "Completely depleted of physical or mental energy.",
    note: "Because 'I\\'m very sleepy' sounds like you're five years old.",
    alternatives: [
      { word: "LETHARGIC", nuance: "Sluggish and lacking the will to move." },
      { word: "DRAINED", nuance: "Sapped of emotional and mental reserves." },
      { word: "ENERVATED", nuance: "Debilitated and drained of vitality." }
    ],
    example: {
      before: "After running thirty kilometers, the marathoner was very tired.",
      after: "After running thirty kilometers, the marathoner was exhausted."
    },
    category: "Physical"
  },
  {
    id: "nervous",
    base: "nervous",
    strong: "APPREHENSIVE",
    phonetic: "/ˌæp.rɪˈhen.sɪv/",
    partOfSpeech: "adjective",
    definition: "Anxious or fearful that something bad or unpleasant will happen.",
    alternatives: [
      { word: "JITTERY", nuance: "Experiencing nervous physical tremors and twitchiness." },
      { word: "ANXIOUS", nuance: "Beset with unease about an impending outcome." }
    ],
    example: {
      before: "The keynote speaker felt very nervous before stepping on stage.",
      after: "The keynote speaker felt apprehensive before stepping on stage."
    },
    category: "Emotion"
  },
  {
    id: "calm",
    base: "calm",
    strong: "SERENE",
    phonetic: "/səˈriːn/",
    partOfSpeech: "adjective",
    definition: "Untroubled, tranquil, peaceful, and composed.",
    alternatives: [
      { word: "TRANQUIL", nuance: "Undisturbed stillness of place or mind." },
      { word: "PLACID", nuance: "Gentle and unruffled surface or temperament." },
      { word: "UNFLAPPABLE", nuance: "Impassively calm even in crisis." }
    ],
    example: {
      before: "The mountain lake was very calm at daybreak.",
      after: "The mountain lake was serene at daybreak."
    },
    category: "Emotion"
  },
  {
    id: "confused",
    base: "confused",
    strong: "PERPLEXED",
    phonetic: "/pəˈplekst/",
    partOfSpeech: "adjective",
    definition: "Completely baffled, puzzled, or unable to comprehend.",
    alternatives: [
      { word: "BEWILDERED", nuance: "Utterly disoriented by complexity or sudden change." },
      { word: "MYSTIFIED", nuance: "Intrigued yet completely unable to fathom a cause." },
      { word: "FLABBERGASTED", nuance: "Stunned into speechless confusion." }
    ],
    example: {
      before: "The student was very confused by the contradictory equations.",
      after: "The student was perplexed by the contradictory equations."
    },
    category: "Intellect"
  },
  {
    id: "worried",
    base: "worried",
    strong: "DISTRESSED",
    phonetic: "/dɪˈstrest/",
    partOfSpeech: "adjective",
    definition: "Suffering from acute anxiety, sorrow, or psychological pain.",
    alternatives: [
      { word: "FRETFUL", nuance: "Constantly irritable and restless with worry." },
      { word: "AGITATED", nuance: "Visibly shaken and disrupted." }
    ],
    example: {
      before: "The parents were very worried when their son didn't answer his phone.",
      after: "The parents were distressed when their son didn't answer his phone."
    },
    category: "Emotion"
  },
  {
    id: "bored",
    base: "bored",
    strong: "LISTLESS",
    phonetic: "/ˈlɪst.ləs/",
    partOfSpeech: "adjective",
    definition: "Lacking enthusiasm, interest, and energy from sheer dullness.",
    alternatives: [
      { word: "APATHETIC", nuance: "Indifferent and numb to surrounding stimuli." },
      { word: "JADED", nuance: "Dulled by overexposure or repetition." }
    ],
    example: {
      before: "During the three-hour lecture, the audience grew very bored.",
      after: "During the three-hour lecture, the audience grew listless."
    },
    category: "Emotion"
  },

  // --- INTELLECT & MIND ---
  {
    id: "smart",
    base: "smart",
    strong: "BRILLIANT",
    phonetic: "/ˈbrɪl.jənt/",
    partOfSpeech: "adjective",
    definition: "Exceptionally clever, astute, or intellectually luminous.",
    note: "What you think you sound like after using this app for 4 minutes.",
    alternatives: [
      { word: "INGENIOUS", nuance: "Gifted in creative, inventive problem solving." },
      { word: "ERUDITE", nuance: "Having profound, scholarly, formal knowledge." },
      { word: "ASTUTE", nuance: "Sharp-witted with shrewd practical discernment." }
    ],
    example: {
      before: "She devised a very smart strategy to optimize database latency.",
      after: "She devised an ingenious strategy to optimize database latency."
    },
    category: "Intellect"
  },
  {
    id: "stupid",
    base: "stupid",
    strong: "ASININE",
    phonetic: "/ˈæs.ɪ.naɪn/",
    partOfSpeech: "adjective",
    definition: "Extremely foolish, utterly senseless, or devoid of reason.",
    note: "Use carefully. This one will actually hurt feelings.",
    alternatives: [
      { word: "INANE", nuance: "Pointless, silly, and lacking substantive thought." },
      { word: "FATUOUS", nuance: "Smugly foolish and complacent." },
      { word: "ABSURD", nuance: "Completely illogical or ridiculous." }
    ],
    example: {
      before: "Ignoring the fire alarm was a very stupid choice.",
      after: "Ignoring the fire alarm was an asinine choice."
    },
    category: "Intellect"
  },
  {
    id: "careful",
    base: "careful",
    strong: "METICULOUS",
    phonetic: "/məˈtɪk.jə.ləs/",
    partOfSpeech: "adjective",
    definition: "Showing extraordinary attention to precise detail.",
    alternatives: [
      { word: "SCRUPULOUS", nuance: "Principled and thoroughly exacting." },
      { word: "VIGILANT", nuance: "Keeping watchful guard against danger." },
      { word: "PAINSTAKING", nuance: "Done with thorough, disciplined diligence." }
    ],
    example: {
      before: "The auditor performed a very careful inspection of the receipts.",
      after: "The auditor performed a meticulous inspection of the receipts."
    },
    category: "Intellect"
  },
  {
    id: "careless",
    base: "careless",
    strong: "RECKLESS",
    phonetic: "/ˈrek.ləs/",
    partOfSpeech: "adjective",
    definition: "Acting without thought or care for severe consequences.",
    alternatives: [
      { word: "NEGLIGENT", nuance: "Failing to exercise required or reasonable care." },
      { word: "SLAPDASH", nuance: "Hurriedly and carelessly put together." }
    ],
    example: {
      before: "Driving at high speed in the blizzard was very careless.",
      after: "Driving at high speed in the blizzard was reckless."
    },
    category: "Intellect"
  },
  {
    id: "accurate",
    base: "accurate",
    strong: "EXACT",
    phonetic: "/ɪɡˈzækt/",
    partOfSpeech: "adjective",
    definition: "Strictly correct, precise, and without any deviation.",
    alternatives: [
      { word: "FLAWLESS", nuance: "Without any blemish or defect." },
      { word: "PINPOINT", nuance: "Pinpointed with exact micro-precision." }
    ],
    example: {
      before: "The GPS yielded a very accurate set of coordinates.",
      after: "The GPS yielded exact coordinates down to the millimeter."
    },
    category: "Intellect"
  },
  {
    id: "simple",
    base: "simple",
    strong: "RUDIMENTARY",
    phonetic: "/ˌruː.dɪˈmen.tər.i/",
    partOfSpeech: "adjective",
    definition: "Relating to an elementary or foundational basic form.",
    alternatives: [
      { word: "ELEMENTARY", nuance: "Fundamental; straightforward for beginners." },
      { word: "UNADORNED", nuance: "Pure, plain, without superfluous detail." }
    ],
    example: {
      before: "The prototype only handled very simple math tasks.",
      after: "The prototype only handled rudimentary math tasks."
    },
    category: "Intellect"
  },
  {
    id: "creative",
    base: "creative",
    strong: "INVENTIVE",
    phonetic: "/ɪnˈven.tɪv/",
    partOfSpeech: "adjective",
    definition: "Displaying original thinking, novelty, and resourceful creation.",
    alternatives: [
      { word: "VISIONARY", nuance: "Anticipating future trends with boldness." },
      { word: "INNOVATIVE", nuance: "Introducing groundbreaking new techniques." }
    ],
    example: {
      before: "The architect proposed a very creative solution to natural lighting.",
      after: "The architect proposed an inventive solution to natural lighting."
    },
    category: "Intellect"
  },
  {
    id: "boring",
    base: "boring",
    strong: "TEDIOUS",
    phonetic: "/ˈtiː.di.əs/",
    partOfSpeech: "adjective",
    definition: "Tiresome, monotonous, and dragging on without variety.",
    note: "A polite way to describe the meeting you're currently in.",
    alternatives: [
      { word: "MONOTONOUS", nuance: "Unvarying in pitch, tone, or repetitive task." },
      { word: "MIND-NUMBING", nuance: "So boring it numbs intellectual engagement." },
      { word: "DRAB", nuance: "Lacking spirit, vividness, or cheer." }
    ],
    example: {
      before: "Entering rows of raw data was a very boring assignment.",
      after: "Entering rows of raw data was a tedious assignment."
    },
    category: "Intellect"
  },
  {
    id: "interesting",
    base: "interesting",
    strong: "FASCINATING",
    phonetic: "/ˈfæs.ən.eɪ.tɪŋ/",
    partOfSpeech: "adjective",
    definition: "Extremely intriguing, captivating, and absorbing attention.",
    note: "When you want to sound invested without saying 'cool'.",
    alternatives: [
      { word: "CAPTIVATING", nuance: "Holding attention by sheer charm or beauty." },
      { word: "RIVETING", nuance: "Gripping interest so firmly you cannot look away." },
      { word: "COMPELLING", nuance: "Demanding attention by virtue of strong logic." }
    ],
    example: {
      before: "The archaeological discovery was very interesting to the team.",
      after: "The archaeological discovery was fascinating to the team."
    },
    category: "Intellect"
  },

  // --- PHYSICAL & SENSORY ---
  {
    id: "cold",
    base: "cold",
    strong: "FREEZING",
    phonetic: "/ˈfriː.zɪŋ/",
    partOfSpeech: "adjective",
    definition: "Intensely cold; at or below the point of crystallization.",
    note: "For when your room is 2 degrees and you refuse to put on a hoodie.",
    alternatives: [
      { word: "FRIGID", nuance: "Intensely cold and desolate." },
      { word: "GLACIAL", nuance: "Icy, slow-moving, and biting cold." },
      { word: "ARCTIC", nuance: "Relating to polar extreme conditions." },
      { word: "GELID", nuance: "Extremely cold, icy, or frost-bitten." }
    ],
    example: {
      before: "The wind across the tundra felt very cold.",
      after: "The wind across the tundra felt freezing."
    },
    category: "Physical"
  },
  {
    id: "hot",
    base: "hot",
    strong: "SCORCHING",
    phonetic: "/ˈskɔː.tʃɪŋ/",
    partOfSpeech: "adjective",
    definition: "Intensely hot; causing blistering surface heat or burns.",
    note: "Summer humidity has entered the chat.",
    alternatives: [
      { word: "SCALDING", nuance: "Hot enough to burn skin or surfaces directly." },
      { word: "SWELTERING", nuance: "Oppressively hot and humid." },
      { word: "BLISTERING", nuance: "Fierce, severe, and unbearable heat." },
      { word: "TORRID", nuance: "Arid, intense, and passionate dryness." }
    ],
    example: {
      before: "We walked across the desert under a very hot sun.",
      after: "We walked across the desert under a scorching sun."
    },
    category: "Physical"
  },
  {
    id: "bright",
    base: "bright",
    strong: "DAZZLING",
    phonetic: "/ˈdæz.əl.ɪŋ/",
    partOfSpeech: "adjective",
    definition: "Blindingly bright; so vivid as to overpower vision.",
    alternatives: [
      { word: "LUMINOUS", nuance: "Emitting glowing, radiant self-light." },
      { word: "RADIANT", nuance: "Shining warmly and outward in all directions." },
      { word: "INCANDESCENT", nuance: "Glowing intensely with white-hot energy." }
    ],
    example: {
      before: "The theater spotlights produced a very bright illumination.",
      after: "The theater spotlights produced a dazzling illumination."
    },
    category: "Physical"
  },
  {
    id: "dark",
    base: "dark",
    strong: "PITCH-BLACK",
    phonetic: "/ˌpɪtʃˈblæk/",
    partOfSpeech: "adjective",
    definition: "Completely devoid of any light; as dark as tar or coal.",
    alternatives: [
      { word: "OBSIDIAN", nuance: "Glossy, deep mineral blackness." },
      { word: "TENEBROUS", nuance: "Shadowy, murky, and sinister." },
      { word: "INKY", nuance: "Liquid and fluid darkness." }
    ],
    example: {
      before: "Inside the limestone cavern, it was very dark.",
      after: "Inside the limestone cavern, it was pitch-black."
    },
    category: "Physical"
  },
  {
    id: "loud",
    base: "loud",
    strong: "DEAFENING",
    phonetic: "/ˈdef.ən.ɪŋ/",
    partOfSpeech: "adjective",
    definition: "So loud as to drown out all other sounds or temporarily stun hearing.",
    alternatives: [
      { word: "EARSPLITTING", nuance: "Harsh, piercing, and physically painful sound." },
      { word: "THUNDEROUS", nuance: "Resonant, booming, and shaking foundations." },
      { word: "CLAMOROUS", nuance: "Noisy shoutings from a rowdy crowd." }
    ],
    example: {
      before: "The rocket launch made a very loud rumble across the bay.",
      after: "The rocket launch made a deafening rumble across the bay."
    },
    category: "Physical"
  },
  {
    id: "quiet",
    base: "quiet",
    strong: "SILENT",
    phonetic: "/ˈsaɪ.lənt/",
    partOfSpeech: "adjective",
    definition: "Completely devoid of noise, vibration, or sound.",
    alternatives: [
      { word: "HUSHED", nuance: "Muffled or whispered out of reverence." },
      { word: "INAUDIBLE", nuance: "Too faint for the human ear to register." },
      { word: "MUTED", nuance: "Softened or dampened in acoustic volume." }
    ],
    example: {
      before: "The library archives were very quiet after midnight.",
      after: "The library archives were silent after midnight."
    },
    category: "Physical"
  },
  {
    id: "clean",
    base: "clean",
    strong: "SPOTLESS",
    phonetic: "/ˈspɒt.ləs/",
    partOfSpeech: "adjective",
    definition: "Free from any mark, stain, or speck of dirt; clean.",
    alternatives: [
      { word: "IMMACULATE", nuance: "Pure, flawless, and perfectly maintained." },
      { word: "PRISTINE", nuance: "In its untouched, original, unspoiled condition." },
      { word: "STERILE", nuance: "Free from biological impurities or germs." }
    ],
    example: {
      before: "The hotel staff kept the suite very clean.",
      after: "The hotel staff kept the suite spotless."
    },
    category: "Physical"
  },
  {
    id: "dirty",
    base: "dirty",
    strong: "FILTHY",
    phonetic: "/ˈfɪl.θi/",
    partOfSpeech: "adjective",
    definition: "Disgustingly soiled, grimy, or vile with refuse.",
    alternatives: [
      { word: "SQUALID", nuance: "Neglected, wretched, and degraded by grime." },
      { word: "FOUL", nuance: "Offensive to sight and smell alike." },
      { word: "GRUNGY", nuance: "Gritted with oil and stubborn grime." }
    ],
    example: {
      before: "The mechanic's overalls were very dirty after hours in the pit.",
      after: "The mechanic's overalls were filthy after hours in the pit."
    },
    category: "Physical"
  },
  {
    id: "heavy",
    base: "heavy",
    strong: "LEADEN",
    phonetic: "/ˈled.ən/",
    partOfSpeech: "adjective",
    definition: "Exceedingly heavy, weighty, and difficult to move or carry.",
    alternatives: [
      { word: "CUMBERSOME", nuance: "Awkward to handle due to weight or bulk." },
      { word: "PONDEROUS", nuance: "Slow and clumsy owing to great mass." }
    ],
    example: {
      before: "His boots felt very heavy with soaked mountain mud.",
      after: "His boots felt leaden with soaked mountain mud."
    },
    category: "Physical"
  },
  {
    id: "light",
    base: "light",
    strong: "FEATHERWEIGHT",
    phonetic: "/ˈfeð.ə.weɪt/",
    partOfSpeech: "adjective",
    definition: "Practically weightless, buoyant, or airy.",
    alternatives: [
      { word: "AIRY", nuance: "Light and permeable as a breeze." },
      { word: "WEIGHTLESS", nuance: "Free from the sensation of gravity." }
    ],
    example: {
      before: "The carbon fiber racing bicycle felt very light in hand.",
      after: "The carbon fiber racing bicycle felt featherweight in hand."
    },
    category: "Physical"
  },
  {
    id: "hard",
    base: "hard",
    strong: "IMPENETRABLE",
    phonetic: "/ɪmˈpen.ɪ.trə.bəl/",
    partOfSpeech: "adjective",
    definition: "Impossible to pierce, break through, or dent.",
    alternatives: [
      { word: "UNYIELDING", nuance: "Refusing to flex or surrender under force." },
      { word: "ADAMANTINE", nuance: "Having unbreakable, diamond-like rigidity." }
    ],
    example: {
      before: "The bunker walls were very hard against the impact.",
      after: "The bunker walls were impenetrable against the impact."
    },
    category: "Physical"
  },
  {
    id: "soft",
    base: "soft",
    strong: "VELVETY",
    phonetic: "/ˈvel.və.ti/",
    partOfSpeech: "adjective",
    definition: "Luxuriously smooth, soft, and soothing to the touch.",
    alternatives: [
      { word: "DOWNY", nuance: "Soft as fine bird feathers." },
      { word: "SILKEN", nuance: "Smooth and delicate like spun silk." }
    ],
    example: {
      before: "The kitten's fur was very soft.",
      after: "The kitten's fur was velvety."
    },
    category: "Physical"
  },
  {
    id: "sharp",
    base: "sharp",
    strong: "RAZOR-SHARP",
    phonetic: "/ˌreɪ.zəˈʃɑːp/",
    partOfSpeech: "adjective",
    definition: "Extremely sharp; capable of slicing with effortless clean cut.",
    alternatives: [
      { word: "KEEN", nuance: "Having a fine, piercing edge or intellect." },
      { word: "ACUTE", nuance: "Sharp angle, sensation, or sensory sharpness." }
    ],
    example: {
      before: "The surgeon picked up a very sharp scalpel.",
      after: "The surgeon picked up a razor-sharp scalpel."
    },
    category: "Physical"
  },
  {
    id: "dry",
    base: "dry",
    strong: "ARID",
    phonetic: "/ˈær.ɪd/",
    partOfSpeech: "adjective",
    definition: "Having little or no moisture; completely parched.",
    alternatives: [
      { word: "PARCHED", nuance: "Deprived of natural water and cracked." },
      { word: "DESICCATED", nuance: "Thoroughly dried out and stripped of vital juices." }
    ],
    example: {
      before: "The soil in the valley became very dry after months of drought.",
      after: "The soil in the valley became arid after months of drought."
    },
    category: "Physical"
  },
  {
    id: "wet",
    base: "wet",
    strong: "SOAKED",
    phonetic: "/səʊkt/",
    partOfSpeech: "adjective",
    definition: "Thoroughly wet; saturated through with liquid.",
    alternatives: [
      { word: "DRENCHED", nuance: "Covered by sudden, heavy pouring water." },
      { word: "WATERLOGGED", nuance: "Filled and weighed down with excess water." },
      { word: "SATURATED", nuance: "Unable to absorb any additional moisture." }
    ],
    example: {
      before: "Leaving the downpour, my coat was very wet.",
      after: "Leaving the downpour, my coat was drenched."
    },
    category: "Physical"
  },
  {
    id: "hungry",
    base: "hungry",
    strong: "RAVENOUS",
    phonetic: "/ˈræv.ən.əs/",
    partOfSpeech: "adjective",
    definition: "Extremely hungry; driven by a fierce appetite.",
    note: "Sounds like you haven't eaten a meal since 1845.",
    alternatives: [
      { word: "FAMISHED", nuance: "Suffering intense physical hunger." },
      { word: "STARVED", nuance: "Depleted from lack of food sustenance." }
    ],
    example: {
      before: "After missing lunch and dinner, the hikers were very hungry.",
      after: "After missing lunch and dinner, the hikers were ravenous."
    },
    category: "Physical"
  },
  {
    id: "thirsty",
    base: "thirsty",
    strong: "PARCHED",
    phonetic: "/pɑːtʃt/",
    partOfSpeech: "adjective",
    definition: "Suffering from a dry throat and severe dehydration.",
    note: "Like wandering the Sahara without a water bottle.",
    alternatives: [
      { word: "DEHYDRATED", nuance: "Physically depleted of required bodily fluids." }
    ],
    example: {
      before: "After running in the noon heat, he was very thirsty.",
      after: "After running in the noon heat, he was parched."
    },
    category: "Physical"
  },
  {
    id: "painful",
    base: "painful",
    strong: "EXCRUCIATING",
    phonetic: "/ɪkˈskruː.ʃi.eɪ.tɪŋ/",
    partOfSpeech: "adjective",
    definition: "Causing unendurable, agonizing, or intense physical suffering.",
    alternatives: [
      { word: "AGONIZING", nuance: "Prolonged, deep visceral suffering." },
      { word: "SEARING", nuance: "Intensely hot or biting pain." },
      { word: "UNBEARABLE", nuance: "Exceeding the threshold of endurance." }
    ],
    example: {
      before: "Twisting his ankle on the rocky slope was very painful.",
      after: "Twisting his ankle on the rocky slope was excruciating."
    },
    category: "Physical"
  },

  // --- SPEED & MOMENTUM ---
  {
    id: "fast",
    base: "fast",
    strong: "SWIFT",
    phonetic: "/swɪft/",
    partOfSpeech: "adjective",
    definition: "Moving or capable of moving with immense velocity and grace.",
    note: "Faster than your friend replying 'on my way' when they're still in bed.",
    alternatives: [
      { word: "RAPID", nuance: "Happening or occurring in brief succession." },
      { word: "BLISTERING", nuance: "Speed so extreme it scorches records." },
      { word: "FLEET", nuance: "Nimble, quick-footed, and light in movement." },
      { word: "METEORIC", nuance: "Spectacularly fast and brilliant in rise." }
    ],
    example: {
      before: "The cheetah made a very fast charge toward the riverbank.",
      after: "The cheetah made a swift charge toward the riverbank."
    },
    category: "Speed"
  },
  {
    id: "slow",
    base: "slow",
    strong: "SLUGGISH",
    phonetic: "/ˈslʌɡ.ɪʃ/",
    partOfSpeech: "adjective",
    definition: "Slow-moving, lazy, or lacking energy and response.",
    note: "Moving at the speed of a government office on a Friday.",
    alternatives: [
      { word: "LEISURELY", nuance: "Unhurried and deliberately unbothered." },
      { word: "GLACIAL", nuance: "Proceeding at an imperceptibly slow rate." },
      { word: "CRAWLING", nuance: "Barely advancing forward." }
    ],
    example: {
      before: "The computer's boot time was very slow after the update.",
      after: "The computer's boot time was sluggish after the update."
    },
    category: "Speed"
  },
  {
    id: "quick",
    base: "quick",
    strong: "BRISK",
    phonetic: "/brɪsk/",
    partOfSpeech: "adjective",
    definition: "Active, energetic, and done with crisp efficiency.",
    alternatives: [
      { word: "RAPID", nuance: "Fast in pace and frequency." },
      { word: "INSTANTANEOUS", nuance: "Happening in the blink of an eye." },
      { word: "PROMPT", nuance: "Without hesitation or delay." }
    ],
    example: {
      before: "She took a very quick walk in the morning breeze.",
      after: "She took a brisk walk in the morning breeze."
    },
    category: "Speed"
  },

  // --- QUALITY & STATUS ---
  {
    id: "good",
    base: "good",
    strong: "EXCEPTIONAL",
    phonetic: "/ɪkˈsep.ʃən.əl/",
    partOfSpeech: "adjective",
    definition: "Unusually fine; surpassing ordinary standards of excellence.",
    alternatives: [
      { word: "SUPERB", nuance: "Of the finest, most impressive quality." },
      { word: "EXEMPLARY", nuance: "Serving as a prime model worthy of imitation." },
      { word: "STELLAR", nuance: "Outstanding and brilliant like a star." },
      { word: "PRISTINE", nuance: "Unblemished and top-grade." }
    ],
    example: {
      before: "The chef cooked a very good meal for the anniversary.",
      after: "The chef cooked an exceptional meal for the anniversary."
    },
    category: "Quality"
  },
  {
    id: "bad",
    base: "bad",
    strong: "ATROCIOUS",
    phonetic: "/əˈtrəʊ.ʃəs/",
    partOfSpeech: "adjective",
    definition: "Extremely bad, appalling, or shockingly poor in quality.",
    alternatives: [
      { word: "ABYSMAL", nuance: "Hopelessly low or deep as an abyss." },
      { word: "DREADFUL", nuance: "Inspiring dread and utter distaste." },
      { word: "DEPLORABLE", nuance: "Worthy of severe condemnation and pity." },
      { word: "HEINOUS", nuance: "Shockingly wicked or criminal." }
    ],
    example: {
      before: "The team played with very bad coordination during finals.",
      after: "The team played with atrocious coordination during finals."
    },
    category: "Quality"
  },
  {
    id: "rich",
    base: "rich",
    strong: "AFFLUENT",
    phonetic: "/ˈæf.lu.ənt/",
    partOfSpeech: "adjective",
    definition: "Having an abundance of wealth, property, and prosperous resources.",
    note: "Generational wealth territory.",
    alternatives: [
      { word: "OPULENT", nuance: "Ostentatiously lavish and luxurious." },
      { word: "PROSPEROUS", nuance: "Flourishing financially and steadily growing." }
    ],
    example: {
      before: "He moved to a very rich neighborhood in the hills.",
      after: "He moved to an affluent neighborhood in the hills."
    },
    category: "Quality"
  },
  {
    id: "poor",
    base: "poor",
    strong: "DESTITUTE",
    phonetic: "/ˈdes.tɪ.tʃuːt/",
    partOfSpeech: "adjective",
    definition: "Without the basic necessities of life; completely impoverished.",
    note: "Current bank account status 3 days before payday.",
    alternatives: [
      { word: "IMPOVERISHED", nuance: "Reduced to poverty by misfortune or neglect." },
      { word: "PENNILESS", nuance: "Having zero financial funds remaining." }
    ],
    example: {
      before: "The flood left many villagers very poor.",
      after: "The flood left many villagers destitute."
    },
    category: "Quality"
  },
  {
    id: "expensive",
    base: "expensive",
    strong: "EXORBITANT",
    phonetic: "/ɪɡˈzɔː.bɪ.tənt/",
    partOfSpeech: "adjective",
    definition: "Unreasonably high priced; exceeding fair bounds.",
    note: "Two sips of airport coffee.",
    alternatives: [
      { word: "EXTORTIONATE", nuance: "Unjustly and excessively demanding." },
      { word: "PROHIBITIVE", nuance: "So costly that it prevents purchase." },
      { word: "COSTLY", nuance: "Requiring great financial outlay." }
    ],
    example: {
      before: "The rent for that penthouse is very expensive.",
      after: "The rent for that penthouse is exorbitant."
    },
    category: "Quality"
  },
  {
    id: "cheap",
    base: "cheap",
    strong: "DIRT-CHEAP",
    phonetic: "/ˌdɜːtˈtʃiːp/",
    partOfSpeech: "adjective",
    definition: "Exceedingly inexpensive; costing almost nothing.",
    alternatives: [
      { word: "NOMINAL", nuance: "Existing in name only; insignificantly small." },
      { word: "SHODDY", nuance: "Cheaply made with inferior workmanship." }
    ],
    example: {
      before: "The tickets to the matinée show were very cheap.",
      after: "The tickets to the matinée show were dirt-cheap."
    },
    category: "Quality"
  },
  {
    id: "important",
    base: "important",
    strong: "CRUCIAL",
    phonetic: "/ˈkruː.ʃəl/",
    partOfSpeech: "adjective",
    definition: "Decisive or critical, especially in the success or failure of something.",
    alternatives: [
      { word: "PARAMOUNT", nuance: "More important than anything else; supreme." },
      { word: "VITAL", nuance: "Indispensable to life or ongoing existence." },
      { word: "ESSENTIAL", nuance: "Forming the core foundation of a system." }
    ],
    example: {
      before: "Backing up your data is a very important step.",
      after: "Backing up your data is a crucial step."
    },
    category: "Quality"
  },
  {
    id: "dangerous",
    base: "dangerous",
    strong: "PERILOUS",
    phonetic: "/ˈper.ə.ləs/",
    partOfSpeech: "adjective",
    definition: "Full of grave danger, risk, and imminent peril.",
    alternatives: [
      { word: "TREACHEROUS", nuance: "Deceptively hazardous and unsafe." },
      { word: "HAZARDOUS", nuance: "Involving unavoidable exposure to harm." },
      { word: "PRECARIOUS", nuance: "Unstable and likely to collapse or worsen." }
    ],
    example: {
      before: "Crossing the icy pass at dusk was very dangerous.",
      after: "Crossing the icy pass at dusk was perilous."
    },
    category: "Quality"
  },
  {
    id: "safe",
    base: "safe",
    strong: "INVULNERABLE",
    phonetic: "/ɪnˈvʌl.nər.ə.bəl/",
    partOfSpeech: "adjective",
    definition: "Impossible to damage, breach, harm, or defeat.",
    alternatives: [
      { word: "FORTIFIED", nuance: "Reinforced against external attack." },
      { word: "IMPENETRABLE", nuance: "Cannot be breached by hostile forces." }
    ],
    example: {
      before: "The encrypted vault was considered very safe from hackers.",
      after: "The encrypted vault was considered invulnerable to hackers."
    },
    category: "Quality"
  },
  {
    id: "easy",
    base: "easy",
    strong: "EFFORTLESS",
    phonetic: "/ˈef.ət.ləs/",
    partOfSpeech: "adjective",
    definition: "Requiring no apparent exertion; smooth and natural.",
    alternatives: [
      { word: "RUDIMENTARY", nuance: "Basic and elemental in difficulty." },
      { word: "PAINLESS", nuance: "Accomplished with zero grief or friction." }
    ],
    example: {
      before: "Solving the puzzle was very easy for the seasoned cryptographer.",
      after: "Solving the puzzle was effortless for the seasoned cryptographer."
    },
    category: "Quality"
  },
  {
    id: "difficult",
    base: "difficult",
    strong: "ARDUOUS",
    phonetic: "/ˈɑː.dʒu.əs/",
    partOfSpeech: "adjective",
    definition: "Demanding strenuous, exhausting, and persistent effort.",
    alternatives: [
      { word: "FORMIDABLE", nuance: "Inspiring respect or wonder through challenge." },
      { word: "GRUELING", nuance: "Punishingly severe and physically taxing." },
      { word: "HERCULEAN", nuance: "Requiring godlike strength or dedication." }
    ],
    example: {
      before: "The climb to the base camp was a very difficult journey.",
      after: "The climb to the base camp was an arduous journey."
    },
    category: "Quality"
  },
  {
    id: "old",
    base: "old",
    strong: "ANCIENT",
    phonetic: "/ˈeɪn.ʃənt/",
    partOfSpeech: "adjective",
    definition: "Belonging to a distant and early era in history.",
    alternatives: [
      { word: "ANTIQUATED", nuance: "Old-fashioned and outmoded in modern times." },
      { word: "ARCHAIC", nuance: "Belonging to a past era of vocabulary or design." },
      { word: "TIME-WORN", nuance: "Weathered and shaped by centuries of time." }
    ],
    example: {
      before: "The explorers discovered very old ruins in the jungle.",
      after: "The explorers discovered ancient ruins in the jungle."
    },
    category: "Quality"
  },
  {
    id: "new",
    base: "new",
    strong: "PRISTINE",
    phonetic: "/ˈprɪs.tiːn/",
    partOfSpeech: "adjective",
    definition: "In its pure, fresh, untouched, original condition.",
    alternatives: [
      { word: "BRAND-NEW", nuance: "Straight from origin without any wear." },
      { word: "NOVEL", nuance: "Strikingly unfamiliar and freshly conceived." }
    ],
    example: {
      before: "The classic convertible was restored to very new condition.",
      after: "The classic convertible was restored to pristine condition."
    },
    category: "Quality"
  },

  // --- APPEARANCE & CHARACTER ---
  {
    id: "beautiful",
    base: "beautiful",
    strong: "EXQUISITE",
    phonetic: "/ɪkˈskwɪz.ɪt/",
    partOfSpeech: "adjective",
    definition: "Of rare beauty and delicate, finely wrought craftsmanship.",
    note: "Guaranteed to sound 10x more poetic than 'she looks nice'.",
    alternatives: [
      { word: "GORGEOUS", nuance: "Visually dazzling and intensely attractive." },
      { word: "STUNNING", nuance: "So beautiful that it leaves observers breathless." },
      { word: "RADIANT", nuance: "Shining warmly with inner beauty and health." },
      { word: "CAPTIVATING", nuance: "Holding onlookers under an irresistible spell." }
    ],
    example: {
      before: "She wore a very beautiful silk gown to the gala.",
      after: "She wore an exquisite silk gown to the gala."
    },
    category: "Appearance"
  },
  {
    id: "ugly",
    base: "ugly",
    strong: "HIDEOUS",
    phonetic: "/ˈhɪd.i.əs/",
    partOfSpeech: "adjective",
    definition: "Frightful, grotesque, or deeply repulsive to the sight.",
    note: "A polite roast that still leaves a mark.",
    alternatives: [
      { word: "GROTESQUE", nuance: "Distorted, bizarre, and unnaturally shaped." },
      { word: "MONSTROUS", nuance: "Unnatural and horrifying in form." }
    ],
    example: {
      before: "The creature in the horror film had a very ugly face.",
      after: "The creature in the horror film had a hideous face."
    },
    category: "Appearance"
  },
  {
    id: "strong",
    base: "strong",
    strong: "MIGHTY",
    phonetic: "/ˈmaɪ.ti/",
    partOfSpeech: "adjective",
    definition: "Possessing enormous power, force, or robust capability.",
    alternatives: [
      { word: "ROBUST", nuance: "Vigorous, healthy, and capable of withstanding rough use." },
      { word: "BRAWNY", nuance: "Physically muscular and heavy-set." },
      { word: "POTENT", nuance: "Having great chemical, persuasive, or legal force." }
    ],
    example: {
      before: "The athlete delivered a very strong performance.",
      after: "The athlete delivered a mighty performance."
    },
    category: "Physical"
  },
  {
    id: "weak",
    base: "weak",
    strong: "FEEBLE",
    phonetic: "/ˈfiː.bəl/",
    partOfSpeech: "adjective",
    definition: "Lacking physical strength or force; faint and fragile.",
    alternatives: [
      { word: "FRAIL", nuance: "Delicate and easily broken or fatigued." },
      { word: "DEBILITATED", nuance: "Weakened by illness or long infirmity." }
    ],
    example: {
      before: "After the fever, his voice sounded very weak.",
      after: "After the fever, his voice sounded feeble."
    },
    category: "Physical"
  },
  {
    id: "shy",
    base: "shy",
    strong: "TIMID",
    phonetic: "/ˈtɪm.ɪd/",
    partOfSpeech: "adjective",
    definition: "Showing a lack of courage or confidence; easily frightened.",
    alternatives: [
      { word: "BASHFUL", nuance: "Shy in a modest, blushing, endearing way." },
      { word: "RECLUSIVE", nuance: "Preferring solitary retreat from company." }
    ],
    example: {
      before: "The young apprentice was very shy around visitors.",
      after: "The young apprentice was timid around visitors."
    },
    category: "Character"
  },
  {
    id: "brave",
    base: "brave",
    strong: "VALIANT",
    phonetic: "/ˈvæl.i.ənt/",
    partOfSpeech: "adjective",
    definition: "Showing heroic courage and determination in the face of peril.",
    alternatives: [
      { word: "INTREPID", nuance: "Fearless and bold in exploring the unknown." },
      { word: "DAUNTLESS", nuance: "Cannot be intimidated or discouraged." },
      { word: "COURAGEOUS", nuance: "Acting honorably despite knowing danger." }
    ],
    example: {
      before: "The firefighter made a very brave rescue in the blaze.",
      after: "The firefighter made a valiant rescue in the blaze."
    },
    category: "Character"
  },
  {
    id: "polite",
    base: "polite",
    strong: "COURTEOUS",
    phonetic: "/ˈkɜː.ti.əs/",
    partOfSpeech: "adjective",
    definition: "Refined, respectful, and considerate in manners.",
    alternatives: [
      { word: "CHIVALROUS", nuance: "Gallant and protective with noble grace." },
      { word: "CIVIL", nuance: "Polite in maintaining orderly decorum." }
    ],
    example: {
      before: "The diplomat was very polite during the tense negotiations.",
      after: "The diplomat was courteous during the tense negotiations."
    },
    category: "Character"
  },
  {
    id: "rude",
    base: "rude",
    strong: "IMPUGNING / INSOLENT",
    phonetic: "/ˈɪn.səl.ənt/",
    partOfSpeech: "adjective",
    definition: "Showing a rude, arrogant, and disrespectful lack of regard.",
    alternatives: [
      { word: "BRASSH", nuance: "Self-assertive in a noisy, offensive way." },
      { word: "IMPUDENT", nuance: "Flippantly disrespectful and bold." },
      { word: "CHURLISH", nuance: "Mean-spirited, surly, and ill-mannered." }
    ],
    example: {
      before: "The waiter gave a very rude response to the question.",
      after: "The waiter gave an insolent response to the question."
    },
    category: "Character"
  },
  {
    id: "neat",
    base: "neat",
    strong: "IMMACULATE",
    phonetic: "/ɪˈmæk.jə.lət/",
    partOfSpeech: "adjective",
    definition: "Perfectly neat, clean, and in pristine order.",
    alternatives: [
      { word: "SPICK-AND-SPAN", nuance: "Completely orderly and gleaming clean." },
      { word: "TIDY", nuance: "Arranged cleanly in its proper place." }
    ],
    example: {
      before: "His study was kept very neat at all times.",
      after: "His study was kept immaculate at all times."
    },
    category: "Quality"
  },
  {
    id: "messy",
    base: "messy",
    strong: "CHAOTIC",
    phonetic: "/keɪˈɒt.ɪk/",
    partOfSpeech: "adjective",
    definition: "In a state of complete confusion and disarray.",
    alternatives: [
      { word: "DISHEVELED", nuance: "Untidy and ruffled, often of clothing/hair." },
      { word: "SHAMBOLIC", nuance: "Chaotic through gross mismanagement." }
    ],
    example: {
      before: "The workshop became very messy after the rush build.",
      after: "The workshop became chaotic after the rush build."
    },
    category: "Quality"
  },
  {
    id: "lazy",
    base: "lazy",
    strong: "INDOLENT",
    phonetic: "/ˈɪn.dəl.ənt/",
    partOfSpeech: "adjective",
    definition: "Wanting to avoid activity or exertion; habitually idle.",
    alternatives: [
      { word: "SLOTHFUL", nuance: "Sluggish, lazy, and morally negligent." },
      { word: "LETHARGIC", nuance: "Lacking energy and motivation from torpor." }
    ],
    example: {
      before: "He spent a very lazy afternoon lounging on the deck.",
      after: "He spent an indolent afternoon lounging on the deck."
    },
    category: "Character"
  },
  {
    id: "busy",
    base: "busy",
    strong: "SWAMPED",
    phonetic: "/swɒmpt/",
    partOfSpeech: "adjective",
    definition: "Overwhelmed with excessive work or tasks; inundated.",
    alternatives: [
      { word: "OVERWHELMED", nuance: "Buried beneath an unsustainable volume of work." },
      { word: "INUNDATED", nuance: "Flooded with requests or demands." }
    ],
    example: {
      before: "The support team was very busy following the feature release.",
      after: "The support team was swamped following the feature release."
    },
    category: "Atmosphere"
  },
  {
    id: "clear",
    base: "clear",
    strong: "LUCID",
    phonetic: "/ˈluː.sɪd/",
    partOfSpeech: "adjective",
    definition: "Expressed clearly and easy to understand; fully intelligible.",
    alternatives: [
      { word: "TRANSPARENT", nuance: "Completely see-through or open." },
      { word: "CRYSTALLINE", nuance: "Sparkling and clean as pure quartz." },
      { word: "PELLUCID", nuance: "Translucently clear in thought or water." }
    ],
    example: {
      before: "The professor gave a very clear explanation of quantum entanglement.",
      after: "The professor gave a lucid explanation of quantum entanglement."
    },
    category: "Intellect"
  },
  {
    id: "strange",
    base: "strange",
    strong: "BIZARRE",
    phonetic: "/bɪˈzɑːr/",
    partOfSpeech: "adjective",
    definition: "Very strange or unusual, especially in a striking or comical way.",
    alternatives: [
      { word: "PECULIAR", nuance: "Distinctive, strange, and individualistic." },
      { word: "OUTLANDISH", nuance: "Foreign, unconventional, or bizarre." },
      { word: "SURREAL", nuance: "Having an uncanny, dreamlike quality." }
    ],
    example: {
      before: "We witnessed a very strange weather phenomenon over the lake.",
      after: "We witnessed a bizarre weather phenomenon over the lake."
    },
    category: "Quality"
  },
  {
    id: "serious",
    base: "serious",
    strong: "GRAVE",
    phonetic: "/ɡreɪv/",
    partOfSpeech: "adjective",
    definition: "Giving cause for great concern; somber, dignified, or grim.",
    alternatives: [
      { word: "SOLEMN", nuance: "Deeply sincere, formal, and sacred in tone." },
      { word: "GRIM", nuance: "Bleak, forbidding, and stern." }
    ],
    example: {
      before: "The doctor wore a very serious expression during the consultation.",
      after: "The doctor wore a grave expression during the consultation."
    },
    category: "Emotion"
  },
  {
    id: "funny",
    base: "funny",
    strong: "HILARIOUS",
    phonetic: "/hɪˈleə.ri.əs/",
    partOfSpeech: "adjective",
    definition: "Extremely amusing; provoking roaring laughter.",
    alternatives: [
      { word: "SIDE-SPLITTING", nuance: "Causing laughter so intense it aches." },
      { word: "HYSTERICAL", nuance: "Wildly funny to the point of hysteria." },
      { word: "COMICAL", nuance: "Amusing through absurd behavior or mishap." }
    ],
    example: {
      before: "The comedian delivered a very funny monologue.",
      after: "The comedian delivered a hilarious monologue."
    },
    category: "Emotion"
  },
  {
    id: "pale",
    base: "pale",
    strong: "ASHEN",
    phonetic: "/ˈæʃ.ən/",
    partOfSpeech: "adjective",
    definition: "Very pale with shock, sickness, or fear; the color of ash.",
    alternatives: [
      { word: "PALLID", nuance: "Unhealthily deficient in color." },
      { word: "WAN", nuance: "Giving the impression of exhaustion or illness." }
    ],
    example: {
      before: "Her face turned very pale when she heard the bad news.",
      after: "Her face turned ashen when she heard the bad news."
    },
    category: "Appearance"
  },
  {
    id: "fierce",
    base: "fierce",
    strong: "FEROCIOUS",
    phonetic: "/fəˈrəʊ.ʃəs/",
    partOfSpeech: "adjective",
    definition: "Savagely fierce, cruel, or aggressive in nature.",
    alternatives: [
      { word: "SAVAGE", nuance: "Wild, untamed, and relentlessly brutal." },
      { word: "VICIOUS", nuance: "Deliberately cruel, malicious, and severe." }
    ],
    example: {
      before: "The storm unleashed a very fierce gale on the coast.",
      after: "The storm unleashed a ferocious gale on the coast."
    },
    category: "Quality"
  },
  {
    id: "deep",
    base: "deep",
    strong: "PROFOUND",
    phonetic: "/prəˈfaʊnd/",
    partOfSpeech: "adjective",
    definition: "Very deep, penetrating, or reaching far down into essence.",
    alternatives: [
      { word: "ABYSSAL", nuance: "Relating to the unfathomable depths of the ocean." },
      { word: "FATHOMLESS", nuance: "Too deep to ever be measured." }
    ],
    example: {
      before: "The philosopher left a very deep impact on modern ethics.",
      after: "The philosopher left a profound impact on modern ethics."
    },
    category: "Intellect"
  },
  {
    id: "shallow",
    base: "shallow",
    strong: "SUPERFICIAL",
    phonetic: "/ˌsuː.pəˈfɪʃ.əl/",
    partOfSpeech: "adjective",
    definition: "Existing only on the surface; lacking depth of character or insight.",
    alternatives: [
      { word: "CURSORY", nuance: "Hastily done without detailed scrutiny." },
      { word: "TRIVIAL", nuance: "Of little or no meaningful value." }
    ],
    example: {
      before: "The critic wrote a very shallow review of the novel.",
      after: "The critic wrote a superficial review of the novel."
    },
    category: "Intellect"
  },
  {
    id: "smooth",
    base: "smooth",
    strong: "SLEEK",
    phonetic: "/sliːk/",
    partOfSpeech: "adjective",
    definition: "Smooth, glossy, and streamlined with frictionless elegance.",
    alternatives: [
      { word: "POLISHED", nuance: "Refined to a mirror-like sheen." },
      { word: "GLASSY", nuance: "Smooth and reflective like undisturbed glass." }
    ],
    example: {
      before: "The ceramic glaze felt very smooth under the palm.",
      after: "The ceramic glaze felt sleek under the palm."
    },
    category: "Physical"
  },
  {
    id: "rough",
    base: "rough",
    strong: "JAGGED",
    phonetic: "/ˈdʒæɡ.ɪd/",
    partOfSpeech: "adjective",
    definition: "Having sharp, uneven projections or harsh abrasiveness.",
    alternatives: [
      { word: "RUGGED", nuance: "Hardy, uneven, and weather-beaten." },
      { word: "COARSE", nuance: "Rough in texture or grain." }
    ],
    example: {
      before: "The coastline was lined with very rough granite cliffs.",
      after: "The coastline was lined with jagged granite cliffs."
    },
    category: "Physical"
  },
  {
    id: "shiny",
    base: "shiny",
    strong: "GLEAMING",
    phonetic: "/ˈɡliː.mɪŋ/",
    partOfSpeech: "adjective",
    definition: "Reflecting bright light with polished or metallic brilliance.",
    alternatives: [
      { word: "LUSTROUS", nuance: "Having a soft, deep sheen of pearl or metal." },
      { word: "GLITTERING", nuance: "Sparkling with multifaceted points of light." }
    ],
    example: {
      before: "The new trumpet had a very shiny brass bell.",
      after: "The new trumpet had a gleaming brass bell."
    },
    category: "Appearance"
  },
  {
    id: "smelly",
    base: "smelly",
    strong: "PUNGENT",
    phonetic: "/ˈpʌn.dʒənt/",
    partOfSpeech: "adjective",
    definition: "Having an intensely strong, biting, or penetrating odor or taste.",
    alternatives: [
      { word: "PUTRID", nuance: "Rotting and repulsive in decomposition." },
      { word: "NOXIOUS", nuance: "Harmful and foul-smelling." }
    ],
    example: {
      before: "The vinegar and garlic made a very smelly marinade.",
      after: "The vinegar and garlic made a pungent marinade."
    },
    category: "Physical"
  },
  {
    id: "tasty",
    base: "tasty",
    strong: "DELECTABLE",
    phonetic: "/dɪˈlek.tə.bəl/",
    partOfSpeech: "adjective",
    definition: "Delicious, highly pleasing, and delightful to the taste.",
    alternatives: [
      { word: "LUSCIOUS", nuance: "Rich, sweet, and juicy in sensation." },
      { word: "SAVORY", nuance: "Appetizing with hearty, salty umami depth." }
    ],
    example: {
      before: "The pastry chef created a very tasty dessert.",
      after: "The pastry chef created a delectable dessert."
    },
    category: "Quality"
  },
  {
    id: "sweet",
    base: "sweet",
    strong: "SYRUPY",
    phonetic: "/ˈsɪr.ə.pi/",
    partOfSpeech: "adjective",
    definition: "Excessively or richly sweet, dense, and sugary.",
    alternatives: [
      { word: "SACCHARINE", nuance: "Artificially or cloyingly sweet in tone." },
      { word: "HONIED", nuance: "Sweet and soothing like fresh honey." }
    ],
    example: {
      before: "The baklava was coated in a very sweet glaze.",
      after: "The baklava was coated in a syrupy glaze."
    },
    category: "Physical"
  },
  {
    id: "bitter",
    base: "bitter",
    strong: "ACRID",
    phonetic: "/ˈæk.rɪd/",
    partOfSpeech: "adjective",
    definition: "Unpleasantly pungent, harsh, and sharply biting.",
    alternatives: [
      { word: "ASTRINGENT", nuance: "Harsh, severe, and tightening on the palate." },
      { word: "CAUSTIC", nuance: "Able to burn or corrode; sharp in tone." }
    ],
    example: {
      before: "The smoke from the burning rubber had a very bitter odor.",
      after: "The smoke from the burning rubber had an acrid odor."
    },
    category: "Physical"
  },
  {
    id: "colorful",
    base: "colorful",
    strong: "VIBRANT",
    phonetic: "/ˈvaɪ.brənt/",
    partOfSpeech: "adjective",
    definition: "Full of energy, brilliance, and vivid saturated color.",
    alternatives: [
      { word: "KALEIDOSCOPIC", nuance: "Constantly shifting with myriad colors." },
      { word: "PRISMATIC", nuance: "Displaying spectrums like light through glass." }
    ],
    example: {
      before: "The street carnival was filled with very colorful banners.",
      after: "The street carnival was filled with vibrant banners."
    },
    category: "Appearance"
  },
  {
    id: "tight",
    base: "tight",
    strong: "CONSTRICTED",
    phonetic: "/kənˈstrɪk.tɪd/",
    partOfSpeech: "adjective",
    definition: "Narrowed, bound tightly, or painfully squeezed.",
    alternatives: [
      { word: "TAUT", nuance: "Pulled tense and rigid without slack." },
      { word: "STRANGLED", nuance: "Choked of flow or space." }
    ],
    example: {
      before: "The climbing harness felt very tight around his waist.",
      after: "The climbing harness felt constricted around his waist."
    },
    category: "Physical"
  },
  {
    id: "loose",
    base: "loose",
    strong: "SLACK",
    phonetic: "/slæk/",
    partOfSpeech: "adjective",
    definition: "Not taut or held firmly; loose and hanging freely.",
    alternatives: [
      { word: "BAGGY", nuance: "Hanging loosely in puffed folds." },
      { word: "UNFASTENED", nuance: "Completely released from anchor." }
    ],
    example: {
      before: "The mooring rope on the pier was very loose.",
      after: "The mooring rope on the pier was slack."
    },
    category: "Physical"
  },
  {
    id: "valuable",
    base: "valuable",
    strong: "PRICELESS",
    phonetic: "/ˈpraɪs.ləs/",
    partOfSpeech: "adjective",
    definition: "So precious that its value cannot be calculated or replaced.",
    alternatives: [
      { word: "INVALUABLE", nuance: "Crucial beyond monetary measurement." },
      { word: "EXQUISITE", nuance: "Treasured for fine craftsmanship." }
    ],
    example: {
      before: "The museum guarded a very valuable illuminated manuscript.",
      after: "The museum guarded a priceless illuminated manuscript."
    },
    category: "Quality"
  },
  {
    id: "windy",
    base: "windy",
    strong: "BLUSTERY",
    phonetic: "/ˈblʌs.tər.i/",
    partOfSpeech: "adjective",
    definition: "Characterized by strong gusts and turbulent winds.",
    alternatives: [
      { word: "TEMPESTUOUS", nuance: "Violent and storm-tossed." },
      { word: "GALE-FORCE", nuance: "High velocity sustained winds." }
    ],
    example: {
      before: "We walked down the boardwalk on a very windy afternoon.",
      after: "We walked down the boardwalk on a blustery afternoon."
    },
    category: "Atmosphere"
  },
  {
    id: "rainy",
    base: "rainy",
    strong: "TORRENTIAL",
    phonetic: "/təˈren.ʃəl/",
    partOfSpeech: "adjective",
    definition: "Falling rapidly and in torrential, overwhelming sheets of rain.",
    alternatives: [
      { word: "DELUGE", nuance: "Overpowering flood of rain." },
      { word: "MONSOONAL", nuance: "Persistent, heavy seasonal downpour." }
    ],
    example: {
      before: "The hurricane brought very rainy weather to the coastline.",
      after: "The hurricane brought torrential rain to the coastline."
    },
    category: "Atmosphere"
  },
  {
    id: "skinny",
    base: "skinny",
    strong: "EMACIATED",
    phonetic: "/ɪˈmeɪ.si.eɪ.tɪd/",
    partOfSpeech: "adjective",
    definition: "Abnormally thin, wasted away, or skeletal.",
    alternatives: [
      { word: "GAUNT", nuance: "Lean and haggard from suffering or hunger." },
      { word: "SKELETAL", nuance: "Showing bone structure plainly." }
    ],
    example: {
      before: "The rescued hound looked very skinny upon arrival.",
      after: "The rescued hound looked emaciated upon arrival."
    },
    category: "Appearance"
  },
  {
    id: "fat",
    base: "fat",
    strong: "OBESE",
    phonetic: "/əʊˈbiːs/",
    partOfSpeech: "adjective",
    definition: "Grossly overweight or corpulent.",
    alternatives: [
      { word: "CORPULENT", nuance: "Stout and heavily built." },
      { word: "ROTUND", nuance: "Plump, rounded, and spherical." }
    ],
    example: {
      before: "The pampered palace cat was very fat.",
      after: "The pampered palace cat was rotund."
    },
    category: "Appearance"
  },
  {
    id: "anxious",
    base: "anxious",
    strong: "FRAUGHT",
    phonetic: "/frɔːt/",
    partOfSpeech: "adjective",
    definition: "Filled with or accompanied by high tension and anxiety.",
    alternatives: [
      { word: "DISTRESSED", nuance: "Under acute emotional strain." },
      { word: "APPREHENSIVE", nuance: "Fearful of impending catastrophe." }
    ],
    example: {
      before: "The diplomatic meeting was a very anxious encounter.",
      after: "The diplomatic meeting was a fraught encounter."
    },
    category: "Emotion"
  },
  {
    id: "eager",
    base: "eager",
    strong: "AVID",
    phonetic: "/ˈæv.ɪd/",
    partOfSpeech: "adjective",
    definition: "Having or showing a keen, enthusiastic interest.",
    alternatives: [
      { word: "ZEALOUS", nuance: "Fervent and impassioned in pursuit." },
      { word: "KEEN", nuance: "Sharply attentive and ready to act." }
    ],
    example: {
      before: "She is a very eager reader of historical fiction.",
      after: "She is an avid reader of historical fiction."
    },
    category: "Character"
  },
  {
    id: "strict",
    base: "strict",
    strong: "STRINGENT",
    phonetic: "/ˈstrɪn.dʒənt/",
    partOfSpeech: "adjective",
    definition: "Strict, precise, and rigorously binding.",
    alternatives: [
      { word: "RIGOROUS", nuance: "Extremely thorough and exacting." },
      { word: "DRACONIAN", nuance: "Excessively harsh and severe." }
    ],
    example: {
      before: "The laboratory followed very strict safety rules.",
      after: "The laboratory followed stringent safety rules."
    },
    category: "Quality"
  },
  {
    id: "hurt",
    base: "hurt",
    strong: "BATTERED",
    phonetic: "/ˈbæt.əd/",
    partOfSpeech: "adjective",
    definition: "Damaged by repeated blows or severe emotional adversity.",
    alternatives: [
      { word: "WOUNDED", nuance: "Suffering from injury or betrayal." },
      { word: "BRUISED", nuance: "Marked by emotional or physical strikes." }
    ],
    example: {
      before: "He felt very hurt after the harsh criticism.",
      after: "He felt battered after the harsh criticism."
    },
    category: "Emotion"
  },
  {
    id: "special",
    base: "special",
    strong: "EXCEPTIONAL",
    phonetic: "/ɪkˈsep.ʃən.əl/",
    partOfSpeech: "adjective",
    definition: "Forming an exception; rare, uncommon, and distinguished.",
    alternatives: [
      { word: "SINGULAR", nuance: "Remarkably unique and unrivaled." },
      { word: "PEERLESS", nuance: "Having no equal in stature or skill." }
    ],
    example: {
      before: "She possesses a very special musical talent.",
      after: "She possesses an exceptional musical talent."
    },
    category: "Quality"
  }
];

// Helper to find a word by base (case-insensitive, trimmed)
export function findWordByBase(input: string): WordEntry | undefined {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return undefined;

  // Direct match
  const direct = WORD_DATABASE.find(w => w.base.toLowerCase() === normalized);
  if (direct) return direct;

  // Check if strong word itself was entered
  const strongMatch = WORD_DATABASE.find(w => w.strong.toLowerCase() === normalized);
  if (strongMatch) return strongMatch;

  // Check alternatives
  const altMatch = WORD_DATABASE.find(w => 
    w.alternatives.some(a => a.word.toLowerCase() === normalized)
  );
  if (altMatch) return altMatch;

  // Partial / prefix match
  const prefixMatch = WORD_DATABASE.find(w => 
    w.base.toLowerCase().startsWith(normalized) || normalized.startsWith(w.base.toLowerCase())
  );
  if (prefixMatch) return prefixMatch;

  return undefined;
}

// Popular sample chips
export const POPULAR_CHIPS = [
  "big",
  "tired",
  "cold",
  "happy",
  "angry",
  "smart",
  "fast",
  "rich",
  "clean",
  "scared",
  "hot",
  "beautiful",
  "bad",
  "loud"
];
