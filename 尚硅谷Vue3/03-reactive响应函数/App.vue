<script>
import { reactive } from 'vue';
export default {
  name: 'App',
  setup() {
/*     let name = ref('zy');
    let age = ref(3);
    let job = reactive({
      type: 'Chess Player',
      level: 'Career II',
      // 可以处理深层次的数据
      a: {
        b: {
          c: 3,
        }
      }
    })
    let hobbies = reactive(['吃鱼肉肠', '下围棋', '植物大战僵尸']); */
    // 定义一个person对象
    let ZY = reactive({
      name: 'zy',
      age: 3,
      job: {
        type: 'Chess Player',
        level: 'Career II',
      },
      hobbies: ['吃鱼肉肠', '下围棋', '植物大战僵尸'],
      // changeInfo() {
      //   this.name = '鹰酱';
      //   this.age = 18; 
      //   this.job.type = '棋手';
      //   this.job.level = '职业二段';
      //   this.hobbies[0] = '喝饮料';
      //   this.hobbies[1] = '十四段扇子';
      //   this.hobbies[2] = '唱歌';
      // }
    })
    // function changeInfo() {
    //   name.value = '鹰酱';
    //   age.value = 18; 
    //   job.type = '棋手';
    //   job.level = '职业二段';
    //   job.a.b.c = 6;
    //   hobbies[0] = '喝饮料';
    //   hobbies[1] = '十四段扇子';
    //   hobbies[2] = '唱歌';
    // }
    function changeInfo() {
        ZY.name = '鹰酱';
        ZY.age = 18; 
        ZY.job.type = '棋手';
        ZY.job.level = '职业二段';
        ZY.hobbies[0] = '喝饮料';
        ZY.hobbies[1] = '十四段扇子';
        ZY.hobbies[2] = '唱歌';
    }
    return {
      // name,
      // age,
      // job,
      // changeInfo,
      // hobbies
      ZY,
      changeInfo
    }

  }
}
</script>

<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ ZY.name }}</h2>
  <h2>年龄：{{ ZY.age }}</h2>
  <h2>职业名称: {{ ZY.job.type }}</h2>
  <h2>职业等级: {{ ZY.job.level }}</h2>
  <ul>
    <li v-for="(hobby, index) in ZY.hobbies" :key="hobby.id">{{ hobby }}</li>
  </ul>
  <button @click="changeInfo">抽象</button>
</template>

<style scoped></style>
