import { get, post, put, del } from '../utils/request'

//用户注册
export const login = params => {
  return post('/api/v1/auth/login', params)
}

//用户登录
export const register = user => {
  return post('/api/v1/auth/reg', user)
}
