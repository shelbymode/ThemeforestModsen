<script setup lang="ts"></script>
-->
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

    <div class="blog-page-container__side">
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
  @apply flex flex-row justify-between items-start py-30;
  // .blog-page-container__content

  &__content {
    @apply flex flex-col w-full max-w-[57%];
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
