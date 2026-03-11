"use client";
export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 z-50 animate-slide-down"
      style={{ transform: 'translateX(-50%)' }}>
      <div className="flex items-center gap-1 rounded-full border px-2.5 py-2 backdrop-blur-xl"
        style={{ background: 'rgba(14,14,20,0.8)', borderColor: 'var(--border)' }}>
        <a href="#about" className="rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:bg-white/5"
          style={{ color: 'var(--muted)' }}>About</a>
        <a href="#skills" className="rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:bg-white/5"
          style={{ color: 'var(--muted)' }}>Skills</a>
        <a href="#projects" className="rounded-full px-4 py-1.5 text-sm font-medium transition-all hover:bg-white/5"
          style={{ color: 'var(--muted)' }}>Projects</a>
        <a href="#contact" className="rounded-full px-4 py-1.5 text-sm font-semibold transition-all hover:opacity-90"
          style={{ background: 'var(--accent)', color: 'var(--bg)' }}>
          Let&apos;s Talk ↗
        </a>
      </div>
    </nav>
  );
};
