<script>
import { inject } from 'vue';
import Son from './Son.vue';
export default {
  name: 'Father',
  components: {
    Son
  },
  setup() {

  }
}
</script>

<template>
  <div class="fa">
    我是Father
    <Son></Son>
  </div>
</template>

<style scoped>
  .fa {
    background-color: skyblue;
    padding: 10px;
  }
</style>