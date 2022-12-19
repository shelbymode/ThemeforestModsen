<script setup lang="ts">
const { tag = 'h1' } = defineProps<{
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
  @apply text-left text-[46px] font-extrabold text-black;
  letter-spacing: -0.015em;
}
</style>
