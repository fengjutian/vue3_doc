# 插件
插件是自包含的代码，通常向 Vue 添加全局级功能。它可以是公开 `install()` 方法的 `object`，也可以是 `function`

插件的功能范围没有严格的限制——一般有下面几种：

1. 加全局方法或者 property。如：vue-custom-element

2. 添加全局资源：指令/过渡等。如：vue-touch）

3. 通过全局 mixin 来添加一些组件选项。(如vue-router)

4. 添加全局实例方法，通过把它们添加到 config.globalProperties 上实现。

5. 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

