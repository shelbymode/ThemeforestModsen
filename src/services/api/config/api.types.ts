import { Ref } from 'vue'

export type TNetworkMethod = 'get' | 'post' | 'patch' | 'delete'

export type IResponseError = {
  message: string
  status: number
}
export interface IResponse<D> {
  data: Ref<D | null>
  error: Ref<IResponseError | null>
}

export type TNetworkRequest<D = unknown> = (params?: { body?: object; options?: object }) => Promise<IResponse<D>>
