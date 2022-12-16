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
  @apply flex flex-col items-center justify-center w-full gap-y-5 py-36 bg-cBackground;
  @apply dark:(bg-secondary/95);
  // .about-links__title

  &__title {
    @apply dark:text-white;
  }

  // .about-links__links

  &__links {
  }
}
</style>
