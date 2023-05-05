<script>
import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    let sum = ref(0);
    let car = reactive({
      name: '奔si',
      price: 200
    })
    let baseCar = readonly(car);

    console.log(isRef(sum)); // true
    console.log(isReactive(car)); // true
    console.log(isReadonly(baseCar)); // true
    console.log(isProxy(baseCar)); // true

    return {
      sum,
      car,
      baseCar
    }
  }
}
</script>

<template>

</template>

<style scoped>

</style>