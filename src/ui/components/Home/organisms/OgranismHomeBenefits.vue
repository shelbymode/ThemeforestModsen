<script setup lang="ts"></script>

<template>
  <div class="benefits-container">
    <TemplatePageContainer class="benefits">
      <MoleculeHomeBenefitsContent />

      <div class="benefits__cards">
        <MoleculeHomeBenefitsHigh />
        <MoleculeHomeBenefitsLow />
      </div>
    </TemplatePageContainer>
  </div>
</template>

<style lang="scss" scoped>
.benefits-container {
  @apply w-full flex justify-center bg-cBackground;
}
.benefits {
  @apply flex items-center justify-between py-37;

  // .benefits__cards

  &__cards {
    @apply flex justify-start gap-x-7;
  }
}
</style>
