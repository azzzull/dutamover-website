/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.dutamover.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/private/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/']
      }
    ],
    additionalSitemaps: [
      'https://www.dutamover.com/sitemap.xml',
    ]
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for specific paths
    const customPaths = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/layanan': { priority: 0.9, changefreq: 'weekly' },
      '/about': { priority: 0.8, changefreq: 'monthly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' },
      '/gallery': { priority: 0.7, changefreq: 'weekly' },
      '/faq': { priority: 0.8, changefreq: 'monthly' },
      '/proses-kerja': { priority: 0.8, changefreq: 'monthly' },
    }

    if (customPaths[path]) {
      return {
        loc: path,
        changefreq: customPaths[path].changefreq,
        priority: customPaths[path].priority,
        lastmod: new Date().toISOString(),
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  }
}
