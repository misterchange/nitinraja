import React from 'react';
import { cn } from "@/lib/utils";
import { GitBranch } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  link?: string;
  className?: string;
  large?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  link, 
  className,
  large = false
}) => {
  return (
    <a 
      href={link || "#"} 
      className={cn(
        "group block bg-blockchain-card rounded-2xl p-6 border border-white/5 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500",
        large ? "col-span-1 md:col-span-2 row-span-1 md:row-span-2" : "",
        className
      )}
      target="_blank" 
      rel="noopener noreferrer"
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-xl h-32 lg:h-40 relative w-full bg-black/20">
          <img 
            src={image} 
            alt={title} 
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700 ease-out"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm line-clamp-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs bg-[#141414] px-2 py-1 rounded-full text-gray-300 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center text-sm text-blockchain-pink">
        <GitBranch size={16} className="mr-2" />
        <span>View Project</span>
      </div>
    </a>
  );
};

export default ProjectCard;
