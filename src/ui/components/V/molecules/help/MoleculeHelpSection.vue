<script setup lang="ts"></script>

<template>
  <section class="help">
    <AtomMiddleTitle class="help__title">{{ $t(`common.needHelp?`) }}</AtomMiddleTitle>
    <AtomText class="help__text">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
      commodi.
    </AtomText>
    <AtomButton class="help__button-contact-us">
      {{ $t(`common.button.contactUs`) }}
    </AtomButton>
  </section>
</template>

<style lang="scss" scoped>
.help {
  @apply w-full grid place-items-center gap-y-8 bg-cBackground px-6 py-7;
  @apply lg:(py-20 mb--20);
  // .help__title

  &__title {
    @apply text-center;
  }

  // .help__text

  &__text {
    @apply md:max-w-135 text-center;
  }

  // .help__button-contact-us

  &__button-contact-us {
    @apply bg-primary text-white;
  }
}
</style>
