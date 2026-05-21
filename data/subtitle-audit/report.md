# Subtitle Alignment Audit

Generated at: 2026-05-21T21:32:12.436Z

This report checks structural alignment between English and Traditional Chinese WebVTT files. It catches deterministic issues such as mismatched cue counts, mismatched ids/timecodes, empty cues, punctuation-only cues, suspiciously short cues, likely merged cues, and near-duplicates. It does not prove semantic correctness; flagged windows should be reviewed against audio and source English cues.

## Summary

| Video | Kaltura | EN cues | ZH cues | High | Medium | Low |
| --- | --- | ---: | ---: | ---: | ---: | ---: |
| system-programming | 1_y7shsh9a | 72 | 72 | 0 | 1 | 0 |
| jes-and-jcl-part-1 | 1_ev0bd4j9 | 78 | 78 | 0 | 1 | 0 |
| jes-and-jcl-part-2 | 1_qq2x3dnn | 56 | 56 | 0 | 1 | 0 |
| submitting-and-viewing-jcl | 1_87joxm59 | 62 | 62 | 0 | 0 | 0 |
| lab-familiarization-getting-connected | 1_599iixml | 51 | 51 | 0 | 1 | 0 |
| lab-familiarization-terminal-and-password-issues | 1_jqny88jg | 176 | 176 | 0 | 3 | 0 |
| jcl-procedures | 1_67vf8cdm | 204 | 204 | 0 | 1 | 0 |
| jcl-tidbits | 1_hytagu5v | 17 | 17 | 0 | 1 | 0 |
| vsam | 1_9lmq9qq3 | 134 | 134 | 0 | 0 | 0 |
| zos-components | 1_9urmmmlw | 42 | 42 | 0 | 0 | 0 |
| zos-system-libraries | 1_ll8ls0vj | 85 | 85 | 0 | 1 | 0 |
| application-infrastructure-part-i | 1_zvt102vh | 79 | 79 | 0 | 0 | 0 |
| application-infrastructure-part-ii | 1_1wa1wszd | 61 | 61 | 0 | 4 | 0 |
| language-environment | 1_6tc3hwx2 | 22 | 22 | 0 | 3 | 0 |
| generation-data-groups | 1_mkn6kr2s | 69 | 69 | 0 | 0 | 0 |
| raim | 1_vmpwi0dd | 21 | 21 | 0 | 1 | 0 |
| networking | 1_6z54930n | 44 | 44 | 0 | 2 | 0 |
| utilities | 1_3sl59nke | 77 | 77 | 0 | 0 | 0 |
| zosmf | 1_2nlec8ir | 114 | 114 | 0 | 3 | 0 |
| lab-using-zosmf | 1_7ejss2uv | 9 | 9 | 0 | 0 | 0 |
| unix-system-services | 1_tte63slm | 84 | 84 | 0 | 1 | 0 |
| uss-file-systems | 1_qhwqq81g | 29 | 29 | 0 | 2 | 0 |
| lab-ishell-and-hierarchical-file-system | 1_fabmoily | 2 | 2 | 0 | 1 | 0 |
| uss-processes-and-permissions | 1_n310dnox | 95 | 95 | 0 | 1 | 0 |

## Priority Review Queue

