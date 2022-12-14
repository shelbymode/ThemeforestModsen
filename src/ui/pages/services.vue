<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="services">
      <OrganismServicesCollection />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.services {
  @apply flex flex-col items-center bg-white;
}
</style>
