<script>
import Son from './Son.vue';
export default {
  name: 'Father',
  components: {
    Son
  },

}
</script>

<template>
  <div class="child">
    <h3>我是Father组件</h3>
    <Son/>
  </div>
</template>

<style scoped>
  .child {
    background-color:skyblue;
    padding: 10px;
  }
</style>