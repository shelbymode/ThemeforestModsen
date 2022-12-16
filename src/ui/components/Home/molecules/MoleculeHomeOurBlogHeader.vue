<script setup lang="ts"></script>

<template>
  <header class="blog__header">
    <AtomMiddleTitle class="blog__title">Our blog</AtomMiddleTitle>
    <div class="blog__arrows">
      <AtomButton class="blog__arrow">
        <span class="blog__arrow-left i-ic-outline-arrow-right-alt" />
      </AtomButton>

      <AtomButton class="blog__arrow">
        <span class="blog__right i-ic-outline-arrow-right-alt" />
      </AtomButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.blog {
  @apply flex flex-col items-left w-full max-w-[57.8125%] gap-y-12 mb-30;

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
