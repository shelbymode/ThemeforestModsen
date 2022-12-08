<script setup lang="ts">
export interface IDoubleSwitch {
  name: string
  left: {
    id: string
    value: string
  }
  right: {
    id: string
    value: string
  }
}
const dSwitchOptions: IDoubleSwitch = {
  name: 'Animals',
  left: {
    id: 'cat',
    value: 'Kind cat',
  },
  right: {
    id: 'dog',
    value: 'Big angly frightening dog',
  },
}
</script>

<template>
  <main class="w-screen h-screen mx-auto bg-neutral-300 flex flex-col items-center justify-center">
    <div flex items-center flex-wrap bg-light-900 p-10 gap-10 class="w-1/2 h-1/2">
      <AtomButton class="bg-primary hover:bg-primary/80">
        <template #text> Watch the demo </template>
        <template #icon>
          <span class="text-2xl" i-fluent-play-circle-24-regular></span>
        </template>
      </AtomButton>

      <AtomCircleButton class="bg-primary hover:bg-primary/80">Learn more</AtomCircleButton>
      <AtomButtonSearch class="bg-primary hover:bg-primary/80" />
      <AtomDirection class="bg-tertiary"></AtomDirection>
      <AtomDoubleSwitch v-bind="dSwitchOptions"></AtomDoubleSwitch>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
