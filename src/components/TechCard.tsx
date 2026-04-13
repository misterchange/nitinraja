import React from 'react';
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, name, className }) => {
  return (
    <div className={cn("flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5", className)}>
      <div className="bg-[#1a1a1a] p-3 rounded-lg">
        <div className="text-gray-400">{icon}</div>
      </div>
      <span className="font-normal text-gray-300 text-sm">{name}</span>
    </div>
  );
};

export default TechCard;
