// 封装数据请求的方法

export default function request(options){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: options.url,
      method:options.method || 'get',
      data:options.data || {},
      success:resolve,
      fail:reject
    })
  })
} 