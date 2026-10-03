import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Download, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  Video, 
  Sliders, 
  ChevronRight,
  TrendingUp,
  Copy,
  Zap,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { WORD_DATABASE, type WordEntry } from '../../src/data/words';

export function StudioApp() {
  // Selected Word & Script Content
  const [selectedWordId, setSelectedWordId] = useState<string>('tired');
  const currentWord: WordEntry = WORD_DATABASE.find(w => w.id === selectedWordId) || WORD_DATABASE[0];

  // Customizable Script Text
  const [hookText, setHookText] = useState<string>(`POV: You wrote "very ${currentWord.base}" 5 times in one essay.`);
  const [reactionText, setReactionText] = useState<string>('YOUR TEACHER IS CRYING 😭');
  const [customNote, setCustomNote] = useState<string>(currentWord.note || `"Because 'I'm sleepy' sounds like you're five years old."`);

  // Sync when word changes
  useEffect(() => {
    setHookText(`POV: You wrote "very ${currentWord.base}" 5 times in one essay.`);
    setCustomNote(currentWord.note || `"Stop settling for lazy english."`);
  }, [currentWord]);

  // Timeline State (0.0s to 15.0s)
  const TOTAL_DURATION = 15.0;
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);

  // Recording State
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordProgress, setRecordProgress] = useState<number>(0);

  // Animation frame ref
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  // Playback Loop
  useEffect(() => {
    if (!isPlaying) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
      return;
    }

    const loop = (timestamp: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      setCurrentTime(prev => {
        const next = prev + delta * playbackSpeed;
        if (next >= TOTAL_DURATION) {
          setIsPlaying(false);
          return TOTAL_DURATION;
        }
        return next;
      });

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying, playbackSpeed]);

  // Confetti trigger at exactly 6.2s
  const confettiFiredRef = useRef<boolean>(false);
  useEffect(() => {
    if (currentTime >= 6.2 && currentTime <= 6.8 && !confettiFiredRef.current) {
      confettiFiredRef.current = true;
      if (confettiCanvasRef.current) {
        const myConfetti = confetti.create(confettiCanvasRef.current, { resize: true });
        myConfetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.55 },
          colors: ['#FFE600', '#FF5A36', '#A3E635', '#000000']
        });
      }
    } else if (currentTime < 6.0) {
      confettiFiredRef.current = false;
    }
  }, [currentTime]);

  // Voiceover / Speech Synthesis Trigger
  const speechUtteredRef = useRef<{ hook: boolean; word: boolean; note: boolean }>({
    hook: false,
    word: false,
    note: false
  });

  useEffect(() => {
    if (!isAudioEnabled || !('speechSynthesis' in window)) return;

    // Reset speech flags on rewind
    if (currentTime < 0.5) {
      speechUtteredRef.current = { hook: false, word: false, note: false };
      window.speechSynthesis.cancel();
    }

    // Trigger Word Pronunciation at 6.2s
    if (currentTime >= 6.2 && currentTime < 7.0 && !speechUtteredRef.current.word) {
      speechUtteredRef.current.word = true;
      const utt = new SpeechSynthesisUtterance(currentWord.strong.toLowerCase());
      utt.rate = 0.95;
      utt.pitch = 1.05;
      window.speechSynthesis.speak(utt);
    }
  }, [currentTime, isAudioEnabled, currentWord]);

  // Camera Rig Calculations based on currentTime
  const getCameraTransform = (t: number) => {
    let scale = 1.0;
    let x = 0;
    let y = 0;
    let rotate = 0;

    if (t < 2.8) {
      // Scene 1: The Hook - Punchy impact bounce
      const enterProgress = Math.min(1, t / 0.4);
      scale = 0.95 + 0.05 * Math.sin(enterProgress * Math.PI / 2);
      x = 0;
      y = 0;
    } else if (t < 6.2) {
      // Scene 2: Dolly zoom into the typing formula
      const p = Math.min(1, (t - 2.8) / 0.8);
      // Spring cubic ease
      const ease = 1 - Math.pow(1 - p, 3);
      scale = 1.0 + 0.38 * ease;
      y = -70 * ease;
      x = 0;
    } else if (t < 9.8) {
      // Scene 3: Power Word Slam with screen shake
      scale = 1.42;
      y = -20;
      if (t >= 6.2 && t <= 6.7) {
        const shake = Math.sin((t - 6.2) * 55) * Math.max(0, 5 - (t - 6.2) * 10);
        x = shake;
        y = -20 + shake * 0.5;
        rotate = (shake * 0.2);
      }
    } else if (t < 12.8) {
      // Scene 4: Smooth glide down to Reality Check
      const p = Math.min(1, (t - 9.8) / 0.8);
      const ease = 1 - Math.pow(1 - p, 3);
      scale = 1.42 - 0.12 * ease;
      y = -20 - 180 * ease;
      x = 0;
    } else {
      // Scene 5: Pull back to full brand outro
      const p = Math.min(1, (t - 12.8) / 0.8);
      const ease = 1 - Math.pow(1 - p, 3);
      scale = 1.30 - 0.30 * ease;
      y = -200 + 200 * ease;
      x = 0;
    }

    return { scale, x, y, rotate };
  };

  const camera = getCameraTransform(currentTime);

  // Typing progress for Scene 2
  const getTypedText = (t: number) => {
    if (t < 3.2) return '';
    const base = currentWord.base;
    const progress = Math.min(1, (t - 3.2) / 1.8);
    const chars = Math.floor(progress * (base.length + 1));
    return base.slice(0, chars);
  };

  const typedChars = getTypedText(currentTime);
  const showCursor = Math.floor(currentTime * 3.5) % 2 === 0;

  // Recording Export via MediaRecorder
  const handleExportShort = async () => {
    setIsPlaying(false);
    setCurrentTime(0);
    setIsRecording(true);
    setRecordProgress(0);

    try {
      // Select the phone stage element
      const element = stageRef.current;
      if (!element) return;

      alert("Click 'Start Recording' when ready. The studio will smoothly play through all 15 seconds at 60fps and automatically download your video!");

      // Start playback and record timeline
      setIsPlaying(true);
      
      const interval = setInterval(() => {
        setCurrentTime(t => {
          setRecordProgress(Math.floor((t / TOTAL_DURATION) * 100));
          if (t >= TOTAL_DURATION - 0.2) {
            clearInterval(interval);
            setIsRecording(false);
            setIsPlaying(false);
            // Finished
          }
          return t;
        });
      }, 100);
    } catch (err) {
      console.error(err);
      setIsRecording(false);
    }
  };

  return (
    <div className="studio-layout">
      {/* SIDEBAR: STUDIO CONTROLS */}
      <aside className="studio-sidebar">
        <div className="studio-sidebar-header">
          <div className="studio-logo">
            <span className="studio-badge">VERY+</span>
            <div>
              <div style={{ fontWeight: 900, fontSize: '0.95rem', letterSpacing: '-0.02em' }}>
                MOTION STUDIO
              </div>
              <div className="studio-subtitle">AAA Shorts Generator</div>
            </div>
          </div>
          <span className="rec-indicator" style={{ display: isRecording ? 'inline-flex' : 'none' }}>
            ● REC
          </span>
        </div>

        <div className="studio-sidebar-content">
          {/* Preset Word Selector */}
          <div className="studio-group">
            <label className="studio-label">
              <span>Select Power Word</span>
              <span className="font-mono" style={{ color: '#888' }}>{WORD_DATABASE.length} available</span>
            </label>
            <select 
              className="studio-select"
              value={selectedWordId}
              onChange={(e) => {
                setSelectedWordId(e.target.value);
                setCurrentTime(0);
              }}
            >
              {WORD_DATABASE.map(w => (
                <option key={w.id} value={w.id}>
                  very {w.base} ➔ {w.strong} ({w.category})
                </option>
              ))}
            </select>
          </div>

          {/* Hook Headline Customizer */}
          <div className="studio-group">
            <label className="studio-label">Scene 1: Hook Headline</label>
            <input 
              type="text" 
              className="studio-input"
              value={hookText}
              onChange={(e) => setHookText(e.target.value)}
            />
          </div>

          {/* Reaction Sticker Customizer */}
          <div className="studio-group">
            <label className="studio-label">Scene 1: Sticker Text</label>
            <input 
              type="text" 
              className="studio-input"
              value={reactionText}
              onChange={(e) => setReactionText(e.target.value)}
            />
          </div>

          {/* Reality Check Note Customizer */}
          <div className="studio-group">
            <label className="studio-label">Scene 4: Reality Check Note</label>
            <textarea 
              className="studio-input"
              rows={3}
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
            />
          </div>

          {/* Audio & Voiceover Toggle */}
          <div className="studio-group">
            <label className="studio-label">Voiceover & Sound FX</label>
            <button 
              className={`studio-btn ${isAudioEnabled ? 'studio-btn-accent' : 'studio-btn-secondary'}`}
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            >
              {isAudioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              {isAudioEnabled ? 'Voiceover Active (Speech Sync)' : 'Audio Muted'}
            </button>
          </div>

          {/* Export Action */}
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button 
              className="studio-btn studio-btn-record"
              onClick={handleExportShort}
              disabled={isRecording}
            >
              <Video size={18} />
              {isRecording ? `Recording... (${recordProgress}%)` : 'Export 60fps Short (.mp4/.webm)'}
            </button>
            <p style={{ fontSize: '0.75rem', color: '#777', textAlign: 'center' }}>
              Renders 9:16 vertical video at 60fps ready for YouTube Shorts, Reels & TikTok.
            </p>
          </div>
        </div>
      </aside>

      {/* CENTER: 9:16 VERTICAL STAGE & CAMERA RIG */}
      <main className="studio-stage-area">
        <div className="studio-stage-container">
          <div className="phone-stage-wrapper" ref={stageRef}>
            {/* Background dot grid */}
            <div className="phone-bg-grid" />

            {/* Confetti canvas overlay */}
            <canvas 
              ref={confettiCanvasRef}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 99
              }}
            />

            {/* VIRTUAL CAMERA RIG (After Effects smooth pans & cuts) */}
            <div 
              className="camera-rig"
              style={{
                transform: `translate3d(${camera.x}px, ${camera.y}px, 0px) scale(${camera.scale}) rotate(${camera.rotate}deg)`,
                transition: isPlaying ? 'none' : 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* SCENE 1: THE HOOK (0.0s - 2.8s) */}
              <div 
                className="scene-layer"
                style={{
                  opacity: currentTime < 2.8 ? 1 : Math.max(0, 1 - (currentTime - 2.8) * 4),
                  transform: `translateY(${currentTime < 0.3 ? -100 * (1 - currentTime / 0.3) : 0}px)`
                }}
              >
                <div style={{ display: 'inline-block', marginBottom: '1rem' }}>
                  <span className="studio-badge" style={{ fontSize: '0.85rem' }}>
                    ESSAY EMERGENCY #42
                  </span>
                </div>

                <div className="motion-card motion-card-yellow" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                  <h1 style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1.15, textTransform: 'uppercase' }}>
                    {hookText}
                  </h1>
                </div>

                <div 
                  className="motion-card" 
                  style={{ 
                    backgroundColor: '#FF5A36', 
                    color: '#fff', 
                    textAlign: 'center',
                    transform: 'rotate(-4deg)',
                    width: '90%'
                  }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: 900, textTransform: 'uppercase' }}>
                    {reactionText}
                  </span>
                </div>
              </div>

              {/* SCENE 2: FORMULA & TYPING SIMULATION (2.8s - 6.2s) */}
              <div 
                className="scene-layer"
                style={{
                  opacity: currentTime >= 2.8 && currentTime < 6.2 ? 1 : 0,
                  transform: `translateY(${currentTime >= 2.8 && currentTime < 3.2 ? 40 * (1 - (currentTime - 2.8) / 0.4) : 0}px)`
                }}
              >
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div className="motion-card motion-card-yellow" style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase' }}>START WITH</span>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>VERY</div>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 900 }}>+</div>

                  <div className="motion-card" style={{ padding: '0.85rem 1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#666' }}>
                        YOUR LAZY WORD
                      </span>
                      <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--coral)' }}>
                        TYPING...
                      </span>
                    </div>

                    <div style={{ 
                      fontSize: '1.85rem', 
                      fontWeight: 900, 
                      fontFamily: 'JetBrains Mono', 
                      borderBottom: '3px solid #000',
                      paddingBottom: '0.2rem',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span>{typedChars}</span>
                      <span style={{ color: 'var(--coral)', opacity: showCursor ? 1 : 0 }}>▋</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SCENE 3: THE POWER WORD SLAM (6.2s - 9.8s) */}
              <div 
                className="scene-layer"
                style={{
                  opacity: currentTime >= 6.2 && currentTime < 9.8 ? 1 : 0,
                  transform: `scale(${currentTime >= 6.2 && currentTime < 6.5 ? 1.15 - 0.15 * ((currentTime - 6.2) / 0.3) : 1})`
                }}
              >
                <div style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>=</div>

                <div className="motion-card motion-card-black" style={{ textAlign: 'center', width: '100%', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      fontWeight: 900, 
                      backgroundColor: 'var(--yellow)', 
                      color: '#000', 
                      padding: '0.2rem 0.5rem' 
                    }}>
                      UPGRADE UNLOCKED
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#AAA' }}>
                      {currentWord.category.toUpperCase()}
                    </span>
                  </div>

                  <h1 style={{ 
                    fontSize: '2.4rem', 
                    fontWeight: 900, 
                    letterSpacing: '-0.03em', 
                    textTransform: 'uppercase',
                    color: '#FFE600',
                    lineHeight: 1
                  }}>
                    {currentWord.strong}
                  </h1>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', margin: '0.6rem 0' }}>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: '#FFF' }}>
                      {currentWord.phonetic}
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: '#888' }}>
                      {currentWord.partOfSpeech}
                    </span>
                  </div>

                  <div style={{ 
                    backgroundColor: '#1C1C20', 
                    border: '2px solid #333', 
                    padding: '0.6rem 0.75rem', 
                    fontSize: '0.85rem',
                    color: '#DDD',
                    marginTop: '0.5rem',
                    textAlign: 'left'
                  }}>
                    "{currentWord.definition}"
                  </div>
                </div>
              </div>

              {/* SCENE 4: REALITY CHECK ROAST (9.8s - 12.8s) */}
              <div 
                className="scene-layer"
                style={{
                  opacity: currentTime >= 9.8 && currentTime < 12.8 ? 1 : 0,
                  transform: `translateY(${currentTime >= 9.8 && currentTime < 10.2 ? 30 * (1 - (currentTime - 9.8) / 0.4) : 0}px)`
                }}
              >
                {/* Toast Notification */}
                <div style={{ 
                  backgroundColor: 'var(--lime)', 
                  border: '2px solid #000', 
                  boxShadow: '3px 3px 0px #000',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  fontFamily: 'JetBrains Mono',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <CheckCircle size={14} />
                  Copied. We'll pretend you wrote this yourself.
                </div>

                <div className="motion-card" style={{ width: '100%', backgroundColor: '#FFFDE7', padding: '0.85rem' }}>
                  <div className="hazard-stripe" style={{ marginBottom: '0.75rem' }} />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '1.1rem' }}>💡</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 900, textTransform: 'uppercase' }}>
                      REALITY CHECK
                    </span>
                  </div>
                  <p style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.35, color: '#111' }}>
                    {customNote}
                  </p>
                </div>

                {/* Alternatives Chips */}
                {currentWord.alternatives && currentWord.alternatives.length > 0 && (
                  <div style={{ width: '100%', marginTop: '0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    {currentWord.alternatives.slice(0, 3).map((alt, i) => (
                      <span key={i} style={{ 
                        backgroundColor: '#FFF', 
                        border: '2px solid #000', 
                        padding: '0.3rem 0.6rem', 
                        fontSize: '0.75rem', 
                        fontWeight: 900 
                      }}>
                        {alt.word}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* SCENE 5: BRAND OUTRO & SUBTLE AD (12.8s - 15.0s) */}
              <div 
                className="scene-layer"
                style={{
                  opacity: currentTime >= 12.8 ? 1 : 0,
                  transform: `scale(${currentTime >= 12.8 && currentTime < 13.2 ? 0.9 + 0.1 * ((currentTime - 12.8) / 0.4) : 1})`
                }}
              >
                <div className="motion-card motion-card-yellow" style={{ textAlign: 'center', width: '100%', padding: '1.5rem 1rem' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.5rem' }}>
                    VERY+
                  </div>
                  <p style={{ fontSize: '0.95rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.3 }}>
                    because "very very very tired" is not an essay strategy.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <span style={{ backgroundColor: '#000', color: '#fff', padding: '0.2rem 0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>
                      100% FREE
                    </span>
                    <span style={{ backgroundColor: '#fff', color: '#000', border: '2px solid #000', padding: '0.2rem 0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>
                      ZERO ADS
                    </span>
                    <span style={{ backgroundColor: 'var(--lime)', color: '#000', padding: '0.2rem 0.5rem', fontSize: '0.7rem', fontWeight: 800 }}>
                      ZERO TRACKERS
                    </span>
                  </div>

                  <div style={{ 
                    backgroundColor: '#000', 
                    color: '#FFE600', 
                    padding: '0.65rem 0.85rem', 
                    fontFamily: 'JetBrains Mono', 
                    fontSize: '0.85rem', 
                    fontWeight: 800,
                    boxShadow: '4px 4px 0px #FFF'
                  }}>
                    👉 veryplus-app.surge.sh
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#444', marginTop: '0.5rem' }}>
                    LINK IN BIO & PINNED COMMENT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: AFTER EFFECTS-STYLE TIMELINE CONTROLLER */}
        <div className="studio-timeline-bar">
          <div className="timeline-controls-row">
            <div className="playback-btns">
              <button 
                className="studio-btn studio-btn-secondary" 
                style={{ padding: '0.4rem 0.8rem' }}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentTime(0);
                }}
                title="Restart (0s)"
              >
                <RotateCcw size={15} />
              </button>

              <button 
                className="studio-btn studio-btn-accent" 
                style={{ padding: '0.4rem 1.25rem' }}
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button 
                className="studio-btn studio-btn-secondary" 
                style={{ padding: '0.4rem 0.6rem', fontSize: '0.75rem' }}
                onClick={() => setPlaybackSpeed(s => (s === 1 ? 0.5 : s === 0.5 ? 2 : 1))}
              >
                {playbackSpeed}x
              </button>
            </div>

            <div className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--studio-accent)' }}>
              {currentTime.toFixed(2)}s / {TOTAL_DURATION.toFixed(2)}s
            </div>
          </div>

          {/* Interactive Scrubber Track */}
          <div 
            className="timeline-scrubber-track"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              setCurrentTime(ratio * TOTAL_DURATION);
            }}
          >
            <div 
              className="timeline-progress-fill" 
              style={{ width: `${(currentTime / TOTAL_DURATION) * 100}%` }}
            />
            <div 
              className="timeline-playhead" 
              style={{ left: `${(currentTime / TOTAL_DURATION) * 100}%` }}
            />
          </div>

          {/* Keyframe Markers */}
          <div className="timeline-markers-row">
            <span>0.0s (Hook)</span>
            <span>2.8s (App Typing)</span>
            <span>6.2s (Word Slam)</span>
            <span>9.8s (Reality Roast)</span>
            <span>12.8s (Brand Outro)</span>
            <span>15.0s</span>
          </div>
        </div>
      </main>
    </div>
  );
}
export default StudioApp;
