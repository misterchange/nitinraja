import React from 'react';
import TechCard from '@/components/TechCard';
import StatCard from '@/components/StatCard';
import ProfileCard from '@/components/ProfileCard';
import ProjectCard from '@/components/ProjectCard';
import {
  Layers,
  Flag,
  SmilePlus,
  Timer,
  Skull,
  TrendingDown,
  Flame,
  Database,
  Github,
  Rocket,
  Zap,
  Lock,
  Plug
} from 'lucide-react';
import { SiPython, SiPytorch, SiTensorflow, SiLangchain, SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const failures = [
  {
    icon: <Skull size={20} className="text-blockchain-pink" />,
    title: "Pulse Oximeter — Covid-19",
    timeline: "2021",
    what: "During Covid-19 when pulse oximeters were selling for $50–$100 and out of stock everywhere, I redesigned one from first principles — replacing the battery and display with a smartphone. Brought the cost down to ~$5 per unit.",
    learned: "First-principles thinking can 20x a price problem. Hardware without distribution is just a prototype.",
  },
  {
    icon: <TrendingDown size={20} className="text-blockchain-pink" />,
    title: "AntiTheft Helmet — Bounce",
    timeline: "2022",
    what: "Bounce, a Bangalore-based ride-sharing startup, was losing 500–700 helmets a day to theft. I built an anti-theft helmet using BLE and a buzzer — triggered an alarm when the helmet moved beyond a set radius. Went to pilot stage but never became a product.",
    learned: "A working pilot isn't a product. Nailing the last-mile ops and unit economics matters as much as the tech.",
  },
  {
    icon: <Flame size={20} className="text-blockchain-pink" />,
    title: "Vibe Coding Tool — Blockchain",
    timeline: "2023",
    what: "Built a vibe coding environment specifically for blockchain developers — natural-language to smart contract, one-click deploy to testnets, live contract interaction in the browser. Technically solid, but the blockchain developer market was too niche to get meaningful traction.",
    learned: "Market size kills niche tools. Great DX doesn't matter if there aren't enough people who feel the pain.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-12 md:px-8 lg:px-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          {/* Tech Arsenal Section */}
          <div className="bg-blockchain-card rounded-2xl p-4 animate-fade-in border border-white/5">
            <div className="flex items-center gap-2 mb-6 justify-center">
              <Layers className="text-blockchain-pink" size={20} />
              <h2 className="text-xl font-bold">My Tech Arsenal</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TechCard icon={<SiPython />} name="Python" />
              <TechCard icon={<SiPytorch />} name="PyTorch" />
              <TechCard icon={<SiTensorflow />} name="TensorFlow" />
              <TechCard icon={<Database size={16} />} name="Vector DB" />
              <TechCard icon={<SiLangchain />} name="LangChain" />
              <TechCard icon={<Plug size={16} />} name="MCPs" />
              <TechCard icon={<SiNextdotjs />} name="Next.js" />
              <TechCard icon={<FaReact />} name="React.js" />
            </div>
          </div>

          {/* Blockchains Explored Section */}
          <div className="bg-blockchain-card rounded-2xl p-3 border border-white/5 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-5">
              <Layers size={20} className="text-blockchain-pink" />
              <h2 className="text-sm font-normal">AI Architectures Explored</h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Transformers", "Diffusion", "RL", "SFT", "RAG", "Distillation"].map((arch) => (
                <div key={arch} className="flex items-center bg-[#141414] px-3 py-1 rounded-xl border border-white/5">
                  <span className="text-gray-300 font-mono text-xs">{arch}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-4 order-first lg:order-none">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 animate-fade-in  border border-white/5">
            <StatCard number="07" label="Projects" icon={<Flag size={18} className="text-blockchain-pink " />} />
            <StatCard number="10" label="Clients" icon={<SmilePlus size={18} className="text-blockchain-pink" />} />
            <StatCard number="03" label="Years" icon={<Timer size={18} className="text-blockchain-pink" />} />
          </div>

          {/* Profile Card with multiple specialties */}
          <ProfileCard
            name="NitiN Raja"
            title="I'm a"
            specialties={[
              "Fullstack AI Dev",
              "Micro-Saas Founder",
              "Curious Product Designer",
            ]}
            location="Mumbai"
            position="Engineer"
            education="Mumbai University"
            resumeUrl="#"
          />
        </div>
      </div>

      {/* Projects Section - Bento Grid */}
      <div className="mt-6 animate-fade-in delay-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

          {/* Row 1 — Snipe.Video (col-5) | Runyard.dev (col-7) */}
          <div className="md:col-span-5 md:-mt-[0.7cm]">
            <ProjectCard
              large={true}
              title="Snipe.Video"
              description="The operating system for podcasters. Paste a YouTube link and get 10 viral clips ranked by Hook, Energy, and Sentiment scores. Repurpose AI generates Twitter threads, LinkedIn posts, and newsletters from transcripts. Guest Scout recommends guests from trending social topics. Auto-publishes across Instagram, YouTube, TikTok, X, and LinkedIn at optimal engagement times. Pay-per-credit — no subscriptions."
              image="/snipe.png"
              imageClassName="h-36 overflow-hidden"
              imgClassName="scale-[2] object-contain"
              tags={["SaaS", "Next.js", "Razorpay", "Video"]}
              link="https://snipe.video"
            />
          </div>

          <div className="md:col-span-7 md:-mt-[0.1cm]">
            <ProjectCard
              large={true}
              title="Runyard.dev"
              description="Find local LLMs that actually fit your machine. Enter your GPU and VRAM — Runyard detects compatibility across General, Code, Multimodal, Vision, Audio, Diffusion, and Agent models, then ranks them by estimated tokens per second. Use Anchor API to call multiple providers from one port. Browse AI Yard for guides and tooling. Free, hardware-aware, no sign-up."
              image="/runyard_logo.png"
              tags={["Next.js", "LLMs", "GPU", "Open Source"]}
              link="https://runyard.dev"
            />
          </div>

          {/* Row 2 — Blockhub.dev + Coming Soon (col-5) | Coderot.space (col-7) */}
          <div className="md:col-span-5 md:-mt-[0.6cm] flex flex-col gap-4">
            <ProjectCard
              large={true}
              title="Blockhub.dev"
              description="A code editor built for blockchain developers. Generate smart contracts, deploy Web3 applications, and integrate with Ethereum, Solana, and other chains in seconds. Whether building DeFi protocols, NFTs, or dApps, Blockhub.dev cuts boilerplate and keeps you in flow with instant code suggestions."
              image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2070&auto=format&fit=crop"
              tags={["Solidity", "Next.js", "Web3.js", "Ethereum"]}
              link="https://blockhub-mlbsadfef-nitinrajaofficialgmailcoms-projects.vercel.app/"
            />

            {/* Coming Soon bento grid */}
            <div className="grid grid-cols-6 gap-4 flex-1">

              {/* Wide card */}
              <a href="https://github.com/misterchange" target="_blank" rel="noopener noreferrer"
                className="col-span-4 bg-blockchain-card rounded-2xl p-4 border border-dashed border-white/10 flex flex-col justify-between gap-3 hover:border-blockchain-pink/30 transition-colors">
                <div className="flex items-center gap-2">
                  <Rocket size={14} className="text-blockchain-pink" />
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">Coming Soon</span>
                </div>
                <div>
                  <p className="text-gray-300 text-sm font-medium">Stealth Project</p>
                  <p className="text-gray-600 text-xs mt-1">Building something new — follow on GitHub</p>
                </div>
                <div className="flex items-center gap-1 text-blockchain-pink text-xs">
                  <Github size={12} />
                  <span className="font-mono">misterchange</span>
                </div>
              </a>

              {/* Narrow card */}
              <a href="https://github.com/misterchange" target="_blank" rel="noopener noreferrer"
                className="col-span-2 bg-blockchain-card rounded-2xl p-4 border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 hover:border-blockchain-pink/30 transition-colors">
                <Lock size={18} className="text-blockchain-pink" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 text-center">Under<br/>Wraps</span>
              </a>

              {/* Narrow card */}
              <a href="https://github.com/misterchange" target="_blank" rel="noopener noreferrer"
                className="col-span-2 bg-blockchain-card rounded-2xl p-4 border border-dashed border-white/10 flex flex-col items-center justify-center gap-2 hover:border-blockchain-pink/30 transition-colors">
                <Zap size={18} className="text-blockchain-pink" />
                <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500 text-center">In<br/>Progress</span>
              </a>

              {/* Wide card */}
              <a href="https://github.com/misterchange" target="_blank" rel="noopener noreferrer"
                className="col-span-4 bg-blockchain-card rounded-2xl p-4 border border-dashed border-white/10 flex flex-col justify-between gap-3 hover:border-blockchain-pink/30 transition-colors">
                <div className="flex items-center gap-2">
                  <Github size={14} className="text-blockchain-pink" />
                  <span className="text-[10px] uppercase tracking-widest font-mono text-gray-500">More on GitHub</span>
                </div>
                <p className="text-gray-600 text-xs">New drops incoming — star the repo to stay notified</p>
              </a>

            </div>
          </div>

          <div className="md:col-span-7 md:-mt-[0.1cm]">
            <ProjectCard
              large={true}
              title="Coderot.space"
              description="Stop doom scrolling while your AI writes code. Coderot interrupts each editor save with a 10–60 second brain game — Wordle, Tetris, Minesweeper, Sudoku, 2048, or Math Blitz — before handing control back. Compete live in Duels mode against other devs. Supports VS Code, Cursor, Windsurf, Claude Code, and more. Free solo games; Duels from $3/mo."
              image="/coderot_mascot.png"
              tags={["VS Code", "Next.js", "Games", "Developer Tools"]}
              link="https://coderot.space"
            />
          </div>

        </div>
      </div>

      {/* Failure / Battle Scars Section */}
      <div className="mt-10 animate-fade-in delay-300">
        <div className="flex items-center gap-4 mb-2">
          <div className="h-px flex-1 bg-white/5" />
          <h2 className="text-sm font-normal text-gray-500 tracking-widest uppercase">Battle Scars</h2>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        <p className="text-center text-gray-600 text-xs tracking-wide mb-6">My Failed Ideas</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {failures.map((f, i) => (
            <div
              key={i}
              className="bg-blockchain-card rounded-2xl p-5 border border-white/5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {f.icon}
                  <span className="text-gray-200 font-medium text-sm">{f.title}</span>
                </div>
                <span className="text-[10px] text-gray-600 font-mono">{f.timeline}</span>
              </div>

              <p className="text-gray-400 text-xs leading-relaxed">{f.what}</p>

              <div className="border-t border-white/5 pt-3">
                <span className="text-[10px] uppercase tracking-widest text-blockchain-pink font-mono">Lesson</span>
                <p className="text-gray-300 text-xs mt-1 leading-relaxed">{f.learned}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Index;
