// pages/category/childrenCpn/w-content/w-content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subcategories: {
      type: Array
    },
    categoryDetail: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },
  observers:{
     categoryDetail: function (newValue,oldValue) {
      console.log(newValue,'newvalue')

    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    clicktype(e){
      console.log(e)
    }
  }
})
