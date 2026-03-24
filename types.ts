export interface Project {
  id: string;
  title: string;
  category: 'Game' | 'Prototype' | 'Art' | 'Novel' | 'Comic';
  status: 'Released' | 'In Development' | 'Concept';
  description: string;
  techStack: string[];
  accent: string;
  demoUrl?: string;
}

export interface SkillStat {
  subject: string;
  A: number;
  fullMark: number;
}

export enum NavSection {
  HOME = 'home',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  JOURNEY = 'journey',
  CONTACT = 'contact'
}
