<script setup lang="ts"></script>

<template>
  <section class="social">
    <router-link aria-label="Social media" to="/" class="social__link i-carbon-logo-facebook"></router-link>
    <router-link aria-label="Social media" to="/" class="social__link i-carbon-logo-twitter"></router-link>
    <router-link aria-label="Social media" to="/" class="social__link i-carbon-logo-linkedin"></router-link>
    <router-link aria-label="Social media" to="/" class="social__link i-carbon-logo-youtube"></router-link>
    <router-link
      aria-label="Social media"
      to="/"
      class="social__link i-fluent-sport-basketball-24-filled"
    ></router-link>
    <router-link aria-label="Social media" to="/" class="social__link i-carbon-logo-instagram"></router-link>
  </section>
</template>

<style lang="scss" scoped>
.social {
  @apply my-5 flex w-full items-center justify-between p-3 gap-x-2;
  @apply sm:(justify-evenly);
  @apply lg:(my-0);

  // .social__link

  &__link {
    @apply text-4xl text-primary rounded-full transition-300;
    @apply md:(text-6xl py-10)
    @apply lg:text-4xl;
    @apply hover:(text-sky-500 cursor-pointer scale-115);
    @apply dark:text-white;
    @apply dark:hover:(text-emerald-500);
  }
}
</style>
