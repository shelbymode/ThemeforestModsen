<script setup lang="ts">
const bigImageFactor = 'https://api.lorem.space/image/fashion?w=1920&h=960&hash=kmt2qny0'
const smallImageFactor = 'https://api.lorem.space/image/fashion?w=929&h=740&hash=kmt2qny0'

const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const srcMedia = computed(() => (isMdScreen.value === true ? bigImageFactor : smallImageFactor))
</script>

<template>
  <section class="promo">
    <img :src="srcMedia" alt="promo image" class="promo__image" />
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
  @apply flex flex-col w-full justify-start bg-cBackground px-6;
  @apply md:(flex-row gap-x-6);
  // .promo__image

  &__image {
    @apply object-cover;
    @apply md:w-1/2;
  }

  // .promo__content

  &__content {
    @apply flex flex-col items-start gap-y-7 py-4 mr-0;
    @apply sm:(items-center);
    @apply md:(items-start py-10 w-1/2);
    @apply lg:(px-10);
  }

  // .promo__title

  &__title {
  }

  // .promo__text

  &__text {
    @apply leading-relaxed;
    @apply md:max-w-115;
  }

  // .promo__button-learn-more

  &__button-learn-more {
    @apply text-white bg-primary;
  }
}
</style>
