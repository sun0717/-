<script>
// import { onMounted, reactive, onBeforeUnmount } from 'vue';
import useRepeat from '../hooks/useRepeat';
export default {
  name: 'Demo',
  setup() {
/*     let point = reactive({
      x: 0,
      y: 0
    })

    function savePoint(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(point.x + '' + point.y);
    }
    onMounted(() => {
      window.addEventListener('click', savePoint)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('click', savePoint) 
    })
       
    return {
      point
    } */
    let point = useRepeat();
    return {
        point
    }
  }
}
</script>

<template>
  <h2>a组件:当前点击时鼠标的坐标为:x : {{ point.x }}, y : {{ point.y }}</h2>
</template>

<style scoped></style>
