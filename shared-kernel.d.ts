/**
 * Global types that don't high coupling in the application
 */

declare global {
  type TTimestamp = number
  type TAuthorId = string
  type TImageLink = string
  type TBlogId = string
  type TViewsCount = number
  type TCustomerName = string
  type TCustomerPosition = string
  type TReviewText = string
  type TDurationTime = 'month' | 'year'
  type TCurrencyCode = 'USD' | 'RUB' | 'EUR'
  type TTariffName = string
  type TIdSelector<T extends string> = T extends `${infer F}${infer Rest}` ? (F extends '#' ? T : never) : never
}
export {}
