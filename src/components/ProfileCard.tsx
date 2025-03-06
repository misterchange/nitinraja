
import React from 'react';
import { Download, MapPin, Briefcase, GraduationCap } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  title: string;
  specialty: string;
  location: string;
  position: string;
  education: string;
  resumeUrl?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  specialty,
  location,
  position,
  education,
  resumeUrl = "#"
}) => {
  return (
    <div className="bg-blockchain-card rounded-2xl p-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          <div className="bg-blockchain-pink rounded-2xl overflow-hidden w-44 h-52">
            <img 
              src="/lovable-uploads/06c70809-0391-44f1-be69-e271c74f849c.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div className="flex items-center gap-3 mb-3 md:mb-0">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-300 text-sm">Available to work</span>
            </div>
            
            <a 
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="font-medium">Resume</span>
              <Download size={18} />
            </a>
          </div>
          
          <h1 className="text-4xl font-bold mb-2">{name}</h1>
          
          <p className="text-xl mb-4">
            {title} <span className="pink-accent">{specialty}</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-blockchain-pink" />
              <span className="text-gray-300">{location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-blockchain-pink" />
              <span className="text-gray-300">{position}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-blockchain-pink" />
              <span className="text-gray-300">{education}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
