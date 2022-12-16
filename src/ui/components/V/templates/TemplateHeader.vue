<script setup lang="ts"></script>

<template>
  <header class="header">
    <TemplatePageContainer class="header-container">
      <slot name="logo"></slot>

      <main class="header__links">
        <slot name="links"></slot>
      </main>

      <slot name="demo"></slot>
    </TemplatePageContainer>

    <AtomToggleDarkMode />
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply flex items-center justify-center w-full h-full min-h-35 h-35 bg-white;
  @apply dark:(bg-secondary);

  // .header__links

  &__links {
    @apply relative flex items-center gap-x-9;
  }
}
.header-container {
  @apply flex h-full items-center justify-between;
}
</style>
