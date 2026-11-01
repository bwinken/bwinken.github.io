export type Locale = 'zh' | 'en';

export interface Experience {
  role: string;
  org: string;
  /** 例如 "2023 – 現在" / "2023 – Present" */
  period: string;
  /** 一到三點重點，建議用「做了什麼 + 規模或結果」 */
  highlights?: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  /** 補充說明，例如研究方向 */
  note?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/** 專案示意圖：對應 src/components/figures/ 裡的線條圖 */
export type FigureName = 'agents' | 'pdf' | 'rag' | 'inference' | 'lakehouse';

export interface Project {
  title: string;
  /** 標題下方的小字，例如「AI 應用 · 獨立設計與開發」 */
  meta: string;
  description: string;
  figure: FigureName;
  /** 重點作品：以淡黃底色標示 */
  highlight?: boolean;
  /** 有公開網址時才填 */
  link?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  link?: string;
}

/** 每種語言各一份的內容 */
export interface LocaleContent {
  meta: { title: string; description: string };
  /** 頁面最上方的大名 */
  name: string;
  /** 自我介紹，每個元素是一段；可以直接寫 HTML，例如 <a href="...">瑞鼎科技</a> */
  intro: string[];
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  projectsLead?: string;
  projects: Project[];
  publications: Publication[];
  /** 履歷 PDF 路徑（放在 public/ 底下），留空就不顯示 */
  resume?: string;
  ui: {
    experience: string;
    skills: string;
    education: string;
    projects: string;
    publications: string;
    resume: string;
    photoAlt: string;
    switchLanguage: string;
    lastUpdated: string;
  };
}
