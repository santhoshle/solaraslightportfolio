import React, { useMemo, useState } from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Base Protector',
    category: 'Game',
    status: 'Released',
    description:
      'A top-down arcade shooter set on Mars where the player defends the last remaining base against alien waves. Built for the GameDev.tv Game Jam 2025.',
    techStack: ['Unreal Engine 5', 'Blueprints', 'Top-Down Shooter'],
    accent: 'from-red-500/70 via-orange-500/60 to-yellow-400/60',
    demoUrl: 'https://solaraslight.itch.io/base-protector'
  },
  {
    id: '2',
    title: 'Road Crossing Prototype',
    category: 'Prototype',
    status: 'Released',
    description:
      'A learning-focused Unreal Engine prototype exploring grid-based movement, moving hazards, coin collection, scoring, and game-over logic.',
    techStack: ['Unreal Engine', 'Blueprints', 'Arcade Mechanics'],
    accent: 'from-cyan-500/70 via-sky-500/60 to-blue-500/60',
    demoUrl: 'https://solaraslight.itch.io/roadcrossing'
  },
  {
    id: '3',
    title: 'Ping Pong Prototype',
    category: 'Prototype',
    status: 'Released',
    description:
      'A quick prototype built as part of the Unreal learning journey, focusing on paddle and ball physics, scoring systems, and a simple AI opponent.',
    techStack: ['Unreal Engine', 'Blueprints', 'Simple AI'],
    accent: 'from-fuchsia-500/70 via-purple-500/60 to-indigo-500/60',
    demoUrl: 'https://solaraslight.itch.io/pingpong'
  }
];

const ProjectGallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = useMemo(() => ['All', 'Game', 'Prototype'], []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((project) => project.category === filter);

  return (
    <div className="bg-solaras-dark py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-2">
              PLAYABLE <span className="text-solaras-purple">PROJECTS</span>
            </h2>
            <p className="text-gray-400 max-w-2xl">
              Updated to reflect the public itch.io portfolio: released prototypes, a jam game, and the current learning direction.
            </p>
          </div>

          <div className="flex space-x-2 bg-solaras-panel p-1 rounded-lg border border-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-solaras-accent text-solaras-dark shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-solaras-panel rounded-xl overflow-hidden border border-white/5 hover:border-solaras-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col"
            >
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <span className="w-fit px-3 py-1 bg-black/35 text-xs font-bold text-white rounded-full border border-white/10 backdrop-blur-sm">
                    {project.category.toUpperCase()}
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-2">Solaras Light</p>
                    <h3 className="text-3xl font-extrabold text-white leading-tight">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3 gap-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-solaras-accent transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-xs px-2 py-1 rounded-full border border-green-500 text-green-400 whitespace-nowrap">
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono text-solaras-accent bg-solaras-accent/10 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:border-solaras-accent hover:text-solaras-accent transition-colors"
                >
                  View on itch.io
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
