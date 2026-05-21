# 課程網站範本化與經驗傳承

本專案沿用前兩個 IBM Learn 課程站的 VitePress 架構，轉置課程 `Introduction to System Programming on IBM Z`。

## 本課程套用重點

- IBM Learn 課程 URL：https://learn.ibm.com/course/view.php?id=7512
- 現場課程名稱：`Introduction to System Programming on IBM Z`
- 主要單元：JES 與 JCL 入門、系統程式設計元件、z/OSMF 與 UNIX System Services。
- 已登入擷取：5 個章節、53 個活動項目、24 支影片、8 個 H5P short quiz、6 個 Lab、1 個正式 Badge Quiz。
- 第一版公開範圍：課程導覽、影片 metadata、H5P 非計分靜態練習、Lab metadata、詞彙表、授權資訊。
- 第一版排除：影片 HLS / 字幕部署、正式 Badge Quiz 題庫、Lab runtime、certificate、survey、badge claim、learner progress。

## 重複流程

1. 使用已登入 IBM Learn session 開啟 7512 課程頁。
2. 執行 `npm run capture:course` 擷取課程頁與 page/H5P activity。
3. 執行 `npm run capture:assets` 擷取 live inventory、H5P 題目與 Kaltura entry ID。
4. 執行 `npm run site:generate` 依擷取結果重建 manifest、頁面與檢查資料。
5. 執行 `npm run verify:release` 驗證 GitHub / Cloudflare build、公開頁、內容品質、練習題與課程盤點。

## 媒體後續

影片目前全部標示為 `source-only`。若授權確認可部署媒體，沿用前兩站流程執行 `download:videos`、`generate:hls`、`subtitles:transcribe`、`subtitles:translate`、`subtitles:wrap` 與字幕檢查。
