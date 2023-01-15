import {
  CreateOrderData,
  OnApproveData,
  PayPalNamespace,
  loadScript,
  OnApproveActions,
  CreateOrderActions,
  OrderResponseBody,
  PurchaseUnit,
} from '@paypal/paypal-js'
import { Ref } from 'vue'
import { IPaymentService, TPaymentData } from '~/application/ports'

const PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID as string

interface IPaypalService {
  purchaseUnits?: PurchaseUnit
  paymentDetails: Ref<{
    isPaid: boolean
    order?: OrderResponseBody
  }>
  loadPaypal(): Promise<PayPalNamespace | null>
  createOrder(data: CreateOrderData, actions: CreateOrderActions): Promise<string>
  onApprove(data: OnApproveData, actions: OnApproveActions): Promise<void>
  transformPaymentDataToPurchaseUnits(paymentData: TPaymentData): PurchaseUnit
  generatePaymentUI(paymentData: TPaymentData, idAttachDOM: string): Promise<void>
}

export class PaypalService implements IPaymentService, IPaypalService {
  public purchaseUnits?: PurchaseUnit
  public paymentDetails = ref({
    isPaid: false,
    order: {} as OrderResponseBody | undefined,
  })

  constructor(private PAYPAL_CLIENT_ID: string) {}

  loadPaypal() {
    return loadScript({ 'client-id': this.PAYPAL_CLIENT_ID })
  }

  transformPaymentDataToPurchaseUnits(paymentData: TPaymentData) {
    const items = paymentData.items.map((item) => {
      return {
        name: item.name,
        description: item.description,
        unit_amount: {
          currency_code: paymentData.currencyCode,
          value: item.price,
        },
        quantity: `${item.quantity}`,
      }
    })

    return {
      amount: {
        currency_code: paymentData.currencyCode,
        value: paymentData.totalPrice,
        breakdown: {
          item_total: {
            currency_code: paymentData.currencyCode,
            value: paymentData.totalPrice,
          },
        },
      },
      items,
    }
  }

  createOrder(data: CreateOrderData, actions: CreateOrderActions) {
    return actions.order.create({
      purchase_units: [this.purchaseUnits!],
    })
  }

  async onApprove(data: OnApproveData, actions: OnApproveActions) {
    try {
      const order = await actions?.order?.capture()

      this.paymentDetails.value.isPaid = true
      this.paymentDetails.value.order = order
    } catch (e) {
      console.error('Error during payment:', e)
      this.paymentDetails.value.isPaid = false
    }
  }

  async generatePaymentUI(paymentData: TPaymentData, idAttachDOM: string) {
    this.purchaseUnits = this.transformPaymentDataToPurchaseUnits(paymentData)

    try {
      const paypal = (await this.loadPaypal()) as PayPalNamespace

      await paypal.Buttons!({
        createOrder: this.createOrder.bind(this),
        onApprove: this.onApprove.bind(this),
      })
        .render(idAttachDOM)
        .catch((e) => console.error('Render error!', e.message))
    } catch (e) {
      console.error('Error!', (e as Error).message)
    }
  }
}

export function usePaypalPayment() {
  return new PaypalService(PAYPAL_CLIENT_ID)
}
