export type Locale = 'es' | 'en';

export type ProjectStatus = 'published' | 'wip';

export type ProjectCase = {
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  image: string;
  problem: string;
  objective: string;
  architecture: string;
  solution: string;
  role: string;
  tech: string[];
  features: string[];
  result: string;
  impact: string;
  challenges: string[];
  lessons: string[];
  roadmap: string[];
  security?: string;
  github?: string;
  demo?: string;
  documentation?: string;
  documentationLabel?: string;
  screenshots: string[];
  highlights: string[];
};

export type InDevelopmentProject = {
  id: string;
  title: string;
  objective: string;
  currentFocus: string;
  tech: string[];
  expectedImpact: string;
  securityScope: string;
};

export type SkillLevel = 'backend' | 'frontend' | 'cloud' | 'database' | 'security' | 'tools';

export type SkillItem = {
  name: string;
  area: string;
  description: string;
};

export type SkillGroup = {
  level: SkillLevel;
  title: string;
  description: string;
  items: SkillItem[];
};

export type ExperienceBullet = {
  action: string;
  technology: string;
  result: string;
};

export type ExperienceEntry = {
  company: string;
  position: string;
  period: string;
  summary: string;
  items: ExperienceBullet[];
  link?: string;
};
