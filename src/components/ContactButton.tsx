
import React from 'react';
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  icon: React.ReactNode;
  text: string;
  className?: string;
  href?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ icon, text, className, href }) => {
  return (
    <a 
      href={href || "#"} 
      className={cn("contact-button", className)}
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="w-10 h-10 rounded-full bg-blockchain-pink bg-opacity-20 flex items-center justify-center">
        {icon}
      </div>
      <span className="font-medium text-gray-300">{text}</span>
    </a>
  );
};

export default ContactButton;
