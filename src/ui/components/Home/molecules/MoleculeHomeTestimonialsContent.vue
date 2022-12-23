<script setup lang="ts">
import { useSlider } from '~/shared/composables/slider/useSlider'
import { getElement } from '~/shared/utils/getElement'
import { getWidthElement } from '~/shared/utils/getWidthElement'
import { IControlsStatus, TDirection } from '../../V/molecules/MoleculeSliderHeader.vue'

const props = defineProps<{
  directionSignal: TDirection | null
}>()

const emit = defineEmits<{
  (e: 'update-controls-status', value: IControlsStatus): void
}>()

const cardReviews = [
  {
    name: 'Alex Bern',
    position: 'CEO by PixelPerfect',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Ruben Chifundo',
    position: 'CEO by NOX',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Tigran Nazaret',
    position: 'Data analyst',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Vasya Petrov',
    position: 'CEO by PixelPerfect',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Liza Chernaya',
    position: 'CEO by NOX',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
  {
    name: 'Azazel Veliki',
    position: 'Data analyst',
    text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum.',
  },
]

const updateControlsStatus = (left: boolean, right: boolean) => {
  emit('update-controls-status', {
    left: left === true ? 'enabled' : 'disabled',
    right: right === true ? 'enabled' : 'disabled',
  })
}

const { unlockControls } = useSlider({
  shiftedElement: () => getElement('.testimonials__content'),
  widthShiftedArea: () => getWidthElement('.testimonials__card') + 2.5 * 16,
  directionSignal: computed(() => props.directionSignal),
  updateControlsStatus,
})
</script>

<template>
  <section class="testimonials__content" @transitionend="unlockControls">
    <MoleculeReviewCardIn
      v-for="cardReview in cardReviews"
      :key="cardReview.name"
      class="testimonials__card"
      :name="cardReview.name"
      :position="cardReview.position"
      :text="cardReview.text"
    />
  </section>
</template>

<style lang="scss" scoped>
.testimonials {
  // .testimonials__content

  &__content {
    @apply w-full flex justify-between transition-all gap-x-10 duration-500 pb-10;
  }
}
</style>
