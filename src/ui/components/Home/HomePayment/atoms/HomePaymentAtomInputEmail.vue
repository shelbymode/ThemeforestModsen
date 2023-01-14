<script setup lang="ts">
import { usePaymentInputEmail } from '~/shared/composables/payment/usePaymentInputEmail'

const emit = defineEmits<{
  (e: 'update-input-email-is-valid', value: boolean, email: string): void
}>()

const { isFormValid, touch, getStatusValidation, paymentInputForm, paymentInfoInput } = usePaymentInputEmail()

watch(
  isFormValid,
  (newValue) => {
    emit('update-input-email-is-valid', newValue, paymentInputForm.email)
  },
  {
    immediate: true,
  }
)
watchEffect(() => {
  emit('update-input-email-is-valid', isFormValid.value, paymentInputForm.email)
})
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