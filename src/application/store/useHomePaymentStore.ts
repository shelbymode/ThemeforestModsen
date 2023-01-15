import { OrderResponseBody } from '@paypal/paypal-js'
import { defineStore } from 'pinia'

const useStorePaymentPriceCards = defineStore('price-cards-payment', {
  state: () => ({
    orderDetails: {
      email: '',
      transactionId: '',
      amountPaid: '',
    },
    isInputEmailValid: false,
    userContactEmail: '',
    paymentDetails: {
      isPaid: false,
      order: {} as OrderResponseBody | undefined,
    },
    atLeastOneTimeValidInput: false,
  }),
  getters: {
    getIsInputEmailValid: (state) => state.isInputEmailValid,
    getAtLeastOneTimeValidInput: (state) => state.atLeastOneTimeValidInput,
    getIsPaid: (state) => state.paymentDetails.isPaid,
  },
  actions: {
    /**
     * After first time when user correctly inputs email -
     * switch on `atLeastOneTimeValidInput` value
     * && render `HomePaymentMoleculePaypal`
     */
    updateInputEmailValidStatus(isInputEmailValid: boolean, email: string) {
      if (isInputEmailValid && !this.atLeastOneTimeValidInput) {
        this.atLeastOneTimeValidInput = true
      }
      this.userContactEmail = email
      this.isInputEmailValid = isInputEmailValid
    },
    updatePaymentStatus({ isPaid, order }: { isPaid: boolean; order?: OrderResponseBody }) {
      this.paymentDetails.isPaid = isPaid
      this.paymentDetails.order = order

      /**
       * Successfull payment
       */
      if (
        order &&
        order.purchase_units &&
        order.purchase_units[0] &&
        order.purchase_units[0].payments &&
        order.purchase_units[0].payments.captures &&
        order.purchase_units[0].payments.captures[0]
      ) {
        const orderCaptured = order.purchase_units[0].payments.captures[0]

        console.log('order captured:', orderCaptured)

        const { currency_code, value } = orderCaptured?.amount as { currency_code: string; value: string }

        this.orderDetails = {
          transactionId: orderCaptured!.id as string,
          amountPaid: `${value} ${currency_code}`,
          email: this.userContactEmail,
        }
      }
      // TODO: add fail case
    },
  },
})

export { useStorePaymentPriceCards }
