import type { LocaleContent } from './types';

export const en: LocaleContent = {
  meta: {
    title: 'Win-Ken (Kane) Beh, PhD | AI Team Lead',
    description:
      'AI team lead covering AI applications, the team SDLC, a lakehouse data platform with data governance, and in-house inference across on-prem and multi-cloud. PhD in EE, National Taiwan University.',
  },
  name: 'Win-Ken (Kane) Beh',
  intro: [
    'I lead an AI team that puts AI into real use inside the enterprise. Besides building AI applications, I define the team’s software development lifecycle (SDLC), build our lakehouse data platform and drive data governance, and run an in-house inference service that spans on-prem and multiple clouds.',
    'I did my PhD at the Graduate Institute of Electrical Engineering, National Taiwan University, researching algorithms, and I have a background in IC design. After moving to industry I switched to AI, starting as an engineer and now leading the team.',
  ],
  experience: [
    {
      // TODO: confirm title and when the team-lead role started
      role: 'AI Team Lead',
      org: 'Raydium',
      period: '2023 – Present',
      highlights: [
        'Lead the AI team and defined its software development lifecycle (SDLC)',
        'Built a lakehouse data platform and drive data governance',
        'Built an in-house inference service with a hybrid on-prem + multi-cloud architecture',
        'Develop AI applications, including multi-agent document QA and agentic RAG',
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
    {
      degree: 'Ph.D., Electrical Engineering',
      school: 'National Taiwan University',
      period: '2018 – 2023',
      note: 'Research: algorithms',
    },
    { degree: 'B.S., Electrical Engineering', school: 'National Taiwan University', period: '2014 – 2018' },
  ],
  skills: [
    { category: 'Team & Process', items: ['Team leadership', 'AI team SDLC'] },
    { category: 'AI Applications', items: ['LLMs', 'RAG', 'Multi-agent systems', 'PDF parsing'] },
    { category: 'Platform', items: ['In-house inference', 'Hybrid on-prem + multi-cloud', 'Docker', 'GPU management'] },
    { category: 'Data', items: ['Lakehouse', 'Data governance', 'Embeddings', 'Vector DBs'] },
    { category: 'Development', items: ['Python', 'PyTorch', 'FastAPI'] },
    { category: 'Background', items: ['Algorithms', 'IC design'] },
  ],
  projectsLead:
    'My work spans AI applications and the inference, data platform and development process that support them.',
  projects: [
    {
      title: 'EDA Tool Assistant: a multi-agent document QA system',
      meta: 'AI application · designed and built solo',
      description:
        'Understands engineers’ questions and finds the right answer in ~70k pages of EDA vendor documentation, improving first-answer accuracy for support and troubleshooting.',
      figure: 'agents',
      highlight: true,
    },
    {
      title: 'In-house inference service',
      meta: 'Platform',
      description: 'A self-hosted model inference service with a hybrid architecture, running on on-prem GPUs and multiple clouds.',
      figure: 'inference',
    },
    {
      title: 'Lakehouse data platform and data governance',
      meta: 'Data',
      description: 'A lakehouse-based data platform with data governance in place, serving as the data foundation for our AI applications.',
      figure: 'lakehouse',
    },
    {
      title: 'Document processing and retrieval at scale',
      meta: 'AI application',
      description:
        'Automated processing of ~100k PDF pages with complex figures and tables, followed by a disambiguation → retrieval → evidence-aggregation agentic RAG pipeline so every answer comes with sources.',
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
