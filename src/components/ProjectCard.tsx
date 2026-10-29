import React from 'react';
import { cn } from "@/lib/utils";
import { GitBranch } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  imageClassName?: string;
  imgClassName?: string;
  tags: string[];
  link?: string;
  className?: string;
  large?: boolean;
}

const resolveImage = (src?: string) => {
  if (!src) return undefined;
  if (
    src.startsWith('http://') ||
    src.startsWith('https://') ||
    src.startsWith('//') ||
    src.startsWith('data:')
  ) {
    return src;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  return `${cleanBase}${cleanSrc}`;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageClassName,
  imgClassName,
  tags,
  link,
  className,
  large = false
}) => {
  const resolvedSrc = resolveImage(image);

  return (
    <a
      href={link || "#"}
      className={cn(
        "block bg-blockchain-card rounded-2xl p-6 border border-white/5",
        large ? "col-span-1 md:col-span-2 row-span-1 md:row-span-2" : "",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {resolvedSrc && (
        <div className={cn("mb-4 overflow-hidden rounded-xl", imageClassName)}>
          <img
            src={resolvedSrc}
            alt={title}
            className={cn("w-full h-full object-cover", imgClassName)}
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-200 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>

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
