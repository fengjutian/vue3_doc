import { defaultTheme, defineUserConfig } from 'vuepress'
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { pwaPlugin } = require('@vuepress/plugin-pwa')

export default defineUserConfig({
  base: "/vue3_doc/",
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
        text: '文档',
        link: '/guide/README.md'
      },
      {
        text: 'Github',
        link: 'https://github.com/fengjutian/vue3_doc',
      },
    ],
    sidebar: [
      {
        text: '基础',
        link: '/guide/introduce.md',
        children: [
          {
            text: '安装',
            link: '/guide/install.md'
          },
          {
            text: '组件实例',
            link: '/guide/component.md'
          },
          {
            text: '可复用 & 组合',
            link: '/guide/assemble.md'
          },
          {
            text: '模板语法',
            link: '/guide/template.md'
          }
        ],
      },
      {
        text: '可复用 & 组合',
        link: 'composeMixin.md',
        children: [
          {
            text: '组合式API',
            link: '/guide/composeAPI.md'
          },
          {
            text: 'Setup',
            link: '/guide/Setup.md'
          },
          {
            text: '生命周期钩子',
            link: '/guide/lifecyclehook.md'
          },
          {
            text: 'Provide/Inject',
            link: '/guide/Provide_Inject.md'
          },
          {
            text: 'Mixin',
            link: '/guide/Mixin.md'
          },
          {
            text: '自定义指令',
            link: '/guide/customerDirective.md'
          },
          {
            text: 'Teleport',
            link: '/guide/Teleport.md'
          },
          {
            text: '渲染函数',
            link: '/guide/renderFun.md'
          },
          {
            text: '插件',
            link: '/guide/plugin.md'
          }
        ]
      }
    ],
  }),
})