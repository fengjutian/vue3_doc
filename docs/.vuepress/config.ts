import { defaultTheme, defineUserConfig } from 'vuepress'
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { pwaPlugin } = require('@vuepress/plugin-pwa')

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好, Vue3 ！',
  description: '你好, Vue3 ！',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],
  plugins: [
    docsearchPlugin({}),
    pwaPlugin({
      skipWaiting: true,
    }),
  ],
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Github',
        link: 'https://github.com/fengjutian/vue3_doc',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      '/bar/README.md',
    ],
    sidebar: [
      {
        text: '介绍',
        link: '/guide/introduce.md',
        // children: [
        //   {
        //     text: 'github',
        //     link: 'https://github.com',
        //     children: [],
        //   },
        //   '/foo/bar.md',
        // ],
      },
      {
        text: '安装',
        link: '/guide/install.md'
      },
      {
        text: '组件实例',
        link: '/guide/component.md'
      },


    ],
  }),
})