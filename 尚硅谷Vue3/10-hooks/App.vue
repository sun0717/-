<script>
import Demo from './components/Demo.vue';
import Test from './components/Test.vue'
import { ref } from 'vue' 
export default {
  name: 'App',
  components: {
    Demo,
    Test
  },
  setup() {
    let show = ref(true);

    return {
      show
    }
  }
}
</script>

<template>
  <button @click="show = !show">click!</button>
  <Demo v-if="show"></Demo>
  <h2>-----------------</h2>
  <Test></Test>
</template>

<style scoped></style>
