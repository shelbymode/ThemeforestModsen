<script setup lang="ts">
import { useStorePaymentPriceCards } from '~/application/store/useHomePaymentStore'
import { usePaymentInputEmail } from '~/shared/libs/formValidation/usePaymentInputEmail'

const storePaymentPriceCards = useStorePaymentPriceCards()

const { isFormValid, touch, getStatusValidation, paymentInputForm, paymentInfoInput } = usePaymentInputEmail()

watch(
  () => paymentInputForm.email,
  (newValue) => {
    storePaymentPriceCards.updateInputEmailValidStatus(isFormValid.value, newValue)
  }
)
</script>

<template>
  <AtomInput
    v-model="paymentInputForm.email"
    class="contacts-form__input"
    v-bind="{
      commonLabelClasses: 'font-semibold  text-[#91d3ee] md:text-2xl',
      ...paymentInfoInput,
      statusValidation: getStatusValidation(paymentInfoInput.field),
    }"
    @input="touch(paymentInfoInput.field)"
  />
</template>

<style lang="scss" scoped></style>
