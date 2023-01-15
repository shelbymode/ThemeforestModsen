<script setup lang="ts">
import { useStorePaymentPriceCards } from '~/application/store/useHomePaymentStore'

const props = defineProps<{
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()

const storePaymentPriceCards = useStorePaymentPriceCards()
</script>

<template>
  <div class="payment">
    <HomePaymentOrganismSummary :payment-info="props.paymentInfo" />
    <section class="payment-interface">
      <template v-if="!storePaymentPriceCards.getIsPaid">
        <HomePaymentAtomInputEmail class="w-full" />

        <Transition name="modal" mode="out-in">
          <HomePaymentMoleculePaypal
            v-if="storePaymentPriceCards.getAtLeastOneTimeValidInput"
            :payment-info="props.paymentInfo"
            :is-locked="!storePaymentPriceCards.getIsInputEmailValid"
          />
        </Transition>
      </template>

      <HomePaymentOrganismSucessfull v-else :order-details="storePaymentPriceCards.orderDetails" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  @apply flex flex-col w-full gap-y-10;
  @apply xl:(flex-row justify-evenly);
}

.payment-interface {
  @apply flex flex-col w-full px-4 py-5 items-start gap-y-5 m-x-a;
  @apply sm:(px-10 w-4/5);
  @apply xl:(w-1/2);
}
</style>
