<script setup lang="ts">
import { loadScript, PayPalNamespace } from '@paypal/paypal-js'
import { helpers, required, email, maxLength } from '@vuelidate/validators'
import { MaybeRef } from '@vueuse/core'
import { t } from 'vitest/dist/types-71ccd11d'
import { useI18n } from 'vue-i18n'
import { useSchemaValidation } from '~/shared/libs/useSchemaValidation'

const props = defineProps<{
  paymentInfo: {
    priceUSD: string
    name: string
    duration: string
  }
}>()

const transformedPrice = $computed(() =>
  props.paymentInfo.priceUSD.slice(1).startsWith('0') ? '1' : String(props.paymentInfo.priceUSD.slice(1))
)

console.log(typeof transformedPrice)

const isPaid = ref(false)
const CLIENT_ID = 'AZ14QCeGdlRMAbf-GuAHexBJLDZnVwHEMmxxY_U7xGLjQvhqL81DIJo_2Bo6V-79HHAEBpc-XGIQC964'
const productNameDescription = `${props.paymentInfo.name} for ${props.paymentInfo.duration}`

console.log(props.paymentInfo)

function loadPaypal() {
  return loadScript({ 'client-id': CLIENT_ID })
}

onMounted(async () => {
  loadPaypal()
    .then((paypal) => {
      ;(paypal as PayPalNamespace).Buttons!({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: transformedPrice,
                  breakdown: {
                    item_total: {
                      currency_code: 'USD',
                      value: transformedPrice,
                    },
                  },
                },

                items: [
                  {
                    name: props.paymentInfo.name,
                    description: productNameDescription,
                    unit_amount: {
                      currency_code: 'USD',
                      value: transformedPrice,
                    },
                    quantity: '1',
                  },
                ],
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions?.order?.capture()
          console.log('order:', order)
          isPaid.value = true
        },
      })
        .render('#paypal-button-container')
        .catch((e) => console.log('ERROR1', e.message))
    })
    .catch((e) => console.log('ERROR2', e.message))
})

const ruleEmail = computed(() => ({
  email: {
    required: helpers.withMessage('Input an name, please', required),
    email: helpers.withMessage("It doesn't look as email", email),
    maxLength: helpers.withMessage('Max length equals 16', maxLength(40)),
  },
}))
const { t } = useI18n()

const paymentEmail = reactive({ email: '' })

const { isFormValid, touch, getStatusValidation } = useSchemaValidation(ruleEmail, paymentEmail)

interface IFormInfo {
  id: string
  label: MaybeRef<string>
  placeholder: MaybeRef<string>
  field: keyof typeof paymentEmail
  tag: 'input' | 'textarea'
}

const paymentInfoInput: IFormInfo = {
  id: 'contact-email-id',
  label: computed(() => t(`common.email`)),
  placeholder: computed(() => t(`common.formPlaceholder.email`)),
  field: 'email',
  tag: 'input',
}
</script>

<template>
  <!-- <div v-if="isPaid" class="payement__success-payment text-4xl text-emerald-500 font-bold">
      You have paid <span text-cGrey> {{ productNameDescription }}</span> successfully!
    </div> -->
  <div class="payment">
    <section class="payment-summary">
      <h2 class="payment-summary__title">Summary</h2>

      <div class="payment-summary__product">
        <h2 class="payment-summary__product-title">Product:</h2>
        <p class="payment-summary__product-name">{{ props.paymentInfo.name }}</p>
      </div>

      <div class="payment-summary__price">
        <h2 class="payment-summary__price-title">Price:</h2>
        <p class="payment-summary__price-name">{{ props.paymentInfo.priceUSD }}</p>
      </div>
    </section>

    <section class="payment-interface">
      <AtomInput
        v-model="paymentEmail.email"
        class="contacts-form__input w-full"
        v-bind="{
          commonLabelClasses: 'font-semibold  text-[#91d3ee] md:text-2xl',
          ...paymentInfoInput,
          statusValidation: getStatusValidation(paymentInfoInput.field),
        }"
        @input="touch(paymentInfoInput.field)"
      />
      <div
        id="paypal-button-container"
        class="w-full py-5 rounded-xl max-h-[800px] px-5 overflow-y-auto transition-300"
        :class="{ 'opacity-20 pointer-events-none': !isFormValid, 'bg-white/50': isFormValid }"
      ></div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.payment {
  @apply flex flex-col h-full overflow-y-auto w-full gap-y-10;
  @apply md:(flex-row justify-evenly);
}

.payment-summary {
  @apply flex flex-col w-full px-5 md:px-10 items-start gap-y-5;
  @apply md:(w-1/2);
  // .payment-summary__title

  &__title {
    @apply text-[#91d3ee] text-xl md:text-3xl;
  }

  // .payment-summary__product

  &__product {
    @apply bg-[#0e243a] flex items-center justify-between px-6 py-4 sm:py-6 md:py-8 w-full;
  }

  // .payment-summary__product-title

  &__product-title {
    @apply font-bold  text-[#91d3ee] md:text-2xl;
  }

  // .payment-summary__product-name

  &__product-name {
    @apply text-[#91d3ee] md:text-2xl;
  }

  // .payment-summary__price

  &__price {
    @apply bg-[#0e243a] flex items-center justify-between px-6 py-4 sm:py-6 md:py-8 w-full;
  }

  // .payment-summary__price-title

  &__price-title {
    @apply font-bold  text-[#91d3ee] md:text-2xl;
  }

  // .payment-summary__price-name

  &__price-name {
    @apply bg-[#0e243a]  text-[#91d3ee] md:text-2xl;
  }
}
.payment-interface {
  @apply flex flex-col items-start px-5 w-full gap-y-5;
  @apply md:(w-1/2 px-10);
}
</style>
