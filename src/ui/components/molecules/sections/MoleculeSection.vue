<script setup lang="ts">
import { helpers, required, email } from '@vuelidate/validators'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'
import { IInputClasses } from '../../inputs/AtomInput.vue'

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
  <div class="section-wrapper">
    <div class="section">
      <div class="section-content">
        <h3 class="section-content__title">Subscribe to our newsletter</h3>
        <p class="section-content__text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </div>

      <div class="section-email" flex items-center gap-x-3>
        <AtomInput
          id="email"
          v-model="form.email"
          class="section-email__input-email"
          placeholder="Your email"
          type="text"
          :status-validation="getStatusValidation('email')"
          @input="touch('email')"
        ></AtomInput>
        <AtomButton :is-disabled="!isFormValid" class="section-email__button"> Send </AtomButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-wrapper {
  @apply w-full flex justify-center items-center bg-primary;
  @apply dark:bg-secondary;
}
.section {
  @apply max-w-[57.8125%] w-full flex justify-between items-center py-20;
}
.section-content {
  @apply flex flex-col items-start gap-y-6 max-w-110;

  // .section-content__title

  &__title {
    @apply text-4xl text-white font-extrabold w-max;
  }

  // .section-content__text

  &__text {
    @apply text-xl text-white;
  }
}
.section-email {
  // .section-email__input-email

  &__input-email {
  }

  // .section-email__button

  &__button {
    @apply bg-white py-4 text-black text-base font-bold;
    @apply hover:(scale-100);
  }
}
</style>
