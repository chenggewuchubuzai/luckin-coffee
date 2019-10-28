import Cookies from 'js-cookie'

const TokenKey = 'user_token'

//获取token
export function getToken() {
  return Cookies.get(TokenKey)
}

//设置token
export function setToken() {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
