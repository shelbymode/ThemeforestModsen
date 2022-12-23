<script setup lang="ts"></script>

<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  @apply mx-a w-full;
  @apply md:max-w-[1280px];
}
</style>
