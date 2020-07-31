// components/w-goodsitem/w-goodsitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
    }
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
    itemClick(e){
      console.log(this.properties)
      console.log(this.properties.item.iid)
      console.log(this.data.item.iid)
      // 获取商品的id跳转到详情页
      let iid = this.data.item.iid;
      // 跳转到对应页面  问号传参
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
        // url: '/pages/detail/detail?iid=' + iid,
      })
    },
  }
})
