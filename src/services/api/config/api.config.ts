import axios from 'axios'

const baseURL = import.meta.env.VITE_APP_BASE_DEV_API_URL as string

export const axiosInstance = axios.create({
  baseURL: baseURL ? baseURL : 'http://localhost:4000',
})
