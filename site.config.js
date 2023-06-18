const CONFIG = {
  // profile setting (required)
  profile: {
    name: "lucathree",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "currently developing life as a developer",
    email: "clee0627@gmail.com",
    linkedin: "",
    github: "lucathree",
    instagram: "",
  },
  projects: [
    {
      name: `개발 블로그`,
      href: "https://lucathree.com",
    },
  ],
  // blog setting (required)
  blog: {
    title: '루카쓰로그 Personal Edition',
    description: '보다 개인적인 생각들을 담은 루카쓰로그의 서브 페이지입니다.',
    theme: 'dark' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://personal.lucathree.com',
  since: 2021, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['노션', '블로그', '개발자', '일기', '감상'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: 'lucathree/lucathree.com',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }