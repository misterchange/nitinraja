import React from 'react';
import { Bitcoin, Blocks } from 'lucide-react';

const BlockchainsExplored = () => {
  return (
    <div className="bg-blockchain-card rounded-2xl p-6 border border-white/5 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Blocks size={24} className="text-blockchain-pink" />
        <h2 className="text-xl font-normal">Blockchains Explored</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {/* Bitcoin */}
        <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5">
          <div className="text-[#F7931A]">₿</div>
          <span className="text-gray-300">BITCOIN</span>
        </div>

        {/* Ethereum */}
        <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5">
          <div className="text-[#627EEA]">◆</div>
          <span className="text-gray-300">ETHEREUM</span>
        </div>

        {/* Solana */}
        <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5">
          <div className="text-[#9945FF]">≡</div>
          <span className="text-gray-300">SOLANA</span>
        </div>

        {/* Polygon */}
        <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5">
          <div className="text-[#8247E5]">⬡</div>
          <span className="text-gray-300">POLYGON</span>
        </div>

        {/* Avalanche */}
        <div className="flex items-center gap-2 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5">
          <div className="text-[#E84142]">△</div>
          <span className="text-gray-300">AVALANCHE</span>
        </div>
      </div>
    </div>
  );
};

export default BlockchainsExplored; 