<script setup lang="ts"></script>

<template>
  <h2 class="product-title">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
.product-title {
  @apply font-bold  text-[#91d3ee];
  @apply md:text-xl;
  // @apply 2xl:text-2xl;
}
</style>
