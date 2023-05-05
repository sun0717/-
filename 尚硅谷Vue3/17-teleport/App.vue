<script>
import { } from 'vue';
import Father from './components/Father.vue';
export default {
  name: 'App',
  components: {
    Father
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
    <Father/>
  </div>
  
</template>

<style scoped>
  .app {
    background-color:pink;
    padding: 20px;
  }
</style>