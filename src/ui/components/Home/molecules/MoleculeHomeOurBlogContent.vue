<script setup lang="ts">
import { useSlider } from '~/shared/composables/slider/useSlider'
import { getElement } from '~/shared/utils/getElement'
import { getWidthElement } from '~/shared/utils/getWidthElement'
import { IControlsStatus } from '../organisms/OrganismHomeTestimonials.vue'
import { TDirection } from '../../V/molecules/MoleculeSliderHeader.vue'

const TOTAL_SLIDE_AMOUNT = 6
const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const props = defineProps<{
  directionSignal: TDirection | null
}>()

const emit = defineEmits<{
  (e: 'update-controls-status', value: IControlsStatus): void
}>()

const updateControlsStatus = (activeCardIndex: number, totalSlideAmount: number) => {
  emit('update-controls-status', {
    left: activeCardIndex !== 0 ? 'enabled' : 'disabled',
    right: activeCardIndex < totalSlideAmount - 1 ? 'enabled' : 'disabled',
  })
}

const { unlockControls } = useSlider({
  shiftedElement: () => getElement('.blog__content'),
  widthShiftedArea: () => getWidthElement('.home-our-blog__card') + 2.5 * 16,
  directionSignal: computed(() => props.directionSignal),
  totalSlideAmount: TOTAL_SLIDE_AMOUNT,
  updateControlsStatus,
})
</script>

<template>
  <section class="blog__content" @transitionend="unlockControls">
    <template v-if="isMdScreen">
      <MoleculeBlogCard
        v-for="card in TOTAL_SLIDE_AMOUNT"
        :key="card"
        class="home-our-blog__card"
        title="Machine Learning"
        date="22 June 2022"
        text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure..."
        :link-info="{ label: 'Read more', to: '/' }"
      />
    </template>

    <template v-else>
      <MoleculeBlogPopularPost
        v-for="card in 3"
        :key="card"
        title="Machine Learning"
        date="22 June 2022"
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
