import { AxiosInstance } from 'axios'
import { useVFetch } from '~/shared/composables/network/useVFetch'
import { TNetworkRequest } from './config/api.types'
import { axiosInstance } from './config/api.config'
import { IPriceCardDTO } from '~/domain/priceCard'

export class ApiPriceCard {
  static singletoneInstance: ApiPriceCard

  apiConfig!: AxiosInstance
  loadAllBlogs!: TNetworkRequest<IPriceCardDTO[]>

  constructor(apiConfig: AxiosInstance) {
    if (!ApiPriceCard.singletoneInstance) {
      this.apiConfig = apiConfig
      this.loadAllBlogs = useVFetch<IPriceCardDTO[]>({
        url: '/server/api/priceCards.json',
        method: 'get',
        apiConfig,
      })

      ApiPriceCard.singletoneInstance = this
    }

    return ApiPriceCard.singletoneInstance
  }
}

export const ApiCustomersReviews = new ApiPriceCard(axiosInstance)
