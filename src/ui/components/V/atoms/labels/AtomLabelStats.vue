<script setup lang="ts">
import { MaybeRef } from '@vueuse/core'

const props = defineProps<{
  indicator: string
  text: MaybeRef<string>
}>()
</script>

<template>
  <div class="label-stats">
    <h2 class="label-stats__indicator">{{ props.indicator }}</h2>
    <p class="label-stats__text">{{ unref(props.text) }}</p>
  </div>
</template>

<style lang="scss" scoped>
.label-stats {
  @apply flex flex-col items-center gap-y-2;
  // .label-stats__indicator

  &__indicator {
    @apply text-3xl font-bold items-center text-primary;
    @apply md:text-5xl;
  }

  // .label-stats__text

  &__text {
    @apply text-cGrey text-[12px] text-center
    @apply md:(text-base text-left);
  }
}
</style>
