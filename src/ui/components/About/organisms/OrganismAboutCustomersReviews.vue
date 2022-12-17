<script setup lang="ts"></script>

<template>
  <TemplatePageContainer class="customers">
    <MoleculeAboutCustomersHeader />
    <MoleculeAboutCustomersContent />
  </TemplatePageContainer>
</template>

<style lang="scss" scoped>
.customers {
  @apply flex flex-col items-left gap-y-22 pt-30 pb-15 mb-15 overflow-x-hidden;
}
</style>
