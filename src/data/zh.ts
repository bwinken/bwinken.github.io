import type { LocaleContent } from './types';

// TODO: 以下皆為範例內容，請換成你自己的資料。
export const zh: LocaleContent = {
  meta: {
    title: '你的名字｜軟體工程師',
    description: '你的名字的個人網站：經歷、專案與聯絡方式。',
  },
  name: '你的名字',
  headline: '軟體工程師，專注於後端與雲端架構',
  location: '台灣・台北',
  about: [
    '我是一名擁有 X 年經驗的軟體工程師，擅長設計可擴展的後端服務，並重視程式品質與團隊協作。',
    '目前正在尋找〔職位類型〕的機會，希望在〔產業／領域〕持續成長。',
  ],
  experience: [
    {
      company: '〔公司名稱〕',
      role: '〔職稱〕',
      period: '2023.07 – 現在',
      location: '台北',
      highlights: [
        '主導〔某系統〕重構，將 API 回應時間降低 40%。',
        '導入 CI/CD 流程，部署頻率從每月一次提升到每週數次。',
      ],
    },
    {
      company: '〔前公司名稱〕',
      role: '〔職稱〕',
      period: '2021.07 – 2023.06',
      highlights: ['負責〔某功能〕從零到上線，服務 〔N〕 萬名使用者。'],
    },
  ],
  projects: [
    {
      name: '〔專案名稱〕',
      description: '一句話說明這個專案解決了什麼問題、你的角色，以及成果。',
      tech: ['TypeScript', 'React', 'PostgreSQL'],
      link: 'https://example.com',
      repo: 'https://github.com/bwinken',
    },
    {
      name: '〔專案名稱 2〕',
      description: '一句話說明這個專案解決了什麼問題、你的角色，以及成果。',
      tech: ['Python', 'FastAPI', 'Docker'],
      repo: 'https://github.com/bwinken',
    },
  ],
  skills: [
    { category: '程式語言', items: ['TypeScript', 'Python', 'Go'] },
    { category: '框架與工具', items: ['React', 'Node.js', 'Docker', 'Git'] },
    { category: '雲端與資料庫', items: ['AWS', 'PostgreSQL', 'Redis'] },
  ],
  education: [
    {
      school: '〔學校名稱〕',
      degree: '〔系所〕學士',
      period: '2017 – 2021',
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
