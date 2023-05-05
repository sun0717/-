<script>
import { ref } from 'vue';
export default {
  name: 'App',
  setup() {
    let name = ref('zy');
    let age = ref(3);
    let job = ref({
      type: 'Chess Player',
      level: 'Career II'
    })


    function changeInfo() {
      name.value = '鹰酱';
      age.value = 18; 
      job.value.type = '棋手';
      job.value.level = '职业二段';
      console.log(job.value.type);
    }

    return {
      name,
      age,
      job,
      changeInfo
    }

  }
}
</script>

<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业名称: {{ job.type }}</h2>
  <h2>职业等级: {{ job.level }}</h2>
  <button @click="changeInfo">抽象</button>
</template>

<style scoped></style>
