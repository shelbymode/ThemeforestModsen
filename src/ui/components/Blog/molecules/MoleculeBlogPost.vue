<script setup lang="ts"></script>

<template>
  <section class="blog-links">
    <AtomBigTitle tag="h1" class="blog-links__title"
      >2022 software development trends explained with benefits
    </AtomBigTitle>
    <AtomDivideLink
      class="blog-links__links"
      :links="[
        { name: 'Home', link: '/home' },
        { name: '2022 software development trends ', link: '/blog' },
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
.blog-links {
  @apply flex flex-col items-center justify-center w-full gap-y-5 py-36 bg-cBackground;
  @apply dark:(bg-secondary/95);
  // .blog-links__title

  &__title {
    @apply max-w-180 text-center dark:text-white;
  }

  // .blog-links__links

  &__links {
  }
}
</style>
