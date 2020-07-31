// 把url抽离出来
import request from './network.js'
// const baseUrl = 'http://123.207.32.32:8000'
const baseURL = "http://152.136.185.210:8000/api/z8"
export function getIndexData(){
  return request({
    url:baseURL + '/home/multidata'
  })
}
export function getGoodsData(type,page){
    return request({
      url: baseURL + '/home/data',
      data: {
        type,
        page
      }
    })
}
export function ceshi(){
  return request({
    url:'http://172.30.53.15:8888/table'
  })
}