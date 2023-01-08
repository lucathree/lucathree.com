const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'lucathree',
    image: '/notion-avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'backend developer',
    bio: 'currently developing life as a developer',
    email: 'clee0627@gmail.com',
    linkedin: '',
    github: 'lucathree',
    instagram: '',
  },
  projects: [
    // {
    //   name: 'Untilled',
    //   href: 'https://untilled.web.app'
    // }
  ],
  // blog setting (required)
  blog: {
    title: '루카쓰로그 v2.0',
    description: '개발자의 삶을 개발 중입니다',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://lucathree.vercel.app',
  since: 2021, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['노션', '블로그', '개발자', '회고', '비전공자'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
