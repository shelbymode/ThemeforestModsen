<script setup lang="ts"></script>

<template>
  <TemplatePageContainer class="discover">
    <AtomBigTitle class="discover__title">
      The <span class="discover__special-title">newest</span> business analytics platform
    </AtomBigTitle>

    <div class="discover__content">
      <AtomText class="discover__text">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </AtomText>
      <AtomButton class="discover__button">Discover more</AtomButton>
    </div>
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.discover {
  @apply flex flex-col gap-y-5 gap-x-6 justify-between items-start px-6;
  @apply md:flex-row;
  // .discover__title

  &__title {
    @apply md:w-1/2 md:max-w-115 leading-snug;
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
    @apply md:max-w-115 leading-relaxed;
  }

  // .discover__button

  &__button {
    @apply text-white bg-primary;
    @apply md:self-start;
  }
}
</style>
