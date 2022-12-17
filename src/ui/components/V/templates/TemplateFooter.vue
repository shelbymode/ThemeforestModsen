<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <TemplatePageContainer class="footer-container">
      <div class="flex justify-between items-start w-full">
        <div class="footer__social">
          <slot name="logo"></slot>
          <slot name="social-text"></slot>

          <div class="footer__social-links">
            <slot name="social-links"></slot>
          </div>
        </div>

        <div class="footer__info">
          <slot name="links"></slot>
          <slot name="contacts"></slot>
        </div>
      </div>

      <div class="additional">
        <slot name="addtional"></slot>
      </div>
    </TemplatePageContainer>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply w-full flex items-center justify-center py-10 bg-cBackground;
  @apply dark:bg-secondary;

  // .footer__social

  &__social {
    @apply flex flex-col items-start gap-y-8 max-w-[285px];
  }

  // .footer__social-links

  &__social-links {
    @apply flex items-center gap-x-4;
  }

  // .footer__info

  &__info {
    @apply flex flex-between items-start gap-x-30;
  }
}
.footer-container {
  @apply flex flex-col gap-y-15 items-start;
}

.additional {
  @apply flex justify-end items-center w-full gap-x-25;
}
</style>
