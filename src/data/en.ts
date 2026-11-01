import type { LocaleContent } from './types';

// TODO: Placeholder content — replace with your own.
export const en: LocaleContent = {
  meta: {
    title: 'Your Name | Software Engineer',
    description: 'Personal website of Your Name: experience, projects and contact.',
  },
  name: 'Your Name',
  headline: 'Software engineer focused on backend and cloud architecture',
  location: 'Taipei, Taiwan',
  about: [
    'I am a software engineer with X years of experience building scalable backend services, with a strong focus on code quality and collaboration.',
    'I am currently looking for [role type] opportunities in [industry / domain].',
  ],
  experience: [
    {
      company: '[Company]',
      role: '[Job title]',
      period: 'Jul 2023 – Present',
      location: 'Taipei',
      highlights: [
        'Led the rewrite of [system], cutting API response time by 40%.',
        'Introduced CI/CD, increasing deploy frequency from monthly to several times a week.',
      ],
    },
    {
      company: '[Previous company]',
      role: '[Job title]',
      period: 'Jul 2021 – Jun 2023',
      highlights: ['Built [feature] from scratch to launch, serving [N]k users.'],
    },
  ],
  projects: [
    {
      name: '[Project name]',
      description: 'One sentence on the problem it solves, your role, and the outcome.',
      tech: ['TypeScript', 'React', 'PostgreSQL'],
      link: 'https://example.com',
      repo: 'https://github.com/bwinken',
    },
    {
      name: '[Project name 2]',
      description: 'One sentence on the problem it solves, your role, and the outcome.',
      tech: ['Python', 'FastAPI', 'Docker'],
      repo: 'https://github.com/bwinken',
    },
  ],
  skills: [
    { category: 'Languages', items: ['TypeScript', 'Python', 'Go'] },
    { category: 'Frameworks & Tools', items: ['React', 'Node.js', 'Docker', 'Git'] },
    { category: 'Cloud & Data', items: ['AWS', 'PostgreSQL', 'Redis'] },
  ],
  education: [
    {
      school: '[University]',
      degree: 'B.S. in [Major]',
      period: '2017 – 2021',
    },
  ],
  resume: '',
  ui: {
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    sections: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    contactIntro: 'Interested in my background or have a role that fits? Drop me an email and I will get back to you soon.',
    downloadResume: 'Download résumé',
    contactMe: 'Get in touch',
    emailMe: 'Email me',
    viewDemo: 'Live demo',
    viewCode: 'Source',
    toggleTheme: 'Toggle dark / light mode',
    switchLanguage: '中文',
    lastUpdated: 'Last updated',
  },
};
