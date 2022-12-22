<script setup lang="ts">
const { tag = 'h3' } = defineProps<{
  tag?: 'h2' | 'h3'
}>()
</script>
<template>
  <component :is="tag" class="title-slider">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.title-slider {
  @apply tracking-tighter text-xl font-bold text-black;
  @apply sm:(text-2xl tracking-normal);
  @apply md:text-4xl;
}
</style>
