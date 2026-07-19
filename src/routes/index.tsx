import { createFileRoute } from "@tanstack/react-router";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Trophy, 
  Sparkles, 
  MapPin, 
  Terminal as TerminalIcon, 
  FileCode, 
  Play, 
  MessageSquare, 
  X, 
  Check, 
  ChevronDown, 
  Monitor, 
  Folder, 
  Award,
  Volume2,
  VolumeX,
  Plus,
  Minus,
  HelpCircle
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import projectCrop from "@/assets/project-crop.jpg";
import projectZen from "@/assets/project-zen.jpg";
import eebuBg from "@/assets/eebu_bg.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Theme = "astro" | "cyberpunk" | "slate" | "amber";

const SERVICES = [
  {
    num: "01",
    title: "Web Design",
    description: "Creating websites that perfectly balance bold aesthetics with functionality for maximum user engagement.",
    bullets: ["Custom Web Design", "Figma Prototyping", "Animations & Interactions", "Responsive Layouts", "SEO & Optimization"],
    time: "From 20 working days",
  },
  {
    num: "02",
    title: "Mobile UI Design",
    description: "Designing native and intuitive mobile application experiences across iOS and Android platforms.",
    bullets: ["Native iOS Design", "Android App Design", "Cross-Platform UI System", "User Journeys", "Micro-Interactions"],
    time: "From 25 working days",
  },
  {
    num: "03",
    title: "Redesign Services",
    description: "Revitalizing existing digital products with fresh UI systems and improved user experience strategy.",
    bullets: ["UX/UI Audits", "Design System Updates", "User Research & A/B Testing", "Conversion Optimization", "Brand Consistency"],
    time: "From 15 working days",
  },
  {
    num: "04",
    title: "Design Consultation",
    description: "Strategic design guidance and expert advice to help you make informed decisions about your digital presence.",
    bullets: ["UX Audit & Strategy", "Technical Consultation", "Design Reviews", "Team Mentoring", "UI/UX Best Practices"],
    time: "From 1 working day",
  },
];

const PROJECTS = [
  {
    title: "AI Crop Disease Detection",
    logoText: "CropEye AI",
    roleText: "Lead Developer",
    image: projectCrop,
    tags: ["Computer Vision", "AI Diagnostic", "React", "Python"],
    year: "2024",
    blurb: "A machine learning crop diagnosis app that helps farmers detect leaf anomalies, tracks local soil moisture metrics, and pushes live crop-saving notifications.",
    bgClass: "bg-[#e1e1e1] text-black",
  },
  {
    title: "Zen Study Flow",
    logoText: "ZenStudy",
    roleText: "UI/UX Developer",
    image: projectZen,
    tags: ["UI/UX", "Productivity", "Tailwind", "React"],
    year: "2024",
    blurb: "A focus-oriented study companion utilizing custom session tracking timers, distraction-shield blocks, and visual analytical metrics charts.",
    bgClass: "bg-[#121212] text-white border-t border-border/20",
  },
];

const PROCESS_STEPS = [
  { step: "1", name: "Discovery & Briefing", desc: "Initial consultation, project goals definition, KPIs establishment, and technical requirements documentation." },
  { step: "2", name: "Moodboard & References", desc: "Creation of a visual direction through moodboards and collection of stylistic references to align on style." },
  { step: "3", name: "Design Concept", desc: "Development of unique visual design concepts for client selection and feedback refinement." },
  { step: "4", name: "Research & Strategy", desc: "In-depth research of target audience, personas, and competitor/market UX benchmarks." },
  { step: "5", name: "Site Architecture", desc: "Structure definition, detailed sitemaps, page hierarchy, and interaction wireframes." },
  { step: "6", name: "Content Strategy", desc: "Audit and planning of copy, media assets, SEO strategy, and division of delivery roles." },
  { step: "7", name: "UI Design", desc: "Creation of detailed adaptive UI layouts for all pages across desktop, tablet, and mobile breakpoints." },
  { step: "8", name: "Development", desc: "Technical planning, Framer CMS setup, integration of third-party widgets, and custom code builds." },
  { step: "9", name: "Testing & QA", desc: "Comprehensive cross-device, cross-browser, and SEO check to guarantee launch quality." },
  { step: "10", name: "Launch & Support", desc: "Website launch with domain setups, DNS configurations, and post-launch support." }
];

