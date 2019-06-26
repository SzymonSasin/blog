const blogUrl = 'https://blog.sasin.eu'
module.exports = {
  title: 'Yet another technical blog',
  description: 'A wasy to share my passion for solving problems, sometimes with a help of code.',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  plugins: {
    'sitemap': {
      hostname: blogUrl
    },
    'feed':{
      canonical_base: blogUrl
    }
  },
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     * Workaround of https://github.com/ulivz/vuepress-plugin-blog/issues/1
     */
    modifyBlogPluginOptions(blogPlugnOptions) {
      const archiveDirectoryClassifierIndex = blogPlugnOptions.directories.findIndex(d => d.id === 'archive')
      blogPlugnOptions.directories.splice(archiveDirectoryClassifierIndex, 1)
      return blogPlugnOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/assassyn',
        },
      ],
      sitemap: [
        {
          type: 'sitemap',
          link: 'https://blog.sasin.eu/sitemap.xml',
        },
        ],
      copyright: [
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '/images'
      }
    }
  }
}
