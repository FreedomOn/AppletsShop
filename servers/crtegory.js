import request from './network.js'
const baseURL = "http://152.136.185.210:8000/api/z8"

export function getCategory(){
  return request({
    url: baseURL +  '/category'
  })
}