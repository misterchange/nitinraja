import React, { useState, useEffect } from 'react';
import { Download, MapPin, Briefcase, GraduationCap, Mail, MessageCircle } from 'lucide-react';
import nitinImage from '../Nitin.png';
import TypewriterText from './TypewriterText';

interface ProfileCardProps {
  name: string;
  title: string;
  specialties: string[]; // Changed to array of strings
  location: string;
  position: string;
  education: string;
  resumeUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  specialties,
  location,
  position,
  education,
  resumeUrl = "#"
}) => {
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Rotate through specialties when typing is complete
  useEffect(() => {
    if (isTypingComplete && specialties.length > 1) {
      const timer = setTimeout(() => {
        setCurrentSpecialtyIndex((prevIndex) => (prevIndex + 1) % specialties.length);
        setIsTypingComplete(false);
      }, 2000); // Wait 2 seconds before changing specialty
      
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete, specialties.length]);

  return (
    <div className="bg-blockchain-card rounded-2xl p-6 border border-white/5 animate-fade-in">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative">
            <div className="bg-[#edbee2] rounded-2xl overflow-hidden w-32 h-32">
              <img 
                src={nitinImage} 
                alt="Nitin Raja" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex mb-3 md:mb-0">
              <div className="flex items-center gap-3 bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5 w-fit">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-gray-300 text-sm">Building next-gen AI products</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mt-3 mb-2">
              <h1 className="text-3xl font-semibold">{name}</h1>
              <a 
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex bg-[#141414] px-3 py-1.5 rounded-xl border border-white/5 items-center gap-2 text-gray-300 hover:text-white transition-colors w-fit"
              >
                <span className="font-medium text-sm">Resume</span>
                <Download size={16} />
              </a>
            </div>
            
            <p className="text-xl mb-4">
              {title} <span className="pink-accent">
                <TypewriterText 
                  text={specialties[currentSpecialtyIndex]} 
                  onComplete={() => setIsTypingComplete(true)}
                />
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5">
            <MapPin size={18} className="text-blockchain-pink" />
            <span className="font-normal text-gray-300">{location}</span>
          </div>
          
          <div className="flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5">      
            <Briefcase size={18} className="text-blockchain-pink" />
            <span className="font-normal text-gray-300">{position}</span>
          </div>
          
          <div className="flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5">
            <GraduationCap size={18} className="text-blockchain-pink" />
            <span className="font-normal text-gray-300">{education}</span>
          </div>
        </div>

        <div className="flex justify-between items-center gap-3 mt-0">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nitinrajaofficial@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5 text-gray-300 hover:text-white transition-colors"
          >
            <div className="bg-[#1a1a1a] p-3 rounded-lg">
              <Mail size={18} className="text-gray-400" />
            </div>
            <span className="font-normal">Email</span>
          </a>
          
          <a 
            href="https://wa.me/918104745212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center gap-3 bg-[#141414] px-2 py-1 rounded-xl border border-white/5 text-gray-300 hover:text-white transition-colors"
          >
            <div className="bg-[#1a1a1a] p-3 rounded-lg">
              <MessageCircle size={18} className="text-gray-400" />
            </div>
            <span className="font-normal">WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;