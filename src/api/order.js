import { get, post, put, del } from '../utils/request'

//获取订单列表
export const orderList = params => {
  return get('/api/v1/orders', params)
}

//订单提交
export const subOrder = order => {
  return post('/api/v1/orders', order)
}

//根据id删除订单
export const delOrder = id => {
  return del(`/api/v1/orders${id}`)
}
