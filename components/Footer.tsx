import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      {/* ── CONTACT SECTION ── */}
      <section id="contact" style={{ padding: "0 6vw 80px", position: "relative", zIndex: 1 }}>
        <div className="relative overflow-hidden rounded-3xl border text-center"
          style={{ background: "var(--surface)", borderColor: "var(--border)", padding: "80px 7%" }}>
          {/* Glow */}
          <div className="pointer-events-none absolute rounded-full"
            style={{ width: 400, height: 400, background: "var(--accent)", filter: "blur(180px)",
              opacity: 0.07, top: "-50%", left: "50%", transform: "translateX(-50%)" }} />

          <p className="mono relative mb-5 text-xs uppercase tracking-widest"
            style={{ color: "var(--accent)" }}>
            04 — Let&apos;s connect
          </p>

          <h2 className="syne relative font-extrabold leading-none"
            style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em",
              color: "var(--text)", marginBottom: 20 }}>
            Got a project<br />in mind?
          </h2>

          <p className="relative mx-auto mb-12 max-w-md text-base leading-relaxed"
            style={{ color: "var(--muted)" }}>
            I&apos;m always open to new opportunities, collaborations, and interesting conversations.
            Let&apos;s build something great.
          </p>

          <div className="relative flex flex-wrap justify-center gap-4">
            <a href="https://github.com/StackAlchemist" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-250 hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              <FaGithub size={16} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jimoh-olamide/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-250 hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              <FaLinkedin size={16} /> LinkedIn
            </a>
            <a href="https://x.com/jaeseven7" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-250 hover:-translate-y-0.5"
              style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
              <FaXTwitter size={16} /> Twitter / X
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER BAR ── */}
      <footer className="mono flex flex-wrap items-center justify-between gap-3 px-[6vw] py-8 text-xs"
        style={{ borderTop: "1px solid var(--border)", color: "var(--muted)", position: "relative", zIndex: 1 }}>
        <span className="syne font-extrabold text-base tracking-tight" style={{ color: "var(--text)" }}>
          Stack<span style={{ color: "var(--accent)" }}>Alchemist</span>
        </span>
        <span>© 2025 Jimoh Olamide — Built with Next.js & Tailwind</span>
        <span>Ibadan, Nigeria 🇳🇬</span>
      </footer>
    </>
  );
};

export default Footer;
