
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
  Briefcase
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen py-6 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Tech Arsenal Section */}
          <div className="bg-blockchain-card rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="text-blockchain-pink" size={20} />
              <span className="text-gray-300">My Stacks</span>
            </div>
            <h2 className="text-2xl font-bold mb-6">Tech Arsenal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TechCard icon={<Code />} name="Solidity" />
              <TechCard icon={<Code />} name="Web3.js" />
              <TechCard icon={<HardDrive />} name="Hardhat" />
              <TechCard icon={<Triangle />} name="Next.js" />
              <TechCard icon={<FileCode />} name="Javascript" />
              <TechCard icon={<Code />} name="React.js" />
              <TechCard icon={<Code />} name="Rust" />
              <TechCard icon={<Anchor />} name="Anchor" />
            </div>
          </div>
          
          {/* Blockchains Explored Section */}
          <div className="bg-blockchain-card rounded-2xl p-6 animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="text-blockchain-pink" size={20} />
              <span className="text-gray-300">Blockchains Explored</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <BlockchainButton 
                icon={<span className="text-blockchain-pink">₿</span>} 
                name="BITCOIN" 
              />
              <BlockchainButton 
                icon={<span className="text-blockchain-pink">Ξ</span>} 
                name="ETHEREUM" 
              />
              <BlockchainButton 
                icon={<span className="text-blockchain-pink">◎</span>} 
                name="SOLANA" 
              />
              <BlockchainButton 
                icon={<span className="text-blockchain-pink">⬡</span>} 
                name="POLYGON" 
              />
              <BlockchainButton 
                icon={<span className="text-blockchain-pink">🔺</span>} 
                name="AVALANCHE" 
              />
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
            <StatCard number="07" label="Projects" icon={<Flag size={18} className="text-blockchain-pink" />} />
            <StatCard number="10" label="Happy Clients" icon={<SmilePlus size={18} className="text-blockchain-pink" />} />
            <StatCard number="03" label="Year Experience" icon={<Timer size={18} className="text-blockchain-pink" />} />
          </div>
          
          {/* Profile Card */}
          <ProfileCard 
            name="Nitin Raja"
            title="I'm a Fullstack"
            specialty="Blockchain"
            location="Mumbai,India"
            position="Engineer"
            education="Mumbai University"
            resumeUrl="#"
          />
          
          {/* Contact Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
            <ContactButton 
              icon={<Mail size={20} className="text-blockchain-pink" />} 
              text="EMail Me" 
              href="mailto:contact@example.com"
            />
            <ContactButton 
              icon={<MessageCircle size={20} className="text-blockchain-pink" />} 
              text="Whatsapp Me" 
              href="https://wa.me/1234567890"
            />
          </div>
        </div>
      </div>

      {/* Projects Section - Bento Grid */}
      <div className="mt-12 animate-fade-in delay-200">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="text-blockchain-pink" size={20} />
          <span className="text-gray-300">Featured Works</span>
        </div>
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            large={true}
            title="NFT Marketplace" 
            description="A complete NFT marketplace built on Ethereum allowing users to mint, buy, sell and trade digital assets with MetaMask integration."
            image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2070&auto=format&fit=crop"
            tags={["Solidity", "React", "Web3.js", "Ethereum"]}
            link="#"
          />
          
          <ProjectCard 
            title="DeFi Yield Aggregator" 
            description="Automated yield farming protocol that maximizes returns across multiple DeFi platforms."
            tags={["Solidity", "JavaScript", "DeFi"]}
            link="#"
          />
          
          <ProjectCard 
            title="Blockchain Voting System" 
            description="Secure and transparent voting system built on blockchain technology."
            tags={["Solidity", "Ethereum", "React"]}
            link="#"
          />
          
          <ProjectCard 
            title="Cross-Chain Bridge" 
            description="A bridge allowing assets to move between Ethereum and Solana blockchain networks."
            tags={["Solidity", "Rust", "Cross-chain"]}
            link="#"
          />
          
          <ProjectCard 
            title="DAO Governance" 
            description="Decentralized autonomous organization with on-chain governance and voting."
            tags={["Solidity", "React", "DAO"]}
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
