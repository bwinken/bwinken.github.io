import type { LocaleContent } from './types';

// Based on the Nov 2025 CV — update to reflect the current situation.
export const en: LocaleContent = {
  meta: {
    title: 'Win-Ken (Kane) Beh, PhD | AI Engineer',
    description:
      'AI engineer building on-prem LLM platforms, RAG and agentic systems. PhD in Electrical Engineering from National Taiwan University.',
  },
  name: 'Win-Ken (Kane) Beh',
  headline: 'AI Engineer — On-prem LLM Platforms · RAG · Agentic Systems',
  location: 'Taiwan',
  about: [
    'I build enterprise generative-AI systems from 0 to 1: from planning GPU hardware and serving OpenAI-compatible LLMs on-prem, to agentic RAG and multi-agent orchestration. I own the full lifecycle on my own — architecture, development, deployment and operations.',
    'I hold a PhD from the Graduate Institute of Electrical Engineering at National Taiwan University, with 11 publications and 271 citations.',
  ],
  experience: [
    {
      company: 'Raydium Corp.',
      role: 'AI Engineer',
      period: 'Jul 2023 – Present',
      highlights: [
        'Built an on-prem enterprise knowledge-management platform (GenAI) from scratch, including OpenAI-compatible LLM/LMM serving, RAG and agentic orchestration.',
        'Planned GPU server and workstation specs, coordinated vendors, and deployed an LLM server for high-throughput inference.',
        'Built a PDF ingestion → vector DB → agentic RAG pipeline for internal knowledge search.',
        'Delivered end to end as a solo engineer, from architecture to deployment and operations.',
      ],
    },
    {
      company: 'Phison Electronics',
      role: 'Intern, Dataset Reduction',
      period: 'Oct – Nov 2022',
      highlights: [
        'Developed a dataset-reduction method that maintains AOI (automated optical inspection) accuracy while identifying the data that matters for training.',
      ],
    },
  ],
  projects: [
    {
      name: 'PDF Pipeline at Scale',
      description:
        'Automated processing of ~100k PDF pages, including complex figures and tables, turning unstructured documents into clean, AI-ready corpora optimized for RAG.',
      tech: ['Python', 'PDF parsing', 'Embeddings', 'Vector DB'],
    },
    {
      name: 'EDA Tool Assistant (Multi-Agent)',
      description:
        'Single-handedly architected and implemented a multi-agent system that understands queries and retrieves correct answers from ~70k pages of EDA vendor PDFs, improving first-answer accuracy for support and troubleshooting.',
      tech: ['LLM', 'Multi-agent', 'Agentic RAG', 'FastAPI'],
    },
    {
      name: 'Agentic RAG for Technical Corpora',
      description:
        'Designed a disambiguation → retrieval → evidence-aggregation pipeline for large technical document collections, so answers are grounded in cited sources.',
      tech: ['RAG', 'Agents', 'Vector DB'],
    },
  ],
  skills: [
    { category: 'AI / LLM', items: ['On-prem LLM', 'OpenAI-compatible APIs', 'RAG', 'Agents'] },
    { category: 'Data', items: ['PDF parsing', 'Data cleaning', 'Embeddings', 'Vector DB'] },
    { category: 'Languages & Frameworks', items: ['Python', 'PyTorch'] },
    { category: 'Infrastructure', items: ['Docker', 'Linux', 'GPU management'] },
    { category: 'Backend / Frontend', items: ['FastAPI', 'REST', 'Internal-tool front-ends'] },
  ],
  education: [
    {
      school: 'National Taiwan University',
      degree: 'Ph.D., Graduate Institute of Electrical Engineering',
      period: 'Jul 2018 – Jul 2023',
    },
    {
      school: 'National Taiwan University',
      degree: 'B.S., Electrical Engineering',
      period: 'Jul 2014 – Jul 2018',
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
