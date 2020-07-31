// pages/index/indexchildren/w-pouple/pouple.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showMessage(){
      wx.showToast({
        title: '这就是一张图片，点我也没用',
        icon: 'none',
        duration: 2000
      })
    }
  }
})
