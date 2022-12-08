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
      <button bg-red-500 text-dark-500 px-5 py-2 rounded-xl @click="toggleDark()">
        Toggle theme - right know [{{ isDark === true ? 'dark' : 'light' }}]
      </button>
      <AtomButton class="bg-primary text-white hover:bg-primary/80">
        <template #text> Watch the demo </template>
        <template #icon>
          <span class="text-2xl" i-fluent-play-circle-24-regular></span>
        </template>
      </AtomButton>

      <AtomCircleButton class="bg-primary text-white hover:bg-primary/80">Learn more</AtomCircleButton>
      <AtomButtonSearch class="bg-primary text-white hover:bg-primary/80" />
      <AtomDirection class="bg-tertiary"></AtomDirection>
      <AtomDoubleSwitch v-bind="dSwitchOptions"></AtomDoubleSwitch>
      <AtomLink link="/page">Read more</AtomLink>
      <AtomHeaderLink link="/dsds">Home</AtomHeaderLink>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
