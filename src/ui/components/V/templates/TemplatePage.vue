<script setup lang="ts"></script>

<template>
  <div class="container-page">
    <OrganismTheHeader />
    <slot />
    <!-- <OrganismTheFooter /> -->
  </div>
</template>

<style lang="scss" scoped>
.container-page {
  @apply flex flex-col justify-between items-left w-full h-full mx-a;
}
</style>
