<script setup lang="ts"></script>

<template>
  <section class="learn-more">
    <AtomBigTitle class="learn-more__title">
      Find true power in your data with <span class="learn-more__special-title">Ensome</span>
    </AtomBigTitle>

    <AtomText class="learn-more__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi.
    </AtomText>
  </section>

  <div class="learn-more__image-wrapper">
    <img src="https://api.lorem.space/image/fashion?w=1920&h=590&hash=kmt2qny0" class="learn-more__image" />
    <AtomCircleButton class="learn-more__button-learn-more">Learn more</AtomCircleButton>
  </div>
</template>

<style lang="scss" scoped>
.learn-more {
  @apply flex justify-between max-w-[57.8125%] w-full items-start my-18;
  // .learn-more__title

  &__title {
    @apply max-w-135;
  }

  // .learn-more__special-title

  &__special-title {
    @apply text-primary;
  }

  // .learn-more__text

  &__text {
    @apply max-w-115 leading-relaxed;
  }

  // .learn-more__image-wrapper

  &__image-wrapper {
    @apply relative;
  }

  // .learn-more__image

  &__image {
    @apply w-full object-cover min-h-[590px];
  }

  // .learn-more__button-learn-more

  &__button-learn-more {
    @apply absolute right-[40%] text-white outline-white outline-8 top-0 translate-y-[-50%] bg-primary;
    outline-style: solid;
  }
}
</style>
