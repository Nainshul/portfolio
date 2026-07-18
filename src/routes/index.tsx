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
  Volume2,
  VolumeX,
  Cpu,
  HardDrive
} from "lucide-react";
import { useState, useEffect, useRef, useMemo } from "react";
import projectCrop from "@/assets/project-crop.jpg";
import projectZen from "@/assets/project-zen.jpg";
import eebuBg from "@/assets/eebu_bg.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

type Theme = "astro" | "cyberpunk" | "slate" | "amber";
type GridStyle = "dots" | "lines" | "none";

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
  { label: "GitHub", href: "https://github.com/Nainshul", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nainshul-khatkar-8ba462394/", Icon: Linkedin },
  { label: "Twitter / X", href: "https://x.com/nainshul_", Icon: Twitter },
  { label: "Email", href: "mailto:nainshulkhatker@gmail.com", Icon: Mail },
];

const PROJECTS = [
  {
    id: "crop",
    title: "AI Crop Disease Detection",
    logoText: "CropEye AI",
    roleText: "Lead Developer",
    image: projectCrop,
    tags: ["Computer Vision", "AI Diagnostic", "React", "Python"],
    year: "2024",
    blurb: "A machine learning crop diagnosis app that helps farmers detect leaf anomalies, tracks local soil moisture metrics, and pushes live crop-saving notifications.",
    bgClass: "bg-white text-black",
    category: "ai-ml",
  },
  {
    id: "zen",
    title: "Zen Study Flow",
    logoText: "ZenStudy",
    roleText: "UI/UX Developer",
    image: projectZen,
    tags: ["UI/UX", "Productivity", "Tailwind", "React"],
    year: "2024",
    blurb: "A focus-oriented study companion utilizing custom session tracking timers, distraction-shield blocks, and visual analytical metrics charts.",
    bgClass: "bg-[#0a0a0a] text-white",
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

// Web Audio API Synthesized Audio UI Helper
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
      osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.03);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } else if (type === "click") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(700, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.09);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } else if (type === "keypress") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(550, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.02, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.02);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.025);
    }
  } catch (e) {
    console.warn("Audio Context init failed", e);
  }
};

