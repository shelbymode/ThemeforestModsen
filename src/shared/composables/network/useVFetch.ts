import { AxiosInstance, AxiosError } from 'axios'
import { IResponseError, TNetworkMethod } from '~/services/api/config/api.types'

function useVFetch<D = unknown>({
  url,
  method,
  apiConfig,
  sleepMs,
}: {
  url: string
  method: TNetworkMethod
  apiConfig: AxiosInstance
  sleepMs?: number
}) {
  return async ({ body, options }: { body?: object; options?: object } = {}) => {
    const responseData = ref<D | null>(null)
    const error = ref<IResponseError | null>(null)

    if (sleepMs) {
      await new Promise((resolve) => setTimeout(resolve, sleepMs))
    }
    // TODO:fix - works only for get and post methods
    try {
      if (method === 'get') {
        responseData.value = (await apiConfig.get(url, { ...options }))?.data
      } else if (method === 'post' && body) {
        responseData.value = (await apiConfig.post(url, { ...body }, { ...options }))?.data
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError && e.response) {
        error.value = e.response.data
      } else {
        error.value = {
          message: 'Some error',
          status: 400,
        }
      }
    }
    return { data: responseData, error }
  }
}

export { useVFetch }
