import { AxiosInstance, AxiosError } from 'axios'
import { IResponseError, TNetworkMethod } from '~/services/api/config/api.types'

function useVFetch<D = unknown>({
  url,
  method,
  apiConfig,
}: {
  url: string
  method: TNetworkMethod
  apiConfig: AxiosInstance
}) {
  return async ({ body, options }: { body?: object; options?: object } = {}) => {
    let responseData
    let error

    // TODO:fix - works only for get and post methods
    try {
      if (method === 'get') responseData = (await apiConfig.get(url, { ...options }))?.data
      else if (method === 'post' && body) {
        responseData = (await apiConfig.post(url, { ...body }, { ...options }))?.data
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response) {
        error = e.response.data as IResponseError
      } else {
        error = {
          message: 'Some error',
          status: 400,
        }
      }
    }
    return { data: responseData as D, error }
  }
}

export { useVFetch }
