# 維護流程指南

本文件供後續維護者使用，不屬於公開 VitePress 網站內容。

## 常用命令

```powershell
npm install
npm run dev
npm run verify:release
```

重新擷取 IBM Learn：

```powershell
$env:IBM_LEARN_COURSE_ID='7512'
npm run capture:course
npm run capture:assets
npm run site:generate
```

## 維護原則

- 公開頁面只放學習者需要的導覽、摘要、練習、Lab metadata 與授權資訊。
- Formal Badge Quiz、certificate、survey、badge claim、Lab runtime 與 learner progress 一律回 IBM Learn。
- 影片未部署前維持 `mediaStatus: "source-only"`，避免公開頁暗示本站可播放影片。
- 修改練習題後必跑 `npm run practice:check`。
- 修改 manifest、Lab 或 activity 清單後必跑 `npm run course:inventory:check`。

## 目前第一版狀態

- 24 支影片 metadata 已擷取。
- 8 個 H5P short quiz 已轉成 21 題靜態練習。
- 6 個 Lab 已整理為 metadata。
- Badge Quiz 題庫尚未重製，正式 attempt 每次 20 題。
