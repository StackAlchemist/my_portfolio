"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const roles = ["Developer 👨🏾‍💻", "Designer 🎨", "Video Editor 📽️", "Innovator 🚀"];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ padding: "100px 6vw 80px" }}>

      {/* Background orbs */}
      <div className="pointer-events-none fixed rounded-full"
        style={{ width: 500, height: 500, background: 'var(--accent)', filter: 'blur(140px)',
          opacity: 0.1, top: -120, right: -100 }} />
      <div className="pointer-events-none fixed rounded-full"
        style={{ width: 400, height: 400, background: 'var(--accent2)', filter: 'blur(140px)',
          opacity: 0.08, bottom: '10%', left: -80 }} />

      {/* Decorative BG text */}
      <span className="syne pointer-events-none select-none absolute right-[4vw] top-1/2 -translate-y-1/2 font-extrabold leading-none"
        style={{ fontSize: 'clamp(180px, 24vw, 340px)', color: 'transparent',
          WebkitTextStroke: '1px rgba(255,255,255,0.04)', letterSpacing: '-0.06em' }}>
        OLA
      </span>

      {/* Eyebrow */}
      <p className="mono animate-fade-up mb-7 flex items-center gap-2 text-xs uppercase tracking-widest"
        style={{ color: 'var(--muted)', animationDelay: '0.2s' }}>
        <span className="block h-px w-7" style={{ background: 'var(--accent)' }} />
        Available for work &nbsp;·&nbsp;{" "}
        <em className="not-italic" style={{ color: 'var(--accent)' }}>Ibadan, Nigeria</em>
      </p>

      {/* Name */}
      <h1 className="syne animate-fade-up font-extrabold leading-none"
        style={{ fontSize: 'clamp(64px, 12vw, 160px)', letterSpacing: '-0.04em',
          color: 'var(--text)', animationDelay: '0.3s' }}>
        Jimoh<br />Olamide<span style={{ color: 'var(--accent)' }}>.</span>
      </h1>

      {/* Role tags */}
      <div className="animate-fade-up mt-8 flex flex-wrap gap-2.5" style={{ animationDelay: '0.45s' }}>
        {roles.map((r, i) => (
          <span key={r} className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300"
            style={{
              borderColor: i === roleIdx ? 'var(--accent)' : 'var(--border)',
              color: i === roleIdx ? 'var(--accent)' : 'var(--muted)',
              background: i === roleIdx ? 'rgba(200,255,87,0.06)' : 'transparent',
            }}>
            {r}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="animate-fade-up mt-10 max-w-lg text-base leading-relaxed"
        style={{ color: 'var(--muted)', animationDelay: '0.55s' }}>
        Full-stack developer & designer building digital products that are fast, beautiful, and purposeful.
        I turn ideas into production-ready experiences.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up mt-11 flex flex-wrap gap-3.5" style={{ animationDelay: '0.65s' }}>
        <Link href="#projects"
          className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:opacity-90"
          style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
          View my work ↓
        </Link>
        <a href="https://github.com/StackAlchemist" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5"
          style={{ borderColor: 'var(--border)', color: 'var(--text)' }}>
          GitHub ↗
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mono absolute bottom-9 right-[6vw] flex flex-col items-center gap-2 text-[10px] uppercase tracking-widest"
        style={{ color: 'var(--muted)' }}>
        <div className="animate-scroll-pulse w-px h-12"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
        scroll
      </div>
    </section>
  );
};

export default Hero;
