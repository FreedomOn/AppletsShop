// pages/index/indexchildren/w-recommends/w-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      recommends:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isload:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImageLoad() {
      if(!this.data.isload){
        console.log('图片加载完成')
        this.triggerEvent('imageLoad', {}, {})
        this.data.isload = true
      }
    },
    showMsg:function(options){
      // console.log(options)
      // console.log(111)
      let title = options.currentTarget.dataset.title;
      let sort = options.currentTarget.dataset.sort;
      wx.showToast({
        title: sort + title,
        icon: 'none',
        duration: 2000
      })
    }
  },

})
