<script setup lang="ts"></script>

<template>
  <div class="page-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  @apply flex mx-a flex-col items-center max-w-[57.8125%] w-full;
}
</style>
