import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { skillStats } from '../data/skillTreeData';

const SkillTree: React.FC = () => {
  return (
    <div className="bg-solaras-dark py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            DEV <span className="text-solaras-accent">STACK</span>
          </h2>
          <p className="mt-4 text-gray-400">
            A practical mix of software engineering strengths and growing game development skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-solaras-panel rounded-lg p-6 shadow-2xl border border-white/5 relative">
            <div className="absolute top-0 left-0 p-2 bg-solaras-dark/80 text-xs font-mono text-solaras-accent rounded-br-lg border-b border-r border-solaras-accent/20">
              SKILL_PROFILE
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillStats}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Focus"
                    dataKey="A"
                    stroke="#38bdf8"
                    strokeWidth={3}
                    fill="#38bdf8"
                    fillOpacity={0.3}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: '#38bdf8', color: '#fff' }}
                    itemStyle={{ color: '#38bdf8' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-solaras-panel p-6 rounded-lg border-l-4 border-solaras-purple">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center">
                <span className="mr-2 text-2xl">🧭</span> Current Direction
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Strong backend and frontend engineering experience is being redirected into Unreal Engine prototyping,
                gameplay systems, and solo indie development. The portfolio emphasis is on building real playable work,
                not generated filler.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="text-solaras-accent font-bold mb-1">Core Engineering</h4>
                <p className="text-sm text-gray-400">Java, Spring Boot, architecture, APIs</p>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="text-solaras-accent font-bold mb-1">Frontend</h4>
                <p className="text-sm text-gray-400">React, TypeScript, UI implementation</p>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="text-solaras-purple font-bold mb-1">Game Dev</h4>
                <p className="text-sm text-gray-400">Unreal Engine 5, Blueprints, gameplay logic</p>
              </div>
              <div className="bg-white/5 p-4 rounded border border-white/10">
                <h4 className="text-solaras-purple font-bold mb-1">Creative Tools</h4>
                <p className="text-sm text-gray-400">Blender, prototyping, design iteration</p>
              </div>
            </div>

            <div className="bg-white/5 p-4 rounded border border-white/10">
              <h4 className="text-green-400 font-bold mb-2">What visitors should expect</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {['Small games', 'Prototype releases', 'Arcade mechanics', 'Unreal learning logs', 'Playable experiments'].map((item) => (
                  <span key={item} className="px-2 py-1 bg-black/40 rounded text-xs text-gray-300 border border-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillTree;
