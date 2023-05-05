<script>
import { reactive, computed } from 'vue';
export default {
  name: 'App',
  setup() {
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })
    
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        const nameArr = value.split('-');
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      }
    })

    return {
      person
    }
  }


}
</script>

<template>
  姓: <input type="text" v-model="person.firstName">
  <br>
  名: <input type="text" v-model="person.lastName">
  <br>
  全名: {{ person.fullName }}
  <br>
  全名: <input type="text" v-model="person.fullName"> 
</template>

<style scoped></style>
