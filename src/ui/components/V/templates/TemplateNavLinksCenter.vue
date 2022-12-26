<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <section class="nav-links">
    <AtomBigTitle class="nav-links__title">{{ props.title }}</AtomBigTitle>
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.nav-links {
  @apply flex flex-col items-center justify-center w-full gap-y-9 py-8 px-6 bg-white;
  @apply dark:(bg-secondary/95);
  @apply lg:(py-36 bg-cBackground);
  // .nav-links__title

  &__title {
    @apply order-1 text-primary;
    @apply dark:text-white;
    @apply lg:(order-0 text-black);
  }

  // .nav-links__links

  &__links {
    @apply self-start;
    @apply lg:(order-2 self-center);
  }
}
</style>
