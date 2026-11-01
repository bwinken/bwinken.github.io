# bwinken.github.io

個人求職網站，使用 [Astro](https://astro.build) 建置，部署在 GitHub Pages。

- 中文版：https://bwinken.github.io/
- 英文版：https://bwinken.github.io/en/

## 修改內容

所有文字都集中在 `src/data/`，一般情況下不需要動到元件：

| 檔案 | 內容 |
|---|---|
| `src/data/shared.ts` | 兩種語言共用：Email、大頭照、GitHub／LinkedIn 連結 |
| `src/data/zh.ts` | 中文內容：自我介紹、經歷、專案、技能、學歷 |
| `src/data/en.ts` | 英文內容（欄位與中文版相同） |

- **大頭照**：把圖片放到 `public/avatar.jpg`，再把 `shared.ts` 的 `avatar` 設為 `'/avatar.jpg'`。
- **履歷 PDF**：把檔案放到 `public/`（例如 `public/resume-zh.pdf`），再把 `zh.ts` / `en.ts` 的 `resume` 設為 `'/resume-zh.pdf'`。沒有設定時，「下載履歷」按鈕會自動隱藏。
- **新增經歷或專案**：在對應陣列裡多加一個物件即可。

## 本機開發

需要 Node.js 22 以上。

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # 輸出到 dist/
npm run preview   # 預覽 build 結果
```

## 部署

`.github/workflows/deploy.yml` 會在每次 push 到 `main` 時自動 build 並部署。

第一次使用時要開啟一次：repo **Settings → Pages → Build and deployment → Source** 選 **GitHub Actions**。

## 功能

- 中英雙語：首頁 `/` 是中文、`/en/` 是英文。第一次造訪且瀏覽器語言不是中文時，會自動導向英文版；使用者手動切換過語言後就不會再自動導向。
- 深色／淺色模式：預設跟隨系統，可手動切換並記住選擇。
- SEO：自動產生 `sitemap`、`hreflang`、Open Graph 標籤。
- Email 防爬蟲：Email 不直接寫在 HTML 裡，而是在瀏覽器端組出來。
- 列印友善：列印網頁時會隱藏按鈕和導覽列。
