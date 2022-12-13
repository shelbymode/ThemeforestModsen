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
  <div class="card shadow-card-3">
    <slot name="icon">
      <span v-if="props?.iconClass" class="card__icon" :class="[props.iconClass]" />
    </slot>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__text">{{ text }}</p>

    <AtomLink v-if="isLinkExists" :link="linkInfo!.to">{{ linkInfo!.label }}</AtomLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @apply max-w-65 flex flex-col gap-y-5 p-6 rounded items-start;
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
