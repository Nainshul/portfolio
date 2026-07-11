import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail, Phone, ArrowUpRight, Trophy, Sparkles, MapPin } from "lucide-react";
import projectCrop from "@/assets/project-crop.jpg";
import projectZen from "@/assets/project-zen.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const SKILLS = [
  "HTML / CSS / JS",
  "React & Next.js",
  "UI / UX Design",
  "Figma",
  "Tailwind CSS",
  "TypeScript",
  "Python",
  "Java",
  "C / C++",
  "REST APIs",
  "Prototyping",
  "Design Systems",
];

const SOCIALS = [
  { label: "GitHub", short: "GH", href: "#", Icon: Github },
  { label: "LinkedIn", short: "LI", href: "#", Icon: Linkedin },
  { label: "Twitter / X", short: "TW", href: "#", Icon: Twitter },
  { label: "Email", short: "EM", href: "mailto:nainshhlkhatker@gmail.com", Icon: Mail },
];

const PROJECTS = [
  {
    title: "AI Crop Disease Detection",
    subtitle: "Frontend + AI Integration",
    image: projectCrop,
    tags: ["UI Design", "Frontend", "Python API"],
    year: "2024",
    href: "#",
    blurb: "Real-time crop disease detection with soil moisture tracking and live alerts for farmers.",
  },
  {
    title: "Zen Study Flow",
    subtitle: "Productivity Platform",
    image: projectZen,
    tags: ["UI/UX", "React", "Tailwind"],
    year: "2024",
    href: "#",
    blurb: "Focus-first study management app with sessions, progress tracking and distraction-free flows.",
  },
];

const ACHIEVEMENTS = [
  {
    place: "1st Place",
    title: "AI for Sustainable Development Hackathon",
    where: "GCB, Bahadurgarh",
  },
  {
    place: "2nd Place",
    title: "Code for NexGen Exhibition",
    where: "Jhajjar",
  },
  {
    place: "Top 10",
    title: "National AI-for-All Competition",
    where: "India",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-sm tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            EEBU4o4<span className="text-accent">.</span>
          </a>
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-[0.15em] uppercase">
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#work" className="hover:text-accent transition-colors">Work</a>
            <a href="#achievements" className="hover:text-accent transition-colors">Achievements</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <div className="flex gap-2">
            {SOCIALS.slice(0, 3).map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="size-9 rounded-full bg-surface border border-border grid place-items-center text-muted-foreground hover:text-white hover:bg-accent hover:border-accent transition-all"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main id="top" className="pt-32 pb-24">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="max-w-5xl animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-accent text-[11px] font-semibold uppercase tracking-widest mb-8">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex size-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-accent" />
              </span>
              Available for freelance & internships
            </div>

            <p className="font-display text-xs md:text-sm tracking-[0.35em] uppercase text-muted-foreground mb-6">
              Portfolio · EEBU4o4
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight text-balance mb-10">
              I design & build{" "}
              <span className="text-transparent bg-clip-text bg-[image:var(--gradient-accent)]">
                interfaces
              </span>{" "}
              that feel effortless to use.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
              A <span className="text-foreground font-medium">UI/UX &amp; Frontend Developer</span> focused on building
              high-performance, responsive web experiences — bridging clean visual design with production-ready code.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 h-14 px-8 bg-accent hover:bg-accent-dim text-white font-semibold rounded-xl transition-all shadow-[var(--shadow-glow)]"
              >
                View My Work
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <div className="flex gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="size-14 rounded-xl bg-surface border border-border grid place-items-center text-muted-foreground hover:text-white hover:border-accent/60 hover:bg-surface-2 transition-all"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" /> Haryana, India</span>
              <span>BCA · 2024–2028</span>
              <span>3× Hackathon Recognitions</span>
            </div>
          </div>
        </section>

        {/* Skills — the star of the show */}
        <section id="skills" className="border-y border-border py-10 overflow-hidden bg-surface/40 mb-32">
          <div className="flex whitespace-nowrap animate-marquee">
            {[0, 1].map((loop) => (
              <div key={loop} className="flex gap-10 items-center px-5 shrink-0">
                {SKILLS.map((s) => (
                  <span key={`${loop}-${s}`} className="flex items-center gap-10">
                    <span className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground/90">
                      {s}
                    </span>
                    <span className="size-2 rounded-full bg-accent shrink-0" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* About + Skill Grid */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">01 / About</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6 text-balance">
                A frontend developer with a designer's eye.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my Bachelor of Computer Applications, I focus on shipping interfaces
                that pair strong typography, tight layout, and reliable engineering. I care about the
                small details — spacing, motion, feedback — that make products feel considered.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My stack spans web fundamentals, modern React, and design tooling. I'm equally
                comfortable prototyping in Figma and shipping to production.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-surface to-transparent border border-border">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-display text-xl font-bold">Core Toolkit</h3>
                  <span className="text-xs font-mono text-muted-foreground">12 focus areas</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {SKILLS.map((s) => (
                    <div
                      key={s}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-2 transition-all"
                    >
                      <span className="size-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform" />
                      <span className="text-sm font-medium">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">02 / Selected Work</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4">Featured Projects</h2>
            </div>
            <span className="hidden md:inline text-muted-foreground font-mono text-sm">
              {String(PROJECTS.length).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((p) => (
              <a key={p.title} href={p.href} className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-surface border border-border mb-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest px-2 py-1 rounded bg-background/70 backdrop-blur border border-border">
                    {p.year}
                  </span>
                </div>
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{p.blurb}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest px-2 py-1 rounded-md bg-surface border border-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="size-12 shrink-0 rounded-full border border-border grid place-items-center text-muted-foreground group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">03 / Recognition</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mt-4">Achievements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={a.title}
                className="group relative p-8 rounded-3xl bg-surface border border-border hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="size-11 rounded-xl bg-accent/10 border border-accent/25 grid place-items-center text-accent">
                    {i === 0 ? <Trophy className="size-5" /> : <Sparkles className="size-5" />}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                </div>
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-accent mb-2">
                  {a.place}
                </span>
                <h4 className="text-lg font-display font-bold mb-2 leading-snug">{a.title}</h4>
                <p className="text-sm text-muted-foreground">{a.where}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-surface to-background border border-border">
            <div className="absolute -top-32 -right-32 size-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent">04 / Contact</span>
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-8 max-w-3xl text-balance">
                Have a project in mind? Let's build something users love.
              </h2>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a
                  href="mailto:nainshhlkhatker@gmail.com"
                  className="inline-flex items-center gap-2 h-14 px-8 bg-accent hover:bg-accent-dim text-white font-semibold rounded-xl transition-all shadow-[var(--shadow-glow)]"
                >
                  <Mail className="size-4" /> Start a conversation
                </a>
                <a
                  href="tel:+919467355251"
                  className="inline-flex items-center gap-2 h-14 px-8 bg-surface border border-border hover:border-accent/50 font-semibold rounded-xl transition-all"
                >
                  <Phone className="size-4" /> +91 94673 55251
                </a>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center justify-between p-4 rounded-xl bg-surface border border-border hover:border-accent/50 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 text-accent" />
                      <span className="text-sm font-medium">{label}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} EEBU4o4 · UI/UX &amp; Frontend Developer</p>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Crafted with care · India</p>
        </div>
      </footer>
    </div>
  );
}