- MEDIUM application-infrastructure-part-ii cue 2 00:00:09.280 --> 00:00:16.280: long_zh_cue - ZH length 53; 7.6 chars/sec
- MEDIUM application-infrastructure-part-ii cue 15 00:01:21.280 --> 00:01:27.280: long_zh_cue - ZH length 43; 7.2 chars/sec
- MEDIUM application-infrastructure-part-ii cue 35 00:03:13.280 --> 00:03:19.280: long_zh_cue - ZH length 53; 8.8 chars/sec
- MEDIUM application-infrastructure-part-ii cue 42 00:03:43.280 --> 00:03:50.280: long_zh_cue - ZH length 56; 8.0 chars/sec
- MEDIUM jcl-procedures cue 118 00:05:14.200 --> 00:05:15.400: long_zh_cue - ZH length 15; 12.5 chars/sec
- MEDIUM jcl-tidbits cue 8 00:01:01.440 --> 00:01:08.440: long_zh_cue - ZH length 47; 6.7 chars/sec
- MEDIUM jes-and-jcl-part-1 cue 2 00:00:07.570 --> 00:00:13.570: long_zh_cue - ZH length 50; 8.3 chars/sec
- MEDIUM jes-and-jcl-part-2 cue 13 00:00:53.780 --> 00:00:56.560: starts_with_punctuation - Chinese cue starts with punctuation
- MEDIUM lab-familiarization-getting-connected cue 32 00:02:39.830 --> 00:02:43.310: possibly_merged_zh_cue - Chinese cue has multiple sentence endings in a short time window
- MEDIUM lab-familiarization-terminal-and-password-issues cue 22 00:00:58.440 --> 00:00:59.700: long_zh_cue - ZH length 14; 11.1 chars/sec
- MEDIUM lab-familiarization-terminal-and-password-issues cue 23 00:00:59.700 --> 00:01:01.540: long_zh_cue - ZH length 27; 14.7 chars/sec
- MEDIUM lab-familiarization-terminal-and-password-issues cue 29 00:01:12.320 --> 00:01:14.020: long_zh_cue - ZH length 24; 14.1 chars/sec
- MEDIUM lab-ishell-and-hierarchical-file-system cue 1 00:00:03.180 --> 00:00:10.180: long_zh_cue - ZH length 43; 6.1 chars/sec
- MEDIUM language-environment cue 3 00:00:17.310 --> 00:00:25.310: long_zh_cue - ZH length 48; 6.0 chars/sec
- MEDIUM language-environment cue 4 00:00:25.310 --> 00:00:35.310: long_zh_cue - ZH length 67; 6.7 chars/sec
- MEDIUM language-environment cue 16 00:01:50.310 --> 00:02:01.310: long_zh_cue - ZH length 61; 5.5 chars/sec
- MEDIUM networking cue 1 00:00:03.410 --> 00:00:19.410: long_zh_cue - ZH length 88; 5.5 chars/sec
- MEDIUM networking cue 36 00:04:22.410 --> 00:04:29.410: long_zh_cue - ZH length 43; 6.1 chars/sec
- MEDIUM raim cue 14 00:01:19.500 --> 00:01:27.620: long_zh_cue - ZH length 47; 5.8 chars/sec
- MEDIUM system-programming cue 3 00:00:10.440 --> 00:00:13.440: possibly_merged_zh_cue - Chinese cue has multiple sentence endings in a short time window
- MEDIUM unix-system-services cue 50 00:03:20.140 --> 00:03:26.860: long_zh_cue - ZH length 49; 7.3 chars/sec
- MEDIUM uss-file-systems cue 12 00:00:41.900 --> 00:00:47.260: semantic_neighbor_drift - ZH contains LPAR, but EN cue 13 contains that term
- MEDIUM uss-file-systems cue 29 00:01:45.180 --> 00:01:46.820: long_zh_cue - ZH length 20; 12.2 chars/sec
- MEDIUM uss-processes-and-permissions cue 57 00:04:41.380 --> 00:04:43.380: possibly_merged_zh_cue - Chinese cue has multiple sentence endings in a short time window
- MEDIUM zos-system-libraries cue 47 00:04:17.080 --> 00:04:24.580: long_zh_cue - ZH length 49; 6.5 chars/sec
- MEDIUM zosmf cue 8 00:00:18.800 --> 00:00:20.840: semantic_neighbor_drift - ZH contains z/OS, but EN cue 9 contains that term
- MEDIUM zosmf cue 66 00:02:38.160 --> 00:02:43.160: long_zh_cue - ZH length 45; 9.0 chars/sec
- MEDIUM zosmf cue 67 00:02:44.640 --> 00:02:46.600: long_zh_cue - ZH length 30; 15.3 chars/sec

