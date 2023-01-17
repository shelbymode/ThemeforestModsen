<script setup lang="ts"></script>

<template>
  <p class="product-name">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.product-name {
  @apply text-[#91d3ee] text-sm;
  @apply md:text-xl;
  // @apply 2xl:text-2xl;
}
</style>
