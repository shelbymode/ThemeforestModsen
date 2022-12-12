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

const mulitiTab = ref('')
const mulitiTab2 = ref('')
</script>

<template>
  <main class="w-full h-full mx-auto bg-neutral-300 flex flex-col items-center justify-center">
    <div flex items-center flex-wrap bg-light-800 p-10 gap-10 class="w-1/2">
      <button bg-red-500 text-dark-500 px-5 py-2 rounded-xl @click="toggleDark()">
        Toggle theme - right know [{{ isDark === true ? 'dark' : 'light' }}]
      </button>
      <AtomButton class="bg-primary text-white hover:bg-primary/80">
        Watch the demo
        <span class="text-2xl" i-fluent-play-circle-24-regular></span>
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

      <MoleculeReviewCardOut
        name="Alex Bern"
        position="CEO by PixelPerfect"
        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."
      >
      </MoleculeReviewCardOut>

      <MoleculeReviewCardIn
        name="Alex Bern"
        position="CEO by PixelPerfect"
        text="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum."
      >
      </MoleculeReviewCardIn>

      <AtomTabsSquare
        v-model="mulitiTab"
        name="food"
        :tab-list="[
          { id: 'mo', value: 'Mo', active: true },
          { id: 'yr', value: 'Yr' },
        ]"
      ></AtomTabsSquare>

      <AtomTabsRounded
        v-model="mulitiTab2"
        name="food-2"
        :tab-list="[
          { id: 'mo2', value: 'Monthly', active: true },
          { id: 'yr2', value: 'Yearly fdfd Weekly' },
        ]"
      ></AtomTabsRounded>

      <MoleculePriceCard />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
