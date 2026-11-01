import type { LocaleContent } from './types';

// 內容依據 2025/11 版履歷整理，請依現況更新。
export const zh: LocaleContent = {
  meta: {
    title: '馬咏治 Win-Ken Beh｜AI 工程師',
    description:
      'AI 工程師，專注於地端 LLM 平台、RAG 與 Agent 系統。臺大電機博士，目前任職於瑞鼎科技。',
  },
  name: 'Win-Ken (Kane) Beh 馬咏治',
  intro: [
    '我是瑞鼎科技的 AI 工程師，負責公司內部的生成式 AI 平台，從 GPU 硬體規劃、地端 LLM 部署，到檢索與 Agent 系統，都由我一個人從架構做到維運。',
    '2023 年在國立臺灣大學電機工程學研究所取得博士學位，發表論文 11 篇。',
  ],
  experience: [
    {
      role: 'AI 工程師',
      org: '瑞鼎科技',
      period: '2023 – 現在',
      highlights: [
        '從零建置企業內部知識管理平台：相容 OpenAI API 的 LLM 服務、RAG 與 Agent 協作流程',
        '規劃 GPU 伺服器規格、協調廠商，部署高吞吐量的 LLM 推論服務',
        '建立「PDF 解析 → 向量資料庫 → Agentic RAG」流程，支援內部技術文件搜尋',
      ],
    },
    {
      role: '實習生',
      org: '群聯電子',
      period: '2022',
      highlights: ['開發資料集精簡方法，在維持 AOI 檢測準確率下減少訓練資料'],
    },
  ],
  education: [
    { degree: '電機工程學研究所 博士', school: '國立臺灣大學', period: '2018 – 2023' },
    { degree: '電機工程學系 學士', school: '國立臺灣大學', period: '2014 – 2018' },
  ],
  skills: [
    { category: 'AI／LLM', items: ['地端 LLM 部署', 'OpenAI 相容 API', 'RAG', 'Agent'] },
    { category: '資料', items: ['PDF 解析', '資料清理', 'Embeddings', '向量資料庫'] },
    { category: '開發', items: ['Python', 'PyTorch', 'FastAPI', 'REST'] },
    { category: '基礎架構', items: ['Docker', 'Linux', 'GPU 管理'] },
  ],
  projectsLead: '我主要在做的，是讓 LLM 能正確讀懂大量的內部技術文件，並給出有出處的答案。',
  projects: [
    {
      title: 'EDA 工具助理：多 Agent 文件問答系統',
      meta: '瑞鼎科技 · 獨立設計與開發',
      description:
        '能理解工程師的問題，從約 7 萬頁的 EDA 廠商文件中找出正確答案，提升技術支援與除錯時的首答正確率。',
      figure: 'agents',
      highlight: true,
    },
    {
      title: '大規模 PDF 處理流程',
      meta: '瑞鼎科技',
      description: '自動處理約 10 萬頁含複雜圖表的 PDF，清理、正規化成可以直接給 RAG 使用的語料。',
      figure: 'pdf',
    },
    {
      title: 'Agentic RAG 檢索流程',
      meta: '瑞鼎科技',
      description: '針對大型技術文件庫設計「釐清問題 → 檢索 → 彙整證據」的流程，讓每個回答都有出處。',
      figure: 'rag',
    },
  ],
  // TODO: 從 Google Scholar 補上 11 篇論文；留空時整個區塊不會顯示
  publications: [],
  resume: '',
  ui: {
    experience: '經歷',
    skills: '技能',
    education: '學歷',
    projects: '專案',
    publications: '論文',
    resume: '履歷',
    photoAlt: '馬咏治的照片',
    switchLanguage: 'English',
    lastUpdated: '最後更新',
  },
};
