<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue';
export default {
  name: 'App',
  setup() {
    console.log('--setup--');
    let sum = ref(0);

    onBeforeMount(() => {
      console.log('--onBeforeMount--');
    })
    onMounted(() => {
      console.log('--onMounted--');
    })
    onBeforeUpdate(() => {
      console.log('--onBeforeUpdate--');
    }) 
    onUpdated(() => {
      console.log('--onUpdated--');
    })
    onBeforeUnmount(() => {
      console.log('--onBeforeUnmount--');
    }) 
    onUnmounted(() => {
      console.log('--onUnmounted--');
    }) 

    return {
      sum
    }
  }


}
</script>

<template>
  sum: {{ sum }}
  <button @click="sum++">click</button>
</template>

<style scoped></style>
