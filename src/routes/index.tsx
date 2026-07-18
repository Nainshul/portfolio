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
  BookOpen,
  User,
  Menu
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import projectCrop from "@/assets/project-crop.jpg";
import projectZen from "@/assets/project-zen.jpg";
import eebuBg from "@/assets/eebu_bg.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Theme = "astro" | "cyberpunk" | "slate";

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
  { label: "GitHub", short: "GH", href: "https://github.com/Nainshul", Icon: Github },
  { label: "LinkedIn", short: "LI", href: "https://www.linkedin.com/in/nainshul-khatkar-8ba462394/", Icon: Linkedin },
  { label: "Twitter / X", short: "TW", href: "https://x.com/nainshul_", Icon: Twitter },
  { label: "Email", short: "EM", href: "mailto:nainshulkhatker@gmail.com", Icon: Mail },
];

const PROJECTS = [
  {
    title: "AI Crop Disease Detection",
    logoText: "CropEye AI",
    roleText: "Lead Developer",
    image: projectCrop,
    tags: ["Computer Vision", "AI Diagnostic", "React"],
    year: "2024",
    href: "#",
    blurb: "A machine learning crop diagnosis app that helps farmers detect leaf anomalies, tracks local soil moisture metrics, and pushes live crop-saving notifications.",
    bgClass: "bg-white text-black border-t border-border",
    category: "ai-ml",
  },
  {
    title: "Zen Study Flow",
    logoText: "ZenStudy",
    roleText: "UI/UX Developer",
    image: projectZen,
    tags: ["UI/UX", "Productivity", "Tailwind"],
    year: "2024",
    href: "#",
    blurb: "A focus-oriented study companion utilizing custom session tracking timers, distraction-shield blocks, and visual analytical metrics charts.",
    bgClass: "bg-[#0a0a0a] text-white border-t border-border/20",
    category: "frontend",
  },
];

const ACHIEVEMENTS = [
  {
    place: "1st Place",
    title: "AI for Sustainable Development Hackathon",
    where: "GCB, Bahadurgarh",
    description: "Built an intelligent computer vision system for leaf disease classification."
  },
  {
    place: "2nd Place",
    title: "Code for NexGen Exhibition",
    where: "Jhajjar",
    description: "Presented interactive distraction-blocking desktop environment prototypes."
  },
  {
    place: "Top 10",
    title: "National AI-for-All Competition",
    where: "India",
    description: "Ranked in the top 2% of contributors designing local sustainability datasets."
  },
];

const IDE_FILES = {
  "Nainshul.tsx": `import React from 'react';

export const DeveloperProfile: React.FC = () => {
  const profile = {
    name: 'Nainshul Khatkar',
    handle: 'EEBU4o4',
    role: 'UI/UX & Frontend Developer',
    location: 'Haryana, India',
    education: 'BCA (2024 - 2028)',
    status: 'Open for Summer Internships & Freelance'
  };

  return (
    <div className="profile-container p-6 rounded-2xl bg-surface/50 border border-border">
      <h2 className="text-3xl font-display font-bold text-accent">{profile.name}</h2>
      <p className="text-sm font-mono text-muted-foreground">{profile.role}</p>
      
      <div className="mt-4 flex items-center gap-2 text-xs">
        <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{profile.status}</span>
      </div>
    </div>
  );
};`,
  "skills.json": `{
  "languages": ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
  "frontend": ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  "design": ["UI/UX Design", "Figma Prototyping", "Design Systems"],
  "apis_backend": ["REST APIs", "Node.js basics", "Flask (Python)"]
}`,
  "achievements.md": `# Nainshul's Achievements

* **1st Place Win** - *AI for Sustainable Development Hackathon (GCB)*
  - Developed deep-learning vision models for crop foliage classification.
  
* **2nd Place Win** - *Code for NexGen Exhibition (Jhajjar)*
  - Designed responsive study layout concepts utilizing productivity filters.
  
* **Top 10 Finalist** - *National AI-for-All Competition (India)*
  - Organized model tuning metrics for sustainable environment dashboards.`
};

