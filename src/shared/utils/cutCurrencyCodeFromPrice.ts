export const cutCurrencyCodeFromPrice = (priceWithCurrencyCode: string) => {
  // TODO: add anothe currencies
  return priceWithCurrencyCode.startsWith('$') ? priceWithCurrencyCode.slice(1) : priceWithCurrencyCode
}
