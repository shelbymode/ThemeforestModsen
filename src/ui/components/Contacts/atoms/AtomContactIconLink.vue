<script setup lang="ts">
const props = defineProps<{
  title: string
  additionalInfo: string
}>()
</script>

<template>
  <div class="link-icon">
    <div class="link-icon__icon-wrapper">
      <slot name="icon"></slot>
      <span class="link-icon__title">{{ props.title }}</span>
    </div>
    <p class="link-icon__additional-info">{{ props.additionalInfo }}</p>
  </div>
</template>

<style lang="scss" scoped>
.link-icon {
  @apply flex flex-col gap-y-3;
  // .link-icon__icon-wrapper

  &__icon-wrapper {
    @apply flex gap-x-3 items-center justify-start;
  }

  // .link-icon__title

  &__title {
    @apply text-sm text-black;
  }

  // .link-icon__additional-info

  &__additional-info {
    @apply text-base text-cGrey;
  }
}
</style>
