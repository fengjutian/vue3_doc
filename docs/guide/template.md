# 模板语法

## 指令
指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

### 参数
一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，v-bind 指令可以用于响应式地更新 HTML attribute：
```html
<a v-bind:href="url"> ... </a>
```

### 动态参数
也可以在指令参数中使用 JavaScript 表达式，方法是用方括号括起来：
```html
<a v-bind:[attributeName]="url"> ... </a>
```
这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的组件实例有一个 data property `attributeName`，其值为 `"href"`，那么这个绑定将等价于 `v-bind:href`。
```html
<a v-on:[eventName]="doSomething"> ... </a>
```
在这个示例中，当 eventName 的值为 "focus" 时，v-on:[eventName] 将等价于 v-on:focus