// Reusable Bento Card Component with independent mouse spotlight tracking
function BentoCard({ 
  children, 
  className = "", 
  onClick,
  isMuted = false 
}: { 
  children: React.ReactNode; 
  className?: string; 
  onClick?: () => void;
  isMuted?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setHovered(true);
        playSynthTick("hover", isMuted);
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (onClick) {
          playSynthTick("click", isMuted);
          onClick();
        }
      }}
      className={`bento-card p-6 ${className} ${onClick ? "cursor-pointer" : ""}`}
    >
      {hovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 opacity-100"
          style={{
            background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, color-mix(in srgb, var(--accent) 15%, transparent), transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10 h-full w-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

function Portfolio() {
  const [theme, setTheme] = useState<Theme>("astro");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [gridStyle, setGridStyle] = useState<GridStyle>("dots");
  
  // Interactive Cross-Widget states
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  
  // OS Metrics mock fluctuation state
  const [sysMetrics, setSysMetrics] = useState({ cpu: 4, ram: 14 });

  // Live system clock
  const [sysTime, setSysTime] = useState("");

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ type: "input" | "output"; text: string }>>([
    { type: "output", text: "EEBU4o4 BentoOS Console v3.0.0" },
    { type: "output", text: "Type 'help' to inspect system routines." },
  ]);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Mock IDE state
  const [activeFile, setActiveFile] = useState<keyof typeof IDE_FILES>("Nainshul.tsx");
  const [ideView, setIdeView] = useState<"code" | "preview">("code");

  // Chatbot state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    { sender: "bot", text: "Hello! I am EEBU, your OS portfolio assistant. How can I help you inspect Nainshul's details?" },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Theme configuration effect
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("theme-cyberpunk", "theme-slate", "theme-amber");
    if (theme !== "astro") {
      root.classList.add(`theme-${theme}`);
    }
  }, [theme]);

  // System time effect
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setSysTime(d.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fluctuating system metrics effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSysMetrics({
        cpu: Math.floor(Math.random() * 8) + 2, // 2-10%
        ram: Math.floor(Math.random() * 3) + 12 // 12-15%
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll Terminal to bottom
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  // Scroll Chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, isBotTyping]);

  // Terminal commands interpreter
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
          text: "Commands:\n  about        - Learn about Nainshul\n  skills       - Print key skills\n  projects     - List current projects\n  achievements - Show hackathon wins\n  theme [t]    - Change theme (astro, cyberpunk, slate, amber)\n  clear        - Clear logs",
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
      case "achievements":
        newHistory.push({
          type: "output",
          text: "- 1st Place: Sustainable AI Hackathon\n- 2nd Place: NexGen Exhibition Jhajjar\n- Top 10: National AI-for-All",
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

  // Bot chat helper responses
  const triggerBotResponse = (userPromptText: string) => {
    playSynthTick("click", isMuted);
    setChatHistory(prev => [...prev, { sender: "user", text: userPromptText }]);
    setIsBotTyping(true);

    setTimeout(() => {
      let reply = "";
      if (userPromptText.includes("Freelance")) {
        reply = "Nainshul is currently open for freelance projects and summer internship opportunities! Drop a mail to nainshulkhatker@gmail.com.";
      } else if (userPromptText.includes("Skills")) {
        reply = "His core stack is React, Next.js, Tailwind CSS, and TypeScript. He is also fluent in Figma Design and Python programming.";
      } else if (userPromptText.includes("Hackathons")) {
        reply = "Nainshul took 1st place in the Sustainable AI Hackathon at GCB Bahadurgarh and 2nd place in the NexGen Exhibition for block layouts.";
      } else {
        reply = "You can contact Nainshul directly at +91 94673 55251 or view his socials at github.com/Nainshul.";
      }

      setChatHistory(prev => [...prev, { sender: "bot", text: reply }]);
      setIsBotTyping(false);
    }, 800);
  };

  // Skill highlighting matcher
  const isProjectMatchingSkill = (projectTags: string[]) => {
    if (!selectedSkill) return true; // Show normal if no filter is clicked
    
    // Normalize tags to match selected skill
    const normalizedFilter = selectedSkill.toLowerCase();
    return projectTags.some(t => {
      const normTag = t.toLowerCase();
      if (normalizedFilter.includes("react") && normTag.includes("react")) return true;
      if (normalizedFilter.includes("ui") && normTag.includes("ui")) return true;
      if (normalizedFilter.includes("design") && normTag.includes("design")) return true;
      if (normalizedFilter.includes("figma") && normTag.includes("design")) return true;
      if (normalizedFilter.includes("tailwind") && normTag.includes("tailwind")) return true;
      if (normalizedFilter.includes("python") && normTag.includes("python")) return true;
      return normTag.includes(normalizedFilter) || normalizedFilter.includes(normTag);
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body relative overflow-hidden transition-colors duration-300 pb-16 pt-24">
      
      {/* Decorative grids */}
      {gridStyle === "dots" && (
        <div className="absolute inset-0 -z-20 pointer-events-none dots-grid opacity-[0.25]" />
      )}
      {gridStyle === "lines" && (
        <div className="absolute inset-0 -z-20 pointer-events-none lines-grid opacity-[0.05]" />
      )}

      {/* OS System Header Bar */}
      <header className="fixed top-4 inset-x-4 z-50 border border-border bg-surface/35 backdrop-blur-xl rounded-full h-14 flex items-center justify-between px-6 transition-colors select-none">
        <div className="flex items-center gap-3">
          <span className="font-display font-extrabold text-sm tracking-wider">
            EEBU4o4<span className="text-accent">.SYS</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/35 text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-widest">
            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEM ONLINE
          </span>
        </div>

        {/* System Time and Audio Switcher */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-muted-foreground/80 hidden xs:inline">{sysTime}</span>
          
          {/* Sound Synthesizer toggle switch */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`size-8 rounded-full border border-border grid place-items-center hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer ${!isMuted ? "text-accent bg-accent/5" : "text-muted-foreground"}`}
            title={isMuted ? "Unmute UI sounds" : "Mute UI sounds"}
          >
            {isMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
          </button>

          {/* Theme Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-surface border border-border hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer capitalize text-[10px] font-semibold"
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
      </header>

      {/* Main BentoOS Grid Workspace */}
      <main className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Profile Widget Card (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1 flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                
                {/* Visual Avatar */}
                <div className="relative group mb-4">
                  <div className="absolute -inset-1 bg-accent/25 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <div className="relative size-24 rounded-full overflow-hidden border-2 border-border p-1 bg-surface/80">
                    <img 
                      src={eebuBg} 
                      alt="Nainshul Khatkar avatar" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-1 right-1 flex items-center gap-1 bg-background/90 border border-border px-2 py-0.5 rounded-full shadow-md">
                    <span className="relative flex size-2">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-emerald-500 opacity-75" />
                      <span className="relative inline-flex rounded-full size-2 bg-emerald-500" />
                    </span>
                    <span className="text-[8px] font-mono font-bold">OTW</span>
                  </div>
                </div>

                <h3 className="text-xl font-display font-extrabold tracking-tight">Nainshul Khatkar</h3>
                <p className="text-xs font-mono text-accent mb-3">@EEBU4o4</p>
                
                <p className="text-xs text-muted-foreground/90 max-w-xs leading-relaxed mb-6 font-semibold">
                  UI/UX Designer &amp; Frontend Developer structuring beautiful, high-performance interfaces.
                </p>

                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground/80 font-semibold mb-6">
                  <MapPin className="size-3.5 text-accent" />
                  <span>Haryana, India</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 mt-auto">
                <div className="flex gap-2">
                  {SOCIALS.map((soc) => (
                    <a
                      key={soc.label}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-surface-2 transition-all text-xs"
                      onMouseEnter={() => playSynthTick("hover", isMuted)}
                      onClick={() => playSynthTick("click", isMuted)}
                    >
                      <soc.Icon className="size-4" />
                    </a>
                  ))}
                </div>
                <a
                  href="mailto:nainshulkhatker@gmail.com"
                  className="w-full h-10 rounded-xl bg-foreground text-background flex items-center justify-center gap-2 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow"
                  onMouseEnter={() => playSynthTick("hover", isMuted)}
                  onClick={() => playSynthTick("click", isMuted)}
                >
                  <Mail className="size-3.5" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </BentoCard>
          </div>

          {/* Interactive Skills Node Widget (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="size-4 text-accent animate-pulse" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Skill Controller Panel</span>
                </div>
                
                <p className="text-xs text-muted-foreground/85 mb-4 leading-relaxed">
                  Click on any skill node to filter and highlight matching case study cards in real-time.
                </p>

                {/* Skill List Nodes */}
                <div className="flex flex-wrap gap-1.5">
                  {SKILLS.map((sk) => {
                    const isSelected = selectedSkill === sk;
                    return (
                      <button
                        key={sk}
                        onClick={() => {
                          setSelectedSkill(isSelected ? null : sk);
                          playSynthTick("click", isMuted);
                        }}
                        className={`text-[9px] font-mono font-medium px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-accent border-accent text-white font-bold"
                            : "bg-surface border-border text-muted-foreground hover:border-accent/40"
                        }`}
                      >
                        {sk}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedSkill && (
                <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[9px] font-mono text-accent">
                  <span>Filtered: {selectedSkill}</span>
                  <button 
                    onClick={() => {
                      setSelectedSkill(null);
                      playSynthTick("click", isMuted);
                    }}
                    className="hover:underline cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </BentoCard>
          </div>

          {/* OS settings & System Monitor Widget (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="size-4 text-accent" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">BentoOS Environment Panel</span>
                </div>

                <div className="space-y-4">
                  {/* Grid background switcher */}
                  <div>
                    <label className="text-[10px] font-mono text-muted-foreground block mb-2">Workspace Grid Overlay:</label>
                    <div className="grid grid-cols-3 gap-1 text-[9px] font-mono">
                      {(["dots", "lines", "none"] as GridStyle[]).map((st) => (
                        <button
                          key={st}
                          onClick={() => {
                            setGridStyle(st);
                            playSynthTick("click", isMuted);
                          }}
                          className={`h-8 rounded-lg border capitalize cursor-pointer transition-all ${gridStyle === st ? "bg-accent border-accent text-white" : "bg-surface border-border text-muted-foreground hover:border-accent/35"}`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fluctuating CPU/RAM monitors */}
                  <div className="space-y-2 border-t border-border/50 pt-3">
                    <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground">
                      <span className="flex items-center gap-1"><Cpu className="size-3 text-accent" /> CPU Load</span>
                      <span className="text-foreground font-semibold">{sysMetrics.cpu}%</span>
                    </div>
                    <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-accent transition-all duration-700" style={{ width: `${sysMetrics.cpu * 10}%` }} />
                    </div>

                    <div className="flex justify-between items-center text-[9px] font-mono text-muted-foreground pt-1">
                      <span className="flex items-center gap-1"><HardDrive className="size-3 text-accent" /> RAM Usage</span>
                      <span className="text-foreground font-semibold">{sysMetrics.ram}%</span>
                    </div>
                    <div className="h-1 bg-surface-2 rounded-full overflow-hidden">
                      <div className="h-full bg-accent transition-all duration-700" style={{ width: `${sysMetrics.ram * 6}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex justify-between text-[9px] text-muted-foreground/60 font-mono">
                <span>Core: Web3/Design</span>
                <span>Buffer: Active</span>
              </div>
            </BentoCard>
          </div>

          {/* Selected Work Carousel Card (col-span-8) */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Folder className="size-4 text-accent" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">03 / Case Studies</span>
                  </div>
                  <h3 className="text-xl font-display font-extrabold tracking-tight">Interactive Work Cards</h3>
                </div>
                
                <div className="flex gap-1.5 text-xs font-mono">
                  {[
                    { label: "All", val: "all" },
                    { label: "AI/ML", val: "ai-ml" },
                    { label: "Frontend", val: "frontend" },
                  ].map((btn) => (
                    <button
                      key={btn.val}
                      onClick={() => {
                        setProjectFilter(btn.val);
                        playSynthTick("click", isMuted);
                      }}
                      className={`h-7 px-2.5 rounded-lg border text-[9px] transition-all cursor-pointer ${
                        projectFilter === btn.val
                          ? "bg-accent border-accent text-white"
                          : "bg-surface border-border text-muted-foreground hover:border-accent/35"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* BlingBling Card Grid Layout */}
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredProjects.map((p) => {
                  const isMatching = isProjectMatchingSkill(p.tags);
                  return (
                    <div 
                      key={p.id} 
                      className={`group relative block rounded-2xl overflow-hidden border border-border bg-surface/20 transition-all duration-500 ${
                        isMatching ? "opacity-100 scale-100" : "opacity-35 scale-[0.98]"
                      } ${selectedSkill && isMatching ? "ring-2 ring-accent shadow-[0_0_20px_color-mix(in_srgb,var(--accent)_20%,transparent)]" : ""}`}
                    >
                      {/* Top Right Circle Arrow Badge */}
                      <a 
                        href={p.href}
                        onClick={() => playSynthTick("click", isMuted)}
                        className="absolute top-4 right-4 z-10 inline-flex items-center justify-center size-9 rounded-full bg-black text-white hover:bg-accent shadow-lg transition-all duration-300"
                        title="View Case Study"
                      >
                        <ArrowUpRight className="size-4" />
                      </a>
                      
                      {/* Image frame with 16/9 aspect-ratio */}
                      <div className="relative w-full aspect-[16/9] overflow-hidden">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                        
                        {/* Categories overlay bottom right */}
                        <div className="absolute right-3 bottom-2.5 flex flex-wrap gap-1">
                          {p.tags.slice(0, 2).map((t) => (
                            <span key={t} className="font-mono text-[8px] tracking-wider uppercase rounded-full px-2 py-0.5 bg-black/60 text-white border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content block with styled background colors */}
                      <div className={`px-5 py-4 flex flex-col justify-between ${p.bgClass}`}>
                        <div className="flex items-center justify-between">
                          <span className="font-display font-black text-xs tracking-wider uppercase">{p.logoText}</span>
                          <span className="text-[9px] font-mono opacity-60 text-right">{p.roleText}</span>
                        </div>
                        <p className="text-[11px] leading-relaxed opacity-75 mt-2.5">{p.blurb}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </BentoCard>
          </div>

          {/* zsh Developer Terminal Emulator Widget (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
                  <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1.5">
                    <TerminalIcon className="size-3.5 text-accent" /> zsh - command console
                  </span>
                  <div className="flex gap-1">
                    <div className="size-1.5 rounded-full bg-border" />
                    <div className="size-1.5 rounded-full bg-border" />
                  </div>
                </div>

                {/* Terminal outputs */}
                <div className="h-44 overflow-y-auto font-mono text-[10px] flex flex-col gap-1.5 no-scrollbar bg-background/15 p-2 rounded-lg border border-border/40 select-text">
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

              {/* Terminal Form Input */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  executeTerminalCommand(terminalInput);
                }}
                className="mt-3 border-t border-border/40 pt-2 flex items-center"
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
            </BentoCard>
          </div>

          {/* VS Code Mock IDE Editor Widget (col-span-8) */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1">
              <div>
                {/* IDE Titlebar */}
                <div className="bg-background/80 border-b border-border px-4 py-2 flex items-center justify-between -mx-6 -mt-6">
                  <div className="flex items-center gap-1.5">
                    <div className="size-2 rounded-full bg-red-500/80" />
                    <div className="size-2 rounded-full bg-yellow-500/80" />
                    <div className="size-2 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[9px] font-mono text-muted-foreground flex items-center gap-1">
                    <FileCode className="size-3 text-accent" /> Nainshul - CodeWorkspace
                  </div>
                  <div className="w-8" />
                </div>

                {/* Subheader tabs */}
                <div className="bg-background/40 border-b border-border flex items-center justify-between -mx-6">
                  <div className="flex overflow-x-auto">
                    {(Object.keys(IDE_FILES) as Array<keyof typeof IDE_FILES>).map((fileName) => (
                      <button
                        key={fileName}
                        onClick={() => {
                          setActiveFile(fileName);
                          setIdeView("code");
                          playSynthTick("click", isMuted);
                        }}
                        className={`px-3 py-1.5 border-r border-border text-[9px] font-mono flex items-center gap-1 cursor-pointer transition-colors ${
                          activeFile === fileName && ideView === "code"
                            ? "bg-surface text-foreground border-b-2 border-b-accent"
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
                      <Play className="size-2 fill-accent text-accent" /> Run Preview
                    </button>
                  </div>
                </div>

                {/* Workspace code viewer */}
                <div className="pt-3 font-mono text-[10px] overflow-x-auto min-h-[190px] bg-background/5">
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
                    // Live UI Preview frame
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
            </BentoCard>
          </div>

          {/* Achievements Trophy Shelf Widget (col-span-4) */}
          <div className="col-span-12 md:col-span-4 flex flex-col">
            <BentoCard isMuted={isMuted} className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="size-4 text-accent" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider">04 / Trophy Case</span>
                </div>

                <div className="space-y-4">
                  {ACHIEVEMENTS.map((a, i) => (
                    <div
                      key={a.title}
                      className="group/item flex items-start gap-3 bg-surface/30 p-3 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300"
                    >
                      <div className="size-8 rounded-lg bg-accent/10 border border-accent/20 grid place-items-center text-accent shrink-0">
                        <Trophy className="size-4 group-hover/item:animate-bounce" />
                      </div>
                      <div>
                        <span className="text-[8px] font-mono uppercase tracking-wider text-accent font-bold">{a.place}</span>
                        <h4 className="text-xs font-display font-bold leading-tight mt-0.5">{a.title}</h4>
                        <p className="text-[9px] text-muted-foreground mt-1 leading-snug">{a.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40 text-[9px] font-mono text-muted-foreground/60 text-right">
                3 Recognized Trophies
              </div>
            </BentoCard>
          </div>

          {/* Quick Contact Form (col-span-12) */}
          <div className="col-span-12">
            <BentoCard isMuted={isMuted} className="p-8">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="size-4 text-accent animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">05 / Contact Workspace</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight leading-none mb-3">
                    Let's Build Something Performing
                  </h3>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed max-w-xl">
                    I convert structural UI design wireframes into clean, reactive, and responsive developer layouts. Let's start a project discussion.
                  </p>
                </div>

                <div className="md:col-span-5 flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                  <a
                    href="mailto:nainshulkhatker@gmail.com"
                    className="flex-1 h-12 rounded-xl bg-accent text-white flex items-center justify-center gap-2 text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer shadow-[var(--shadow-glow)]"
                    onMouseEnter={() => playSynthTick("hover", isMuted)}
                    onClick={() => playSynthTick("click", isMuted)}
                  >
                    <Mail className="size-4" />
                    <span>nainshulkhatker@gmail.com</span>
                  </a>
                  <a
                    href="tel:+919467355251"
                    className="flex-1 h-12 rounded-xl bg-surface border border-border flex items-center justify-center gap-2 text-xs font-bold hover:border-accent/40 hover:bg-surface-2 transition-all cursor-pointer"
                    onMouseEnter={() => playSynthTick("hover", isMuted)}
                    onClick={() => playSynthTick("click", isMuted)}
                  >
                    <Phone className="size-4 text-accent" />
                    <span>+91 94673 55251</span>
                  </a>
                </div>
              </div>
            </BentoCard>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-10 text-[10px] font-mono text-muted-foreground/60 select-none">
        <p>© {new Date().getFullYear()} EEBU4o4 · Nainshul Khatkar · Crafted with Care in Haryana, India</p>
        <p className="uppercase tracking-widest text-[8px] mt-1">Spatial Desktop UI Environment v3.0.0</p>
      </footer>

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
                onClick={() => {
                  setChatOpen(false);
                  playSynthTick("click", isMuted);
                }}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="p-4 h-60 overflow-y-auto flex flex-col gap-3 bg-background/15 select-text text-xs no-scrollbar">
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
            onClick={() => {
              setChatOpen(true);
              playSynthTick("click", isMuted);
            }}
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
