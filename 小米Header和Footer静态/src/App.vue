<script>
import MyHeader from './components/MyHeader/index.vue'
import MyFooter from './components/MyFooter/index.vue'
export default {
  components: {
    MyHeader,
    MyFooter
  }
}

</script>

<template>
  <div>
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<style scoped></style>
