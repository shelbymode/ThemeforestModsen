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

const mulitiTab = ref('')
const mulitiTab2 = ref('')

function a<T>(a: T): T {
  return a
}
</script>

<template>
  <main class="w-full h-full mx-auto bg-neutral-300 flex flex-col items-center justify-center">
    <div flex items-center flex-wrap bg-light-800 p-10 gap-10 class="w-1/2">
      <button bg-red-500 text-dark-500 px-5 py-2 rounded-xl @click="toggleDark()">
        Toggle theme - right know [{{ isDark === true ? 'dark' : 'light' }}]
      </button>
      <AtomButton class="bg-primary text-white hover:bg-primary/80">
        Watch the demo
        <span class="text-2xl" i-fluent-play-circle-24-regular />
      </AtomButton>

      <AtomCircleButton class="bg-primary text-white hover:bg-primary/80">Learn more</AtomCircleButton>
      <AtomButtonSearch class="bg-primary text-white hover:bg-primary/80" />
      <AtomDirection class="bg-tertiary" />
      <AtomDoubleSwitch v-bind="dSwitchOptions" />
      <AtomLink link="/page">Read more</AtomLink>
      <AtomHeaderLink link="/">Home</AtomHeaderLink>
      <AtomTag link="/">Home</AtomTag>

      <MoleculeReviewCardOut
        name="Alex Bern"
        position="CEO by PixelPerfect"
        text="Ut enim ad minima veniam, quis
      nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
      vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."
      />

      <MoleculeReviewCardIn
        name="Alex Bern"
        position="CEO by PixelPerfect"
        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."
      />

      <AtomTabsSquare
        v-model="mulitiTab"
        name="food"
        :tab-list="[
          { id: 'mo', value: 'Mo', active: true },
          { id: 'yr', value: 'Yr' },
        ]"
      />

      <AtomTabsRounded
        v-model="mulitiTab2"
        name="food-2"
        :tab-list="[
          { id: 'mo2', value: 'Monthly', active: true },
          { id: 'yr2', value: 'Yearly fdfd Weekly' },
        ]"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
