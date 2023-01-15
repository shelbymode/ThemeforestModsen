<script setup lang="ts">
import { priceCardsPaypalUC } from '~/application/usecases/PriceCardsPaypalUC'
import { cutCurrencyCodeFromPrice } from '~/shared/utils/cutCurrencyCodeFromPrice'

const props = defineProps<{
  isLocked: boolean
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()

const { generatePaymentUI, storePaymentPriceCards, paymentDetails } = priceCardsPaypalUC(
  {
    totalPrice: cutCurrencyCodeFromPrice(props.paymentInfo.priceUSD),
    currencyCode: 'USD',
    items: [
      {
        name: props.paymentInfo.name,
        price: cutCurrencyCodeFromPrice(props.paymentInfo.priceUSD),
        description: `${props.paymentInfo.name} for ${props.paymentInfo.duration}`,
        quantity: '1',
      },
    ],
  },
  '#paypal-button-container'
)

watchEffect(() => {
  storePaymentPriceCards.updatePaymentStatus(paymentDetails.value)
})

onMounted(() => {
  generatePaymentUI()
})
</script>

<template>
  <div
    id="paypal-button-container"
    class="w-full py-5 rounded-xl max-h-[800px] px-5 overflow-y-auto transition-300"
    :class="{ 'opacity-20 pointer-events-none': isLocked, 'bg-white/50': !isLocked }"
  ></div>
</template>

<style lang="scss" scoped></style>
