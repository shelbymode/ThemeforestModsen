<script setup lang="ts">
import { MaybeRef } from '@vueuse/core'

const props = defineProps<{
  iconClass?: string
  title: string
  text: string
  linkInfo?: {
    to: string
    label: MaybeRef<string>
  }
}>()

const isLinkExists = props.linkInfo && Object.keys(props.linkInfo).length > 0
</script>

<template>
  <div class="card">
    <slot name="icon">
      <span v-if="props?.iconClass" class="card__icon" :class="[props.iconClass]" />
    </slot>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>

    <AtomLink v-if="isLinkExists" :link="linkInfo!.to">{{ unref(linkInfo!.label) }}</AtomLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply min-w-65 max-w-65 flex flex-col gap-y-5 p-3 rounded items-start;
  @apply md:(px-6 py-9);
}
.card__icon {
  @apply text-5xl text-primary;
}
.card__title {
  @apply font-bold text-black text-2xl text-left;
}
.card__text {
  @apply text-cGrey text-base text-left;
}
</style>
