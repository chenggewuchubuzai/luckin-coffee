import Cookies from 'js-cookie'
// npm i js-cookie

const TokenKey = 'user_token'

//获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

//设置token
export function setToken(token) {
  return localStorage.setItem(TokenKey, token)
}

//删除token
export function removeToken() {
  return localStorage.removeItem(TokenKey)
}
