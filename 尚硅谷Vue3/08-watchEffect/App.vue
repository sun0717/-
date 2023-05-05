<script>
import { reactive, ref, watchEffect } from 'vue';
export default {
  name: 'App',
  setup() {
    let sum = ref(0);
    let msg = ref('你好');
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        type: {
          name: 'engineer'
        }
      }
    })

/*     watch([sum, msg],(newValue, oldValue) => {
      console.log(newValue, oldValue);
    }) */

    /* 
      notice:
        1. oldValue在reactive中不便获取 
        2. 强制开启了深度监视（deep配置无效）
     */
/*     watch(person, () => {
      console.log('person变化了');
    }, {deep: false})

    watch(() => person.age, (newValue, oldValue) => {
      console.log('person中age变化了');
      console.log(newValue, oldValue);
    }) */

 /*    watch(()=>person.job, (newValue, oldValue) => {
      console.log('person中的job变化了');
    }, {deep: true})  */// 和情况3作区分:此处需要开启深度监视

    watchEffect(() => {
      // watchEffect 比较智能，监视函数体中有的值
      const x1 = sum.value
      const x2 = person.job.type.name
      console.log('watchEffect所指定的回调执行了');
    })
    return {
      sum,
      msg,
      person
    }
  }


}
</script>

<template>
  sum: {{ sum }}
  <button @click="sum++;msg+='!'">click!</button>
  <button @click="person.name += '~'">click me</button>
  <br>
  age: {{ person.age }}
  <button @click="person.age++">点我改变年龄</button>
  <br>
  <h2>{{ person.job.type.name }}</h2>
  <button @click="person.job.type.name += '~'">click job</button>
</template>

<style scoped></style>
