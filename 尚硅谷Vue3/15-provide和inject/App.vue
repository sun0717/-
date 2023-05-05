<script>
import { reactive, provide } from 'vue';
import Father from './components/Father.vue';
export default {
  name: 'App',
  components: {
    Father
  },
  setup() {
    let car = reactive({
      name: '奔si',
      price: 200
    })

    provide('inherit', car);

    return {
      car
    }
  }
}
</script>

<template>
  <div>
    我是App
    <Father></Father>
  </div>
</template>

<style scoped>
  div {
    background-color: gray;
    padding: 10px;
  }
</style>