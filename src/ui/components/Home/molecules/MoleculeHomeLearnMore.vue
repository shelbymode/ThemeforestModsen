<script setup lang="ts">
const bigImageFactor = 'https://api.lorem.space/image/fashion?w=1920&h=590&hash=kmt2qny0'
const smallImageFactor = 'https://api.lorem.space/image/fashion?w=1920&h=1230&hash=kmt2qny0'

const isMdScreen = useMediaQuery(`(min-width: 768px)`)

const srcMedia = computed(() => (isMdScreen.value === true ? bigImageFactor : smallImageFactor))
</script>

<template>
  <TemplatePageContainer class="learn-more">
    <AtomBigTitle class="learn-more__title">
      Find true power in your data with <span class="learn-more__special-title">Ensome</span>
    </AtomBigTitle>

    <AtomText class="learn-more__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem aperiam,
      eaque ipsa quae ab illo inventore veritatis et quasi.
    </AtomText>
  </TemplatePageContainer>

  <div class="learn-more__image-wrapper">
    <img :src="srcMedia" alt="Home learn more" class="learn-more__image" />
    <AtomCircleButton class="learn-more__button-learn-more">Learn more</AtomCircleButton>
  </div>
</template>

<style lang="scss" scoped>
.learn-more {
  @apply flex flex-col gap-y-5 justify-start items-start my-10 px-6;
  @apply md:(flex-row gap-x-6);

  // .learn-more__title

  &__title {
    @apply max-w-1/2 leading-snug;
  }

  // .learn-more__special-title

  &__special-title {
    @apply text-primary;
  }

  // .learn-more__text

  &__text {
    @apply w-1/2 w-full leading-relaxed;
    @apply md:max-w-115;
  }

  // .learn-more__image-wrapper

  &__image-wrapper {
    @apply relative;
  }

  // .learn-more__image

  &__image {
    @apply w-full object-cover;
  }

  // .learn-more__button-learn-more

  &__button-learn-more {
    @apply text-[12px] absolute right-[15%] text-white outline-white outline-8 top-0 translate-y-[-50%] bg-primary;
    outline-style: solid;
    @apply md:text-base;
  }
}
</style>
