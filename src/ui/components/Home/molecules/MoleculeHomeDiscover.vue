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
  @apply flex py-30 justify-between items-start;

  // .discover__title

  &__title {
    @apply max-w-115;
  }

  &__special-title {
    @apply text-primary;
  }

  // .discover__content

  &__content {
    @apply flex flex-col gap-y-8 items-start;
  }

  // .discover__text

  &__text {
    @apply max-w-115 leading-relaxed;
  }

  // .discover__button

  &__button {
    @apply text-white bg-primary;
  }
}
</style>
