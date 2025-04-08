interface LearningProjectOverride {
  name: stri;n,g,;
  description?: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  topics?: string[];
  techStack?: string[];
  customContent?: string;
  tutorialUrl?: string;
}

interface LearningPortfolioConfig {
  platformUrl: stri;n,g,;
  outputPath: stri;n,g,;
  excludeRepos?: string[];
  categoryMappings?: Record<string, string>;
  projectOverrides?: Record<string, LearningProjectOverride>;
  difficultyLevels: {
    beginner: stri;n,g,[];
    intermediate: stri;n,g,[];
    advanced: stri;n,g,[];
  };
}

const learningConfig: LearningPortfolioConfi,g, = {
  platformUrl: 'https://learn.aireinvestor.com',
  outputPath: 'docs/learn/projects',
  excludeRepos: ['Mark0025'],
  categoryMappings: {
    nextjs: 'Modern Web Development',
    react: 'Frontend Frameworks',
    python: 'Python Development',
    golang: 'Backend Systems',
    ai: 'AI & Machine Learning',
  },
  projectOverrides: {
    portfolio: {
      name: 'portfolio',
      description: 'Learn how to build a modern portfolio website',
      category: 'Web Development',
      difficulty: 'intermediate',
      topics: ['nextjs', 'react', 'tailwind'],
      tutorialUrl: '/learn/tutorials/portfolio-building',
    },
  },
  difficultyLevels: {
    beginner: ['html', 'css', 'javascript'],
    intermediate: ['react', 'nodejs', 'typescript'],
    advanced: ['ai', 'golang', 'system-design'],
  },
};

export default learningConfig;
