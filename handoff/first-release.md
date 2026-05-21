# First Release Handoff

## Scope

- Course: `Introduction to System Programming on IBM Z`
- Source: https://learn.ibm.com/course/view.php?id=7512
- Locale: `zh-Hant-TW`
- Static site framework: VitePress

## Included

- Course landing page and three learner-facing unit pages.
- Course manifest captured from authenticated IBM Learn session.
- 24 video records with Kaltura entry IDs, HLS playback, English subtitles, and Traditional Chinese subtitles.
- 55 static practice questions: 21 from 8 H5P short quiz activities and 34 original paraphrased Badge Quiz scope review questions.
- 6 Lab metadata records.
- Glossary, license notes, README, release checklist, and verification scripts.

## Excluded

- Formal Badge Quiz scoring, attempt workflow, and verbatim question bank reproduction.
- Certificate, survey, badge claim, learner progress, and Lab runtime.

## Verification

Run `npm run verify:release` and `npm run subtitles:check` before publishing changes.
