<script setup lang="ts">
import { helpers, required, email, maxLength } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'
import { useStorePaymentPriceCards } from '~/application/store/useHomePaymentStore'
import { useSchemaValidation } from '~/shared/composables/formValidation/useSchemaValidation'
import { IFormInfo } from '~/shared/composables/formValidation/useValidationHelpers'

const usePaymentInputEmail = () => {
  const ruleEmail = computed(() => ({
    email: {
      required: helpers.withMessage('Input an name, please', required),
      email: helpers.withMessage("It doesn't look as email", email),
      maxLength: helpers.withMessage('Max length equals 16', maxLength(40)),
    },
  }))
  const { t } = useI18n()

  const paymentInputForm = reactive({ email: '' })

  const { isFormValid, touch, getStatusValidation } = useSchemaValidation(ruleEmail, paymentInputForm)

  const paymentInfoInput: IFormInfo<typeof paymentInputForm> = {
    id: 'contact-email-id',
    label: computed(() => t(`common.email`)),
    placeholder: computed(() => t(`common.formPlaceholder.email`)),
    field: 'email',
    tag: 'input',
  }

  return {
    isFormValid,
    touch,
    getStatusValidation,
    paymentInputForm,
    paymentInfoInput,
  }
}

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
