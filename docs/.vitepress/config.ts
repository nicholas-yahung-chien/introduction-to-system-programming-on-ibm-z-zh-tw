import { defineConfig } from 'vitepress'

function normalizeBase(base: string | undefined) {
  if (!base) return '/introduction-to-system-programming-on-ibm-z-zh-tw/'
  const withLeadingSlash = base.startsWith('/') ? base : `/${base}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

const skipLocalMediaPublic = process.env.VITE_SKIP_LOCAL_MEDIA === '1'

export default defineConfig({
  title: 'Introduction to System Programming on IBM Z',
  description: 'IBM Z 系統程式設計入門課程台灣繁體中文靜態學習網站',
  lang: 'zh-Hant-TW',
  cleanUrls: true,
  base: normalizeBase(process.env.VITEPRESS_BASE),
  vite: skipLocalMediaPublic ? { publicDir: false } : undefined,
  head: [
    ['meta', { name: 'theme-color', content: '#0f62fe' }],
    ['meta', { property: 'og:title', content: 'Introduction to System Programming on IBM Z 台灣繁體中文課程' }],
    ['meta', { property: 'og:description', content: 'IBM Learn 課程的繁體中文靜態學習導覽、Lab 順序與術語整理。' }]
  ],
  themeConfig: {
    logo: '/ibm-z-mark.svg',
    nav: [
      { text: '課程', link: '/course/' },
      { text: '影片與活動', link: '/videos/' },
      { text: '互動練習', link: '/practice/' },
      { text: 'Lab 與互動實作', link: '/labs/' },
      { text: '詞彙表', link: '/glossary/' },
      { text: '授權資訊', link: '/license-notes' }
    ],
    sidebar: [
      {
        text: '課程',
        items: [
          { text: '課程首頁', link: '/course/' },
          { text: 'JES 與 JCL 入門', link: '/course/jes-and-jcl' },
          { text: '系統程式設計元件', link: '/course/system-programming-components' },
          { text: 'z/OSMF 與 USS', link: '/course/zosmf-and-unix-system-services' },
          { text: '互動練習', link: '/practice/' },
          { text: 'Lab 與互動實作', link: '/labs/' }
        ]
      },
      {
        text: '資源',
        items: [
          { text: '影片與活動', link: '/videos/' },
          { text: 'Lab 與互動實作', link: '/labs/' },
          { text: '詞彙表', link: '/glossary/' },
          { text: '授權資訊', link: '/license-notes' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nicholas-yahung-chien/introduction-to-system-programming-on-ibm-z-zh-tw' }
    ],
    footer: {
      message: 'IBM Learn 課程台灣繁體中文化教材，供 IBM Taiwan enablement 使用。',
      copyright: 'Prepared for IBM Taiwan enablement use.'
    },
    search: { provider: 'local' }
  }
})
