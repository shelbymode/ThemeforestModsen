<script setup lang="ts">
const props = defineProps<{
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()
</script>

<template>
  <section class="payment-summary">
    <h2 class="payment-summary__title">{{ $t(`home.summary`) }}</h2>

    <HomePaymentMoleculeBadge class="bg-[#0e243a]">
      <template #title> {{ $t(`home.product`) }} </template>
      <template #name>{{ props.paymentInfo.name }} </template>
    </HomePaymentMoleculeBadge>

    <HomePaymentMoleculeBadge class="bg-[#0e243a]">
      <template #title>{{ $t(`home.price`) }} </template>
      <template #name>{{ props.paymentInfo.priceUSD }} </template>
    </HomePaymentMoleculeBadge>

    <HomePaymentMoleculeBadge class="bg-[#0e243a]">
      <template #title>{{ $t(`home.duration`) }} </template>
      <template #name>{{ toCapitalize(props.paymentInfo.duration) }} </template>
    </HomePaymentMoleculeBadge>
  </section>
</template>

<style lang="scss" scoped>
.payment-summary {
  @apply flex flex-col w-full px-4 py-5 items-start gap-y-5 m-x-a;
  @apply sm:(px-10 w-4/5);
  @apply xl:(w-1/2);

  // .payment-summary__title

  &__title {
    @apply text-[#91d3ee] w-full justify-center text-xl flex items-center my-0;
    @apply md:(text-3xl my-3);
  }
}
</style>
