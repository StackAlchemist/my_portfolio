"use client";
import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// 🎵 HOW TO ADD YOUR SONGS:
//
// 1. Go to https://pixabay.com/music/search/afrobeat/ (free, no attribution)
// 2. Download 3 tracks you like
// 3. Rename them: track-1.mp3, track-2.mp3, track-3.mp3
// 4. Drop them into your Next.js project at: /public/music/
// 5. Update the TRACKS array below with the real names & artists
// ─────────────────────────────────────────────────────────────────────────────

interface Track {
  name: string;
  artist: string;
  src: string;
}

// interface s {
//   name: string;
//   artist: string;
//   src: string;
// }

const TRACKS: Track[] = [
  {
    name: "Eko",          // ← replace with real song name
    artist: "FOLA",    // ← replace with real artist
    src: "/music/eko.mp3",
  },
  {
    name: "Loose Emotions",
    artist: "BNXN",
    src: "/music/loose-emotions.mp3",
  },
  {
    name: "I Love You",
    artist: "Amma",
    src: "/music/iloveyou.mp3",
  },
];

const VIZ_COUNT = 16;

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [minimized, setMinimized]         = useState(true);
  const [isPlaying, setIsPlaying]         = useState(false);
  const [currentTrack, setCurrentTrack]   = useState(0);
  const [volume, setVolume]               = useState(0.6);
  const [progress, setProgress]           = useState(0);
  const [duration, setDuration]           = useState(0);
  const [currentTime, setCurrentTime]     = useState(0);
  const [barHeights, setBarHeights]       = useState<number[]>(Array(VIZ_COUNT).fill(3));
  const [loadError, setLoadError]         = useState(false);

  const barVals = useRef<Float32Array>(new Float32Array(VIZ_COUNT).fill(3));
  const barVels = useRef<Float32Array>(new Float32Array(VIZ_COUNT).fill(0));
  const vizRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Create audio element once ──
  useEffect(() => {
    const audio = new Audio();
    audio.preload  = "metadata";
    audio.volume   = volume;
    audio.loop     = false;
    audioRef.current = audio;

    const onTime = () => {
      setCurrentTime(audio.currentTime);
      if (audio.duration)
        setProgress((audio.currentTime / audio.duration) * 100);
    };
    const onMeta  = () => setDuration(audio.duration);
    const onEnd   = () => {
      setCurrentTrack(i => {
        const next = (i + 1) % TRACKS.length;
        // defer so state is settled
        setTimeout(() => loadAndPlay(audio, next), 0);
        return next;
      });
    };
    const onErr   = () => setLoadError(true);
    const onPlay  = () => setLoadError(false);

    audio.addEventListener("timeupdate",    onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended",          onEnd);
    audio.addEventListener("error",          onErr);
    audio.addEventListener("playing",        onPlay);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("timeupdate",    onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended",          onEnd);
      audio.removeEventListener("error",          onErr);
      audio.removeEventListener("playing",        onPlay);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── VU bar animation ──
  const startViz = useCallback(() => {
    if (vizRef.current) clearInterval(vizRef.current);
    vizRef.current = setInterval(() => {
      for (let i = 0; i < VIZ_COUNT; i++) {
        barVals.current[i] += barVels.current[i];
        barVels.current[i] += (Math.random() * 6 - 3) * 0.45;
        barVels.current[i] *= 0.76;
        barVals.current[i] = Math.max(3, Math.min(28, barVals.current[i]));
      }
      setBarHeights([...barVals.current]);
    }, 80);
  }, []);

  const stopViz = useCallback(() => {
    if (vizRef.current) { clearInterval(vizRef.current); vizRef.current = null; }
    setBarHeights(Array(VIZ_COUNT).fill(3));
  }, []);

  const loadAndPlay = async (audio: HTMLAudioElement, idx: number) => {
    audio.src = TRACKS[idx].src;
    audio.load();
    setProgress(0);
    setCurrentTime(0);
    setLoadError(false);
    try {
      await audio.play();
      setIsPlaying(true);
      startViz();
    } catch {
      setIsPlaying(false);
      stopViz();
    }
  };

  // ── Play a track by index ──
  const playTrack = useCallback(async (idx: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTrack(idx);
    await loadAndPlay(audio, idx);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startViz, stopViz]);

  // ── Play / Pause toggle ──
  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Nothing loaded yet
    if (!audio.src || audio.src === window.location.href) {
      await playTrack(0);
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      stopViz();
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
        startViz();
      } catch {}
    }
  }, [isPlaying, playTrack, startViz, stopViz]);

  // ── Prev / Next ──
  const prevTrack = () => playTrack((currentTrack - 1 + TRACKS.length) % TRACKS.length);
  const nextTrack = () => playTrack((currentTrack + 1) % TRACKS.length);

  // ── Volume sync ──
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // ── Seek ──
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio?.duration) return;
    const val = parseFloat(e.target.value);
    audio.currentTime = (val / 100) * audio.duration;
    setProgress(val);
  };

  // ── Cleanup ──
  useEffect(() => () => stopViz(), [stopViz]);

  // ── Format seconds → M:SS ──
  const fmt = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    return `${m}:${Math.floor(s % 60).toString().padStart(2, "0")}`;
  };

  const track = TRACKS[currentTrack];
  const px: React.CSSProperties = { fontFamily: "'Press Start 2P', monospace" };

  return (
    <div
      className="fixed bottom-7 left-7 z-[2000] select-none transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ width: 280, transform: minimized ? "translateY(calc(100% - 50px))" : "translateY(0)" }}
    >
      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl"
        style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.07) 2px,rgba(0,0,0,0.07) 4px)" }}
      />

      {/* Shell */}
      <div
        className="relative overflow-hidden rounded-2xl border"
        style={{
          background: "#08080f",
          borderColor: "#2a2a3a",
          boxShadow: "0 0 0 1px rgba(200,255,87,0.1), 0 24px 60px rgba(0,0,0,0.85)",
        }}
      >
        {/* ── Header ── */}
        <button
          className="flex w-full items-center justify-between border-b px-3.5 py-3 cursor-pointer"
          style={{ background: "#0b0b12", borderColor: "#1a1a24" }}
          onClick={() => setMinimized(m => !m)}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#febc2e" }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#c8ff57" }} />
            <span
              className="ml-1.5 text-[7px] tracking-widest"
              style={{ ...px, color: "#c8ff57", textShadow: "0 0 10px rgba(200,255,87,0.6)" }}
            >
              ♫ VIBES.FM
            </span>
          </div>
          <span
            className="rounded border px-1.5 py-1 text-[7px] leading-none"
            style={{ ...px, borderColor: "#1e1e2e", color: "#5a5a72" }}
          >
            {minimized ? "▲" : "▼"}
          </span>
        </button>

        {/* ── Body ── */}
        <div className="px-3.5 pb-3 pt-3.5">

          {/* VU Bars */}
          <div className="mb-3 flex items-end gap-[3px]" style={{ height: 28 }}>
            {barHeights.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-[height] duration-[80ms]"
                style={{ height: h, minHeight: 3, background: i % 4 === 0 ? "#57e0ff" : "#c8ff57" }}
              />
            ))}
          </div>

          {/* Track name (scrolling if long) */}
          <div className="overflow-hidden mb-0.5">
            <span
              className="block text-[7.5px] leading-none whitespace-nowrap"
              style={{
                ...px,
                color: "#ececf4",
                animation: track.name.length > 18 ? "mp-marquee 10s linear infinite" : undefined,
              }}
            >
              {track.name}
            </span>
          </div>
          <p className="mb-2.5 text-[6px] truncate" style={{ ...px, color: "#5a5a72" }}>
            {track.artist.toUpperCase()}
          </p>

          {/* Error message */}
          {loadError && (
            <p
              className="mb-2 rounded px-2 py-1.5 text-[5.5px] leading-tight"
              style={{ ...px, color: "#ff5f57", background: "rgba(255,95,87,0.08)", border: "1px solid rgba(255,95,87,0.2)" }}
            >
              ⚠ ADD MP3 TO /PUBLIC/MUSIC/
            </p>
          )}

          {/* Seek bar */}
          <input
            type="range" min={0} max={100} step={0.1} value={progress}
            onChange={handleSeek}
            className="w-full mb-1 cursor-pointer"
            style={{
              WebkitAppearance: "none",
              height: 3,
              borderRadius: 2,
              outline: "none",
              background: `linear-gradient(to right, #c8ff57 ${progress}%, #1a1a26 ${progress}%)`,
            }}
          />

          {/* Time */}
          <div className="mb-3 flex justify-between">
            <span style={{ ...px, fontSize: 5.5, color: "#5a5a72" }}>{fmt(currentTime)}</span>
            <span style={{ ...px, fontSize: 5.5, color: "#5a5a72" }}>{fmt(duration)}</span>
          </div>

          {/* Controls */}
          <div className="mb-2.5 flex items-center gap-1.5">
            <button
              onClick={prevTrack}
              className="rounded-[7px] border px-2.5 py-[7px] text-[7px] leading-none transition-all hover:border-[#c8ff57] hover:text-[#c8ff57]"
              style={{ ...px, borderColor: "#1e1e2e", color: "#5a5a72", background: "none" }}
            >◀◀</button>

            <button
              onClick={togglePlay}
              className="flex-1 rounded-[7px] py-2 text-[8px] leading-none transition-all hover:opacity-90"
              style={{ ...px, background: "#c8ff57", color: "#06060a", boxShadow: "0 0 14px rgba(200,255,87,0.3)" }}
            >
              {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
            </button>

            <button
              onClick={nextTrack}
              className="rounded-[7px] border px-2.5 py-[7px] text-[7px] leading-none transition-all hover:border-[#c8ff57] hover:text-[#c8ff57]"
              style={{ ...px, borderColor: "#1e1e2e", color: "#5a5a72", background: "none" }}
            >▶▶</button>
          </div>

          {/* Volume */}
          <div className="mb-2.5 flex items-center gap-2">
            <span style={{ ...px, fontSize: 6, color: "#5a5a72" }}>VOL</span>
            <input
              type="range" min={0} max={1} step={0.02} value={volume}
              onChange={e => setVolume(parseFloat(e.target.value))}
              className="flex-1 cursor-pointer"
              style={{
                WebkitAppearance: "none",
                height: 3,
                borderRadius: 2,
                outline: "none",
                background: `linear-gradient(to right, #c8ff57 ${volume * 100}%, #1e1e2e ${volume * 100}%)`,
              }}
            />
          </div>

          {/* Playlist */}
          <div className="flex flex-col gap-[2px] border-t pt-2" style={{ borderColor: "#14141e" }}>
            {TRACKS.map((tr, i) => (
              <button
                key={tr.src}
                onClick={() => playTrack(i)}
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left transition-colors"
                style={{ background: i === currentTrack ? "rgba(200,255,87,0.08)" : "transparent" }}
              >
                <span style={{ ...px, fontSize: 6, color: i === currentTrack ? "#c8ff57" : "#5a5a72", width: 14, flexShrink: 0 }}>
                  0{i + 1}
                </span>
                <span className="flex-1 truncate" style={{ ...px, fontSize: 6.5, color: i === currentTrack ? "#ececf4" : "#5a5a72" }}>
                  {tr.name}
                </span>
                {i === currentTrack && isPlaying && (
                  <div className="flex items-end gap-[2px]" style={{ height: 10 }}>
                    {[0, 1, 2, 3].map(b => (
                      <span
                        key={b}
                        className="w-[2px] rounded-sm"
                        style={{ background: "#c8ff57", height: barHeights[b * 4] ?? 3, transition: "height 80ms ease" }}
                      />
                    ))}
                  </div>
                )}
              </button>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @keyframes mp-marquee {
          0%,20%  { transform: translateX(0); }
          80%,100%{ transform: translateX(-40%); }
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #c8ff57;
          cursor: pointer;
          box-shadow: 0 0 6px rgba(200,255,87,0.5);
        }
      `}</style>
    </div>
  );
}