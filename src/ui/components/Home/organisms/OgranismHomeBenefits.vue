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
  @apply w-full flex justify-center bg-cBackground px-6;
  @apply lg:(py-10);
}
.benefits {
  @apply flex items-center flex-col gap-y-5 justify-between;
  @apply lg:(flex-row);

  // .benefits__cards

  &__cards {
    @apply flex justify-start gap-x-7 pb-6 w-full overflow-scroll;
    @apply md:(justify-center w-full);

    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
