import axios from 'axios'
import { getToken } from '../utils/token'

const service = axios.create({
  baseURL: 'http://39.106.231.90:3000',
  timeout: 5000
})

//全局请求拦截
service.interceptors.request.use(
  config => {
    config.headers['authorization'] = 'Bearer ' + getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

//全局响应拦截
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && error.response.status === 401) {
      window.location.href = '#/login'
    }
    return Promise.reject(error)
  }
)

export const get = (url, params) => service.get(url, { params })
export const post = (url, data) => service.post(url, data)
export const put = (url, data) => service.put(url, data)
export const del = (url, data) => service.delete(url, data)

export default service
