<script setup lang="ts"></script>

<template>
  <section class="additional">
    <AtomLink icon link="/policy" class="additional__policy md:text-2xl lg:text-xl">Privacy policy</AtomLink>
    <AtomLink icon link="/terms" class="additional__terms md:text-2xl lg:text-xl">Terms of us</AtomLink>
  </section>
</template>

<style lang="scss" scoped>
.additional {
  @apply flex flex-col items-center w-full p-3;
  @apply sm:(flex-row justify-center gap-x-10);
  @apply md:py-10;
  @apply lg:justify-end;

  // .additional__policy

  &__policy {
    @apply lg:text-xl;
  }

  // .additional__terms

  &__terms {
  }

  // .additional__rights

  &__rights {
    @apply mr-a;
  }
}
</style>
