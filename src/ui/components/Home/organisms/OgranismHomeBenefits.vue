<script setup lang="ts"></script>

<template>
  <div class="benefits-container">
    <section class="benefits">
      <MoleculeHomeBenefitsContent />

      <div class="benefits__cards">
        <MoleculeHomeBenefitsHigh />
        <MoleculeHomeBenefitsLow />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.benefits-container {
  @apply w-full flex justify-center bg-cBackground;
}
.benefits {
  @apply flex items-center justify-between  w-full max-w-[57.8125%] py-37;

  // .benefits__cards

  &__cards {
    @apply flex justify-start gap-x-7;
  }
}
</style>
