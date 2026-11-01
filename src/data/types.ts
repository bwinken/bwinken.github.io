export type Locale = 'zh' | 'en';

export interface Experience {
  company: string;
  role: string;
  /** 例如 "2023.07 – 現在" / "Jul 2023 – Present" */
  period: string;
  location?: string;
  /** 條列成果，建議用「動詞 + 做了什麼 + 量化結果」 */
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  /** 線上 demo 或產品網址 */
  link?: string;
  /** 原始碼網址 */
  repo?: string;
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/** 每種語言各一份的內容 */
export interface LocaleContent {
  meta: {
    title: string;
    description: string;
  };
  name: string;
  headline: string;
  location: string;
  /** 自我介紹，每個元素是一段 */
  about: string[];
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  /** 履歷 PDF 路徑（放在 public/ 底下），沒有就留空，按鈕會自動隱藏 */
  resume?: string;
  /** 介面上的固定文字 */
  ui: {
    nav: { about: string; experience: string; projects: string; skills: string; contact: string };
    sections: {
      about: string;
      experience: string;
      projects: string;
      skills: string;
      education: string;
      contact: string;
    };
    contactIntro: string;
    downloadResume: string;
    contactMe: string;
    emailMe: string;
    viewDemo: string;
    viewCode: string;
    toggleTheme: string;
    switchLanguage: string;
    lastUpdated: string;
  };
}
