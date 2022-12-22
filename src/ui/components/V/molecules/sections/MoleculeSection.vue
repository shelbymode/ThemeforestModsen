<script setup lang="ts"></script>

<template>
  <div class="section-wrapper">
    <TemplatePageContainer class="section">
      <div class="section-content">
        <h3 class="section-content__title">Subscribe to our newsletter</h3>
        <p class="section-content__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>
    </TemplatePageContainer>
  </div>
</template>

<style lang="scss" scoped>
.section-wrapper {
  @apply w-full flex justify-center items-center bg-primary;
  @apply dark:bg-secondary;
}
.section {
  @apply flex justify-between items-center py-20;
}
.section-content {
  @apply flex flex-col items-start gap-y-6;
  @apply md:max-w-110;

  // .section-content__title

  &__title {
    @apply text-4xl text-white font-bold w-max;
  }

  // .section-content__text

  &__text {
    @apply text-xl text-white;
  }
}
</style>
