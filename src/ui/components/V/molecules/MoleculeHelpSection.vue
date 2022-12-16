<script setup lang="ts"></script>

<template>
  <section class="help">
    <AtomMiddleTitle class="help__title">Do you need help?</AtomMiddleTitle>
    <AtomText class="help__text">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
      commodi.
    </AtomText>
    <AtomButton class="help__button-contact-us">Contact us</AtomButton>
  </section>
</template>

<style lang="scss" scoped>
.help {
  @apply w-full grid place-items-center gap-y-8 bg-cBackground py-25;
  // .help__title

  &__title {
    @apply text-center;
  }

  // .help__text

  &__text {
    @apply max-w-135 text-center;
  }

  // .help__button-contact-us

  &__button-contact-us {
    @apply bg-primary text-white;
  }
}
</style>
