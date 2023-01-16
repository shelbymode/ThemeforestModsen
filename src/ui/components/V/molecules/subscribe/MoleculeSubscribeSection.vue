<script setup lang="ts">
import { helpers, required, email } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'
import { useSchemaValidation } from '~/shared/libs/formValidation/useSchemaValidation'

const { t } = useI18n()
const rulesEmail = computed(() => ({
  email: {
    required: helpers.withMessage('Input an email, please', required),
    email: helpers.withMessage("It doesn't look as email", email),
  },
}))
const form = reactive({ email: '' })

const { isFormValid, touch, getStatusValidation } = useSchemaValidation(rulesEmail, form)

let isMessageSent = $ref(false)

const sendMessage = () => (isMessageSent = true)

const subscribeNewsletter = computed(() => t(`common.subscribeNewsletter`))

const subscribeNewsletterFirst = computed(() => subscribeNewsletter.value.split(' ')[0])
const subscribeNewsletterRest = computed(() => subscribeNewsletter.value.split(' ').slice(1).join(' '))
</script>

<template>
  <section class="subscribe-container">
    <TemplatePageRestrictor class="subscribe">
      <template v-if="!isMessageSent">
        <div class="subscribe__content">
          <AtomMiddleTitle class="subscribe__title">
            {{ subscribeNewsletterFirst }}
            <br class="sm:hidden" />
            {{ subscribeNewsletterRest }}
          </AtomMiddleTitle>
          <AtomText class="subscribe__text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
          </AtomText>
        </div>

        <div class="subscribe-email">
          <AtomInput
            v-bind="{
              id: 'email',
              placeholder: $t(`common.yourEmail`),
              statusValidation: getStatusValidation('email'),
            }"
            v-model="form.email"
            class="subscribe-email__input-email sm:(w-full)"
            @input="touch('email')"
          />
          <AtomButton :is-disabled="!isFormValid" class="subscribe-email__button" @click="sendMessage">
            {{ $t(`common.button.send`) }}
          </AtomButton>
        </div>
      </template>

      <transition name="subscribe" mode="out-in">
        <template v-if="isMessageSent">
          <MoleculeNotification type="success">
            <template #message> {{ $t(`common.successSubscribed`) }} </template>
          </MoleculeNotification>
        </template>
      </transition>
    </TemplatePageRestrictor>
  </section>
</template>

<style lang="scss" scoped>
.subscribe-container {
  @apply w-full grid place-items-center py-10;
  @apply dark:(bg-secondary border-b border-helperBlueTwo);
}
.subscribe {
  @apply flex flex-col items-center justify-between py-10 gap-y-9;
  @apply xl:(flex-row gap-x-10);

  // .subscribe__content

  &__content {
    @apply w-full flex flex-col items-start gap-y-6 max-w-135;
    @apply md:gap-y-9;
    @apply xl:max-w-1/2;
  }

  // .subscribe__title

  &__title {
    @apply text-center font-bold text-black w-full;
    @apply sm:min-w-full;
    @apply dark:(text-white);
    @apply xl:(text-left);
  }

  // .subscribe__text

  &__text {
    @apply hidden text-cGrey text-center;
    @apply md:block;
    @apply dark:(text-white);
    @apply xl:(text-left);
  }
}

.subscribe-email {
  @apply flex flex-col gap-y-6 gap-x-3 w-4/5;
  @apply sm:(items-center w-3/5);
  @apply md:(flex-row);
  @apply xl:max-w-1/2;

  // .subscribe-email__input-email

  &__input-email {
    @apply sm:(w-full);
  }

  // .subscribe-email__button

  &__button {
    @apply bg-cBlack text-white py-4 text-base font-bold;
    @apply dark:(bg-white text-black);
  }
}

/**
* Transition classes
*/

.subscribe-enter-from {
  opacity: 0;
  transform: scale(0);
}
.subscribe-leave-to {
  opacity: 0;
  transform: scale(0);
}

.subscribe-enter-active,
.subscribe-leave-active {
  transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
}
</style>
