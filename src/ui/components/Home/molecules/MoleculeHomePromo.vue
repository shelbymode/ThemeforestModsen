<script setup lang="ts"></script>

<template>
  <section class="promo">
    <img src="https://api.lorem.space/image/fashion?w=929&h=740&hash=kmt2qny0" class="promo__image" />
    <div class="promo__content">
      <AtomMiddleTitle class="promo__title">Radically new solutions for data</AtomMiddleTitle>
      <AtomText class="promo__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AtomText>
      <AtomButton class="promo__button-learn-more">Learn more</AtomButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.promo {
  @apply flex w-full justify-start items-center bg-cBackground;
  // .promo__image

  &__image {
    @apply min-h-[740px] w-1/2 object-cover;
  }

  // .promo__content

  &__content {
    @apply max-w-135 flex flex-col items-start gap-y-7 px-12 mr-0;
  }

  // .promo__title

  &__title {
  }

  // .promo__text

  &__text {
    @apply max-w-115 leading-relaxed;
  }

  // .promo__button-learn-more

  &__button-learn-more {
    @apply text-white bg-primary;
  }
}
</style>
