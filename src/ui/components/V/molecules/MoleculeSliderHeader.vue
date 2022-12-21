<script setup lang="ts">
export type TDirection = 'left' | 'right'
export type TDirectionAvailable = 'enabled' | 'disabled'
export interface IControlsStatus {
  left: TDirectionAvailable
  right: TDirectionAvailable
}

interface IScrollDirection {
  (e: 'scroll-side', value: TDirection): void
}

const props = defineProps<{
  hideControls?: boolean
  title?: string
  controlsStatus: {
    left: TDirectionAvailable
    right: TDirectionAvailable
  }
}>()

const emit = defineEmits<IScrollDirection>()

const scrollCard = (direction: TDirection) => {
  emit('scroll-side', direction)
}
</script>

<template>
  <header class="slider__header">
    <slot name="default">
      <AtomMiddleTitle class="slider__title">{{ props.title }}</AtomMiddleTitle>
    </slot>

    <div v-if="!props?.hideControls" class="slider__arrows">
      <AtomButton
        class="slider__arrow"
        :is-disabled="props.controlsStatus.left === 'disabled'"
        aria-label="Left navigation"
        @click="scrollCard('left')"
      >
        <span class="slider__arrow-left i-ic-outline-arrow-right-alt" />
      </AtomButton>

      <AtomButton
        class="slider__arrow"
        :is-disabled="props.controlsStatus.right === 'disabled'"
        aria-label="Right navigation"
        @click="scrollCard('right')"
      >
        <span class="slider__right i-ic-outline-arrow-right-alt" />
      </AtomButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.slider {
  // .slider__header

  &__header {
    @apply flex items-center justify-between;
  }

  // .slider__title

  &__title {
    @apply tracking-tighter;
    @apply sm:tracking-normal;
  }

  // .slider__arrows

  &__arrows {
    @apply flex items-center gap-x-1;
  }

  // .slider__arrow

  &__arrow {
    @apply text-black text-xl px-4 bg-cBackground rounded-3xl;
    @apply md:text-4xl;
  }

  &__arrow-left {
    @apply rotate-z-180;
  }

  &__arrow-right {
  }

  // .slider__content

  &__content {
    @apply w-full flex justify-between;
  }
}
</style>
