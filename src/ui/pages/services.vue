<script setup lang="ts"></script>

<template>
  <TemplatePage>
    <main class="services">
      <OrganismServicesCollection />
      <OrganismServicesAdditional />
    </main>
  </TemplatePage>
</template>

<style lang="scss" scoped>
.services {
  @apply flex flex-col items-center bg-white mt-20 overflow-hidden gap-y-10;
}
</style>
