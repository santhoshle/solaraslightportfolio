import React from 'react';
import { NavSection } from '../types';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: NavSection.HOME, label: 'HUB' },
    { id: NavSection.PROJECTS, label: 'PROJECTS' },
    { id: NavSection.SKILLS, label: 'STACK' },
    { id: NavSection.JOURNEY, label: 'JOURNEY' },
    { id: NavSection.CONTACT, label: 'LINKS' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-solaras-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => onNavigate(NavSection.HOME)}>
            <span className="text-2xl font-black tracking-tighter text-white">
              SOLARAS <span className="text-solaras-accent group-hover:text-solaras-purple transition-colors duration-300">LIGHT</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    currentSection === item.id
                      ? 'text-solaras-accent bg-solaras-panel border border-solaras-accent/50 shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  [{item.label}]
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
