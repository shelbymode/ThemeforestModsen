<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer__header">
        <slot name="logo"></slot>
        <slot name="links"></slot>
      </div>

      <div class="footer__info">
        <slot name="contacts"></slot>
        <slot name="social"></slot>
      </div>

      <slot name="addtional"></slot>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply w-full flex items-center justify-center py-10 bg-cBackground;
  @apply dark:bg-secondary;

  // .footer__header

  &__header {
    @apply w-full flex justify-between items-start;
  }

  // .footer__info

  &__info {
    @apply w-full flex justify-between items-start py-10 border-y-2 border-y-helperBlueThree;
  }
}
.footer-container {
  @apply min-w-[57%] flex flex-col items-start gap-y-10;
}
</style>
