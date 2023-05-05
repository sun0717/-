<script>
import { ref } from 'vue';
export default {
  name: 'Son',
  setup() {
    let isShow = ref(false);
    return {
      isShow
    }
  }
}
</script>

<template>
  <div class="son">
    我是Son组件
    <button @click="isShow = true">打开弹窗</button>
    <teleport to='#dialog'>
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是弹窗</h3>
          <h4>something</h4>
          <h4>something</h4>
          <h4>something</h4>
          <h4>something</h4>
          <button @click="isShow = false">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<style scoped>
.mask {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
}

.dialog {
  position: absolute;
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: azure;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.son {
  background-color: yellow;
  padding: 10px;
}
</style>