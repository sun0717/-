<script>
import { markRaw, reactive, toRefs } from 'vue';
export default {
  name: 'App',
  setup() {
    let girl = reactive({
      name: 'zy',
      age: 3,
      job: {
        type: 'Chess Player',
        level: 'Career II',
      },
      hobbies: ['吃鱼肉肠', '下围棋', '植物大战僵尸']
    })

/*     function showRawPerson() {
      const p = toRaw(girl);
      console.log(p);
      console.log(girl);
    } */

    function addFans() {
      // 将数据加入列表，自动变为响应式，但不需要修改的时候，可以标记对象使其永远不会成为响应式对象 
      let fans = {
        name: 'b站',
        num: 0
      }
      girl.fans = markRaw(fans);
      console.log(girl);
    }

    function view() {
      // 可以看到fans.num数据变了，但是并不响应式
      girl.fans.num++;
      console.log(girl);
    }

    return {
      ...toRefs(girl),
      // showRawPerson,
      addFans,
      girl,
      view
    }

  }
}
</script>

<template>
  <h1>一个人的信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>职业：{{ job.type }}</h2>
  <button @click="name += '~'">click me!</button>
  <button @click="age++">click me!!</button>
  <button @click="job.type += '~'">click me!!</button>
  <button @click="showRawPerson">输出最原始对象</button>
  <br>

  <button @click="addFans">添加fans对象</button>
  <h2>----------</h2>
  <h2 v-if="girl.fans">{{ name }} 有 {{ girl.fans.num }} W个粉丝啦</h2>
  <button v-show="girl.fans" @click="view">添加一个粉丝</button>
</template>

<style scoped></style>