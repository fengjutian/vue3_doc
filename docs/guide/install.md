# 安装

## npm

在用 Vue 构建大型应用时推荐使用 npm 安装[1] 。npm 能很好地和诸如 webpack 或 Rollup 模块打包器配合使用。
```sh
npm install vue@next
```

## 命令行工具 (CLI)
Vue 提供了一个官方的 CLI，为单页面应用 (SPA) 快速搭建繁杂的脚手架。它为现代前端工作流提供了功能齐备的构建设置。只需要几分钟的时间就可以运行起来并带有热重载、保存时 lint 校验，以及生产环境可用的构建版本。更多详情可查阅 [Vue CLI 的文档](https://cli.vuejs.org/zh/)。

```sh
yarn global add @vue/cli
# 或
npm install -g @vue/cli
```

### Vite
[Vite](https://cn.vitejs.dev/) 是一个 web 开发构建工具，由于其原生 ES 模块导入方式，可以实现闪电般的冷服务器启动。

通过在终端中运行以下命令，可以使用 Vite 快速构建 Vue 项目。

使用 npm：
```sh
# npm 6.x
$ npm init vite@latest <project-name> --template vue

# npm 7+，需要加上额外的双短横线
$ npm init vite@latest <project-name> -- --template vue

$ cd <project-name>
$ npm install
$ npm run dev
```

或者 yarn：

```sh
$ yarn create vite <project-name> --template vue
$ cd <project-name>
$ yarn
$ yarn dev
```

或者 [pnpm](https://pnpm.io/):

```sh
$ pnpm create vite <project-name> -- --template vue
$ cd <project-name>
$ pnpm install
$ pnpm dev
```


---
Ps:
对于中国大陆用户，建议将 NPM 源设置为[国内的镜像](https://npmmirror.com/)，可以大幅提升安装速度。8-)