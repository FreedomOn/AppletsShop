// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:'',
    time:new Date().toLocaleString(),
    isActive:false,
    arr:[
      [1,2,3,4],
      [2,3,1,2],
      [6,6,7,8]
    ],
    count:0
  },
  handle:function(){
      wx.chooseImage({
       success:(res)=>{
          console.log(res)
          let path = res.tempFilePaths[0]
          this.setData({
            imagePath:path
          })
       }
      })
  },
  aaa(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  outer(e){
    console.log(e,"outer")
  },
  inter(e){
    console.log(e,"inter")
  },
  addcount(){
    console.log(111)
    // let that = this
    this.setData({
      count:this.data.count +1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收路由传递过来得数据
      console.log(options)
      setInterval(()=>{
        this.setData({
          time:new Date().toLocaleString()
        })
      },1000)
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
    // getCurrentPages 当前所有展示得页面
    const pages = getCurrentPages();
    // 从pages数组中获取到要操作得页面得data
    // 调用页面对象得方法 setdata
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