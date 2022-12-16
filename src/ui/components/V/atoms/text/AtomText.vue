<script setup lang="ts"></script>

<template>
  <p class="standard-text">
    <slot />
  </p>
</template>

<style lang="scss" scoped>
.standard-text {
  @apply text-xl text-cGrey text-left;
}
</style>
