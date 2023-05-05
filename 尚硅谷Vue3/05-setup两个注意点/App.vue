<script>
import { reactive } from 'vue';
import MyHeader from './components/MyHeader.vue';
export default {
  name: 'App',
  setup() {
    let person = reactive({
      name: '战鹰',
      age: 18,
      gender: '女'
    })

    function sayhi() {
      alert('触发sayhi事件');
    }

    return {
      person,
      sayhi
    }
  },
  components: {
    MyHeader
  }
}
</script>

<template>
  <MyHeader msg="good" msg1="goods" @hello="sayhi">
    <template v-slot:personName>
      <div>
        <h1>名字:{{ person.name }}</h1>
      </div>
    </template>
    <template v-slot:personAge>
      <div>
        <h1>年龄:{{ person.age }}</h1>
      </div>
    </template>
    <template v-slot:personSex>
      <div>
        <h1>性别:{{ person.gender }}</h1>
      </div>
    </template>
  </MyHeader>
</template>

<style scoped></style>
