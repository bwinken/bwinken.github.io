/**
 * 兩種語言共用的資料（聯絡方式、社群連結等）。
 * TODO: 換成你自己的資訊。
 */
export const shared = {
  /** 拆成兩段，頁面上再用 JS 組回去，降低被爬蟲收集的機率 */
  email: { user: 'your.name', domain: 'example.com' },
  /** 大頭照：放在 public/ 底下（例如 public/avatar.jpg）後填 '/avatar.jpg'；留空會顯示姓名縮寫 */
  avatar: '',
  /** 沒有大頭照時顯示的縮寫 */
  initials: 'BW',
  links: [
    { label: 'GitHub', href: 'https://github.com/bwinken' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
  ],
};
