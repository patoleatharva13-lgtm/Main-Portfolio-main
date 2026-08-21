import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const [isMuted, setIsMuted] = useState(false);

  // Audio Context & Synthesizer references for procedural relaxing lofi ambient sound
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const synthIntervalRef = useRef<number | null>(null);

  // Lofi ambient chord progressions (Frequencies in Hz: Dm9 -> G13 -> Cmaj9 -> Am9)
  const chords = [
    [146.83, 220.00, 261.63, 329.63], // Dm9
    [196.00, 246.94, 329.63, 392.00], // G13
    [130.81, 196.00, 246.94, 329.63], // Cmaj9
    [220.00, 261.63, 329.63, 392.00], // Am9
  ];

  const playChords = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    if (!gainNodeRef.current) {
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;
    }

    let chordIndex = 0;

    const playNextChord = () => {
      if (!audioCtxRef.current || !gainNodeRef.current) return;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      currentChord.forEach((freq) => {
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Low-pass filter for warm, cozy analog synth timbre
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(650, ctx.currentTime);

        // Slow soft attack and long gentle release
        const now = ctx.currentTime;
        noteGain.gain.setValueAtTime(0.001, now);
        noteGain.gain.exponentialRampToValueAtTime(0.08, now + 1.2);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

        osc.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(gainNodeRef.current!);

        osc.start(now);
        osc.stop(now + 5.0);
      });
    };

    playNextChord();
    synthIntervalRef.current = window.setInterval(playNextChord, 4500);
  };

  const stopMusic = () => {
    if (synthIntervalRef.current) {
      clearInterval(synthIntervalRef.current);
      synthIntervalRef.current = null;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      stopMusic();
      setIsPlaying(false);
    } else {
      playChords();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(isMuted ? 0 : newVol, audioCtxRef.current.currentTime);
    }
    if (newVol > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const target = !isMuted ? 0 : volume;
      gainNodeRef.current.gain.setValueAtTime(target, audioCtxRef.current.currentTime);
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    return () => {
      stopMusic();
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        className="glass-panel rounded-2xl border border-white/10 shadow-2xl p-2.5 overflow-hidden"
        animate={{ width: isExpanded ? 260 : 'auto' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        <div className="flex items-center gap-3">
          {/* Play/Pause Main Button */}
          <button
            id="music-player-toggle"
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause ambient sound" : "Play ambient lofi synth"}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
              isPlaying
                ? 'bg-purple-600 text-white shadow-[0_0_15px_#9333ea]'
                : 'bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 ml-0.5 fill-current" />}
          </button>

          {/* Track Info */}
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => setIsExpanded(!isExpanded)}>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-zinc-200 flex items-center gap-1.5">
                <Music className="w-3 h-3 text-purple-400" />
                <span>Ambient Lo-Fi</span>
              </span>
              <span className="text-[10px] text-zinc-400">
                {isPlaying ? "Analog Synth Chords" : "Click to Play"}
              </span>
            </div>

            {/* Audio Wave Visualizer Bars */}
            {isPlaying && (
              <div className="flex items-end gap-0.5 h-4 ml-1">
                <span className="w-1 bg-purple-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
                <span className="w-1 bg-cyan-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-4" />
                <span className="w-1 bg-purple-300 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-2" />
              </div>
            )}
          </div>

          {/* Expand/Collapse Toggle */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-zinc-400 hover:text-zinc-200 p-1 ml-auto transition-colors"
            aria-label={isExpanded ? "Minimize music controls" : "Expand music controls"}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded Volume Controls */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-2 border-t border-white/5 flex items-center gap-2.5 px-1"
            >
              <button
                type="button"
                onClick={toggleMute}
                className="text-zinc-400 hover:text-zinc-200"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                aria-label="Volume slider"
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <span className="text-[10px] text-zinc-400 font-mono w-7 text-right">
                {Math.round((isMuted ? 0 : volume) * 100)}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
