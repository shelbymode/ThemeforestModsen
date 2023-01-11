<script setup lang="ts"></script>

<template>
  <p class="product-name">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.product-name {
  @apply bg-[#0e243a] text-[#91d3ee] md:text-2xl;
}
</style>
