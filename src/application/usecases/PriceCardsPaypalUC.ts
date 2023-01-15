import { usePaypalPayment } from '~/services/paypalAdapter'
import { TPaymentData } from '../ports'
import { useStorePaymentPriceCards } from '../store/useHomePaymentStore'

export const priceCardsPaypalUC = (paymentInfo: TPaymentData, idAttachDOM: string) => {
  const paypalPayment = usePaypalPayment()
  const storePaymentPriceCards = useStorePaymentPriceCards()

  const paymentDetails = paypalPayment.paymentDetails

  const generatePaymentUI = () => {
    return paypalPayment.generatePaymentUI(paymentInfo, idAttachDOM)
  }

  return { generatePaymentUI, storePaymentPriceCards, paymentDetails }
}
