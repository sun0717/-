<script>
import { defineAsyncComponent } from 'vue';
// 静态引入
// import Child from './components/Child.vue';
// 异步（动态）引入
const Child = defineAsyncComponent(() => import('./components/Child.vue'))
export default {
  name: 'App',
  components: {
    Child
  },

  setup() {
    return {

    }
  }
}
</script>

<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Suspense>
        <template v-slot:default>
          <Child/>
        </template>
        <template v-slot:fallback>
          <h3>稍等.加载中...</h3>
        </template>
    </Suspense>
  </div>
  
</template>

<style scoped>
  .app {
    background-color: gray;
    padding: 10px;
  }
</style>