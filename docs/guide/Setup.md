# Setup

## 参数
使用 setup 函数时，它将接收两个参数：
1. props
2. context

### Props
`setup` 函数中的第一个参数是 `props`。正如在一个标准组件中所期望的那样，`setup` 函数中的 `props` 是响应式的，当传入新的 prop 时，它将被更新。
```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    console.log(props.msg)
    return {}
  }
});
</script>
```