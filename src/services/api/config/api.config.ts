import axios from 'axios'
import { GlobalConstants } from '~/shared/constants/global.constant'

const baseURL = GlobalConstants.BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseURL ? baseURL : 'http://localhost:4000',
})
