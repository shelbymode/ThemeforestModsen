<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header-container">
      <slot name="logo"></slot>

      <main class="header__links">
        <slot name="links"></slot>
      </main>

      <slot name="demo"></slot>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply flex items-center justify-center w-full py-10 bg-white;
  @apply dark:(bg-secondary);

  // .header__links

  &__links {
    @apply flex items-center gap-x-9;
  }
}
.header-container {
  @apply flex items-center justify-between min-w-[57%];
}
</style>
