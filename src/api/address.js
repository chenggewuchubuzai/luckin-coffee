import { get, post, put, del } from '../utils/request'

//收获地址列表
export const addressList = params => {
  return get('/api/v1/addresses', params)
}

//获取单条收货地址
export const address = id => {
  return get(`/api/v1/addresses${id}`)
}

//新增收货地址
export const addAddress = address => {
  return post('/api/v1/addresses', address)
}

//根据id修改收货地址
export const updateAddress = (id, address) => {
  return put(`/api/v1/addresses${id}`, address)
}

//根据id删除收货地址
export const delAddress = id => {
  return post(`/api/v1/addresses${id}`)
}
