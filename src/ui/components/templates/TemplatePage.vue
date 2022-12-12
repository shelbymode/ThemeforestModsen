<script setup lang="ts"></script>

<template>
  <div class="container-page">
    <OrganismTheHeader></OrganismTheHeader>
    <slot />
    <OrganismTheFooter></OrganismTheFooter>
  </div>
</template>

<style lang="scss" scoped>
.container-page {
  @apply flex flex-col justify-between items-left w-full h-full;
}
</style>
