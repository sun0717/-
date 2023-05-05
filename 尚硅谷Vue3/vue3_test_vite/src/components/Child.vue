<script>
import { ref } from 'vue';
export default {
  name: 'App',

  async setup() {
    let sum = ref(0);
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({sum});
        }, 3000);
    })
    return await p;
  }
}
</script>

<template>
  <div class="child">
    <h3>我是Child组件</h3>
  </div>
</template>

<style scoped>
    .child {
        background-color: fuchsia;
        padding: 10px;
    }
</style>