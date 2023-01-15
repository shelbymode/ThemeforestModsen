export type TNetworkMethod = 'get' | 'post' | 'patch' | 'delete'

export type IResponseError = {
  message: string
  status: number
}

export type TNetworkRequest<D = unknown> = (params?: { body?: object; options?: object }) => Promise<{
  data?: D
  error?: IResponseError
}>
