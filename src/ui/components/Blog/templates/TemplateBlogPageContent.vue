<script setup lang="ts"></script>

<template>
  <TemplatePageRestrictor class="blog-page-container">
    <section class="blog-page-container__content">
      <slot name="current-posts"></slot>
    </section>
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.blog-page-container {
  @apply flex flex-row justify-between items-start py-10;
  @apply md:py-15;

  // .blog-page-container__content

  &__content {
    @apply flex flex-col items-start px-4 sm:px-12 gap-y-6;
    @apply md:(flex-row flex-wrap justify-start gap-x-[6%]);
    @apply 2xl:(flex-row flex-wrap justify-start gap-x-[5%] px-0);
  }
}
</style>
