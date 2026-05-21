# 維護流程指南

本文件供後續維護者使用，不屬於公開 VitePress 網站內容。

## 常用命令

```powershell
npm install
npm run dev
npm run subtitles:check
npm run verify:release
npm run media:package
```

重新擷取 IBM Learn：

```powershell
$env:IBM_LEARN_COURSE_ID='7512'
npm run capture:course
npm run capture:assets
npm run site:generate
```

## 維護原則

- 公開頁面只放學習者需要的導覽、摘要、影片、字幕、練習、Lab metadata 與授權資訊。
- Formal Badge Quiz attempt、certificate、survey、badge claim、Lab runtime 與 learner progress 一律回 IBM Learn。
- Badge Quiz 公開練習採原創改寫題，不公開重製 IBM 正式題庫原文。
- 修改練習題後必跑 `npm run practice:check`。
- 修改 manifest、Lab 或 activity 清單後必跑 `npm run course:inventory:check`。
- 修改影片、HLS 或字幕後必跑 `npm run subtitles:check` 與 `npm run media:package`。

## 目前狀態

- 24 支影片已下載 MP4、產生 HLS，並完成英文與繁體中文字幕。
- 8 個 H5P short quiz 已轉成 21 題靜態練習。
- Badge Quiz 範圍已整理成 34 題原創改寫的非計分綜合回顧題。
- 6 個 Lab 已整理為 metadata。
