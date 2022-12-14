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
  <section class="help">
    <AtomMiddleTitle class="help__title">Do you need help?</AtomMiddleTitle>
    <AtomText class="help__text">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
      commodi.
    </AtomText>
    <AtomButton class="help__button-contact-us">Contact us</AtomButton>
  </section>

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
@import './OrganismHomeAdditional.scss';
</style>
