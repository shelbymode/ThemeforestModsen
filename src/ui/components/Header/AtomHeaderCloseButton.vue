<script setup lang="ts"></script>

<template>
  <button class="header__close-btn" aria-label="close"></button>
</template>

<style lang="scss" scoped>
// .header__close-btn

.header__close-btn {
  @apply text-5xl text-white max-w-1/3 duration-300;
  @apply sm:text-6xl;

  @media (min-width: 768px) {
    display: none !important;
  }
  &--revealed {
    @apply i-ic-baseline-menu;
  }
  &--closed {
    @apply i-carbon-close;
  }
}
</style>
