<script setup lang="ts"></script>

<template>
  <header class="blog__header">
    <AtomMiddleTitle class="blog__title">Our blog</AtomMiddleTitle>
    <div class="blog__arrows">
      <AtomButton class="blog__arrow" aria-label="Left navigation">
        <span class="blog__arrow-left i-ic-outline-arrow-right-alt" />
      </AtomButton>

      <AtomButton class="blog__arrow" aria-label="Right navigation">
        <span class="blog__right i-ic-outline-arrow-right-alt" />
      </AtomButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.blog {
  // .blog__header

  &__header {
    @apply flex items-center justify-between;
  }

  // .blog__title

  &__title {
  }

  // .blog__arrows

  &__arrows {
    @apply flex items-center gap-x-6;
  }

  // .blog__arrow

  &__arrow {
    @apply text-black text-4xl bg-cBackground rounded-3xl;
  }

  // .blog__arrow-left

  &__arrow-left {
    @apply rotate-z-180;
  }

  // .blog__right

  &__right {
  }
}
</style>
