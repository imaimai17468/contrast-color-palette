/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://contrast-color-palette.vercel.app/",
  generateRobotsTxt: true,
  // SEO強化のための追加設定
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/admin/*", "/private/*"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://contrast-color-palette.vercel.app/server-sitemap.xml",
    ],
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
  },
  // 動的ページのためのオプション
  transform: async (config, path) => {
    // 特定のページに異なる優先度や更新頻度を設定
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // 通常のページ
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
