<script>
// import { onMounted, reactive, onBeforeUnmount } from 'vue';
import useRepeat from '../hooks/useRepeat';
export default {
  name: 'Test',
  setup() {
    let point = useRepeat();
    return {
        point
    }
  }
}
</script>

<template>
  <h2>b组件:当前点击时鼠标的坐标为:x : {{ point.x }}, y : {{ point.y }}</h2>
</template>

<style scoped></style>
