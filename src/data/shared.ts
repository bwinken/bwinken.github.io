/**
 * 兩種語言共用的資料（聯絡方式、社群連結等）。
 */
const allLinks = [
  { label: 'GitHub', href: 'https://github.com/bwinken' },
  // TODO: 填入 LinkedIn 個人頁網址，例如 'https://www.linkedin.com/in/xxx'（留空就不會顯示）
  { label: 'LinkedIn', href: '' },
  // TODO: 填入 Google Scholar 個人頁網址（留空就不會顯示）
  { label: 'Google Scholar', href: '' },
];

export const shared = {
  /** 拆成兩段，頁面上再用 JS 組回去，降低被爬蟲收集的機率 */
  email: { user: 'behwinken', domain: 'gmail.com' },
  /** 大頭照：放在 public/ 底下（例如 public/avatar.jpg）後填 '/avatar.jpg'；留空會顯示姓名縮寫 */
  avatar: '',
  /** 沒有大頭照時顯示的縮寫 */
  initials: 'WK',
  /** 只顯示有填網址的連結 */
  links: allLinks.filter((l) => l.href),
};
