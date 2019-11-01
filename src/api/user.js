import { get, post, put, del } from '../utils/request'

//用户注册
export const login = user => {
  return post('/api/v1/auth/login', user)
}

//用户登录
export const register = user => {
  return post('/api/v1/auth/reg', user)
}

//获取用户信息
export const getInfo = () => {
  return get('/api/v1/users/info')
}
