import request from './network.js'
const baseURL = "http://152.136.185.210:8000/api/z8"

export function getCategory(){
  return request({
    url: baseURL +  '/category'
  })
}
export function getSubcategory(maitKey) {
  return request({
    url:  baseURL +  '/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url:  baseURL +  '/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}