# Introduction to System Programming on IBM Z 靜態學習網站

本專案依照前兩個 IBM Learn 課程站的 VitePress 架構，為 IBM Learn 課程 `Introduction to System Programming on IBM Z` 建立台灣繁體中文靜態學習網站。

## 快速開始

```powershell
npm install
npm run dev
```

## 建置與驗證

```powershell
npm run subtitles:check
npm run verify:release
npm run media:package
```

GitHub Pages base path 為 `/introduction-to-system-programming-on-ibm-z-zh-tw/`，Cloudflare Pages 使用 `/`；部署版影片媒體預設從 `https://introduction-to-system-programming-on-ibm-z-media.pages.dev` 載入。

## 課程範圍

- IBM Learn: https://learn.ibm.com/course/view.php?id=7512
- 課程名稱：Introduction to System Programming on IBM Z
- 公開站台範圍：課程順序、影片播放與字幕、靜態練習、Lab metadata、詞彙表、授權資訊
- 原課程範圍：影片正式觀看進度、Lab runtime、正式 Badge Quiz attempt、certificate、survey、badge claim 與學習者進度

## 目前盤點結果

- Live course inventory：5 個章節、53 個活動項目
- 影片：24 支，已下載 MP4、產生 HLS，並完成英文與繁體中文字幕
- Lab：6 個 Exercise Lab 頁面
- 靜態練習：8 個 H5P short quiz 來源 21 題，加上 Badge Quiz 範圍綜合回顧 34 題，共 55 題
- Badge Quiz：正式 attempt 每次 20 題；本站只提供原創改寫的非計分複習題，正式評量仍回 IBM Learn

## 擷取與維護

登入 IBM Learn 並停在課程頁後，可重新擷取課程頁結構：

```powershell
$env:IBM_LEARN_COURSE_ID='7512'
npm run capture:course
node scripts/extract-live-course-assets.mjs
node scripts/build-system-programming-site.mjs
```

影片與字幕流程：

```powershell
npm run download:videos
npm run generate:hls
npm run subtitles:transcribe
npm run subtitles:translate
npm run subtitles:wrap
npm run subtitles:check
npm run media:package
```
