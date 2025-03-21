import React from 'react';
import { cn } from "@/lib/utils";

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, label, icon, className }) => {
  return (
    <div className={cn("bg-blockchain-card p-4 rounded-3xl flex flex-col items-center justify-center border border-white/5", className)}>
      <div className="flex items-center">
        <span className="big-number">{number}</span>
        <span className="text-blockchain-pink text-3xl ml-1">+</span>
      </div>
      <div className="flex items-center gap-3 bg-[#141414] px-6 py-1 rounded-xl mt-2 border border-white/5">
        <div>
          {icon}
        </div>
        <span className="text-gray-300 text-sm">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
