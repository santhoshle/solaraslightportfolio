import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillTree from './components/SkillTree';
import WorldBuilder from './components/WorldBuilder';
import Contact from './components/Contact';
import { NavSection } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<NavSection>(NavSection.HOME);

  const renderSection = () => {
    switch (currentSection) {
      case NavSection.HOME:
        return <Hero onNavigate={setCurrentSection} />;
      case NavSection.PROJECTS:
        return <ProjectGallery />;
      case NavSection.SKILLS:
        return <SkillTree />;
      case NavSection.JOURNEY:
        return <WorldBuilder />;
      case NavSection.CONTACT:
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-solaras-dark text-solaras-text font-sans selection:bg-solaras-accent selection:text-solaras-dark">
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />

      <main className="fade-in">
        {renderSection()}
      </main>

      <footer className="bg-solaras-dark border-t border-white/5 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Solaras Light. Solo indie dev portfolio.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Built with React and Tailwind.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
