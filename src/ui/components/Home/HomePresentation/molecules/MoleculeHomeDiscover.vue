<script setup lang="ts"></script>

<template>
  <TemplatePageRestrictor class="discover">
    <AtomBigTitle class="discover__title">
      <span class="discover__special-title2"></span> {{ $t('home.presentationTitle2') }}
    </AtomBigTitle>

    <div class="discover__content">
      <AtomText class="discover__text">
        {{ $t('home.presentationText2') }}
      </AtomText>
      <AtomButton class="discover__button">{{ $t(`common.button.discoverMode`) }}</AtomButton>
    </div>
  </TemplatePageRestrictor>
</template>

<style lang="scss" scoped>
.discover {
  @apply flex flex-col gap-y-5 gap-x-6 justify-between items-start px-6;
  @apply md:flex-row;

  // .discover__title

  &__title {
    @apply w-full text-center leading-snug;
    @apply md:(w-1/2 max-w-115 text-left);
  }

  &__special-title {
    @apply text-primary;
  }

  // .discover__content

  &__content {
    @apply flex flex-col gap-y-8 items-stretch;
    @apply sm:(items-center);
    @apply md:(items-start w-1/2);
    @apply lg:(px-10);
  }

  // .discover__text

  &__text {
    @apply leading-relaxed;
    @apply md:max-w-115;
  }

  // .discover__button

  &__button {
    @apply text-white bg-primary;
    @apply md:self-start;
  }
}
</style>
