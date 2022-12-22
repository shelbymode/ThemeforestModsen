<script setup lang="ts">
const { tag = 'h2' } = defineProps<{
  tag?: 'h1' | 'h2' | 'h3'
}>()
</script>
<template>
  <component :is="tag" class="title-middle">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.title-middle {
  @apply text-[28px] font-bold text-black;
  @apply md:text-4xl;
}
</style>
