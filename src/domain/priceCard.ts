export interface ITariff {
  title: string
  name: TTariffName
  durationTime: TDurationTime
  price: number
  currencyCode: TCurrencyCode
  isActive: boolean
}

export interface IPriceCardDTO {
  checks: string[]
  title: string
  tariffs: ITariff[]
}
