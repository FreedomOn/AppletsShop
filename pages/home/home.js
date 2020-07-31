// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:1,
    list:[],
    arr:['衣服','鞋子','裤子','哈哈']
  },
  // 点击tab切换时传递的数据
  handleTableClick(e){
    console.log(e)
  },
  handleAdd(){
    console.log('----')
    this.setData({
      count:this.data.count+1
    })
  },
  handlecpnData(){
     let mysel = this.selectComponent('#mysel')
     console.log(mysel)
    //  这种直接修改组件的数据是不合理的 一般是调用组件内的一个方法 让方法去修改
    //  mysel.setData({
    //    count:mysel.data.count+2
    //  })
    mysel.add()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that =this
    // wx.request({
    //   url: 'http://apis.juhe.cn/gnyj/query?key=a584714259e75038f863ea3d7c9001c6',
    //   success(res){
    //     console.log(res)
    //   }
    // })
    wx.request({
      url: 'http://apis.juhe.cn/gnyj/query', //仅为示例，并非真实的接口地址
      method:'POST',
      data: {
        key:'a584714259e75038f863ea3d7c9001c6'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success (res) {
        // console.log(res.data.result)
        that.setData({
          list:res.data.result
        })
      },
      
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})