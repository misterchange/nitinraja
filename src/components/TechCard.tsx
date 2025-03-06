
import React from 'react';
import { cn } from "@/lib/utils";

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const TechCard: React.FC<TechCardProps> = ({ icon, name, className }) => {
  return (
    <div className={cn("tech-card", className)}>
      <div className="tech-icon">{icon}</div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export default TechCard;
