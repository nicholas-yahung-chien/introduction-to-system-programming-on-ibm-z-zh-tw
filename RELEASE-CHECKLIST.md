# Release Checklist

## Content

- [ ] Confirm IBM Learn source URL is https://learn.ibm.com/course/view.php?id=7512
- [ ] Confirm public pages do not imply Lab runtime, formal quiz scoring, certificate, badge claim, or learner progress are hosted on this site.
- [ ] Confirm H5P static practice and Badge Quiz scope practice remain non-scoring.
- [ ] Confirm video assets, HLS playlists, and subtitles are deployed or clearly documented if unavailable.

## Verification

```powershell
npm run subtitles:check
npm run verify:release
```

## Deployment

- Cloudflare Pages project: `introduction-to-system-programming-on-ibm-z-zh-tw`
- Cloudflare media project: `introduction-to-system-programming-on-ibm-z-media`
- GitHub Pages base path: `/introduction-to-system-programming-on-ibm-z-zh-tw/`
