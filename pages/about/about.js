// pages/about/about.js
import request from '../../utils/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showtoast(){
    wx.showToast({
      title: '哈哈哈',
      icon: 'loading',
      duration: 3000,
      mask:true,
      success:()=>{

      },
      fail:()=>{

      },
      complete:()=>{

      }
    })
  },
  showmodel(){
    wx.showModal({
      title: '比起日',
      content:"啊啊啊",
      success:(res)=>{
        console.log(res)
        // 通过res.cancel 来判断用户是点击了取消还是确定
      }
    })
  },
  showActionSheet(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
      success (res) {
        console.log(res.tapIndex)
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  // 分享事件
  onShareAppMessage:function(options){
    return{
      title:'hahaha',
      path:"/pages/about/about",
      imageUrl:'/assest/about1.png'  //可以是本地地址 也可以是网络地址
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 发送网络请求
      wx.request({
        url: 'http://apis.juhe.cn/gnyj/query?key=a584714259e75038f863ea3d7c9001c6',
        success:function(res){
          // console.log(res)
        }
      })
      // 用封装的方法发送网络请求
      // promise的最大好处 是防止回调地狱
      request({
        url:'http://apis.juhe.cn/gnyj/query?key=a584714259e75038f863ea3d7c9001c6'
      }).then((res)=>{
        // console.log(111)
        // console.log(res)
      }).catch((err)=>{
        console.log(err)
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
  
})