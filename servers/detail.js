// 把url抽离出来
import request from './network.js'
const baseURL = "http://152.136.185.210:8000/api/z8"
export function detailData(iid){
  return request({
    url:baseURL + '/detail',
    data:{
      iid:iid
    }
  })
}
export function getRecommends() {
  return request({
    url: baseURL +  '/recommend'
  })
}

