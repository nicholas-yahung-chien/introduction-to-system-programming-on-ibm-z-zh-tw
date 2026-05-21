# 系統程式設計元件

本單元整理 z/OS system programmer 會接觸的核心元件：VSAM、system libraries、application infrastructure、Language Environment、GDG、RAIM、networking 與 utilities。

## 學習脈絡

System programmer 的工作不只提交 JCL，也要理解作業系統程式庫、執行環境、資料存取、記憶體可靠性與常用公用程式如何共同支撐企業工作負載。這一章提供跨元件的地圖。

## 本章目標

- 辨識常見 z/OS system libraries 與用途。
- 理解 Language Environment、application infrastructure 與資料存取元件的定位。
- 建立 RAIM、networking、utilities 與 GDG 的基本概念。

## 觀看順序

- 先看 VSAM、z/OS components 與 system libraries。
- 再看 application infrastructure 與 Language Environment。
- 最後看 GDG、RAIM、networking 與 utilities，並完成對應檢核。

## 影片

<VideoLesson
  title="VSAM"
  entry-id="1_9lmq9qq3"
  video-src="/media/vsam.mp4"
  subtitle-src="/subtitles/vsam.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119429"
/>

<LessonNotes slug="vsam" />

<VideoLesson
  title="z/OS 元件"
  entry-id="1_9urmmmlw"
  video-src="/media/zos-components.mp4"
  subtitle-src="/subtitles/zos-components.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119432"
/>

<LessonNotes slug="zos-components" />

<VideoLesson
  title="z/OS 系統程式庫"
  entry-id="1_ll8ls0vj"
  video-src="/media/zos-system-libraries.mp4"
  subtitle-src="/subtitles/zos-system-libraries.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119077"
/>

<LessonNotes slug="zos-system-libraries" />

<VideoLesson
  title="應用程式基礎架構第 1 部分"
  entry-id="1_zvt102vh"
  video-src="/media/application-infrastructure-part-i.mp4"
  subtitle-src="/subtitles/application-infrastructure-part-i.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119435"
/>

<LessonNotes slug="application-infrastructure-part-i" />

<VideoLesson
  title="應用程式基礎架構第 2 部分"
  entry-id="1_1wa1wszd"
  video-src="/media/application-infrastructure-part-ii.mp4"
  subtitle-src="/subtitles/application-infrastructure-part-ii.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119433"
/>

<LessonNotes slug="application-infrastructure-part-ii" />

<VideoLesson
  title="Language Environment"
  entry-id="1_6tc3hwx2"
  video-src="/media/language-environment.mp4"
  subtitle-src="/subtitles/language-environment.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119415"
/>

<LessonNotes slug="language-environment" />

<VideoLesson
  title="Generation Data Group"
  entry-id="1_mkn6kr2s"
  video-src="/media/generation-data-groups.mp4"
  subtitle-src="/subtitles/generation-data-groups.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119426"
/>

<LessonNotes slug="generation-data-groups" />

<VideoLesson
  title="RAIM"
  entry-id="1_vmpwi0dd"
  video-src="/media/raim.mp4"
  subtitle-src="/subtitles/raim.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119427"
/>

<LessonNotes slug="raim" />

<VideoLesson
  title="網路"
  entry-id="1_6z54930n"
  video-src="/media/networking.mp4"
  subtitle-src="/subtitles/networking.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119446"
/>

<LessonNotes slug="networking" />

<VideoLesson
  title="公用程式"
  entry-id="1_3sl59nke"
  video-src="/media/utilities.mp4"
  subtitle-src="/subtitles/utilities.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119431"
/>

<LessonNotes slug="utilities" />

## 閱讀材料

- [z/OS system libraries](https://www.ibm.com/docs/en/zos-basic-skills?topic=concepts-system-libraries)
- [Language Environment overview](https://www.ibm.com/docs/en/zos/latest?topic=environment-introduction-language)
- [VSAM overview](https://www.ibm.com/docs/en/zos/latest?topic=sets-vsam-data)

## 本章完成檢核

- 能描述 SYS1.LINKLIB、SYS1.PROCLIB、SYS1.PARMLIB 的常見用途。
- 能說明 compiler、runtime 與 Language Environment 的關係。
- 能把 RAIM、GDG、utilities 等詞彙放回系統程式設計情境。
