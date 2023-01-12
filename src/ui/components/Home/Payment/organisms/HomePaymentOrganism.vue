<script setup lang="ts">
const props = defineProps<{
  modalControls: {
    isOpen: boolean
    openModal: () => void
    closeModal: () => void
  }
  paymentInfo: {
    priceUSD: string
    duration: string
    name: string
  }
}>()
</script>

<template>
  <OrganismVModal
    :is-open="modalControls.isOpen"
    :open-modal="modalControls.openModal"
    :close-modal="modalControls.closeModal"
  >
    <template #header>
      <h1 class="payment-modal__header">
        {{ $t(`home.payment`) }}
      </h1>
    </template>

    <template #content>
      <OrgansimPaymentPriceCard class="payment-modal__content" :payment-info="paymentInfo" />
    </template>
  </OrganismVModal>
</template>

<style lang="scss" scoped>
.payment-modal {
  // .payment-modal__header

  &__header {
    @apply text-bold text-3xl text-[#91d3ee] text-center;
    @apply md:text-4xl;
  }

  // .payment-modal__content

  &__content {
  }
}
</style>
