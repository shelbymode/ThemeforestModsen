<script setup lang="ts">
import { helpers, required, email } from '@vuelidate/validators'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'

const rulesEmail = computed(() => ({
  email: {
    required: helpers.withMessage('Input an email, please', required),
    email: helpers.withMessage("It doesn't look as email", email),
  },
}))

const form = reactive({ email: '' })

const { isFormValid, touch, getStatusValidation } = useSchemaValidation(rulesEmail, form)
</script>

<template>
  <section class="subscribe">
    <div class="subscribe-container">
      <div class="subscribe__content">
        <AtomMiddleTitle class="subscribe__title">Subscribe to our newsletter</AtomMiddleTitle>
        <AtomText class="subscribe__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </AtomText>
      </div>
      <div class="subscribe-email" flex items-center gap-x-3>
        <AtomInput
          id="email"
          v-model="form.email"
          class="subscribe-email__input-email"
          placeholder="Your email"
          type="text"
          :status-validation="getStatusValidation('email')"
          @input="touch('email')"
        ></AtomInput>
        <AtomButton :is-disabled="!isFormValid" class="subscribe-email__button"> Send </AtomButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.subscribe {
  @apply w-full grid place-items-center;
  @apply dark:(bg-secondary border-b border-helperBlueTwo);
  // .subscribe__content

  &__content {
    @apply w-full flex flex-col items-start gap-y-6 max-w-135;
  }

  // .subscribe__title

  &__title {
    @apply text-black;
    @apply dark:(text-white);
  }

  // .subscribe__text

  &__text {
    @apply text-cGrey;
    @apply dark:(text-white);
  }
}
.subscribe-container {
  @apply flex w-full items-center justify-between py-20 max-w-[57.8125%];
}
.subscribe-email {
  // .subscribe-email__input-email

  &__input-email {
  }

  // .subscribe-email__button

  &__button {
    @apply bg-cBlack text-white py-4 text-base font-bold;
    @apply dark:(bg-white text-black);
  }
}
</style>
