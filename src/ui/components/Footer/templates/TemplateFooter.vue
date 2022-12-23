<script setup lang="ts"></script>

<template>
  <footer class="footer-container">
    <TemplatePageContainer class="footer">
      <div class="footer__logo">
        <slot name="logo" />
      </div>

      <div class="footer__quick-links">
        <slot name="quick-links" />
      </div>

      <div class="footer__services">
        <slot name="service-links" />
      </div>

      <div class="footer__contacts">
        <slot name="contact-links" />
      </div>

      <div class="footer__social">
        <slot name="social-links" />
      </div>

      <div class="footer__social-text">
        <slot name="social-text" />
      </div>

      <div class="footer__additional">
        <slot name="additional" />
      </div>

      <div class="footer__rights">
        <slot name="rights" />
      </div>
    </TemplatePageContainer>
  </footer>
</template>

<style lang="scss" scoped>
.footer-container {
  @apply h-full w-full py-6 bg-cBackground;
  @apply dark:(bg-secondary);
}
.footer {
  @apply flex flex-col px-3;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: minmax(0, 1fr) repeat(4, 1fr);
    grid-template-rows: fit-content repeat(3, 1fr);
    row-gap: 2em;
    grid-template-areas:
      'logo . quick service contact'
      'social-text . quick service contact'
      'social . quick service contact'
      '. . quick service contact'
      'rights rights additional additional additional';
  }
  // .footer__logo

  &__logo {
    @apply flex w-full;
    @apply sm:justify-center;
    @apply md:(justify-start items-start);
    grid-area: logo;
  }

  // .footer__quick-links

  &__quick-links {
    grid-area: quick;
  }

  // .footer__services

  &__services {
    grid-area: service;
  }

  // .footer__contacts

  &__contacts {
    grid-area: contact;
  }

  // .footer__social

  &__social {
    grid-area: social;
  }

  // .footer__social-text

  &__social-text {
    @apply hidden
    @apply lg:flex;
    grid-area: social-text;
  }

  // .footer__additional

  &__additional {
    @apply lg:(border-t-1 border-helperBlueTwo);
    grid-area: additional;
  }

  // .footer__rights

  &__rights {
    @apply flex items-center justify-start;
    @apply lg:(border-t-1 border-helperBlueTwo);
    grid-area: rights;
  }
}
</style>
