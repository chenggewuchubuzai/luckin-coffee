import { get, post, put, del } from '../utils/request'

//获取商品
export const products = params => {
  return get('api/v1/products', params)
}

//根据id获取商品
export const getProductById = id => {
  return get(`api/v1/products${id}`)
}

//删除商品
export const delProductById = id => {
  return del(`api/v1/products${id}`)
}
