# bwinken.github.io

個人求職網站，使用 [Astro](https://astro.build) 建置，部署在 GitHub Pages。

- 中文版：https://bwinken.github.io/
- 英文版：https://bwinken.github.io/en/

## 修改內容

所有文字都集中在 `src/data/`，一般情況下不需要動到元件：

| 檔案 | 內容 |
|---|---|
| `src/data/shared.ts` | 兩種語言共用：Email、大頭照、GitHub／LinkedIn／Google Scholar 連結（留空的連結不會顯示） |
| `src/data/zh.ts` | 中文內容：自我介紹、經歷、技能、學歷、專案、論文 |
| `src/data/en.ts` | 英文內容（欄位與中文版相同） |

- **大頭照**：把圖片放到 `public/avatar.jpg`，再把 `shared.ts` 的 `avatar` 設為 `'/avatar.jpg'`。
- **履歷 PDF**：把檔案放到 `public/`（例如 `public/resume-zh.pdf`），再把 `zh.ts` / `en.ts` 的 `resume` 設為 `'/resume-zh.pdf'`。設定後連結列會多出「履歷／CV」連結。
- **新增經歷或專案**：在對應陣列裡多加一個物件即可。專案的 `highlight: true` 會加上淡黃底色，`figure` 選擇示意圖（`agents`／`pdf`／`rag`，圖在 `src/components/ProjectFigure.astro`）。
- **論文**：填進 `publications` 陣列；空的時候整個「論文」區塊不會顯示。

## 設計框架

採用「經典學術頁」風格，規則寫在 `src/styles/global.css` 開頭：

- 單欄、最大寬度 800px；連結就是藍色文字，不用卡片、陰影
- 經歷是由左到右的時間軸（工作和學歷合在一起，由舊到新，最右邊的目前工作欄位較寬；手機上改成直式、最新在上）；技能用方角細框標籤
- 由上而下：姓名與介紹 → 經歷時間軸 → 技能標籤 → 專案
- 字體：英文 Lato（自架，不連外部字型服務）、中文用系統黑體
- 字級只用 13 / 15 / 16 / 21 / 30；顏色都用 CSS 變數，深色模式跟隨系統

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
- 深色模式：跟隨系統設定。
- SEO：自動產生 `sitemap`、`hreflang`、Open Graph 標籤。
- Email 防爬蟲：Email 不直接寫在 HTML 裡，而是在瀏覽器端組出來。
- 列印友善：列印網頁時會隱藏語言切換連結。
