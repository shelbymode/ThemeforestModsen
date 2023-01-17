<script setup lang="ts">
const props = defineProps<{
  orderDetails: {
    email: string
    transactionId: string
    amountPaid: string
  }
}>()
</script>

<template>
  <div class="payment-successfull">
    <div class="payment-successfull__header">
      <h2 class="payment-successfull__title">{{ $t(`home.successfullPayment`) }}</h2>
      <AtomVRippleLoader class="payment-successfull__loader">
        <span class="payment-successfull__loader-icon"></span>
      </AtomVRippleLoader>
    </div>

    <HomePaymentMoleculeBadge class="payment-successfull--badge">
      <template #title>
        <span class="text-emerald-500">{{ $t(`common.email`) }}</span>
      </template>
      <template #name
        ><span class="text-emerald-500">{{ props.orderDetails.email }}</span></template
      >
    </HomePaymentMoleculeBadge>

    <HomePaymentMoleculeBadge class="payment-successfull--badge">
      <template #title
        ><span class="text-emerald-500">
          {{ $t(`home.transactionId`) }}
        </span></template
      >
      <template #name
        ><span class="text-emerald-500">{{ props.orderDetails.transactionId }}</span></template
      >
    </HomePaymentMoleculeBadge>

    <HomePaymentMoleculeBadge class="payment-successfull--badge">
      <template #title
        ><span class="text-emerald-500">
          {{ $t(`home.amountPaid`) }}
        </span></template
      >
      <template #name
        ><span class="text-emerald-500">{{ props.orderDetails.amountPaid }}</span></template
      >
    </HomePaymentMoleculeBadge>

    <!--  <button class="payment-successfull__print-btn">
          <span class="i-carbon-download text-3xl"></span>
          Print it
        </button> -->
  </div>
</template>

<style lang="scss" scoped>
.payment-successfull {
  @apply flex flex-col w-full items-start gap-y-5 px-2 rounded-2xl bg-emerald-900/50 py-5
  @apply sm:(px-10);

  // .payment-successfull--badge

  &--badge {
    @apply border-2 border-emerald-300;
  }
  // .payment-successfull__header

  &__header {
    @apply flex items-center justify-between w-full;
  }

  // .payment-successfull__title

  &__title {
    @apply text-emerald-500 text-xl w-full text-center;
    @apply md:text-3xl;
  }

  // .payment-successfull__print-btn

  &__print-btn {
    @apply flex gap-x-3 my-5 items-center text-xl text-black bg-emerald-100 px-6 transition-300 py-3 rounded;
    @apply md:(text-3xl);
    @apply hover:scale-90;
  }
}
.payment-successfull__loader {
  @apply hidden md:flex;

  &-icon {
    @apply i-carbon-checkmark-filled z-1000 text-white/90 text-7xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%];
  }
}
</style>
