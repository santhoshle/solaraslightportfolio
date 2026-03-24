import React from 'react';

const milestones = [
  {
    title: 'Learning Unreal through playable prototypes',
    description:
      'The portfolio now centers on small, focused projects that demonstrate concrete mechanics instead of speculative concepts.'
  },
  {
    title: 'Sharing progress publicly',
    description:
      'The itch.io profile describes a solo indie dev journey with devlogs, updates, and small playable releases along the way.'
  },
  {
    title: 'Exploring both 2D and 3D gameplay',
    description:
      'Released work already spans arcade-style experiments and a top-down shooter jam project.'
  }
];

const WorldBuilder: React.FC = () => {
  return (
    <div className="bg-solaras-dark py-16 px-4 sm:px-6 lg:px-8 relative min-h-screen">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-solaras-purple/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white">
            DEV <span className="text-solaras-purple">JOURNEY</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            This section replaces the AI generator with a clearer summary of the current direction: learn in public,
            release small games, and steadily grow from prototypes to stronger original projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-solaras-panel p-8 rounded-xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">About Solaras Light</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Solo indie developer currently learning Unreal Engine and building mini-games to level up practical skills.
              The focus is on documenting the journey, sharing progress, and publishing small playable projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs uppercase tracking-wider text-gray-500">Format</p>
                <p className="text-white font-semibold mt-1">Bite-sized games & prototypes</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs uppercase tracking-wider text-gray-500">Approach</p>
                <p className="text-white font-semibold mt-1">Experiment, release, iterate</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs uppercase tracking-wider text-gray-500">Gameplay</p>
                <p className="text-white font-semibold mt-1">2D and 3D exploration</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs uppercase tracking-wider text-gray-500">Public presence</p>
                <p className="text-white font-semibold mt-1">Devlogs and updates</p>
              </div>
            </div>
          </div>

          <div className="bg-solaras-panel p-8 rounded-xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Recent Milestones</h3>
            <div className="space-y-5">
              {milestones.map((milestone, index) => (
                <div key={milestone.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-solaras-accent/15 border border-solaras-accent/30 text-solaras-accent flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{milestone.title}</h4>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-black/30 rounded-xl overflow-hidden border border-solaras-accent/20">
          <div className="px-6 py-4 border-b border-solaras-accent/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <h3 className="text-lg font-bold text-solaras-accent">What to expect next</h3>
            <a
              href="https://solaraslight.itch.io/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white hover:text-solaras-accent transition-colors"
            >
              Visit the itch.io profile →
            </a>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'More small experimental games',
              'Clearer progress updates and release notes',
              'A stronger bridge from prototypes to original game ideas'
            ].map((item) => (
              <div key={item} className="bg-white/5 p-4 rounded-lg border border-white/10 text-gray-300 text-sm leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldBuilder;
