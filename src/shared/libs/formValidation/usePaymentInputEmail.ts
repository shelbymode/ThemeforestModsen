import { helpers, required, email, maxLength } from '@vuelidate/validators'
import { MaybeRef } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useSchemaValidation } from './useSchemaValidation'

export const usePaymentInputEmail = () => {
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

  interface IFormInfo {
    id: string
    label: MaybeRef<string>
    placeholder: MaybeRef<string>
    field: keyof typeof paymentInputForm
    tag: 'input' | 'textarea'
  }

  const paymentInfoInput: IFormInfo = {
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
