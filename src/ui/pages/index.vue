<script setup lang="ts">
import IconBrain3d from '/assets/images/svg-icons/3d/icon_brain_isometric_3d.svg?component'

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
  <main class="w-screen min-h-screen h-full mx-auto bg-neutral-300 flex flex-col items-center justify-center">
    <div flex items-center flex-wrap bg-white p-10 gap-10 class="w-1/2">
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
      <AtomHeaderLink link="/">Home</AtomHeaderLink>
      <AtomTag link="/">Home</AtomTag>

      <MoleculeServiceCard
        title="Machine Learning"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure."
        :link-info="{ label: 'Read more', to: '/' }"
      >
        <template #icon>
          <IconBrain3d></IconBrain3d>
        </template>
      </MoleculeServiceCard>

      <MoleculeBlogCard
        title="Machine Learning"
        date="22 June 2022"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
        :link-info="{ label: 'Read more', to: '/' }"
      >
        <template #icon>
          <IconBrain3d></IconBrain3d>
        </template>
      </MoleculeBlogCard>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
