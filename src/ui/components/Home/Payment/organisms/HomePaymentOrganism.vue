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
  <OrganismVModal v-bind="props.modalControls">
    <template #header>
      <h1 class="text-bold text-3xl text-[#91d3ee] text-center md:text-4xl">{{ $t(`home.payment`) }}</h1>
    </template>

    <template #close>
      <span
        class="i-carbon-close text-4xl text-white opacity-50 duration-300 hover:(scale-130 opacity-100 cursor-pointer)"
      />
    </template>

    <template #content>
      <OrgansimPaymentPriceCard :payment-info="paymentInfo" />
    </template>
  </OrganismVModal>
</template>

<style lang="scss" scoped></style>
