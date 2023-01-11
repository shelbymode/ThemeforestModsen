import {
  CreateOrderActions,
  CreateOrderData,
  loadScript,
  OnApproveData,
  OnApproveActions,
  PayPalNamespace,
} from '@paypal/paypal-js'

const PAYPAL_CLIENT_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID as string

const loadPaypal = () => loadScript({ 'client-id': PAYPAL_CLIENT_ID })

export const usePaymentPaypal = ({
  currencyCode,
  name,
  duration,
  rawPrice,
}: {
  currencyCode: string
  name: string
  duration: string
  rawPrice: string
}) => {
  const isPaid = ref(false)

  const transformedPrice = $computed(() => {
    const tPrice = String(rawPrice.slice(1))
    return tPrice.startsWith('0') ? '1' : tPrice
  })

  const productNameDescription = `${name} for ${duration}`

  const createOrder = (data: CreateOrderData, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: currencyCode,
            value: transformedPrice,
            breakdown: {
              item_total: {
                currency_code: currencyCode,
                value: transformedPrice,
              },
            },
          },

          items: [
            {
              name,
              description: productNameDescription,
              unit_amount: {
                currency_code: currencyCode,
                value: transformedPrice,
              },
              quantity: '1',
            },
          ],
        },
      ],
    })
  }

  const onApprove = async (data: OnApproveData, actions: OnApproveActions) => {
    const order = await actions?.order?.capture()
    console.log('order:', order)
    isPaid.value = true
  }

  const paypalRequest = async () => {
    try {
      const paypal = (await loadPaypal()) as PayPalNamespace
      paypal.Buttons!({
        createOrder,
        onApprove,
      })
        .render('#paypal-button-container')
        .catch((e) => console.error('Render error!', e.message))
    } catch (e) {
      console.error('Error!', (e as Error).message)
    }
  }

  return { paypalRequest }
}
