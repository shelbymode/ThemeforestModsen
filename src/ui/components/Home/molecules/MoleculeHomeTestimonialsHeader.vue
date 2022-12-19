<script setup lang="ts"></script>

<template>
  <header class="testimonials__header">
    <AtomMiddleTitle class="testimonials__title">Testimonials</AtomMiddleTitle>

    <div class="testimonials__arrows">
      <AtomButton class="testimonials__arrow" aria-label="Left navigation">
        <span class="testimonials__arrow-left i-ic-outline-arrow-right-alt" />
      </AtomButton>

      <AtomButton class="testimonials__arrow" aria-label="Right navigation">
        <span class="testimonials__right i-ic-outline-arrow-right-alt" />
      </AtomButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.testimonials {
  // .testimonials__header

  &__header {
    @apply flex items-center justify-between;
  }

  // .testimonials__title

  &__title {
  }

  // .testimonials__arrows

  &__arrows {
    @apply flex items-center gap-x-6;
  }

  // .testimonials__arrow

  &__arrow {
    @apply text-black text-4xl bg-cBackground rounded-3xl;
  }

  &__arrow-left {
    @apply rotate-z-180;
  }

  &__arrow-right {
  }

  // .testimonials__content

  &__content {
    @apply w-full flex justify-between;
  }
}
</style>
