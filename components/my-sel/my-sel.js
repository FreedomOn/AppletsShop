// components/my-sel/my-sel.js
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
    count:11
  },

  /**
   * 组件的方法列表
   */
  methods: {
      add(){
        this.setData({
          count:this.data.count+2
        })
      }
  }
})
