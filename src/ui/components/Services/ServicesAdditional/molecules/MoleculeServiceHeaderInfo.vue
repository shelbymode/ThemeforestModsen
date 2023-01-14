<script setup lang="ts"></script>

<template>
  <section class="service-header">
    <div class="service-header__small-title">
      {{ $t(`services.services`) }}
    </div>
    <AtomBigTitle class="service-header__title">{{ toCapitalizeEach($t(`services.startTitle`)) }}</AtomBigTitle>
    <AtomText class="service-header__text">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
      aperiam, eaque ipsa quaeab illo inventore.
    </AtomText>
  </section>
</template>

<style lang="scss" scoped>
.service-header {
  @apply max-w-[730px] w-full flex flex-col items-center gap-y-4 px-5;
  // .service-header__small-title

  &__small-title {
    @apply text-primary font-bold text-base;
  }

  // .service-header__title

  &__title {
  }

  // .service-header__text

  &__text {
  }
}
</style>
