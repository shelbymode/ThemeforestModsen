<script setup lang="ts">
import { OrderResponseBody } from '@paypal/paypal-js'
import { usePaymentPaypal } from '~/shared/composables/payment/usePaymentPaypal'

const props = defineProps<{
  isLocked: boolean
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()

const emit = defineEmits<{
  (e: 'update-payment-status', payment: { isPaid: boolean; paymentDetails?: OrderResponseBody }): void
}>()

const { paypalRequest, paymentDetailsReactive } = usePaymentPaypal({
  currencyCode: 'USD',
  name: props.paymentInfo.name,
  duration: props.paymentInfo.duration,
  rawPrice: props.paymentInfo.priceUSD,
})

watchEffect(() => {
  console.log('reactive updat payment statusL', paymentDetailsReactive)

  emit('update-payment-status', paymentDetailsReactive)
})

onMounted(paypalRequest)
</script>

<template>
  <div
    id="paypal-button-container"
    class="w-full py-5 rounded-xl max-h-[800px] px-5 overflow-y-auto transition-300"
    :class="{ 'opacity-20 pointer-events-none': isLocked, 'bg-white/50': !isLocked }"
  ></div>
</template>

<style lang="scss" scoped></style>
