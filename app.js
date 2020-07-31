//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    /*
      1.先从缓存中取出token
    */ 
    let token =  wx.getStorageSync('token') ?  wx.getStorageSync('token') : []
    console.log(token,'gettoken')
    // 判断token是否有值
      if(token && token.length !==0){
        // 已有token，验证token是否过期
        this.checktoken()
      }else{
        // 没有token 进行登录操作
        this.login()
      }

    // 
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  login(){
    console.log('执行了登录操作')
    // 登录  操作
    wx.login({
      success: res => {
        // code只有五分钟的有效期
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const code = res.code;
        wx.request({
          url: 'url',
          data:{
            code:code
          },
          success:(res)=>{
            // 1获取到后端服务器返回的 token
              // 2、 将token保存在globalData中
              // 3 进行本地存储   wx.setStorage异步   wx.setStorageSync痛步
              let token = 'res'
              wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  checktoken(token){
    console.log('执行了y验证登录操作')
    wx.request({
      url: 'url',
      method:'POST',
      header:{
        token
      },
      success:()=>{
        // 判断 
        if(!res.data.xxx){
          // console.log(token有效)
          // 如果token没有过期  存储到globalData.token中，供其他页面使用
        }else{
            // token过期了  重新执行登陆操作 发送最新得token
            this.login();
        }
      },
      fail:()=>{

      }
    })
  },
  addToCart(obj) {
    // 1.判断是否已经添加进来
    const oldInfo = this.globalData.cartList.find((item) => item.iid === obj.iid)
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      obj.count = 1
      obj.checked = true
      this.globalData.cartList.push(obj)
    }

    // 2.购物车回调
    if (this.addCartCallback) {
      this.addCartCallback()
    }
  },
  globalData: {
    userInfo: null,
    cartList: []
  }
})