import type { LocaleContent } from './types';

// Based on the Nov 2025 CV — update to reflect the current situation.
export const en: LocaleContent = {
  meta: {
    title: 'Win-Ken (Kane) Beh, PhD | AI Engineer',
    description:
      'AI engineer building on-prem LLM platforms, RAG and agentic systems. PhD in Electrical Engineering from National Taiwan University.',
  },
  name: 'Win-Ken (Kane) Beh',
  intro: [
    'I am an AI engineer at Raydium, where I run the company\'s internal generative-AI platform. I cover the whole stack on my own: GPU hardware planning, on-prem LLM serving, retrieval and agentic systems, from architecture through operations.',
    'I received my PhD from the Graduate Institute of Electrical Engineering at National Taiwan University in 2023, with 11 publications.',
  ],
  experience: [
    {
      role: 'AI Engineer',
      org: 'Raydium',
      period: '2023 – Present',
      highlights: [
        'Built an internal knowledge platform from scratch: OpenAI-compatible LLM serving, RAG and agentic orchestration',
        'Planned GPU server specs, coordinated vendors, and deployed high-throughput LLM inference',
        'Built a PDF ingestion → vector DB → agentic RAG pipeline for internal technical search',
      ],
    },
    {
      role: 'Intern',
      org: 'Phison Electronics',
      period: '2022',
      highlights: ['Developed a dataset-reduction method that keeps AOI inspection accuracy with less training data'],
    },
  ],
  education: [
    { degree: 'Ph.D., Electrical Engineering', school: 'National Taiwan University', period: '2018 – 2023' },
    { degree: 'B.S., Electrical Engineering', school: 'National Taiwan University', period: '2014 – 2018' },
  ],
  skills: [
    { category: 'AI / LLM', items: ['On-prem LLM serving', 'OpenAI-compatible APIs', 'RAG', 'Agents'] },
    { category: 'Data', items: ['PDF parsing', 'Data cleaning', 'Embeddings', 'Vector DBs'] },
    { category: 'Development', items: ['Python', 'PyTorch', 'FastAPI', 'REST'] },
    { category: 'Infrastructure', items: ['Docker', 'Linux', 'GPU management'] },
  ],
  projectsLead:
    'Most of my work is about getting LLMs to read large volumes of internal technical documents correctly and answer with sources.',
  projects: [
    {
      title: 'EDA Tool Assistant: a multi-agent document QA system',
      meta: 'Raydium · designed and built solo',
      description:
        'Understands engineers’ questions and finds the right answer in ~70k pages of EDA vendor documentation, improving first-answer accuracy for support and troubleshooting.',
      figure: 'agents',
      highlight: true,
    },
    {
      title: 'PDF pipeline at scale',
      meta: 'Raydium',
      description:
        'Automated processing of ~100k PDF pages with complex figures and tables into clean, AI-ready corpora for RAG.',
      figure: 'pdf',
    },
    {
      title: 'Agentic RAG for technical corpora',
      meta: 'Raydium',
      description:
        'A disambiguation → retrieval → evidence-aggregation pipeline for large document collections, so every answer comes with its sources.',
      figure: 'rag',
    },
  ],
  // TODO: add the 11 papers from Google Scholar; the section is hidden while this is empty
  publications: [],
  resume: '',
  ui: {
    experience: 'Experience',
    skills: 'Skills',
    education: 'Education',
    projects: 'Projects',
    publications: 'Publications',
    resume: 'CV',
    photoAlt: 'Photo of Win-Ken Beh',
    switchLanguage: '中文',
    lastUpdated: 'Last updated',
  },
};
