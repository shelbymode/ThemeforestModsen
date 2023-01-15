import { AxiosInstance } from 'axios'
import { IBlogDTO } from '~/domain/blog'
import { useVFetch } from '~/shared/composables/network/useVFetch'
import { TNetworkRequest } from './config/api.types'
import { axiosInstance } from './config/api.config'

export class _ApiBlog {
  static singletoneInstance: _ApiBlog

  apiConfig!: AxiosInstance
  loadAllBlogs!: TNetworkRequest<IBlogDTO[]>

  constructor(apiConfig: AxiosInstance) {
    if (!_ApiBlog.singletoneInstance) {
      this.apiConfig = apiConfig
      this.loadAllBlogs = useVFetch<IBlogDTO[]>({
        url: '/server/api/blogs.json',
        method: 'get',
        apiConfig,
      })

      _ApiBlog.singletoneInstance = this
    }

    return _ApiBlog.singletoneInstance
  }
}

export const ApiBlog = new _ApiBlog(axiosInstance)
