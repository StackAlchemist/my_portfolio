import Image from "next/image";
import Link from "next/link";
import MusicPlayer from "./MusicPlayer";

const SectionLabel = ({ num, title }: { num: string; title: string }) => (
  <div className="mono mb-14 flex items-center gap-4">
    <span className="text-xs tracking-widest" style={{ color: 'var(--accent)' }}>{num}</span>
    <h2 className="syne font-extrabold tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text)' }}>
      {title}
    </h2>
    <div className="h-px max-w-[80px] flex-1" style={{ background: 'var(--border)' }} />
  </div>
);

const stacks = [
  { text: "Node.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { text: "React",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { text: "Next.js",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { text: "TailwindCSS",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { text: "Figma",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { text: "MongoDB",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { text: "PostgreSQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { text: "TypeScript",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
];

const projects = [

  { num: "001", title: "VendorTrust",              role: "Full Stack Developer",      img: "/projects/vendortust.png",    link: "https://usevendortrust.vercel.app/" },
  { num: "002", title: "ShopBuddy",         role: "Frontend Developer",        img: "/projects/shopbuddy.png", link: "https://myshopbuddy.vercel.app/" },
  // { num: "003", title: "Gemini AI Chatbot",     role: "Developer",                 img: "/projects/gemini-clone.png", link: "https://gemini-clone-one-rouge.vercel.app/" },
  { num: "003", title: "Belongeen Marketplace", role: "Frontend Developer",       img: "/projects/belongeen.png",    link: "https://belongeen.vercel.app/" },
  { num: "004", title: "Goes Ltd",              role: "UX Designer · Backend Dev", img: "/projects/goes.png",        link: "https://gani-ola.vercel.app/" },
  { num: "005", title: "Forever",               role: "Full Stack Developer",      img: "/projects/forever.png",     link: "https://forevershopping.vercel.app/" },

];

const Body = () => {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "120px 6vw" }}>
  <SectionLabel num="01" title="About me" />
  <div className="grid gap-20 md:grid-cols-2">
    <p
      className="syne font-bold leading-relaxed"
      style={{ fontSize: "clamp(18px,2.4vw,28px)", color: "var(--text)" }}
    >
      I build digital products that solve real problems — from{" "}
      <span style={{ color: "var(--accent)" }}>clean, intuitive interfaces</span>{" "}
      to scalable backend systems, with a strong focus on{" "}
      <span style={{ color: "var(--accent)" }}>performance and usability</span>.
    </p>

    <div>
      <p className="mb-5 text-sm leading-loose" style={{ color: "var(--muted)" }}>
        I&apos;m{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          Jimoh Olamide Prince
        </strong>
        , a full-stack developer and Computer Science undergraduate based in
        Nigeria. I work primarily with the{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          MERN stack
        </strong>{" "}
        and TypeScript to build fast, scalable web applications and tools.
      </p>

      <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
        My experience spans building React and Next.js applications, developing
        Node.js APIs, and designing user interfaces that feel simple and
        intentional. Alongside development, I also work in{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          UI/UX design and digital graphics
        </strong>
        , running a small design brand where I create visual assets and brand
        materials.
      </p>

      <p className="text-sm leading-loose mt-4" style={{ color: "var(--muted)" }}>
        I&apos;m particularly interested in building products in{" "}
        <strong style={{ color: "var(--text)", fontWeight: 600 }}>
          AI, health technology and education technology
        </strong>
        , where thoughtful software can genuinely improve people&apos;s lives.
      </p>

      <div className="mt-9 flex flex-wrap gap-10">
        {[
          { n: "10+", l: "Projects Built" },
          { n: "3+", l: "Years Building" },
          { n: "MERN", l: "Primary Stack" },
        ].map((s) => (
          <div key={s.l}>
            <div
              className="syne font-extrabold"
              style={{
                fontSize: 36,
                color: "var(--accent)",
                lineHeight: 1,
              }}
            >
              {s.n}
            </div>
            <p
              className="mono mt-1 text-xs uppercase tracking-widest"
              style={{ color: "var(--muted)" }}
            >
              {s.l}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* ── SKILLS ── */}
      <section id="skills" style={{ padding: "0 6vw 120px" }}>
        <SectionLabel num="02" title="Tech Stack" />
        <div className="flex flex-wrap gap-3">
          {stacks.map(s => (
            <div key={s.text}
              className="group inline-flex cursor-default items-center gap-2.5 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt={s.text} width={22} height={22}
                style={{ objectFit: "contain", filter: s.invert ? "invert(1)" : undefined }} />
              {s.text}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "0 6vw 120px" }}>
        <SectionLabel num="03" title="Selected Projects" />
        <div className="flex flex-col">
          {projects.map((p, i) => (
            <Link key={i} href={p.link} target="_blank" rel="noopener noreferrer"
              className="group relative flex items-center justify-between gap-6 py-7 transition-all duration-300"
              style={{ borderTop: "1px solid var(--border)", ...(i === projects.length - 1 ? { borderBottom: "1px solid var(--border)" } : {}) }}>

              {/* Background fill on hover */}
              <div className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 rounded-lg"
                style={{ background: "var(--surface)" }} />

              {/* Content */}
              <div className="relative flex items-center gap-6 flex-1">
                <span className="mono hidden text-xs tracking-widest md:block" style={{ color: "var(--muted)" }}>{p.num}</span>
                <h3 className="syne font-bold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]"
                  style={{ fontSize: "clamp(18px, 2.5vw, 26px)", color: "var(--text)" }}>
                  {p.title}
                </h3>
              </div>

              <span className="relative hidden rounded-full border px-3.5 py-1.5 text-xs font-medium md:block"
                style={{ borderColor: "var(--border)", color: "var(--muted)", whiteSpace: "nowrap" }}>
                {p.role}
              </span>

              <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]"
                style={{ borderColor: "var(--border)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  className="transition-transform duration-300 group-hover:rotate-45">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="transition-colors duration-300 group-hover:stroke-[#06060a]" />
                </svg>
              </div>

              {/* Floating preview image */}
              <div className="pointer-events-none absolute right-16 -top-2 w-64 overflow-hidden rounded-xl opacity-0 shadow-2xl transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2"
                style={{ height: 160, background: "var(--surface)" }}>
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </section>

<MusicPlayer />
    </div>
  );
};

export default Body;
