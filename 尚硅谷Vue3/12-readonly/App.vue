<script>
import { reactive, toRefs, readonly, shallowReadonly } from 'vue';
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

    girl = shallowReadonly(girl);

    return {
      ...toRefs(girl),
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
  <h2>----------</h2>
</template>

<style scoped></style>
