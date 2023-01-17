<script setup lang="ts">
const isLgScreen = useMediaQuery(`(min-width: 1024px)`)
</script>
<template>
  <TemplatePageRestrictor class="blog-page-container">
    <section class="blog-page-container__content">
      <div class="blog-page-container__current-post">
        <slot name="current-post" />
      </div>
      <div class="blog-page-container__related-post">
        <slot name="related-post" />
      </div>
    </section>

    <div v-if="isLgScreen" class="blog-page-container__side">
      <div class="blog-page-container__search">
        <slot name="search" />
      </div>
      <div class="blog-page-container__popular">
        <slot name="popular" />
      </div>
      <div class="blog-page-container__categories">
        <slot name="categories" />
      </div>
      <div class="blog-page-container__tags">
        <slot name="tags" />
      </div>
    </div>
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.blog-page-container {
  @apply flex flex-col justify-between items-start py-10;
  @apply md:(pt-20 pb-10);
  @apply lg:(flex-row justify-around gap-x-6 px-6);
  @apply xl:(px-12);
  @apply 2xl:(px-0 justify-between gap-x-24);
  // .blog-page-container__content

  &__content {
    @apply flex flex-col w-full px-6;
    @apply sm:px-12;
    @apply md:px-24;
    @apply lg:(px-0 max-w-3/5);
  }

  // .blog-page-container__current-post

  &__current-post {
  }

  // .blog-page-container__related-post

  &__related-post {
  }

  // .blog-page-container__side

  &__side {
    @apply flex flex-col w-full max-w-[40%];
  }

  // .blog-page-container__search

  &__search {
  }

  // .blog-page-container__popular

  &__popular {
  }

  // .blog-page-container__categories

  &__categories {
  }

  // .blog-page-container__tags

  &__tags {
  }
}
</style>
