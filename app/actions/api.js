import axios from 'axios'
import ActionTypes from '../consts/ActionTypes'

const localhost = window.location.host.includes('localhost')
const apiUrl = localhost ? 'http://localhost:8000' : 'https://api.tala.is'

function request(method, url, data) {
  const config = {
    method,
    data,
    url: `${apiUrl}/${url}`,
  }

  return axios(config)
    .then(res => res.data)
}

export function get(url) {
  return request('get', url)
}

export function put(url, data) {
  return request('put', url, data)
}

export function post(url, data) {
  return request('post', url, data)
}

