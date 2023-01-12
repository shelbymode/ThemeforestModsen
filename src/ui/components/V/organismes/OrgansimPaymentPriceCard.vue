<script setup lang="ts">
import { Captures, OrderResponseBody } from '@paypal/paypal-js'

const props = defineProps<{
  paymentInfo: {
    name: string
    duration: string
    priceUSD: string
  }
}>()
const orderDetails = reactive({
  email: '',
  transactionId: '',
  amountPaid: '',
})
const isInputEmailValidRef = ref(false)
const userContactEmail = ref('')

const paymentDetailsReactive = reactive({
  isPaid: false,
  paymentDetails: {} as OrderResponseBody | undefined,
})

const atLeastOneTimeValidInput = ref(false)

const updateInputEmailIsValid = (isInputEmailValid: boolean, email: string) => {
  if (isInputEmailValid && !atLeastOneTimeValidInput.value) {
    atLeastOneTimeValidInput.value = true
  }
  userContactEmail.value = email
  isInputEmailValidRef.value = isInputEmailValid
}

const updatePaymentStatus = ({ isPaid, paymentDetails }: { isPaid: boolean; paymentDetails?: OrderResponseBody }) => {
  paymentDetailsReactive.isPaid = isPaid

  if (paymentDetails && Object.keys(paymentDetails).length > 0) {
    paymentDetailsReactive.paymentDetails = paymentDetails
    console.log(isPaid)
    console.log(paymentDetails)

    const orderCaptured = paymentDetails?.purchase_units[0]?.payments.captures[0] as Captures
    console.log('orderCaptued:', orderCaptured)

    const id = orderCaptured.id as string
    const { currency_code, value } = orderCaptured?.amount

    orderDetails.email = userContactEmail.value
    orderDetails.transactionId = id
    orderDetails.amountPaid = `${value} ${currency_code}`
  }
}
</script>

<template>
  <div class="payment">
    <HomePaymentOrganismSummary :payment-info="props.paymentInfo" />

    <section class="payment-interface">
      <template v-if="!paymentDetailsReactive.isPaid">
        <HomePaymentAtomInputEmail class="w-full" @update-input-email-is-valid="updateInputEmailIsValid" />
        <Transition name="modal" mode="out-in">
          <HomePaymentMoleculePaypal
            v-if="atLeastOneTimeValidInput"
            :payment-info="props.paymentInfo"
            :is-locked="!isInputEmailValidRef"
            @update-payment-status="updatePaymentStatus"
          />
        </Transition>
      </template>

      <HomePaymentOrganismSucessfull v-else v-bind="orderDetails" />
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
