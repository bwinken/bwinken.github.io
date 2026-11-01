import type { LocaleContent } from './types';

export const zh: LocaleContent = {
  meta: {
    title: '馬咏治 Win-Ken Beh｜AI Team Lead',
    description:
      'AI Team Lead，負責 AI 應用、AI 團隊 SDLC、Lakehouse 資料中台與資料治理，以及地端＋多雲的 in-house 推論服務。臺大電機博士。',
  },
  name: 'Win-Ken (Kane) Beh 馬咏治',
  intro: [
    '我是 AI Team Lead，帶領團隊把 AI 真正落地到企業內部。除了開發 AI 應用，我也負責定義團隊的軟體開發流程（SDLC）、建置 Lakehouse 架構的資料中台並推動資料治理，以及維運橫跨地端與多雲的 in-house 推論服務。',
    '我在國立臺灣大學電機工程學研究所攻讀博士，研究演算法，也有 IC 設計的背景。進入業界後轉向 AI，從工程師做起，到現在帶領整個團隊。',
  ],
  experience: [
    {
      // TODO: 確認職稱、何時升任 Team Lead
      role: 'AI Team Lead',
      org: '瑞鼎科技',
      period: '2023 – 現在',
      highlights: [
        '帶領 AI 團隊，並定義團隊的軟體開發流程（SDLC）',
        '建置 Lakehouse 架構的資料中台，推動資料治理',
        '建立 in-house 推論服務，採地端與多雲的混合架構',
        '開發 AI 應用，包含多 Agent 文件問答與 Agentic RAG',
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
    {
      degree: '電機工程學研究所 博士',
      school: '國立臺灣大學',
      period: '2018 – 2023',
      note: '研究方向：演算法',
    },
    { degree: '電機工程學系 學士', school: '國立臺灣大學', period: '2014 – 2018' },
  ],
  skills: [
    { category: '團隊與流程', items: ['團隊領導', 'AI 團隊 SDLC'] },
    { category: 'AI 應用', items: ['LLM', 'RAG', '多 Agent 系統', 'PDF 解析'] },
    { category: '平台', items: ['In-house 推論服務', '地端＋多雲混合架構', 'Docker', 'GPU 管理'] },
    { category: '資料', items: ['Lakehouse 資料中台', '資料治理', 'Embeddings', '向量資料庫'] },
    { category: '開發', items: ['Python', 'PyTorch', 'FastAPI'] },
    { category: '背景', items: ['演算法', 'IC 設計'] },
  ],
  projectsLead: '我的工作橫跨 AI 應用，以及支撐這些應用的推論服務、資料平台和開發流程。',
  projects: [
    {
      title: 'EDA 工具助理：多 Agent 文件問答系統',
      meta: 'AI 應用 · 獨立設計與開發',
      description:
        '能理解工程師的問題，從約 7 萬頁的 EDA 廠商文件中找出正確答案，提升技術支援與除錯時的首答正確率。',
      figure: 'agents',
      highlight: true,
    },
    {
      title: 'In-house 推論服務',
      meta: '平台',
      description: '公司內部自建的模型推論服務，採混合架構，同時運行在地端 GPU 與多個雲端上。',
      figure: 'inference',
    },
    {
      title: 'Lakehouse 資料中台與資料治理',
      meta: '資料',
      description: '以 Lakehouse 架構建置資料中台，並建立資料治理機制，作為各項 AI 應用的資料基礎。',
      figure: 'lakehouse',
    },
    {
      title: '大規模文件處理與檢索',
      meta: 'AI 應用',
      description:
        '自動處理約 10 萬頁含複雜圖表的 PDF，再透過「釐清問題 → 檢索 → 彙整證據」的 Agentic RAG 流程，讓每個回答都有出處。',
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