const ACHIEVEMENTS = [
  { place: "1st Place", title: "Sustainable AI Hackathon", where: "GCB Bahadurgarh" },
  { place: "2nd Place", title: "Code for NexGen Exhibition", where: "Jhajjar" },
  { place: "Top 10", title: "National AI-for-All", where: "India Contributor" },
];

const FAQS = [
  {
    q: "What is your experience and do you have case studies?",
    a: "I have worked on web design and digital product development projects across multiple disciplines including fintech, e-commerce, and productivity tools. You can review my selected works in the 'Cases' section of this page, and check my real-time code tabs in the built-in workspace."
  },
  {
    q: "How should project content be structured?",
    a: "I kindly ask you to structure all text prototypes, logos, and images in separate folders (e.g. team photos, copywriting in Word/Docs with clear blocks). This helps speed up the layout process significantly."
  },
  {
    q: "What are the typical project timelines?",
    a: "Timeline depends on complexity. The minimum timeframe for quality implementation is 20+ working days, allowing for detailed research, design system styling, building, and thorough testing."
  },
  {
    q: "How does payment work?",
    a: "I usually operate on a 50/50 scheme (advance payment and final payment upon launch) or stage-by-stage milestones after completing each project phase."
  },
  {
    q: "Can I request revisions during the project?",
    a: "Yes! Each phase includes a comprehensive revision package. Revisions should be formatted in one clear document with screenshots to avoid confusion."
  },
  {
    q: "Do you place your label on the website?",
    a: "I place a small author label in the website footer. This serves as an author's mark. If you prefer to remove it, the project cost increases by 20%."
  }
];

const IDE_FILES = {
  "Nainshul.tsx": `import React from 'react';

export const DeveloperProfile: React.FC = () => {
  const profile = {
    name: 'Nainshul Khatkar',
    role: 'UI/UX & Frontend Developer',
    education: 'BCA (2024 - 2028)',
    status: 'Open to interesting projects'
  };

  return (
    <div className="profile p-6 rounded-2xl bg-surface border border-border">
      <h2 className="text-2xl font-display font-extrabold text-accent">{profile.name}</h2>
      <p className="text-xs font-mono text-muted-foreground mt-1">{profile.role}</p>
      <div className="mt-4 flex items-center gap-2 text-xs">
        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{profile.status}</span>
      </div>
    </div>
  );
};`,
  "skills.json": `{
  "languages": ["JS", "TS", "Python", "Java", "C++"],
  "frontend": ["React", "Next.js", "Tailwind CSS", "HTML5"],
  "design": ["UI/UX Design", "Figma Prototyping", "Design Systems"]
}`,
  "achievements.md": `# Achievements

* **1st Place** - *Sustainable AI Hackathon (GCB)*
* **2nd Place** - *Code for NexGen Exhibition (Jhajjar)*
* **Top 10** - *National AI-for-All Competition (India)*`
};

// Audio UI synthesizer
let audioCtx: AudioContext | null = null;
const playSynthTick = (type: "hover" | "click" | "keypress", isMuted: boolean) => {
  if (isMuted) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    if (type === "hover") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(1100, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.012, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.035);
    } else if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(650, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, audioCtx.currentTime + 0.07);
      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.09);
    } else if (type === "keypress") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(500, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.015);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.02);
    }
  } catch (e) {
    console.warn("Audio Context failed", e);
  }
};

