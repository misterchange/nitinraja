import React from 'react';
import TechCard from '@/components/TechCard';
import StatCard from '@/components/StatCard';
import BlockchainButton from '@/components/BlockchainButton';
import ContactButton from '@/components/ContactButton';
import ProfileCard from '@/components/ProfileCard';
import ProjectCard from '@/components/ProjectCard';
import {
  Layers,
  Code,
  HardDrive,
  Triangle,
  FileCode,
  Anchor,
  Flag,
  SmilePlus,
  Timer,
  Mail,
  MessageCircle,
  Briefcase,
  Blocks
} from 'lucide-react';
import { SiSolidity } from "react-icons/si";
import { SiWeb3Dotjs } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaRust } from "react-icons/fa";
import { FaAnchor } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { SiBitcoinsv } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { SiSolana } from "react-icons/si";
import { LuHexagon } from "react-icons/lu";
import { SiBinance } from "react-icons/si";

const Index = () => {
  return (
    <div className="min-h-screen py-10 px-12 md:px-8 lg:px-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          {/* Tech Arsenal Section */}
          <div className="bg-blockchain-card rounded-2xl p-4 animate-fade-in border border-white/5">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <Layers className="text-blockchain-pink" size={20} />
              <span className="text-gray-300 text-sm flex items-center justify-center">My Stacks</span>
            </div>
            <h2 className="text-xxl font-bold mb-6 flex items-center justify-center ">Tech Arsenal</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TechCard icon={<Code />} name="Python" />
              <TechCard icon={<Layers />} name="Typescript" />
              <TechCard icon={<HardDrive />} name="React.js" />
              <TechCard icon={<SiNextdotjs />} name="Next.js" />
              <TechCard icon={<RiJavascriptFill />} name="Pytorch" />
              <TechCard icon={<FaReact />} name="Tensorflow" />
              <TechCard icon={<FileCode />} name="Vector dbs" />
              <TechCard icon={<Blocks />} name="Langchain" />
            </div>
          </div>

          {/* Blockchains Explored Section */}
          <div className="bg-blockchain-card rounded-2xl p-3 border border-white/5 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-5">
              <HardDrive size={20} className="text-blockchain-pink" />
              <h2 className="text-sm font-normal">AI Architectures Explored</h2>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full">
              <div className="flex items-center justify-center bg-[#141414] px-1 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[10px] md:text-xs">Transformers</span>
              </div>

              <div className="flex items-center justify-center bg-[#141414] px-1 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[10px] md:text-xs">Diffusion</span>
              </div>

              <div className="flex items-center justify-center bg-[#141414] px-1 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[10px] md:text-xs">RAG</span>
              </div>

              <div className="flex items-center justify-center bg-[#141414] px-1 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[10px] md:text-xs">Distillation</span>
              </div>

              <div className="flex items-center justify-center bg-[#141414] px-0.5 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[9px] md:text-[11px] leading-tight">Reinforcement<br />Learning</span>
              </div>

              <div className="flex items-center justify-center bg-[#141414] px-0.5 py-1.5 rounded-xl border border-white/5 text-center h-full">
                <span className="text-gray-300 font-mono text-[9px] md:text-[11px] leading-tight">Supervised<br />Fine-Tuning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-4">
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
              "Fullstack AI Developer",
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
          {/* Left Column Projects */}
          <div className="md:col-span-5 flex flex-col gap-4 -mt-3">
            <ProjectCard
              title="Snipe.Video"
              description="An AI-powered video editor that automates long-form to short-form content creation."
              image="/snipe.png"
              tags={["AI", "Video Editor", "Shorts"]}
              link="https://www.snipe.video/"
            />
            <ProjectCard
              title="Runyard-AI Yard"
              description="A vibe coding tool for Generating AI Models."
              tags={["AI", "LLMs", "Generative"]}
              link="https://www.runyard.dev/generate-models"
            />
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 mt-0 md:-mt-12 lg:-mt-16">
            <ProjectCard
              large={true}
              title="Runyard.dev"
              description="Runyard helps you discover AI models that fit your machine. It detects your CPU, GPU, and memory, then recommends models that will run on your hardware or through providers. Browse the Model Radar to compare options, check requirements, and copy ready-to-run commands. Use Anchor API to call multiple model providers from a single port, and build and launch in AI Yard with guides and tooling."
              image="/Runyar.dev.png"
              tags={["AI", "LLMs", "Next.js", "PyTorch", "Transformers", "GPU"]}
              link="https://www.runyard.dev/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;