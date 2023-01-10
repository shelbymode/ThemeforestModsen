<script setup lang="ts">
import { required, email, minLength, maxLength, helpers, sameAs } from '@vuelidate/validators'
import { MaybeRef } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'
import { paintHTMLWords } from '~/shared/utils/paintHTMLWords'

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
    maxLength: helpers.withMessage('Max length equals 16', maxLength(255)),
  },
}))

const form = reactive({ email: '', name: '', theme: '', message: '' })

const { isFormValid, touch, getMessage, getIsDirty, getIsError, isDirtyAndError, getStatusValidation } =
  useSchemaValidation(rulesForm, form)

const { t } = useI18n()

interface IFormInfo {
  id: string
  label: MaybeRef<string>
  placeholder: MaybeRef<string>
  field: keyof typeof form
  tag: 'input' | 'textarea'
}
const formInfoNames: IFormInfo[] = [
  {
    id: 'contact-email-id',
    label: computed(() => t(`common.email`)),
    placeholder: computed(() => t(`common.formPlaceholder.email`)),
    field: 'email',
    tag: 'input',
  },
  {
    id: 'contact-name-id',
    label: computed(() => t(`common.name`)),
    placeholder: computed(() => t(`common.formPlaceholder.name`)),
    field: 'name',
    tag: 'input',
  },
]

const formInfoOther: IFormInfo[] = [
  {
    id: 'contact-theme-id',
    label: computed(() => t(`common.theme`)),
    placeholder: computed(() => t(`common.formPlaceholder.theme`)),
    field: 'theme',
    tag: 'input',
  },
  {
    id: 'contact-message-id',
    label: computed(() => t(`common.message`)),
    placeholder: computed(() => t(`common.formPlaceholder.message`)),
    field: 'message',
    tag: 'textarea',
  },
]

onMounted(() => {
  paintHTMLWords('.contacts-form__title', {
    lastRange: 2,
  })
})
</script>

<template>
  <div class="contacts-form-container">
    <h1 class="contacts-form__title">{{ $t(`common.howWeCanHelp?`) }}</h1>
    <form class="contacts-form">
      <div class="contacts-form__names">
        <AtomInput
          v-for="formInfo in formInfoNames"
          :key="formInfo.id"
          v-model="form[formInfo.field]"
          class="contacts-form__input w-full"
          v-bind="{
            ...formInfo,
            statusValidation: getStatusValidation(formInfo.field),
          }"
          @input="touch(formInfo.field)"
        />
      </div>

      <AtomInput
        v-for="formInfo in formInfoOther"
        :key="formInfo.id"
        v-model="form[formInfo.field]"
        class="contacts-form__input"
        v-bind="{
          ...formInfo,
          statusValidation: getStatusValidation(formInfo.field),
        }"
        @input="touch(formInfo.field)"
      />
      <AtomButton :is-disabled="!isFormValid" class="contact-form__send-button">
        {{ $t(`common.button.send`) }}
      </AtomButton>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contacts-form-container {
  @apply flex flex-col w-full;
  @apply sm:(w-4/5);
  @apply md:(flex-row w-full justify-between gap-x-8);
}
.contacts-form {
  @apply flex flex-col gap-y-6;
  @apply md:(w-1/2);

  // .contacs-form__names

  &__names {
    @apply w-full flex flex-col gap-y-6;
    @apply lg:(flex-row gap-x-6);
  }
  // .contacts-form__title

  &__title {
    @apply text-3xl font-bold w-full text-black mb-12 text-center;
    @apply sm:(text-4xl);
    @apply md:(text-6xl max-w-1/2 text-left);
    @apply lg:(text-7xl);
  }

  // .contacts-form__input

  &__input {
    @apply w-full;
  }
}
.contact-form {
  // .contact-form__send-button

  &__send-button {
    @apply bg-primary text-white w-full;
    @apply lg:(self-end w-fit);
  }
}
</style>
