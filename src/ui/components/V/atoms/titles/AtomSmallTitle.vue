<script setup lang="ts"></script>

<template>
  <h3 class="title-middle">
    <slot />
  </h3>
</template>

<style lang="scss" scoped>
.title-middle {
  @apply text-[22px] font-bold;
  color: #292d33;
  letter-spacing: -0.015em;
}
</style>
