import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'Foo',
        link: '/foo/',
      },
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      '/bar/README.md',
    ],
    sidebar: [
      {
        text: 'Foo',
        link: '/foo/',
        children: [
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          '/foo/bar.md',
        ],
      },

    ],
  }),
})