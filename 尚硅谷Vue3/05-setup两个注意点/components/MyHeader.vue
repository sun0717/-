<script>
export default {
  name: 'MyHeader',
  props: ['msg', 'msg1', 'a'],
  emits: ['hello'], // 消除警告
  setup(props, context) {
    // console.log('--',props)
    console.log('--',context);

    function test() {
        context.emit('hello', '你好呀');
    }

    return {
        test
    }
  }
}
</script>

<template>
  <slot name="personName"></slot>
  <slot name="personAge"></slot>
  <slot name="personSex"></slot>
  <button @click="test">click me!</button>
</template>

<style scoped></style>
