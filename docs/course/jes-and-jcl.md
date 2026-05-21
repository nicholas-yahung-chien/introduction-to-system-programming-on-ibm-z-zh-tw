# JES 與 JCL 入門

本單元建立系統程式設計工作的批次處理基礎：先認識 system programmer 的角色，再理解 JES、JCL、job submission、job output、procedure 與 lab 環境。

## 學習脈絡

系統程式設計者需要能閱讀並操作批次工作。JES 負責工作進入、排程與輸出，JCL 則描述每個 job step、程式、資料集與訊息輸出。這一章把概念影片、Lab checklist 與前三個 JCL 練習串成同一條路徑。

## 本章目標

- 說明 JES 與 JCL 在 z/OS 批次處理中的角色。
- 辨識 JOB、EXEC、DD、MSGLEVEL、procedure 與 in-stream data。
- 知道 Lab exercise guide、Course Lab Kit 與 IBM Remote Lab Platform 的使用順序。

## 觀看順序

- 先看「系統程式設計」，建立角色與工作範圍。
- 接著看 JES/JCL 與提交 JCL 影片，再進入 Exercise 2 到 Exercise 4。
- 最後看 JCL procedure 與補充重點，完成本章 H5P 檢核。

## 影片

<VideoLesson
  title="系統程式設計"
  entry-id="1_y7shsh9a"
  video-src="/media/system-programming.mp4"
  subtitle-src="/subtitles/system-programming.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119078"
/>

<LessonNotes slug="system-programming" />

<VideoLesson
  title="JES 與 JCL 第 1 部分"
  entry-id="1_ev0bd4j9"
  video-src="/media/jes-and-jcl-part-1.mp4"
  subtitle-src="/subtitles/jes-and-jcl-part-1.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119026"
/>

<LessonNotes slug="jes-and-jcl-part-1" />

<VideoLesson
  title="JES 與 JCL 第 2 部分"
  entry-id="1_qq2x3dnn"
  video-src="/media/jes-and-jcl-part-2.mp4"
  subtitle-src="/subtitles/jes-and-jcl-part-2.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119034"
/>

<LessonNotes slug="jes-and-jcl-part-2" />

<VideoLesson
  title="提交與查看 JCL"
  entry-id="1_87joxm59"
  video-src="/media/submitting-and-viewing-jcl.mp4"
  subtitle-src="/subtitles/submitting-and-viewing-jcl.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119076"
/>

<LessonNotes slug="submitting-and-viewing-jcl" />

<VideoLesson
  title="Lab 熟悉環境：建立連線"
  entry-id="1_599iixml"
  video-src="/media/lab-familiarization-getting-connected.mp4"
  subtitle-src="/subtitles/lab-familiarization-getting-connected.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=226062"
/>

<LessonNotes slug="lab-familiarization-getting-connected" />

<VideoLesson
  title="Lab 熟悉環境：終端機與密碼問題"
  entry-id="1_jqny88jg"
  video-src="/media/lab-familiarization-terminal-and-password-issues.mp4"
  subtitle-src="/subtitles/lab-familiarization-terminal-and-password-issues.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=226063"
/>

<LessonNotes slug="lab-familiarization-terminal-and-password-issues" />

<VideoLesson
  title="JCL 程序"
  entry-id="1_67vf8cdm"
  video-src="/media/jcl-procedures.mp4"
  subtitle-src="/subtitles/jcl-procedures.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119067"
/>

<LessonNotes slug="jcl-procedures" />

<VideoLesson
  title="JCL 補充重點"
  entry-id="1_hytagu5v"
  video-src="/media/jcl-tidbits.mp4"
  subtitle-src="/subtitles/jcl-tidbits.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119033"
/>

<LessonNotes slug="jcl-tidbits" />

## 閱讀材料

- [JCL reference](https://www.ibm.com/docs/en/zos/latest?topic=reference-zos-mvs-jcl)
- [JES2 introduction](https://www.ibm.com/docs/en/zos/latest?topic=jes2-introduction)
- [Job control language statements](https://www.ibm.com/docs/en/zos/latest?topic=jcl-statements)

## 本章完成檢核

- 能說明 JES 如何接收與處理批次工作。
- 能看懂基本 JOB、EXEC、DD statement 與 job output。
- 能判斷何時回到 IBM Learn 原課程完成 Lab。
