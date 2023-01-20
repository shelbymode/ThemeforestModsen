<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: 'h1' | 'h2' | 'h3'
  }>(),
  {
    tag: 'h2',
  }
)
</script>
<template>
  <component :is="props.tag" class="title-middle">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.title-middle {
  @apply text-[25px] font-bold text-black;
  @apply md:text-4xl;
}
</style>
