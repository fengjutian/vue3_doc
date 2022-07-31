## 组合式 API 基础

### `setup` 组件选项
新的 `setup` 选项在组件**被创建之前执行**，一旦 `props` 被解析完成，它就将被作为组合式 API 的**入口**。

## 带 `ref` 的响应式变量
在 Vue 3.0 中，我们可以通过一个新的 ref 函数使任何响应式变量在任何地方起作用，如下所示：
```js
import { ref } from 'vue'

const counter = ref(0)
```

### 在 `setup` 内注册生命周期钩子

为了使组合式 API 的功能和选项式 API 一样完整，我们还需要一种在 `setup` 中注册生命周期钩子的方法。这要归功于 Vue 导出的几个新函数。组合式 API 上的生命周期钩子与选项式 API 的名称相同，但前缀为 `on`：即 `mounted` 看起来会像 `onMounted`。

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{count}}</p>
    <button @click="add">Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      data1: 'data1'
    }
  },
  setup(props) {
    console.log('this', this);
    console.log('props', props);

    const count = ref(0);
    console.log('count', count.value);

    count.value = 1
    console.log('count', count.value);

    function add() {
      count.value++
    }

    function upload() {
      console.log('upload');
    }

    onMounted(upload)
    onMounted(add)

    return {
      count, add
    }
  },
  mounted() {
    // this.upload()
  },
  methods: {
    upload() {
      console.log(this, this.data1, this.count, this.add);
    }
  }
});
</script>
```

### `watch`响应式更改
就像我们在组件中使用 watch 选项并在 user property 上设置侦听器一样，我们也可以使用从 Vue 导入的 watch 函数执行相同的操作。它接受 3 个参数：
1. 一个想要侦听的响应式引用或 getter 函数
2. 一个回调
3. 可选的配置选项

```vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{count}}</p>
    <button @click="add">Click me</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props) {
    const count = ref(0);
    console.log('count', count.value);

    function add() {
      count.value++
    }

    watch(count, (newValue, oldValue) => {
      console.log('newValue', newValue, oldValue);
    })

    return {
      count,
      add
    }
  }
});
</script>
```

#### 侦听单个数据源

```vue
<template>
    <p>{{count}}</p>
    <button @click="add">Click me</button>
    <br/>
    <p>{{state.count}}</p>
    <button @click="add1">Click me!!!</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch } from 'vue';

export default defineComponent({
  setup(props) {
    // 监听一个 getter
    const state = reactive({count: '1'})
    watch(() => state.count, (count, prevCount) => {
        console.log(count, prevCount);
    })

    // 直接监听ref
    const count = ref(0);
    watch(count, (newValue, oldValue) => {
      console.log('count', newValue, oldValue);
    })

    function add() {
      count.value++
    }

    function add1() {
        state.count = state.count +1
    }

    return {
      state,
      count,
      add,
      add1
    }
  }
});
</script>
```

#### 侦听多个数据源
侦听器还可以使用数组同时侦听多个源：
???

### 独立的 computed 属性
???
