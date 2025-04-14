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
import {SiSolidity} from "react-icons/si";
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
              <TechCard icon={<SiSolidity/>} name="Solidity" />
              <TechCard icon={<SiWeb3Dotjs />} name="Web3.js" />
              <TechCard icon={<FaHardHat />} name="Hardhat" />
              <TechCard icon={<SiNextdotjs />} name="Next.js" />
              <TechCard icon={<RiJavascriptFill />} name="Javascript" />
              <TechCard icon={<FaReact />} name="React.js" />
              <TechCard icon={<FaRust />} name="Rust" />
              <TechCard icon={<FaAnchor />} name="Anchor" />
            </div>
          </div>
          
          {/* Blockchains Explored Section */}
          <div className="bg-blockchain-card rounded-2xl p-3 border border-white/5 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-5">
              <SiBlockchaindotcom size={20} className="text-blockchain-pink" />
              <h2 className="text-sm font-normal">Blockchains Explored</h2>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-2 bg-[#141414] px-1 py-1 rounded-xl border border-white/5">
                <SiBitcoinsv className="text-gray-300" />
                <span  className="text-gray-300 font-mono">Bitcoin</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#141414] px-1 py-1 rounded-xl border border-white/5">
                  <FaEthereum className="text-gray-300 " />
                <span className="text-gray-300 font-mono">Ethereum</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#141414] px-1 py-1 rounded-xl border border-white/5">
                <SiSolana className="text-gray-300"/>
                <span className="text-gray-300 font-mono">Solana</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#141414] px-3 py-1 rounded-xl border border-white/5">
                <LuHexagon className="text-gray-300"/>
                <span className="text-gray-300 font-mono">Polygon</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#141414] px-3 py-1 rounded-xl border border-white/5">
                <SiBinance className="text-gray-300"/>
                <span className="text-gray-300 font-mono">Binance</span>
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
              "Fullstack Blockchain Dev",
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
          <div className="md:col-span-5 -mt-3">
            <ProjectCard 
              title="Blockchain Lottery System" 
              description="Automated yield farming protocol that maximizes returns across multiple DeFi platforms."
              tags={["Solidity", "JavaScript", "DeFi"]}
              link="#"
            />
          </div>

          <div className="md:col-span-7 -mt-8">
            <ProjectCard 
              large={true}
              title="Blockhub.dev" 
              description="Blockhub.dev is an AI-powered code editor designed specifically for blockchain developers. It helps you generate smart contracts, deploy Web3 applications, and integrate with Ethereum, Solana, and other blockchains in seconds. Whether you're building DeFi protocols, NFTs, or dApps, Blockhub.dev streamlines your development workflow with instant AI-driven code suggestions and boilerplate generation."
              image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2070&auto=format&fit=crop"
              tags={["AI","Solidity", "Next.js", "Web3.js", "Ethereum","Wallet"]}
              link="https://blockhub.dev"
            />
          </div>
          
          <div className="md:col-span-3 -mt-60">
            <ProjectCard 
              title="Blockhub-SDK" 
              description="A software Development kit of Smart Contracts."
              tags={["Solidity","Node.js"]}
              link="https://blockhub.dev/smart-contracts"
            />
          </div>
          
          <div className="md:col-span-2 -mt-60">
            <ProjectCard 
              title="Wallet" 
              description="A wallet directory."
              tags={["React", ]}
              link="https://blockhub.dev/wallets"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;