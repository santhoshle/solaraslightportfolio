import React from 'react';
import { NavSection } from '../types';

interface HeroProps {
  onNavigate: (section: NavSection) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-solaras-dark min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="absolute -top-32 -left-24 w-80 h-80 bg-solaras-purple/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-20 w-96 h-96 bg-solaras-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-solaras-dark via-transparent to-transparent z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto py-20">
        <div className="mb-6 inline-block">
          <span className="py-1 px-3 rounded-full bg-solaras-accent/10 text-solaras-accent text-xs font-mono border border-solaras-accent/20">
            SOLARAS LIGHT // UNREAL ENGINE LEARNING JOURNEY
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-solaras-accent to-solaras-purple">Small Playable Worlds</span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400 font-light leading-relaxed">
          Solo indie developer documenting the path from learning Unreal Engine to shipping small games and prototypes.
          This portfolio now reflects the projects and direction shown on the official itch.io page.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="bg-solaras-panel/80 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Current Focus</p>
            <p className="text-white font-semibold mt-1">Bite-sized games & prototypes</p>
          </div>
          <div className="bg-solaras-panel/80 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Engine</p>
            <p className="text-white font-semibold mt-1">Unreal Engine Blueprints</p>
          </div>
          <div className="bg-solaras-panel/80 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Content</p>
            <p className="text-white font-semibold mt-1">Devlogs, updates, playable experiments</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onNavigate(NavSection.PROJECTS)}
            className="px-8 py-3 bg-solaras-accent text-solaras-dark font-bold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => onNavigate(NavSection.JOURNEY)}
            className="px-8 py-3 border border-gray-600 text-gray-300 font-bold rounded hover:border-solaras-purple hover:text-solaras-purple transition-all"
          >
            SEE THE JOURNEY
          </button>
          <a
            href="https://solaraslight.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 border border-white/15 text-white font-bold rounded hover:bg-white/5 transition-all"
          >
            OPEN ITCH.IO
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
