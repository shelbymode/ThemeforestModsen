<script setup lang="ts"></script>

<template>
  <TemplatePageRestrictor class="template-blog">
    <section class="template-blog__categories">
      <slot name="menu-categories"></slot>
    </section>

    <section class="template-blog__content">
      <slot name="current-posts"></slot>
    </section>
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.template-blog {
  @apply flex flex-col justify-between items-start py-10;
  @apply md:py-15;
  // .template-blog__categories

  &__categories {
    @apply w-full mt-10 mb-15;
  }

  // .template-blog__content

  &__content {
    @apply w-full flex flex-col items-stretch px-4 sm:px-12 gap-y-6;
    @apply md:(flex-row flex-wrap justify-start gap-x-[6%] gap-y-9);
    @apply 2xl:(flex-row flex-wrap justify-start gap-x-[5%] px-0 gap-y-12);
  }
}
</style>
