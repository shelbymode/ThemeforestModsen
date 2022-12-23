<script setup lang="ts"></script>

<template>
  <section class="about-links">
    <AtomBigTitle class="about-links__title">About us</AtomBigTitle>
    <AtomDivideLink
      class="about-links__links"
      :links="[
        { name: 'Home', link: '/home' },
        { name: 'About', link: '/about' },
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
.about-links {
  @apply flex flex-col items-center justify-center w-full gap-y-9 py-8 px-6 bg-white;
  @apply dark:(bg-secondary/95);
  @apply lg:(py-36 bg-cBackground);
  // .about-links__title

  &__title {
    @apply order-1 text-primary;
    @apply dark:text-white;
    @apply lg:(order-0 text-black);
  }

  // .about-links__links

  &__links {
    @apply self-start;
    @apply lg:(order-2 self-center);
  }
}
</style>
