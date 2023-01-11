<script setup lang="ts">
const props = defineProps<{
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()

const isInputEmailValidRef = ref(false)

const updateInputEmailIsValid = (isInputEmailValid: boolean) => {
  console.log('update form status')
  isInputEmailValidRef.value = isInputEmailValid
}
</script>

<template>
  <!-- <div v-if="isPaid" class="payement__success-payment text-4xl text-emerald-500 font-bold">
      You have paid <span text-cGrey> {{ productNameDescription }}</span> successfully!
    </div> -->
  <div class="payment">
    <section class="payment-summary">
      <h2 class="payment-summary__title">{{ $t(`home.summary`) }}</h2>

      <HomePaymentMoleculeBadge>
        <template #title> {{ $t(`home.product`) }} </template>
        <template #name>{{ props.paymentInfo.name }} </template>
      </HomePaymentMoleculeBadge>

      <HomePaymentMoleculeBadge>
        <template #title>{{ $t(`home.price`) }} </template>
        <template #name>{{ props.paymentInfo.priceUSD }} </template>
      </HomePaymentMoleculeBadge>
    </section>

    <section class="payment-interface">
      <HomePaymentAtomInputEmail @update-input-email-is-valid="updateInputEmailIsValid" />
      <HomePaymentMoleculePaypal :payment-info="props.paymentInfo" :is-locked="!isInputEmailValidRef" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  @apply flex flex-col h-full overflow-y-auto w-full gap-y-10;
  @apply md:(flex-row justify-evenly);
}

.payment-summary {
  @apply flex flex-col w-full px-5 md:px-10 items-start gap-y-5;
  @apply md:(w-1/2);
  // .payment-summary__title

  &__title {
    @apply text-[#91d3ee] text-xl md:text-3xl;
  }
}
.payment-interface {
  @apply flex flex-col items-start px-5 w-full gap-y-5;
  @apply md:(w-1/2 px-10);
}
</style>
