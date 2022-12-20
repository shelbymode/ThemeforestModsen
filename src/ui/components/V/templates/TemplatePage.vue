<script setup lang="ts"></script>

<template>
  <div class="container-page">
    <OrganismTheHeader />
    <!-- <slot /> -->
    <h1 class="my-50">Contents</h1>
    <OrganismTheFooter />
  </div>
</template>

<style lang="scss" scoped>
.container-page {
  @apply flex flex-col justify-between items-left w-full min-h-screen h-full mx-a;
}
</style>
