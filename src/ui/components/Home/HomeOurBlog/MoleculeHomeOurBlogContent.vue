<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useSlider } from '~/shared/composables/slider/useSlider'
import { IControlsStatus, TDirection } from '../../V/molecules/slider/MoleculeSliderHeader.vue'
import { toCapitalizeEach } from '~/shared/utils/toCapitalizeEach'

const TOTAL_SLIDE_AMOUNT = 6
const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const props = defineProps<{
  directionSignal: TDirection | null
}>()

const emit = defineEmits<{
  (e: 'update-controls-status', value: IControlsStatus): void
}>()

const updateControlsStatus = (left: boolean, right: boolean) => {
  emit('update-controls-status', {
    left: left === true ? 'enabled' : 'disabled',
    right: right === true ? 'enabled' : 'disabled',
  })
}
const { unlockControls } = useSlider({
  shiftedElement: () => getHTMLElement('.blog__content'),
  widthShiftedArea: () => getWidthHTMLElement('.home-our-blog__card') + 2.5 * 16,
  directionSignal: computed(() => props.directionSignal),
  updateControlsStatus,
})

const { d } = useI18n()
// const dateCard = d(new Date(), { dateStyle: 'short' })
// const dateCard = d(new Date(), 'short')
</script>

<template>
  <section class="blog__content" @transitionend="unlockControls">
    <template v-if="isMdScreen">
      <MoleculeBlogCard
        v-for="card in TOTAL_SLIDE_AMOUNT"
        :key="card"
        class="home-our-blog__card"
        :title="toCapitalizeEach($t(`common.machineLearning`))"
        :date="$d(new Date(), { dateStyle: 'long' })"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
        :link-info="{ label: 'Read more', to: '/' }"
      />
    </template>

    <template v-else>
      <MoleculeBlogIdPopularPost
        v-for="card in 3"
        :key="card"
        :title="toCapitalizeEach($t(`common.machineLearning`))"
        :date="$d(new Date(), { dateStyle: 'long' })"
        img-src="https://api.lorem.space/image/fashion?w=320&h=192&hash=pozp5q28"
      />
      <AtomButton class="bg-primary text-white">Learn more</AtomButton>
    </template>
  </section>
</template>

<style lang="scss" scoped>
.blog {
  // .blog__content

  &__content {
    @apply flex flex-col w-full gap-y-8 transition-all gap-x-10 duration-500 pb-10;
    @apply sm:(items-center);
    @apply md:(flex-row justify-between gap-x-10);
  }
}
</style>