function Portfolio() {
  const [theme, setTheme] = useState<Theme>("astro");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [sysTime, setSysTime] = useState("");
  
  // Interactive UI states
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [activeProcessTab, setActiveProcessTab] = useState<number>(0);
  
  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "EEBU4o4 Bold-Workspace Console v3.1.0" },
    { type: "output", text: "Type 'help' to print options." },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Mock IDE state
  const [activeFile, setActiveFile] = useState<keyof typeof IDE_FILES>("Nainshul.tsx");
  const [ideView, setIdeView] = useState<"code" | "preview">("code");

  // Sync theme
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-cyberpunk", "theme-slate", "theme-amber");
    if (theme !== "astro") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Clock
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setSysTime(d.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Terminal
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const executeTerminalCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    playSynthTick("click", isMuted);
    const newHistory = [...terminalHistory, { type: "input" as const, text: trimmed }];
    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Commands:\n  about        - Learn about Nainshul\n  skills       - Print key skills\n  projects     - List current projects\n  theme [t]    - Change theme (astro, cyberpunk, slate, amber)\n  clear        - Clear console history",
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Nainshul Khatkar (EEBU4o4) is a UI/UX & Frontend Developer. He is a BCA student engineering interactive layouts with clean grids.",
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "React, Next.js, Tailwind CSS, TypeScript, Figma Design, Python, Java, C/C++",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "1. CropEye AI: Crop foliage classification app\n2. ZenStudy: Session tracking study companion",
        });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "theme":
        if (arg === "astro" || arg === "cyberpunk" || arg === "slate" || arg === "amber") {
          setTheme(arg);
          newHistory.push({ type: "output", text: `Interface theme set to: '${arg}'` });
        } else {
          newHistory.push({
            type: "output",
            text: "Theme error. Choose from: 'astro', 'cyberpunk', 'slate', or 'amber'.",
          });
        }
        break;
      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${cmd}'. Type 'help' for support.`,
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body relative overflow-x-hidden selection:bg-accent selection:text-black">
      
      {/* Decorative dotted grids */}
      <div className="absolute inset-0 -z-20 pointer-events-none dots-grid opacity-[0.15]" />

      {/* Sticky Header Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl h-16 flex items-center justify-between px-6 md:px-12 select-none select-none">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollTo("hero")}
            className="font-display font-black text-base tracking-wider hover:text-accent cursor-pointer"
          >
            N.KHATKAR
          </button>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/35 text-[8px] font-mono text-emerald-500 font-bold uppercase tracking-widest">
            <span className="size-1 rounded-full bg-emerald-500 animate-pulse" />
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono">
          {[
            { label: "About", id: "about" },
            { label: "Services", id: "services" },
            { label: "Cases", id: "cases" },
            { label: "Process", id: "process" },
            { label: "Workspace", id: "workspace" },
            { label: "FAQ", id: "faq" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollTo(item.id);
                playSynthTick("click", isMuted);
              }}
              onMouseEnter={() => playSynthTick("hover", isMuted)}
              className="hover:text-accent cursor-pointer transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* System Settings (Sound and Theme) */}
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-muted-foreground/80 hidden xs:inline">{sysTime}</span>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`size-8 rounded-full border border-border grid place-items-center hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer ${!isMuted ? "text-accent bg-accent/5" : "text-muted-foreground"}`}
            title={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
          >
            {isMuted ? <VolumeX className="size-3.5" /> : <Volume2 className="size-3.5" />}
          </button>

          {/* Theme Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center gap-1 h-8 px-3 rounded-full bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer capitalize text-[10px] font-semibold"
            >
              <Monitor className="size-3 text-accent" />
              <span>{theme}</span>
              <ChevronDown className="size-3 text-muted-foreground" />
            </button>

            {themeMenuOpen && (
              <>
                <div className="fixed inset-0 z-45" onClick={() => setThemeMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-32 z-50 rounded-xl bg-surface border border-border p-1 shadow-2xl animate-fade-up text-[10px]">
                  {(["astro", "cyberpunk", "slate", "amber"] as Theme[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setThemeMenuOpen(false);
                        playSynthTick("click", isMuted);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors hover:bg-surface-2 ${theme === t ? "text-accent font-semibold" : "text-muted-foreground"}`}
                    >
                      <span className="capitalize">{t}</span>
                      {theme === t && <Check className="size-3" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 border-b border-border">
        <div className="max-w-6xl mx-auto w-full py-12 md:py-24 space-y-8">
          
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent block">
              UI/UX &amp; FRONTEND DEVELOPER
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-black leading-[0.95] tracking-tight uppercase">
              Web <span className="font-serif-italic text-accent lowercase">Designer</span> &amp; <br />
              Developer
            </h1>
          </div>

          <div className="grid md:grid-cols-12 gap-8 pt-8 items-start">
            <div className="md:col-span-7">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                I am a freelance UI/UX designer and frontend developer who moves from visual concepts to launched, high-performance websites. I combine structured codebases with bold, modern layout designs.
              </p>
            </div>
            
            <div className="md:col-span-5 space-y-4 font-mono text-xs">
              <div className="flex gap-3">
                <button
                  onClick={() => scrollTo("cases")}
                  className="group inline-flex items-center gap-2 h-11 px-5 bg-foreground text-background font-bold rounded-full transition-all hover:bg-accent hover:text-black cursor-pointer"
                  onMouseEnter={() => playSynthTick("hover", isMuted)}
                  onClick={() => playSynthTick("click", isMuted)}
                >
                  Check My Projects :)
                  <ArrowUpRight className="size-4" />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center justify-center size-11 rounded-full border border-border hover:border-accent hover:text-accent transition-colors cursor-pointer"
                  onMouseEnter={() => playSynthTick("hover", isMuted)}
                  onClick={() => playSynthTick("click", isMuted)}
                  title="Contact Me"
                >
                  <Mail className="size-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Marquee Row */}
        <div className="w-full overflow-hidden border-t border-border py-4 bg-surface/30 select-none">
          <div className="flex whitespace-nowrap animate-marquee font-display font-black text-xs sm:text-sm tracking-widest uppercase gap-8">
            <span>· UI/UX DESIGN · FIGMA PROTOTYPING · REACT MODULES · FRONTEND SYSTEM · CONVERSION OPTIMIZED · TAILWIND DESIGN · MOTION GRAPHICS · BRAND TRANSLATION ·</span>
            <span>· UI/UX DESIGN · FIGMA PROTOTYPING · REACT MODULES · FRONTEND SYSTEM · CONVERSION OPTIMIZED · TAILWIND DESIGN · MOTION GRAPHICS · BRAND TRANSLATION ·</span>
          </div>
        </div>
      </section>

      {/* About Section: My Story & Principles */}
      <section id="about" className="px-6 md:px-12 py-16 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">01 / MY STORY</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Design <span className="font-serif-italic text-accent lowercase">that</span> <br />
              drives impact
            </h2>
          </div>

          <div className="md:col-span-7 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <p className="text-foreground font-semibold text-base">
              I believe design should translate a brand’s soul into an interactive visual language. When a website stands out, users form emotional connections with the product.
            </p>
            <p>
              I am a Framer designer, Figma specialist, and React developer who builds custom experiences fast. Pursuing a BCA degree (2024–2028) in Haryana, India, I bridge the gap between creative visual layouts and clean typescript frontend compilation. 
            </p>
            
            {/* Core Principles */}
            <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="space-y-2">
                <h4 className="font-display font-bold text-foreground text-sm uppercase">Brand Soul Translation</h4>
                <p className="text-xs">I translate your brand's essence into a cohesive visual language. Your philosophy guides every pixel and transition.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-foreground text-sm uppercase">Human-Centered Creativity</h4>
                <p className="text-xs">Every design decision is made with your audience's real needs in mind, creating experiences that feel intuitive and engaging.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-foreground text-sm uppercase">No Compromise Quality</h4>
                <p className="text-xs">Whether it's a simple landing page or a complex React module, I maintain the same extreme attention to detail.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display font-bold text-foreground text-sm uppercase">Collaborative Partnership</h4>
                <p className="text-xs">Your project is a creative partnership. I involve you in the process while bringing expertise to push boundaries.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-12 py-16 md:py-32 border-b border-border bg-surface/10">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">02 / SERVICES</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
                My Professional Compass
              </h2>
            </div>
            <p className="text-xs text-muted-foreground font-mono max-w-xs">
              Tailored solutions, transparent processes, and no hidden fees.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {SERVICES.map((srv) => (
              <div 
                key={srv.num}
                className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono text-xs text-accent font-bold">({srv.num})</span>
                    <span className="text-[9px] font-mono text-muted-foreground/60 border border-border/80 px-2 py-0.5 rounded-full">{srv.time}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg uppercase mb-3 text-foreground group-hover:text-accent transition-colors">{srv.title}</h3>
                  <p className="text-xs text-muted-foreground/90 leading-relaxed mb-4">{srv.description}</p>
                </div>
                
                <div className="border-t border-border/60 pt-4 mt-auto">
                  <ul className="space-y-1 text-[10px] font-mono text-muted-foreground">
                    {srv.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Cases / Portfolio Section */}
      <section id="cases" className="px-6 md:px-12 py-16 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">03 / CASE STUDIES</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              Selected Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((proj) => (
              <div 
                key={proj.title} 
                className="group relative rounded-2xl overflow-hidden border border-border bg-surface/20 transition-all duration-500 hover:scale-[1.005]"
              >
                <div className="absolute top-4 right-4 z-10 inline-flex items-center justify-center size-10 rounded-full bg-black text-white hover:bg-accent transition-all duration-300 shadow-lg" title="View Project">
                  <ArrowUpRight className="size-4.5" />
                </div>

                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/35 to-transparent" />
                  
                  <span className="absolute top-4 left-4 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-background/80 backdrop-blur border border-border">
                    {proj.year}
                  </span>

                  <div className="absolute right-4 bottom-3 flex flex-wrap gap-1">
                    {proj.tags.map((t) => (
                      <span key={t} className="font-mono text-[8px] tracking-wider uppercase rounded-full px-2.5 py-1 bg-black/60 text-white border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`px-6 py-5 flex flex-col justify-between ${proj.bgClass}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-display font-extrabold text-xs tracking-wider uppercase">{proj.logoText}</span>
                    <span className="text-[10px] font-mono opacity-60 text-right">{proj.roleText}</span>
                  </div>
                  <p className="text-xs leading-relaxed opacity-75 mt-3">{proj.blurb}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Process Roadmap Section */}
      <section id="process" className="px-6 md:px-12 py-16 md:py-32 border-b border-border bg-surface/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-5 space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">04 / THE PLAN</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              Digital Design <br />
              Process
            </h2>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              This roadmap outlines my standard workflow. Depending on project complexity and timeline, it can be fully customized.
            </p>

            {/* Quick step index tabs */}
            <div className="grid grid-cols-5 gap-2 pt-6">
              {PROCESS_STEPS.map((p, idx) => (
                <button
                  key={p.step}
                  onClick={() => {
                    setActiveProcessTab(idx);
                    playSynthTick("click", isMuted);
                  }}
                  className={`h-9 font-mono text-xs font-bold border rounded-lg cursor-pointer transition-all ${activeProcessTab === idx ? "bg-accent border-accent text-black" : "bg-surface border-border text-muted-foreground hover:border-accent/40"}`}
                >
                  {p.step}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-7 bg-surface border border-border p-8 rounded-2xl relative shadow-xl min-h-[160px] flex flex-col justify-between">
            <span className="absolute top-4 right-4 font-mono text-[9px] text-accent font-bold">STEP 0{PROCESS_STEPS[activeProcessTab].step}</span>
            <div>
              <h4 className="font-display text-lg font-bold uppercase text-foreground mb-3">{PROCESS_STEPS[activeProcessTab].name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{PROCESS_STEPS[activeProcessTab].desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center text-[10px] font-mono text-muted-foreground/60">
              <span>Interactive Workflow Blueprint</span>
              <span>N.Khatkar</span>
            </div>
          </div>

        </div>
      </section>

      {/* Developer Workspace Panel (Terminal + Mock IDE) */}
      <section id="workspace" className="px-6 md:px-12 py-16 md:py-32 border-b border-border">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">05 / DEV CONTROL</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              Interactive Workspace
            </h2>
            <p className="text-xs text-muted-foreground max-w-md">
              A designer who codes. Use the terminal console or files tab below to inspect my technical setup in real-time.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-stretch">
            
            {/* Terminal Widget (col-span-5) */}
            <div className="col-span-12 md:col-span-5 flex flex-col">
              <div className="flex-1 rounded-2xl border border-border bg-surface/30 p-5 flex flex-col justify-between relative overflow-hidden shadow-lg min-h-[260px]">
                <div>
                  <div className="flex justify-between items-center mb-3 border-b border-border/50 pb-2 font-mono text-[10px]">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <TerminalIcon className="size-3.5 text-accent animate-pulse" /> zsh - developer console
                    </span>
                    <span className="size-2 rounded-full bg-emerald-500" />
                  </div>

                  <div className="h-44 overflow-y-auto font-mono text-[10px] flex flex-col gap-1.5 no-scrollbar select-text bg-background/20 p-2.5 rounded-lg border border-border/40">
                    {terminalHistory.map((item, idx) => (
                      <div key={idx} className="whitespace-pre-wrap leading-normal">
                        {item.type === "input" ? (
                          <span className="text-accent">eebu4o4$ <span className="text-foreground">{item.text}</span></span>
                        ) : (
                          <span className="text-muted-foreground/80">{item.text}</span>
                        )}
                      </div>
                    ))}
                    <div ref={terminalBottomRef} />
                  </div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    executeTerminalCommand(terminalInput);
                  }}
                  className="mt-3 border-t border-border/40 pt-2.5 flex items-center"
                >
                  <span className="text-accent font-mono text-[10px] mr-1 shrink-0">eebu4o4$</span>
                  <input
                    type="text"
                    value={terminalInput}
                    onChange={(e) => {
                      setTerminalInput(e.target.value);
                      playSynthTick("keypress", isMuted);
                    }}
                    placeholder="Type 'help'..."
                    className="bg-transparent border-none outline-none text-[10px] text-foreground font-mono w-full"
                  />
                </form>
              </div>
            </div>

            {/* IDE Widget (col-span-7) */}
            <div className="col-span-12 md:col-span-7 flex flex-col">
              <div className="flex-1 rounded-2xl border border-border bg-surface/30 overflow-hidden shadow-lg flex flex-col justify-between">
                
                {/* Titlebar */}
                <div className="bg-background/80 border-b border-border px-4 py-2.5 flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-red-500/80" />
                    <div className="size-2 rounded-full bg-yellow-500/80" />
                    <div className="size-2 rounded-full bg-green-500/80" />
                  </div>
                  <span>Nainshul - CodeWorkspace</span>
                  <div className="w-8" />
                </div>

                {/* Subheader Tabs */}
                <div className="bg-background/40 border-b border-border flex items-center justify-between">
                  <div className="flex">
                    {(Object.keys(IDE_FILES) as Array<keyof typeof IDE_FILES>).map((fileName) => (
                      <button
                        key={fileName}
                        onClick={() => {
                          setActiveFile(fileName);
                          setIdeView("code");
                          playSynthTick("click", isMuted);
                        }}
                        className={`px-3.5 py-1.5 border-r border-border text-[9px] font-mono flex items-center gap-1.5 cursor-pointer transition-colors ${
                          activeFile === fileName && ideView === "code"
                            ? "bg-surface text-foreground border-b-2 border-b-accent font-bold"
                            : "text-muted-foreground hover:bg-surface/20"
                        }`}
                      >
                        <Folder className="size-2.5 text-muted-foreground" />
                        {fileName}
                      </button>
                    ))}
                  </div>

                  <div className="flex border-l border-border font-mono text-[9px]">
                    <button
                      onClick={() => {
                        setIdeView("code");
                        playSynthTick("click", isMuted);
                      }}
                      className={`px-3 py-1.5 cursor-pointer ${ideView === "code" ? "bg-surface text-accent font-semibold" : "text-muted-foreground"}`}
                    >
                      Code
                    </button>
                    <button
                      onClick={() => {
                        setIdeView("preview");
                        playSynthTick("click", isMuted);
                      }}
                      className={`px-3 py-1.5 border-l border-border cursor-pointer flex items-center gap-1 ${ideView === "preview" ? "bg-surface text-accent font-semibold" : "text-muted-foreground"}`}
                    >
                      <Play className="size-2 fill-accent text-accent" /> Run
                    </button>
                  </div>
                </div>

                {/* Workspace area */}
                <div className="p-4 font-mono text-[10px] overflow-x-auto min-h-[190px] bg-background/5">
                  {ideView === "code" ? (
                    <pre className="text-muted-foreground select-text leading-relaxed">
                      <code>
                        {IDE_FILES[activeFile].split("\n").map((line, idx) => {
                          let highlighted = line;
                          if (line.includes("const ") || line.includes("import ") || line.includes("export ")) {
                            highlighted = line
                              .replace(/(const |import |export |from |return )/g, '<span class="text-accent">$1</span>')
                              .replace(/('([^']+)')/g, '<span class="text-emerald-400">$1</span>');
                          } else if (line.includes('"')) {
                            highlighted = line.replace(/("([^"]+)")/g, '<span class="text-emerald-400">$1</span>');
                          }
                          return (
                            <div key={idx} className="flex gap-3">
                              <span className="w-5 text-right select-none text-muted-foreground/35">{idx + 1}</span>
                              <span dangerouslySetInnerHTML={{ __html: highlighted || "&nbsp;" }} />
                            </div>
                          );
                        })}
                      </code>
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center min-h-[160px] rounded-lg border border-dashed border-border/80 bg-surface/10 p-4">
                      {activeFile === "Nainshul.tsx" && (
                        <div className="w-full max-w-xs rounded-xl border border-border bg-surface p-4 shadow-lg text-left">
                          <h4 className="text-xs font-display font-extrabold">Nainshul Khatkar</h4>
                          <p className="text-[9px] text-accent font-mono mb-1.5">@EEBU4o4</p>
                          <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">
                            BCA 2024–28 student designing modular frontend blueprints.
                          </p>
                          <div className="flex items-center gap-1.5 text-[8px] font-semibold">
                            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span>Available for internships</span>
                          </div>
                        </div>
                      )}

                      {activeFile === "skills.json" && (
                        <div className="w-full max-w-xs bg-surface p-4 border border-border rounded-xl">
                          <h4 className="text-xs font-semibold mb-2.5 font-display">Core Competency</h4>
                          <div className="space-y-2 text-[10px]">
                            {[
                              { name: "React / Frontend", value: "90%" },
                              { name: "UI Design (Figma)", value: "85%" },
                              { name: "TypeScript / JS", value: "80%" },
                            ].map((sk) => (
                              <div key={sk.name}>
                                <div className="flex justify-between text-[8px] mb-0.5 font-mono">
                                  <span>{sk.name}</span>
                                  <span className="text-accent">{sk.value}</span>
                                </div>
                                <div className="h-1 bg-background rounded-full overflow-hidden">
                                  <div className="h-full bg-accent" style={{ width: sk.value }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeFile === "achievements.md" && (
                        <div className="w-full max-w-xs bg-surface p-4 border border-border rounded-xl space-y-2 text-[10px]">
                          <h4 className="text-xs font-semibold font-display border-b border-border pb-1">Trophy Shelf</h4>
                          <div className="space-y-1.5">
                            <div className="flex items-start gap-2">
                              <Trophy className="size-3.5 text-accent mt-0.5 shrink-0" />
                              <div>
                                <p className="font-bold">1st - Sustainable AI Hackathon</p>
                                <p className="text-[8px] text-muted-foreground">GCB Bahadurgarh</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Trophy className="size-3.5 text-accent mt-0.5 shrink-0" />
                              <div>
                                <p className="font-bold">2nd - Code for NexGen</p>
                                <p className="text-[8px] text-muted-foreground">Jhajjar Exhibition</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

              </div>
            </div>

          </div>

          {/* Hackathon Wins row */}
          <div className="pt-4 grid sm:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((ach) => (
              <div 
                key={ach.title}
                className="bg-surface border border-border p-5 rounded-xl flex items-center justify-between"
              >
                <div className="space-y-1">
                  <span className="text-[9px] font-mono text-accent font-bold uppercase tracking-wider">{ach.place}</span>
                  <h4 className="font-display font-extrabold text-xs uppercase text-foreground">{ach.title}</h4>
                  <p className="text-[9px] text-muted-foreground font-mono">{ach.where}</p>
                </div>
                <Trophy className="size-5 text-accent opacity-60" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="px-6 md:px-12 py-16 md:py-32 border-b border-border bg-surface/10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">06 / ANSWERS</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4 pt-6">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-border bg-surface/40 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => {
                      setActiveFAQ(isOpen ? null : idx);
                      playSynthTick("click", isMuted);
                    }}
                    onMouseEnter={() => playSynthTick("hover", isMuted)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-display font-bold text-xs uppercase tracking-wider text-foreground hover:text-accent transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 size-6 border border-border/80 rounded-full grid place-items-center bg-background/50 hover:border-accent">
                      {isOpen ? <Minus className="size-3" /> : <Plus className="size-3" />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs text-muted-foreground/90 border-t border-border/40 bg-surface/20 leading-relaxed select-text animate-fade-up">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">07 / CONNECT</span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
              Let's create something <br />
              <span className="font-serif-italic text-accent lowercase">special</span>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Have an interesting challenge or a project? Drop a mail or book a direct developer consultation call.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 font-mono text-xs pt-4">
            <a
              href="mailto:nainshulkhatker@gmail.com"
              className="inline-flex items-center gap-2 h-12 px-6 bg-accent text-black font-bold rounded-full transition-opacity hover:opacity-90 shadow-lg cursor-pointer"
              onMouseEnter={() => playSynthTick("hover", isMuted)}
              onClick={() => playSynthTick("click", isMuted)}
            >
              <Mail className="size-4" />
              <span>nainshulkhatker@gmail.com</span>
            </a>
            
            <a
              href="tel:+919467355251"
              className="inline-flex items-center gap-2 h-12 px-6 border border-border hover:border-accent hover:text-accent transition-colors rounded-full font-bold cursor-pointer"
              onMouseEnter={() => playSynthTick("hover", isMuted)}
              onClick={() => playSynthTick("click", isMuted)}
            >
              <Phone className="size-4" />
              <span>+91 94673 55251</span>
            </a>
          </div>

          {/* Social connections list */}
          <div className="flex justify-center gap-6 pt-8 border-t border-border font-mono text-[10px]">
            {SOCIALS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent flex items-center gap-1"
                onMouseEnter={() => playSynthTick("hover", isMuted)}
                onClick={() => playSynthTick("click", isMuted)}
              >
                <span>{soc.label}</span>
                <ArrowUpRight className="size-3" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-surface/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left text-[9px] font-mono text-muted-foreground/60 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Nainshul Khatkar · All Rights Reserved</p>
          <p>Created in Framer-to-React Style</p>
        </div>
      </footer>

    </div>
  );
}