## All Issues

| Severity | Type | Video | Kaltura | Cue | Time | Details |
| --- | --- | --- | --- | --- | --- | --- |
| medium | long_zh_cue | application-infrastructure-part-ii | 1_1wa1wszd | 2 | 00:00:09.280-00:00:16.280 | ZH length 53; 7.6 chars/sec |
| | | | | | EN | When I first started working on Z-Systems, I heard these said together so often that I thought it was two things, Kix, IMS, and DB2. |
| | | | | | ZH | 剛開始從事Z-Systems工作時，常聽到這三者一起提及，讓我一度以為是兩個東西：
Kix，IMS與DB2。 |
| medium | long_zh_cue | application-infrastructure-part-ii | 1_1wa1wszd | 15 | 00:01:21.280-00:01:27.280 | ZH length 43; 7.2 chars/sec |
| | | | | | EN | A Kix system manages an area of storage called a region, which lives in an address space. |
| | | | | | ZH | Kix系統管理一個稱為region的儲存區域，該區域存在於address
space中。 |
| medium | long_zh_cue | application-infrastructure-part-ii | 1_1wa1wszd | 35 | 00:03:13.280-00:03:19.280 | ZH length 53; 8.8 chars/sec |
| | | | | | EN | Then there's the AOR for application owning region, and the DOR for data owning region. |
| | | | | | ZH | 還有AOR，application owning region，以及DOR，
data owning region。 |
| medium | long_zh_cue | application-infrastructure-part-ii | 1_1wa1wszd | 42 | 00:03:43.280-00:03:50.280 | ZH length 56; 8.0 chars/sec |
| | | | | | EN | IMS, Information Management System, has a long and interesting history as well, which includes some development done for NASA. |
| | | | | | ZH | IMS（Information Management
System）有著悠久且有趣的歷史，包含為 NASA 開發的部分。 |
| medium | long_zh_cue | jcl-procedures | 1_67vf8cdm | 118 | 00:05:14.200-00:05:15.400 | ZH length 15; 12.5 chars/sec |
| | | | | | EN | referencing other procedures. |
| | | | | | ZH | 程序不能無限制地參考其他程序。 |
| medium | long_zh_cue | jcl-tidbits | 1_hytagu5v | 8 | 00:01:01.440-00:01:08.440 | ZH length 47; 6.7 chars/sec |
| | | | | | EN | They have to be separate. So proc pend, then proc pend, not proc proc pend. Pretty cool, right? |
| | | | | | ZH | 它們必須分開。寫 proc pend，再寫 proc pend，不要 proc
proc pend。很酷吧？ |
| medium | long_zh_cue | jes-and-jcl-part-1 | 1_ev0bd4j9 | 2 | 00:00:07.570-00:00:13.570 | ZH length 50; 8.3 chars/sec |
| | | | | | EN | If you're keeping track of acronyms at home, that's Job Entry Subsystem and Job Control Language. |
| | | | | | ZH | 如果你在家記縮寫，這指的是 Job Entry Subsystem 和 Job
Control Language。 |
| medium | starts_with_punctuation | jes-and-jcl-part-2 | 1_qq2x3dnn | 13 | 00:00:53.780-00:00:56.560 | Chinese cue starts with punctuation |
| | | | | | EN | slashes and then a blank space. |
| | | | | | ZH | // 之後留一格。 |
| medium | possibly_merged_zh_cue | lab-familiarization-getting-connected | 1_599iixml | 32 | 00:02:39.830-00:02:43.310 | Chinese cue has multiple sentence endings in a short time window |
| | | | | | EN | probably just have to wait a little while for it to come back online. No big |
| | | | | | ZH | 可能只需要等待一會兒，系統就會重新上線。沒什麼大問題。 |
| medium | long_zh_cue | lab-familiarization-terminal-and-password-issues | 1_jqny88jg | 22 | 00:00:58.440-00:00:59.700 | ZH length 14; 11.1 chars/sec |
| | | | | | EN | I've got some PDFs. |
| | | | | | ZH | 還有一些 PCOM 連線啟動器， |
| medium | long_zh_cue | lab-familiarization-terminal-and-password-issues | 1_jqny88jg | 23 | 00:00:59.700-00:01:01.540 | ZH length 27; 14.7 chars/sec |
| | | | | | EN | I've got some PCOM session, |
| | | | | | ZH | Personal Communications 的啟動器。 |
| medium | long_zh_cue | lab-familiarization-terminal-and-password-issues | 1_jqny88jg | 29 | 00:01:12.320-00:01:14.020 | ZH length 24; 14.1 chars/sec |
| | | | | | EN | I mean, it might be, but it probably isn't. |
| | | | | | ZH | 輸入 T-S-O-B-A 24，然後按下 Enter。 |
| medium | long_zh_cue | lab-ishell-and-hierarchical-file-system | 1_fabmoily | 1 | 00:00:03.180-00:00:10.180 | ZH length 43; 6.1 chars/sec |
| | | | | | EN | Let's check out iShell. iShell is a way of performing Unix system service commands from an ISPF panel. |
| | | | | | ZH | 讓我們來看看 iShell。iShell 是從 ISPF 面板執行 Unix
系統服務指令的方法。 |
| medium | long_zh_cue | language-environment | 1_6tc3hwx2 | 3 | 00:00:17.310-00:00:25.310 | ZH length 48; 6.0 chars/sec |
| | | | | | EN | The mainframe supports a number of languages, including those you may think of as mainframe-specific, like COBOL, Fortran, and PL-1, |
| | | | | | ZH | 大型主機支援多種語言，包括你可能會認為是主機專用的語言，如 COBOL、
Fortran 和 PL-1， |
| medium | long_zh_cue | language-environment | 1_6tc3hwx2 | 4 | 00:00:25.310-00:00:35.310 | ZH length 67; 6.7 chars/sec |
| | | | | | EN | to more industry-standard languages like Assembler, C, C++, and Java, and right on up to some of the newer, hotter languages like Python, Swift, and Node.js. |
| | | | | | ZH | 還有較為業界標準的語言，如 Assembler、C、C++ 和 Java，
以及較新且熱門的語言，如 Python、Swift 和 Node.js。 |
| medium | long_zh_cue | language-environment | 1_6tc3hwx2 | 16 | 00:01:50.310-00:02:01.310 | ZH length 61; 5.5 chars/sec |
| | | | | | EN | On ZOS, there is this concept of a language environment and the reason we have it is to provide a common environment for all participating high-level languages or HLLs. |
| | | | | | ZH | 在 ZOS 中，有語言環境（Language Environment,
LE）的概念，目的是提供所有高階語言（HLL）共用的環境。 |
| medium | long_zh_cue | networking | 1_6z54930n | 1 | 00:00:03.410-00:00:19.410 | ZH length 88; 5.5 chars/sec |
| | | | | | EN | Chances are you want your mainframe on a network of some sort, maybe not the internet, but back in Course 1 we talked about all the PCIe adapters that a system can have, and chances are some of those are OSA, or Open Systems Adapters. |
| | | | | | ZH | 您很可能希望您的大型主機連接到某種網路，可能不是網際網路，
但在第一課我們討論過系統可擁有的所有PCIe介面卡，而其中一些可能是OSA，
即Open Systems Adapters。 |
| medium | long_zh_cue | networking | 1_6z54930n | 36 | 00:04:22.410-00:04:29.410 | ZH length 43; 6.1 chars/sec |
| | | | | | EN | They've got two LPARs, each defined with the same VIPA, in addition to their own unique IP addresses for each network link. |
| | | | | | ZH | 他們有兩個 LPAR，每個都定義相同的 VIPA，同時每個網路連結也有自己的獨特
IP 位址。 |
| medium | long_zh_cue | raim | 1_vmpwi0dd | 14 | 00:01:19.500-00:01:27.620 | ZH length 47; 5.8 chars/sec |
| | | | | | EN | Like I said, this was introduced with IBM Z196 in 2010, and every server that's come out after will include this RAME memory. |
| | | | | | ZH | 正如我說的，這是在2010年隨IBM Z196引進的，
之後的每台伺服器都包含這種RAME記憶體。 |
| medium | possibly_merged_zh_cue | system-programming | 1_y7shsh9a | 3 | 00:00:10.440-00:00:13.440 | Chinese cue has multiple sentence endings in a short time window |
| | | | | | EN | What's a system programmer? I'm so glad you asked. |
| | | | | | ZH | 什麼是系統程式設計師？很高興你問了這個問題。 |
| medium | long_zh_cue | unix-system-services | 1_tte63slm | 50 | 00:03:20.140-00:03:26.860 | ZH length 49; 7.3 chars/sec |
| | | | | | EN | When you want to make a directory, which is just another word for folder, use mkdir, short |
| | | | | | ZH | 當你想建立目錄，也就是資料夾的另一種說法時，使用mkdir，它是make
directory的縮寫。 |
| medium | semantic_neighbor_drift | uss-file-systems | 1_qhwqq81g | 12 | 00:00:41.900-00:00:47.260 | ZH contains LPAR, but EN cue 13 contains that term |
| | | | | | EN | we forward all the transactions and requests associated with one file |
| | | | | | ZH | 將所有與一個檔案有關的交易與請求轉發給擁有的LPAR。 |
| medium | long_zh_cue | uss-file-systems | 1_qhwqq81g | 29 | 00:01:45.180-00:01:46.820 | ZH length 20; 12.2 chars/sec |
| | | | | | EN | Again, my name is Lisa Martinez. |
| | | | | | ZH | 再次介紹，我是Lisa Martinez。 |
| medium | possibly_merged_zh_cue | uss-processes-and-permissions | 1_n310dnox | 57 | 00:04:41.380-00:04:43.380 | Chinese cue has multiple sentence endings in a short time window |
| | | | | | EN | Good job, guys. Take five. |
| | | | | | ZH | 幹得好，各位。休息五分鐘。 |
| medium | long_zh_cue | zos-system-libraries | 1_ll8ls0vj | 47 | 00:04:17.080-00:04:24.580 | ZH length 49; 6.5 chars/sec |
| | | | | | EN | Similarly, there's a VLF, or Virtual Lookaside Facility, which is used to store named objects in virtual storage |
| | | | | | ZH | 類似地，有 Virtual Lookaside Facility，VLF，
用於在虛擬儲存中存放命名物件， |
| medium | semantic_neighbor_drift | zosmf | 1_2nlec8ir | 8 | 00:00:18.800-00:00:20.840 | ZH contains z/OS, but EN cue 9 contains that term |
| | | | | | EN | After all, the fundamentals of |
| | | | | | ZH | 畢竟，z/OS 的基本原理 |
| medium | long_zh_cue | zosmf | 1_2nlec8ir | 66 | 00:02:38.160-00:02:43.160 | ZH length 45; 9.0 chars/sec |
| | | | | | EN | like Kix, DB2, MQ, IMS, WebSphere Liberty, and ZOS Connect. |
| | | | | | ZH | 例如 Kix、DB2、MQ、IMS、WebSphere Liberty 和 ZOS
Connect。 |
| medium | long_zh_cue | zosmf | 1_2nlec8ir | 67 | 00:02:44.640-00:02:46.600 | ZH length 30; 15.3 chars/sec |
| | | | | | EN | This is just a way to make it even easier |
| | | | | | ZH | 這只是讓 ZOS 環境與 Ansible 生態系統更容易連接的方式。 |
