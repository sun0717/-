<script>
import { customRef } from 'vue';
export default {
  name: 'App',
  setup() {
    // 自定义一个ref-名为：myRef
    function myRef(value, delay) {
      let timer;
      console.log('--myRef--', value);
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`有人从myRef这个容器中读取数据了, 给出${value}`);
            track(); // 通知vue追踪value的变化
            return value;
          },
          set(newValue) {
            console.log(`有人把myRef这个容器中数据改为了:${newValue}`);
            // 防抖
            clearTimeout(timer);
            timer = setTimeout(() => {
              console.log('等1s');
              value = newValue;
              trigger(); // 通知vue重新解析模板
            }, delay);
          }
        }
      })
    }

    let keyWord = myRef('hello', 500); // 使用程序员自定义的ref
    return {
      keyWord
    }

  }
}
</script>

<template>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<style scoped></style>