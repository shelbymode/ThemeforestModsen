<script setup lang="ts">
const props = defineProps<{
  digit: string
  text: string
}>()
</script>

<template>
  <div class="label-stats">
    <h3 class="label-stats__digit">{{ props.digit }}</h3>
    <p class="label-stats__text">{{ props.text }}</p>
  </div>
</template>

<style lang="scss" scoped>
.label-stats {
  @apply flex flex-col items-start gap-y-2;
  // .label-stats__digit

  &__digit {
    @apply text-5xl font-extrabold text-left text-primary;
  }

  // .label-stats__text

  &__text {
    @apply text-cGrey text-base text-left;
  }
}
</style>
