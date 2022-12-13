<script setup lang="ts"></script>

<template>
  <h3 class="title-middle">
    <slot />
  </h3>
</template>

<style lang="scss" scoped>
.title-middle {
  @apply text-left text-[46px] font-extrabold text-black;
  letter-spacing: -0.015em;
}
</style>
