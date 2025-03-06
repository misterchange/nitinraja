
import React from 'react';
import { cn } from "@/lib/utils";

interface BlockchainButtonProps {
  name: string;
  icon: React.ReactNode;
  className?: string;
}

const BlockchainButton: React.FC<BlockchainButtonProps> = ({ name, icon, className }) => {
  return (
    <div className={cn("flex items-center gap-2 bg-blockchain-card px-4 py-2 rounded-full transition-all hover:bg-blockchain-card-hover", className)}>
      {icon}
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default BlockchainButton;
