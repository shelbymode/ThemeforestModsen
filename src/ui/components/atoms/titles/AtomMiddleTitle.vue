<script setup lang="ts"></script>

<template>
  <h3 class="title-middle">
    <slot />
  </h3>
</template>

<style lang="scss" scoped>
.title-middle {
  @apply text-4xl font-extrabold text-black;
}
</style>
