<script>
import { inject } from 'vue';
export default {
  name: 'Son',
  setup() {
    const car = inject('inherit');
    return {
      car
    }
  }
}
</script>

<template>
  <div>
    我是Son{{ car.name }}
  </div> 
</template>

<style scoped>
  div {
    padding: 10px;
    background-color: salmon;
  }
</style>