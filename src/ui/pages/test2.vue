<script setup lang="ts">
import { useTestArray } from '~/application/store/useTest'

const testArray = useTestArray()
testArray.initArray(['a', 'b', 'c'])

console.log(testArray.getArray)

setInterval(() => {
  // console.log('add x!')
  testArray.addArrayEl('x')
}, 1000)

setInterval(() => {
  // console.log('clear array!')
  // testArray.reinitArray(['z', 'y', 't'])
}, 3500)
watch(testArray.getArray, (newValue) => {
  console.log('Array updated:', newValue)
})
</script>

<template>
  <h2>Hello world</h2>
</template>

<style lang="scss" scoped></style>
