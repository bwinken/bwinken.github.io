import type { LocaleContent } from './types';

// 內容依據 2025/11 版履歷整理，請依現況更新。
export const zh: LocaleContent = {
  meta: {
    title: '馬咏治 Win-Ken Beh｜AI 工程師',
    description:
      'AI 工程師，專注於地端 LLM 平台、RAG 與 Agent 系統。臺大電機博士，目前任職於瑞鼎科技。',
  },
  name: '馬咏治',
  headline: 'AI 工程師｜地端 LLM 平台・RAG・Agent 系統',
  location: '台灣',
  about: [
    '我是 AI 工程師，專長是在企業內部從零打造生成式 AI 系統：從規劃 GPU 硬體、部署相容 OpenAI API 的 LLM 推論服務，到建置 Agentic RAG 與多 Agent 協作流程，一個人負責從架構設計、開發到上線維運的完整流程。',
    '畢業於國立臺灣大學電機工程學研究所（博士），發表論文 11 篇、被引用 271 次。',
  ],
  experience: [
    {
      company: '瑞鼎科技 Raydium',
      role: 'AI 工程師',
      period: '2023.07 – 現在',
      highlights: [
        '從零建置企業內部知識管理平台（生成式 AI），包含相容 OpenAI API 的 LLM／多模態模型服務、RAG 與 Agent 協作流程。',
        '規劃 GPU 伺服器與工作站規格、協調廠商採購，並部署高吞吐量的 LLM 推論服務。',
        '打造「PDF 解析 → 向量資料庫 → Agentic RAG」流程，支援公司內部的技術文件搜尋。',
        '獨立負責從架構設計、開發、部署到維運的完整生命週期。',
      ],
    },
    {
      company: '群聯電子 Phison',
      role: '實習生（資料集精簡）',
      period: '2022.10 – 2022.11',
      highlights: ['開發資料集精簡方法，在維持 AOI（自動光學檢測）模型準確率的前提下，找出真正有效的訓練資料。'],
    },
  ],
  projects: [
    {
      name: '大規模 PDF 處理流程',
      description:
        '自動化處理約 10 萬頁 PDF，包含複雜的圖表與表格，將非結構化文件清理、正規化為可直接用於 RAG 的高品質語料。',
      tech: ['Python', 'PDF 解析', 'Embeddings', '向量資料庫'],
    },
    {
      name: 'EDA 工具助理（多 Agent 系統）',
      description:
        '獨立設計並實作多 Agent 系統，能理解使用者問題，從約 7 萬頁的 EDA 廠商文件中找出正確答案，提升技術支援與除錯時的首答正確率。',
      tech: ['LLM', 'Multi-Agent', 'Agentic RAG', 'FastAPI'],
    },
    {
      name: 'Agentic RAG 檢索系統',
      description:
        '針對大型技術文件庫設計「問題釐清 → 檢索 → 證據彙整」的檢索流程，讓回答有明確的出處依據。',
      tech: ['RAG', 'Agent', '向量資料庫'],
    },
  ],
  skills: [
    { category: 'AI／LLM', items: ['地端 LLM 部署', 'OpenAI 相容 API', 'RAG', 'Agent'] },
    { category: '資料處理', items: ['PDF 解析', '資料清理', 'Embeddings', '向量資料庫'] },
    { category: '程式語言與框架', items: ['Python', 'PyTorch'] },
    { category: '基礎架構', items: ['Docker', 'Linux', 'GPU 管理'] },
    { category: '後端／前端', items: ['FastAPI', 'REST API', '內部工具前端'] },
  ],
  education: [
    {
      school: '國立臺灣大學',
      degree: '電機工程學研究所 博士',
      period: '2018 – 2023',
    },
    {
      school: '國立臺灣大學',
      degree: '電機工程學系 學士',
      period: '2014 – 2018',
    },
  ],
  resume: '',
  ui: {
    nav: { about: '關於', experience: '經歷', projects: '專案', skills: '技能', contact: '聯絡' },
    sections: {
      about: '關於我',
      experience: '工作經歷',
      projects: '專案作品',
      skills: '技能',
      education: '學歷',
      contact: '聯絡我',
    },
    contactIntro: '對我的背景有興趣，或有適合的職缺？歡迎寄信給我，我會盡快回覆。',
    downloadResume: '下載履歷',
    contactMe: '聯絡我',
    emailMe: '寄信給我',
    viewDemo: '線上展示',
    viewCode: '原始碼',
    toggleTheme: '切換深色／淺色模式',
    switchLanguage: 'English',
    lastUpdated: '最後更新',
  },
};
