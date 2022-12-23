<script setup lang="ts"></script>

<template>
  <header class="header-container">
    <TemplatePageRestrictor class="header">
      <div class="header__logo">
        <slot name="logo"></slot>
      </div>

      <slot name="close-button"></slot>

      <slot name="links"></slot>

      <div class="header__demo">
        <slot name="demo"></slot>
      </div>

      <slot name="theme-switcher"></slot>
    </TemplatePageRestrictor>
  </header>
</template>

<style lang="scss" scoped>
.header-container {
  @apply fixed left-1/2 translate-x-[-50%] z-1 flex items-center justify-center w-full bg-cBackground;
  @apply dark:(bg-secondary);
}
.header {
  @apply flex justify-between items-center flex-wrap p-3;
  @apply md:justify-around;
  @apply lg:justify-between;

  // .header__logo

  &__logo {
    @apply max-w-1/3;
  }

  // .header__demo

  &__demo {
    @apply hidden;
    @apply lg:flex;
  }
}
</style>