function Portfolio() {
  const [theme, setTheme] = useState<Theme>("astro");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState<string>("all");
  const [activeSection, setActiveSection] = useState<string>("profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mouse Glow coordinates
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });
  const [isMouseInWindow, setIsMouseInWindow] = useState(false);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "EEBU4o4 Developer Console v2.0.0" },
    { type: "output", text: "Copyright (c) 2026 Nainshul Khatkar. Type 'help' to begin." },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Mock IDE state
  const [activeFile, setActiveFile] = useState<keyof typeof IDE_FILES>("Nainshul.tsx");
  const [ideView, setIdeView] = useState<"code" | "preview">("code");

  // Chat Widget state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    { sender: "bot", text: "Hello! I'm EEBU, Nainshul's automated portfolio guide. Ask me a question!" },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Apply Theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-cyberpunk", "theme-slate");
    if (theme !== "astro") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // Mouse position tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoords({ x: e.clientX, y: e.clientY });
    };
    const handleMouseEnter = () => setIsMouseInWindow(true);
    const handleMouseLeave = () => setIsMouseInWindow(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Scroll spy Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.05
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ["profile", "console", "work", "achievements", "contact"];
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Scroll Terminal to bottom
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // Scroll Chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isBotTyping]);

  // Scroll to section manually
  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // Terminal commands interpreter
  const executeTerminalCommand = (rawInput: string) => {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    const newHistory = [...terminalHistory, { type: "input" as const, text: trimmed }];
    const parts = trimmed.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  about        - Learn about Nainshul\n  skills       - List developer skills\n  projects     - Show selected portfolio items\n  achievements - View contest accomplishments\n  theme [t]    - Change interface theme (astro, cyberpunk, slate)\n  clear        - Clear console history",
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Nainshul Khatkar (EEBU4o4) is a UI/UX Designer & Frontend Developer from Haryana, India. Currently a BCA student, he designs sleek interfaces and writes clean codebase components.",
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "Frontend: React, Next.js, Tailwind CSS, TypeScript\nBackend/Systems: Python, Java, C/C++\nCreative: UI/UX Design, Figma Prototyping, Design Systems",
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "1. AI Crop Disease Detection: AI diagnostic platform for farmers\n2. Zen Study Flow: Focus study productivity timer app",
        });
        break;
      case "achievements":
        newHistory.push({
          type: "output",
          text: "- 1st Place: AI for Sustainable Development Hackathon\n- 2nd Place: Code for NexGen Exhibition\n- Top 10: National AI-for-All Competition",
        });
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "theme":
        if (arg === "astro" || arg === "cyberpunk" || arg === "slate") {
          setTheme(arg);
          newHistory.push({ type: "output", text: `Interface theme successfully updated to: '${arg}'` });
        } else {
          newHistory.push({
            type: "output",
            text: "Error: Theme not recognized. Choose from: 'astro', 'cyberpunk', or 'slate'. E.g. 'theme slate'",
          });
        }
        break;
      default:
        newHistory.push({
          type: "output",
          text: `Command not found: '${cmd}'. Type 'help' to see list of valid commands.`,
        });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  // Bot chat helper responses
  const triggerBotResponse = (userPromptText: string) => {
    setChatHistory(prev => [...prev, { sender: "user", text: userPromptText }]);
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = "";
      if (userPromptText.includes("Freelance")) {
        reply = "Nainshul is currently open for freelance projects and summer internship opportunities! You can drop an email to nainshulkhatker@gmail.com to start collaborating.";
      } else if (userPromptText.includes("Skills")) {
        reply = "His core stack consists of React, Next.js, Tailwind CSS, and TypeScript for web development. He is also fluent in Figma, Python, and C++!";
      } else if (userPromptText.includes("Hackathons")) {
        reply = "Nainshul took 1st place in the Sustainable AI Hackathon at GCB Bahadurgarh and 2nd place in the NexGen Exhibition for distraction-blocking web layouts.";
      } else {
        reply = "You can contact Nainshul directly at +91 94673 55251 or view his socials at github.com/Nainshul.";
      }

      setChatHistory(prev => [...prev, { sender: "bot", text: reply }]);
      setIsBotTyping(false);
    }, 850);
  };

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return PROJECTS;
    return PROJECTS.filter(p => p.category === projectFilter);
  }, [projectFilter]);

  // Sidebar shared details view helper
  const renderSidebarDetails = () => (
    <div className="flex flex-col items-center text-center">
      {/* Profile Avatar Card */}
      <div className="relative group mb-4">
        <div className="absolute -inset-1 bg-accent/25 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <div className="relative size-24 rounded-full overflow-hidden border-2 border-border p-1 bg-surface/80 backdrop-blur-md">
          <img 
            src={eebuBg} 
            alt="Nainshul Khatkar" 
            className="w-full h-full rounded-full object-cover scale-100 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Pulsing "Open to work" marker */}
        <div className="absolute bottom-1 right-1 flex items-center gap-1 bg-background/90 backdrop-blur-lg border border-border px-2 py-0.5 rounded-full shadow-md">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
          </span>
          <span className="text-[8px] font-mono font-bold text-foreground">OTW</span>
        </div>
      </div>

      <h1 className="text-xl font-display font-extrabold tracking-tight">Nainshul Khatkar</h1>
      <p className="text-xs font-mono text-accent mb-2">@EEBU4o4</p>
      <p className="text-xs text-muted-foreground font-semibold px-2 mb-4 leading-snug">UI/UX Designer &amp; Developer</p>
      
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/80 mb-6 font-medium">
        <MapPin className="size-3 text-accent" />
        <span>Haryana, India</span>
      </div>

      {/* Profile Sidebar Quick Metrics */}
      <div className="w-full bg-surface-2/40 border border-border/80 rounded-xl p-3 text-left space-y-2 mb-6 text-xs">
        <div className="flex items-center justify-between text-muted-foreground/80">
          <span>Experience includes:</span>
          <span className="text-foreground font-semibold">Figma + React</span>
        </div>
        <div className="flex items-center justify-between text-muted-foreground/80">
          <span>Education:</span>
          <span className="text-foreground font-semibold">BCA · 2024-28</span>
        </div>
      </div>
      
      {/* Quick chat action */}
      <button 
        onClick={() => setChatOpen(true)}
        className="w-full flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-all text-xs cursor-pointer shadow-md mb-6"
      >
        <MessageSquare className="size-3.5" />
        <span>Quick Message</span>
      </button>

      {/* Navigation Tabs (Scroll Spy) */}
      <div className="w-full flex flex-col gap-1 text-xs select-none">
        {[
          { id: "profile", label: "Profile", Icon: User },
          { id: "console", label: "Developer Console", Icon: TerminalIcon },
          { id: "work", label: "Case Studies", Icon: Folder },
          { id: "achievements", label: "Achievements", Icon: Trophy },
          { id: "contact", label: "Contact Details", Icon: Mail },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollTo(tab.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
              activeSection === tab.id
                ? "bg-surface text-accent font-semibold border-l-2 border-l-accent"
                : "text-muted-foreground hover:bg-surface/30 hover:text-foreground"
            }`}
          >
            <tab.Icon className={`size-4 ${activeSection === tab.id ? "text-accent" : "text-muted-foreground"}`} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground font-body relative overflow-x-hidden transition-colors duration-300">
      
      {/* Spotlight mouse glow overlay */}
      {isMouseInWindow && (
        <div 
          className="pointer-events-none fixed inset-0 z-30 opacity-70 hidden md:block"
          style={{
            background: `radial-gradient(450px circle at ${mouseCoords.x}px ${mouseCoords.y}px, color-mix(in srgb, var(--accent) 8%, transparent), transparent 80%)`
          }}
        />
      )}

      {/* Decorative grids */}
      <div className="absolute inset-0 -z-20 pointer-events-none dots-grid opacity-[0.25]" />
      {theme === "cyberpunk" && (
        <div className="absolute inset-0 -z-20 pointer-events-none lines-grid opacity-[0.05]" />
      )}

      {/* Mobile Top Navigation Bar */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/60 backdrop-blur-xl transition-colors duration-300 md:hidden h-16 flex items-center justify-between px-6">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="size-9 rounded-lg border border-border bg-surface grid place-items-center cursor-pointer hover:border-accent/40"
        >
          <Menu className="size-5" />
        </button>
        
        <span className="font-display font-bold text-sm tracking-[0.15em]">
          EEBU4o4<span className="text-accent">.</span>
        </span>

        {/* Mobile Theme Switcher Toggle */}
        <div className="relative">
          <button 
            onClick={() => setThemeMenuOpen(!themeMenuOpen)}
            className="flex items-center gap-1 px-2.5 py-1 text-[10px] rounded-lg bg-surface border border-border cursor-pointer capitalize"
          >
            <Monitor className="size-3 text-accent" />
            <span>{theme}</span>
          </button>
          
          {themeMenuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setThemeMenuOpen(false)} />
              <div className="absolute right-0 mt-2 w-28 z-50 rounded-lg bg-surface border border-border p-1 shadow-lg">
                {(["astro", "cyberpunk", "slate"] as Theme[]).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTheme(t);
                      setThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left text-[10px] rounded-md transition-colors hover:bg-surface-2 ${theme === t ? "text-accent font-semibold" : "text-muted-foreground"}`}
                  >
                    <span className="capitalize">{t}</span>
                    {theme === t && <Check className="size-3" />}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <>
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-72 z-50 bg-background border-r border-border p-6 overflow-y-auto no-scrollbar md:hidden flex flex-col justify-between animate-fade-up">
            <div>
              <div className="flex justify-end mb-4">
                <button onClick={() => setMobileMenuOpen(false)} className="size-8 rounded-lg border border-border bg-surface grid place-items-center cursor-pointer">
                  <X className="size-4" />
                </button>
              </div>
              {renderSidebarDetails()}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border flex justify-around">
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                  <Icon className="size-4.5" />
                </a>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Desktop Fixed Left Sidebar */}
      <aside className="fixed top-0 left-0 bottom-0 w-80 z-40 border-r border-border bg-surface/10 backdrop-blur-md p-6 hidden md:flex flex-col justify-between select-none overflow-y-auto no-scrollbar">
        <div>
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-bold text-sm tracking-[0.2em]">
              EEBU4o4<span className="text-accent">.</span>
            </span>

            {/* Desktop Theme Switcher */}
            <div className="relative">
              <button 
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-1.5 h-8 px-2.5 text-[10px] font-medium rounded-lg bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer"
              >
                <Monitor className="size-3 text-accent" />
                <span className="capitalize">{theme}</span>
                <ChevronDown className="size-2.5 transition-transform" style={{ transform: themeMenuOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
              </button>

              {themeMenuOpen && (
                <>
                  <div className="fixed inset-0 z-45" onClick={() => setThemeMenuOpen(false)} />
                  <div className="absolute right-0 mt-1.5 w-32 z-50 rounded-lg bg-surface border border-border p-1 shadow-xl">
                    {(["astro", "cyberpunk", "slate"] as Theme[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => {
                          setTheme(t);
                          setThemeMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left text-[10px] rounded-md transition-colors hover:bg-surface-2 ${theme === t ? "text-accent font-semibold" : "text-muted-foreground"}`}
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
          
          {renderSidebarDetails()}
        </div>

        <div className="mt-8 pt-6 border-t border-border/80 flex justify-between items-center text-xs">
          <div className="flex gap-2">
            {SOCIALS.slice(0, 3).map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 rounded-lg bg-surface border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-accent transition-all"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">v2.0.0</span>
        </div>
      </aside>

      {/* Right Scrollable Panel */}
      <div className="md:pl-80 min-h-screen flex flex-col pt-16 md:pt-0">
        
        {/* Profile (Hero + About + IDE) Section */}
        <section id="profile" className="relative px-6 py-12 md:py-24 border-b border-border overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-5 blur-[80px] pointer-events-none scale-125">
            <img src={eebuBg} alt="" className="w-full h-full object-cover" />
          </div>

          <div className="max-w-4xl mx-auto space-y-16 animate-fade-up">
            {/* Header intro */}
            <div>
              <p className="font-display text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
                Creative Portfolio
              </p>

              <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
                Designing interfaces that feel{" "}
                <span className="text-transparent bg-clip-text bg-[image:var(--gradient-accent)]">
                  effortless
                </span>.
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
                I am a developer who bridges structural frontend systems with beautiful user experiences. Currently pursuing BCA, I prototype in Figma and ship modular web constructs.
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="group inline-flex items-center gap-2 h-11 px-5 bg-accent hover:opacity-90 text-white font-semibold rounded-lg text-xs transition-all shadow-[var(--shadow-glow)] cursor-pointer"
                >
                  Explore Portfolio
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button
                  onClick={() => scrollTo("console")}
                  className="inline-flex items-center gap-2 h-11 px-5 bg-surface border border-border hover:border-accent/40 font-semibold rounded-lg text-xs transition-all cursor-pointer"
                >
                  <TerminalIcon className="size-3.5 text-accent" /> Open Shell Console
                </button>
              </div>
            </div>

            {/* Mock IDE component */}
            <div className="pt-4">
              <div className="flex items-center gap-2 mb-3">
                <FileCode className="size-4 text-accent" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">Visual Workspace (Mock IDE)</span>
              </div>

              <div className="rounded-2xl border border-border bg-surface/30 backdrop-blur-md overflow-hidden shadow-xl transition-all duration-300">
                {/* IDE Titlebar */}
                <div className="bg-background/80 border-b border-border px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-2.5 rounded-full bg-red-500/80" />
                    <div className="size-2.5 rounded-full bg-yellow-500/80" />
                    <div className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground">
                    workspace / nainshul-portfolio / {activeFile}
                  </div>
                  <div className="w-8" />
                </div>

                {/* IDE Tabs */}
                <div className="bg-background/40 border-b border-border flex items-center justify-between">
                  <div className="flex overflow-x-auto">
                    {(Object.keys(IDE_FILES) as Array<keyof typeof IDE_FILES>).map((fileName) => (
                      <button
                        key={fileName}
                        onClick={() => {
                          setActiveFile(fileName);
                          setIdeView("code");
                        }}
                        className={`px-3 py-2 border-r border-border text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${
                          activeFile === fileName && ideView === "code"
                            ? "bg-surface text-foreground border-b-2 border-b-accent"
                            : "text-muted-foreground hover:bg-surface/20"
                        }`}
                      >
                        <Folder className="size-3 text-muted-foreground" />
                        {fileName}
                      </button>
                    ))}
                  </div>

                  <div className="flex border-l border-border">
                    <button
                      onClick={() => setIdeView("code")}
                      className={`px-3.5 py-2 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer ${ideView === "code" ? "bg-surface text-accent font-semibold" : "text-muted-foreground hover:bg-surface/20"}`}
                    >
                      Code
                    </button>
                    <button
                      onClick={() => setIdeView("preview")}
                      className={`px-3.5 py-2 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer border-l border-border ${ideView === "preview" ? "bg-surface text-accent font-semibold" : "text-muted-foreground hover:bg-surface/20"}`}
                    >
                      <Play className="size-2.5 fill-accent text-accent" /> Live Run
                    </button>
                  </div>
                </div>

                {/* IDE Content */}
                <div className="p-4 font-mono text-[11px] overflow-x-auto min-h-[250px] bg-background/20">
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
                            <div key={idx} className="flex gap-4">
                              <span className="w-5 text-right select-none text-muted-foreground/30">{idx + 1}</span>
                              <span dangerouslySetInnerHTML={{ __html: highlighted || "&nbsp;" }} />
                            </div>
                          );
                        })}
                      </code>
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center min-h-[220px] rounded-lg border border-dashed border-border/80 bg-surface/10 p-5">
                      {activeFile === "Nainshul.tsx" && (
                        <div className="w-full max-w-xs rounded-xl border border-border bg-surface p-4 shadow-lg text-left">
                          <h4 className="text-sm font-display font-extrabold mb-1">Nainshul Khatkar</h4>
                          <p className="text-[10px] text-accent font-mono mb-2">@EEBU4o4</p>
                          <p className="text-[11px] text-muted-foreground mb-4">
                            Designing and engineering modular blueprints.
                          </p>
                          <div className="flex items-center gap-1.5 text-[9px]">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-semibold text-foreground/80">Active freelancer & intern</span>
                          </div>
                        </div>
                      )}

                      {activeFile === "skills.json" && (
                        <div className="w-full max-w-sm bg-surface p-4 border border-border rounded-xl">
                          <h4 className="text-xs font-semibold mb-3 font-display">Core Skill Levels</h4>
                          <div className="space-y-2">
                            {[
                              { name: "React / Next.js", value: "90%" },
                              { name: "UI & UX Design", value: "85%" },
                              { name: "TypeScript", value: "80%" },
                            ].map((sk) => (
                              <div key={sk.name}>
                                <div className="flex justify-between text-[9px] mb-0.5 font-mono">
                                  <span>{sk.name}</span>
                                  <span className="text-accent">{sk.value}</span>
                                </div>
                                <div className="h-1 bg-background rounded-full overflow-hidden">
                                  <div className="h-full bg-accent rounded-full" style={{ width: sk.value }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeFile === "achievements.md" && (
                        <div className="w-full max-w-xs bg-surface p-4 border border-border rounded-xl space-y-3">
                          <h4 className="text-xs font-semibold font-display border-b border-border pb-1">Trophy Case</h4>
                          <div className="space-y-2 text-[11px]">
                            <div className="flex items-start gap-2">
                              <Trophy className="size-3.5 text-accent shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold">1st - Sustainable AI Hackathon</p>
                                <p className="text-[9px] text-muted-foreground">GCB Bahadurgarh</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2">
                              <Trophy className="size-3.5 text-accent shrink-0 mt-0.5" />
                              <div>
                                <p className="font-bold">2nd - Code for NexGen</p>
                                <p className="text-[9px] text-muted-foreground">Jhajjar Exhibition</p>
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
        </section>

        {/* Developer Console Section */}
        <section id="console" className="px-6 py-12 md:py-24 border-b border-border bg-surface/10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">02 / Terminal</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mt-2">Interactive Console</h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-1">Interact with my portfolio directly via command lines.</p>
            </div>

            <div className="rounded-xl border border-border bg-surface/30 backdrop-blur-md overflow-hidden shadow-lg">
              <div className="bg-background/60 px-4 py-2 border-b border-border flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1.5">
                  <TerminalIcon className="size-3 text-accent" /> zsh - console shell
                </span>
                <div className="flex gap-1">
                  <div className="size-2 rounded-full bg-border" />
                  <div className="size-2 rounded-full bg-border" />
                </div>
              </div>

              <div className="p-4 h-60 overflow-y-auto font-mono text-xs flex flex-col gap-1.5 select-text bg-background/15">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                    {item.type === "input" ? (
                      <span className="text-accent font-semibold">eebu4o4$ <span className="text-foreground font-normal">{item.text}</span></span>
                    ) : (
                      <span className="text-muted-foreground/95">{item.text}</span>
                    )}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  executeTerminalCommand(terminalInput);
                }}
                className="border-t border-border bg-background/50 flex items-center px-4 py-2"
              >
                <span className="text-accent font-mono text-xs font-semibold mr-2">eebu4o4$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help' and press Enter..."
                  className="bg-transparent border-none outline-none text-xs text-foreground font-mono w-full"
                />
              </form>
            </div>
          </div>
        </section>

        {/* Selected Work / Case Studies */}
        <section id="work" className="px-6 py-12 md:py-24 border-b border-border">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">03 / Case Studies</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mt-2">Selected Projects</h2>
              </div>
              
              <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                {[
                  { label: "Show All", val: "all" },
                  { label: "AI & ML", val: "ai-ml" },
                  { label: "Frontend React", val: "frontend" },
                ].map((btn) => (
                  <button
                    key={btn.val}
                    onClick={() => setProjectFilter(btn.val)}
                    className={`h-8 px-3 rounded-lg border text-[10px] transition-all cursor-pointer ${
                      projectFilter === btn.val
                        ? "bg-accent border-accent text-white font-semibold"
                        : "bg-surface border-border text-muted-foreground hover:border-accent/40"
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {filteredProjects.map((p) => (
                <a key={p.title} href={p.href} className="group relative block rounded-3xl overflow-hidden border border-border bg-surface/20 transition-all duration-500 hover:scale-[1.005] hover:shadow-2xl hover:shadow-black/[0.08]">
                  {/* Top Right Floating Badge */}
                  <div className="absolute top-5 right-5 z-10 inline-flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group-hover:scale-105 bg-black text-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] group-hover:bg-accent">
                    <ArrowUpRight className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  
                  {/* Image Frame */}
                  <div className="relative w-full overflow-hidden aspect-[16/9]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Year Badge */}
                    <span className="absolute top-4 left-4 text-[9px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-background/80 backdrop-blur border border-border">
                      {p.year}
                    </span>
                    
                    {/* Tags overlay bottom right */}
                    <div className="absolute right-4 bottom-3 flex flex-wrap gap-1.5 justify-end">
                      {p.tags.map((t) => (
                        <span key={t} className="font-mono text-[9px] tracking-[0.06em] uppercase rounded-full px-2.5 py-1 backdrop-blur-md bg-black/55 text-white border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Content card block (themed bgClass) */}
                  <div className={`px-6 pt-5 pb-5 md:px-8 md:pt-6 md:pb-6 flex flex-col ${p.bgClass}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-display font-extrabold text-sm tracking-wider uppercase">{p.logoText}</span>
                      <span className="text-[11px] font-mono opacity-65 text-right">{p.roleText}</span>
                    </div>
                    <p className="text-[13px] leading-relaxed opacity-75 mt-3">{p.blurb}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="px-6 py-12 md:py-24 border-b border-border bg-surface/10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">04 / Standouts</span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mt-2">Achievements</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((a, i) => (
                <div
                  key={a.title}
                  className="group relative p-5 rounded-xl bg-surface border border-border hover:border-accent/40 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="size-9 rounded-lg bg-accent/10 border border-accent/25 grid place-items-center text-accent">
                      <Trophy className="size-4.5" />
                    </div>
                    <span className="text-[9px] font-mono text-muted-foreground/75">0{i + 1}</span>
                  </div>
                  <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-accent mb-1 font-bold">
                    {a.place}
                  </span>
                  <h4 className="text-sm font-display font-bold mb-1 leading-snug">{a.title}</h4>
                  <p className="text-[11px] text-muted-foreground/80 mb-2">{a.where}</p>
                  <p className="text-[10px] text-muted-foreground border-t border-border/60 pt-2.5 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-6 py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-surface to-background border border-border transition-all duration-300">
              <div className="absolute -top-32 -right-32 size-64 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent">05 / Contact</span>
                <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight mt-2 mb-6 max-w-xl leading-snug">
                  Let's develop interfaces that perform.
                </h2>
                
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <a
                    href="mailto:nainshulkhatker@gmail.com"
                    className="inline-flex items-center gap-2 h-10 px-5 bg-accent hover:opacity-90 text-white font-semibold rounded-lg text-xs transition-all shadow-[var(--shadow-glow)] cursor-pointer"
                  >
                    <Mail className="size-3.5" /> Start a conversation
                  </a>
                  <a
                    href="tel:+919467355251"
                    className="inline-flex items-center gap-2 h-10 px-5 bg-surface border border-border hover:border-accent/40 font-semibold rounded-lg text-xs transition-all cursor-pointer"
                  >
                    <Phone className="size-3.5" /> +91 94673 55251
                  </a>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {SOCIALS.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-lg bg-surface/50 border border-border hover:border-accent/40 transition-all cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="size-3.5 text-accent" />
                        <span className="text-[10px] font-medium">{label}</span>
                      </span>
                      <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all cursor-pointer" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border mt-auto transition-colors duration-300">
          <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-muted-foreground text-[10px]">© {new Date().getFullYear()} EEBU4o4 · Nainshul Khatkar · Crafted with Care</p>
            <p className="text-[9px] font-mono text-muted-foreground uppercase tracking-widest">Designed for next-level visual speed</p>
          </div>
        </footer>

      </div>

      {/* Floating Chat Bot Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        {chatOpen ? (
          <div className="w-80 sm:w-96 rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden flex flex-col animate-fade-up">
            <div className="bg-background/80 px-4 py-3 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-accent/20 border border-accent/30 grid place-items-center">
                  <Sparkles className="size-3.5 text-accent animate-pulse" />
                </div>
                <div>
                  <h5 className="text-xs font-bold font-display">EEBU Bot</h5>
                  <p className="text-[9px] text-emerald-500 font-mono">System Online</p>
                </div>
              </div>
              <button 
                onClick={() => setChatOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="p-4 h-60 overflow-y-auto flex flex-col gap-3 bg-background/15 select-text text-xs">
              {chatHistory.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    msg.sender === "user" 
                      ? "bg-accent text-white rounded-tr-none" 
                      : "bg-surface-2 text-foreground border border-border rounded-tl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isBotTyping && (
                <div className="flex justify-start">
                  <div className="bg-surface-2 border border-border p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="size-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="size-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="size-1.5 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-3 bg-surface border-t border-border flex flex-col gap-1.5">
              <p className="text-[9px] text-muted-foreground font-mono uppercase tracking-wider mb-1 px-1">Ask a question:</p>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "💼 Freelance/Internship availability?",
                  "🛠️ Core tech stack?",
                  "🏆 Hackathon projects?",
                  "📞 Quick contact?"
                ].map((q) => (
                  <button
                    key={q}
                    disabled={isBotTyping}
                    onClick={() => triggerBotResponse(q)}
                    className="text-[10px] text-left px-2.5 py-1.5 rounded-lg bg-background border border-border hover:border-accent hover:bg-surface-2 transition-all cursor-pointer"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="size-12 rounded-full bg-accent hover:opacity-90 text-white grid place-items-center shadow-[var(--shadow-glow)] transition-all hover:scale-105 cursor-pointer relative"
          >
            <MessageSquare className="size-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-emerald-500 border-2 border-background size-3.5 rounded-full" />
          </button>
        )}
      </div>

    </div>
  );
}
