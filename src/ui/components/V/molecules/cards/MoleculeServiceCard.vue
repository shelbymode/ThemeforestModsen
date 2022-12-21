<script setup lang="ts">
const props = defineProps<{
  iconClass?: string
  title: string
  text: string
  linkInfo?: {
    to: string
    label: string
  }
}>()

const isLinkExists = props.linkInfo && Object.keys(props.linkInfo).length > 0
</script>

<template>
  <div class="card shadow">
    <slot name="icon">
      <span v-if="props?.iconClass" class="card__icon" :class="[props.iconClass]" />
    </slot>
    <h2 class="card__title">{{ title }}</h2>
    <p class="card__text">{{ text }}</p>

    <AtomLink v-if="isLinkExists" :link="linkInfo!.to">{{ linkInfo!.label }}</AtomLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply min-w-65 max-w-65 flex flex-col gap-y-5 p-3 rounded items-start;
  @apply md:p-6;
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
