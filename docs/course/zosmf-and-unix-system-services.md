# z/OSMF 與 UNIX System Services

本單元把系統管理的瀏覽器介面與 UNIX 風格操作帶入 z/OS：學習 z/OSMF、REST API、workflow、USS file systems、ISHELL、HFS、processes 與 permissions。

## 學習脈絡

現代 z/OS 管理會同時使用傳統面板、JCL、瀏覽器介面與 UNIX shell。z/OSMF 提供 web-based 管理入口與 API，而 USS 讓 z/OS 能執行 UNIX 風格程序與檔案系統操作。

## 本章目標

- 說明 z/OSMF 的執行位置、必要元件與常見功能。
- 理解 USS、ISHELL、階層式檔案系統與檔案權限。
- 知道 Exercise 5 與 Exercise 6 應回 IBM Learn Lab 環境完成。

## 觀看順序

- 先看 z/OSMF 與 Lab 影片，完成 Exercise 5 前的概念準備。
- 再看 USS file systems 與 ISHELL Lab 影片，進入 Exercise 6。
- 最後看 USS processes and permissions，確認權限與目錄概念。

## 影片

<VideoLesson
  title="z/OSMF"
  entry-id="1_2nlec8ir"
  video-src="/media/zosmf.mp4"
  subtitle-src="/subtitles/zosmf.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=329951"
/>

<LessonNotes slug="zosmf" />

<VideoLesson
  title="Lab：使用 z/OSMF"
  entry-id="1_7ejss2uv"
  video-src="/media/lab-using-zosmf.mp4"
  subtitle-src="/subtitles/lab-using-zosmf.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119414"
/>

<LessonNotes slug="lab-using-zosmf" />

<VideoLesson
  title="UNIX System Services"
  entry-id="1_tte63slm"
  video-src="/media/unix-system-services.mp4"
  subtitle-src="/subtitles/unix-system-services.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119430"
/>

<LessonNotes slug="unix-system-services" />

<VideoLesson
  title="USS 檔案系統"
  entry-id="1_qhwqq81g"
  video-src="/media/uss-file-systems.mp4"
  subtitle-src="/subtitles/uss-file-systems.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119424"
/>

<LessonNotes slug="uss-file-systems" />

<VideoLesson
  title="Lab：ISHELL 與階層式檔案系統"
  entry-id="1_fabmoily"
  video-src="/media/lab-ishell-and-hierarchical-file-system.mp4"
  subtitle-src="/subtitles/lab-ishell-and-hierarchical-file-system.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119079"
/>

<LessonNotes slug="lab-ishell-and-hierarchical-file-system" />

<VideoLesson
  title="USS 程序與權限"
  entry-id="1_n310dnox"
  video-src="/media/uss-processes-and-permissions.mp4"
  subtitle-src="/subtitles/uss-processes-and-permissions.zh-Hant-TW.vtt"
  source-url="https://learn.ibm.com/mod/video/view.php?id=119438"
/>

<LessonNotes slug="uss-processes-and-permissions" />

## 閱讀材料

- [z/OSMF overview](https://www.ibm.com/docs/en/zosmf)
- [UNIX System Services overview](https://www.ibm.com/docs/en/zos/latest?topic=services-zos-unix-system)
- [z/OS UNIX file system](https://www.ibm.com/docs/en/zos/latest?topic=files-zos-unix-file-system)

## 本章完成檢核

- 能說明 z/OSMF 在 host 上執行並透過瀏覽器存取。
- 能辨識 root directory、UNIX file name 與 octal permission。
- 能說明 USS 與傳統 z/OS data set 的不同。
