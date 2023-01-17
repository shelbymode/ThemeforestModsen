import { AxiosInstance } from 'axios'
import { useVFetch } from '~/shared/composables/network/useVFetch'
import { TNetworkRequest } from './config/api.types'
import { axiosInstance } from './config/api.config'
import { ICustomerReviewDTO } from '~/domain/customerReview'

export class _ApiCustomersReview {
  static singletoneInstance: _ApiCustomersReview

  apiConfig!: AxiosInstance
  loadAllBlogs!: TNetworkRequest<ICustomerReviewDTO[]>

  constructor(apiConfig: AxiosInstance) {
    if (!_ApiCustomersReview.singletoneInstance) {
      this.apiConfig = apiConfig
      this.loadAllBlogs = useVFetch<ICustomerReviewDTO[]>({
        url: '/server/api/customersReviews.json',
        method: 'get',
        apiConfig,
      })

      _ApiCustomersReview.singletoneInstance = this
    }

    return _ApiCustomersReview.singletoneInstance
  }
}

export const ApiCustomersReview = new _ApiCustomersReview(axiosInstance)
