
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
    <div className={cn("stat-card", className)}>
      <div className="flex items-center">
        <span className="big-number">{number}</span>
        <span className="text-blockchain-pink text-4xl ml-1">+</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {icon}
        <span className="text-gray-300">{label}</span>
      </div>
    </div>
  );
};

export default StatCard;
