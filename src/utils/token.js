import Cookies from 'js-cookie'
// npm i js-cookie

const TokenKey = 'user_token'

//获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

//设置token
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

//删除token
export function removeToken() {
  return Cookies.remove(TokenKey)
}
