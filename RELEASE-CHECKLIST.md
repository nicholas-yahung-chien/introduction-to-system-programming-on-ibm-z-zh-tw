# Release Checklist

## Content

- [ ] Confirm IBM Learn source URL is https://learn.ibm.com/course/view.php?id=7512
- [ ] Confirm public pages do not imply Lab runtime, formal quiz scoring, certificate, badge claim, or learner progress are hosted on this site.
- [ ] Confirm H5P static practice remains non-scoring.
- [ ] Confirm video assets are either deployed or clearly marked source-only.

## Verification

```powershell
npm run verify:release
```

## Deployment

- Cloudflare Pages project: `introduction-to-system-programming-on-ibm-z-zh-tw`
- GitHub Pages base path: `/introduction-to-system-programming-on-ibm-z-zh-tw/`
