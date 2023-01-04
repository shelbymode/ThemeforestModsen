<script setup lang="ts">
import { required, email, minLength, maxLength, helpers, sameAs } from '@vuelidate/validators'
import { MaybeRef } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
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
  label: MaybeRef<string>
  placeholder: MaybeRef<string>
  field: keyof typeof form,
  tag: 'input' | 'textarea'
}
const { t } = useI18n()

const formInfoAll: IFormInfo[] = [
  {
    id: 'contact-name-id',
    label: computed(() => toCapitalize(t(`common.name`))),
    placeholder: computed(() => toCapitalize(t(`common.formPlaceholder.name`))),
    field: 'name',
    tag: 'input',
  },
  {
    id: 'contact-email-id',
    label: computed(() => toCapitalize(t(`common.email`))),
    placeholder: computed(() => toCapitalize(t(`common.formPlaceholder.email`))),
    field: 'email',
    tag: 'input',
  },
  {
    id: 'contact-theme-id',
    label: computed(() => toCapitalize(t(`common.theme`))),
    placeholder: computed(() => toCapitalize(t(`common.formPlaceholder.theme`))),
    field: 'theme',
    tag: 'input',
  },
  {
    id: 'contact-message-id',
    label: computed(() => toCapitalize(t(`common.message`))),
    placeholder: computed(() => toCapitalize(t(`common.formPlaceholder.message`))),
    field: 'message',
    tag: 'textarea'
  },
]

const customClassesTranslucent: IInputClasses = {
  commonLabelClasses: 'text-cGrey',
}
</script>

<template>
  <section class="contact-form shadow-card-2">
    <AtomMiddleTitle class="contact-form__title">
      {{ toCapitalize($t(`common.button.contactUs`)) }}
    </AtomMiddleTitle>
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
    <AtomButton :is-disabled="!isFormValid" class="contact-form__send-button">
      {{ toCapitalize($t(`common.button.send`)) }}
    </AtomButton>
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
