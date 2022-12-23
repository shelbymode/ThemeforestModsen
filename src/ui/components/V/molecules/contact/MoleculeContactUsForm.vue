<script setup lang="ts">
import { required, email, minLength, maxLength, helpers, sameAs } from '@vuelidate/validators'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'
import { IInputClasses } from '../../atoms/inputs/AtomInput.vue'

const rulesForm = computed(() => ({
  email: {
    required: helpers.withMessage('Input an name, please', required),
    email: helpers.withMessage("It doesn't look as email", email),
    maxLength: helpers.withMessage('Max length equals 16', maxLength(40)),
  },
  name: {
    required: helpers.withMessage('Input an email, please', required),
    minLength: helpers.withMessage('Min length equals 2', minLength(2)),
    maxLength: helpers.withMessage('Max length equals 16', maxLength(16)),
  },
  theme: {
    required: helpers.withMessage('Input an theme, please', required),
    minLenth: helpers.withMessage('Min length equals 2', minLength(3)),
    maxLength: helpers.withMessage('Max length equals 16', maxLength(16)),
  },
  message: {
    required: helpers.withMessage('Input an email, please', required),
    minLength: helpers.withMessage('Min length equals 2', minLength(2)),
    maxLength: helpers.withMessage('Max length equals 16', maxLength(16)),
  },
}))

const form = reactive({ email: '', name: '', theme: '', message: '' })

const { isFormValid, touch, getMessage, getIsDirty, getIsError, isDirtyAndError, getStatusValidation } =
  useSchemaValidation(rulesForm, form)

interface IFormInfo {
  id: string
  label: string
  placeholder: string
  field: keyof typeof form
}
const formInfoAll: IFormInfo[] = [
  {
    id: 'contact-name-id',
    label: 'Name',
    placeholder: 'Contact name',
    field: 'name',
  },
  {
    id: 'contact-email-id',
    label: 'Email',
    placeholder: 'Contact email',
    field: 'email',
  },
  {
    id: 'contact-theme-id',
    label: 'Theme',
    placeholder: 'Contact theme',
    field: 'theme',
  },
  {
    id: 'contact-message-id',
    label: 'Message',
    placeholder: 'Contact message',
    field: 'message',
  },
]

const customClassesTranslucent: IInputClasses = {
  commonLabelClasses: 'text-cGrey',
}
</script>

<template>
  <section class="contact-form shadow-card-2">
    <AtomMiddleTitle class="contact-form__title">Contact Us</AtomMiddleTitle>
    <form class="contact-form__form">
      <AtomInputTranslucent
        v-for="formInfo in formInfoAll"
        :key="formInfo.id"
        v-model="form[formInfo.field]"
        v-bind="{
          ...formInfo,
          ...customClassesTranslucent,
          statusValidation: getStatusValidation(formInfo.field),
        }"
        @input="touch(formInfo.field)"
      />
    </form>
    <AtomButton :is-disabled="!isFormValid" class="contact-form__send-button">Send</AtomButton>
  </section>
</template>

<style lang="scss" scoped>
.contact-form {
  @apply flex flex-col items-start py-10 p-13 bg-white rounded-md min-w-110;
  // .contact-form__title

  &__title {
  }

  // .contact-form__form

  &__form {
    @apply flex flex-col gap-y-7 mt-10 w-full mb-15;
  }

  // .contact-form__send-button

  &__send-button {
    @apply bg-primary text-white self-end;
  }
}
</style>
