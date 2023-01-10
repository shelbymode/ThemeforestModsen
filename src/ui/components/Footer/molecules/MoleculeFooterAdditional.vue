<script setup lang="ts"></script>

<template>
  <section class="additional">
    <AtomLink icon link="/policy" class="additional__policy">{{ $t(`navMenu.privacyPolicy`) }}</AtomLink>
    <AtomLink icon link="/terms" class="additional__terms">{{ $t(`navMenu.termsOfUs`) }}</AtomLink>
  </section>
</template>

<style lang="scss" scoped>
.additional {
  @apply flex flex-col items-center w-full p-3;
  @apply sm:(flex-row justify-center gap-x-10);
  @apply md:py-10;
  @apply lg:justify-end;
}

:deep() {
  .additional {
    // .additional__policy

    &__policy {
      @apply text-xl
      @apply md:text-2xl
      @apply lg:text-xl;
    }

    // .additional__terms

    &__terms {
      @apply text-xl
      @apply md:text-2xl
      @apply lg:text-xl;
    }
  }
}
</style>
