import { get, post, put, del } from '../utils/request'

//获取商品信息
export const products = params => {
  return get('api/v1/products', params)
}

//根据id获取商品详情
export const getProductById = id => {
  return get(`api/v1/products${id}`)
}

//获取购物车数据
export const cartsProducts = () => {
  return get('/api/v1/shop_carts')
}

//添加商品到购物车
export const addToCarts = product => {
  return post('/api/v1/shop_carts', product)
}

//删除购物车中商品
export const delCartsProduct = id => {
  return del(`/api/v1/shop_carts${id}`)
}
