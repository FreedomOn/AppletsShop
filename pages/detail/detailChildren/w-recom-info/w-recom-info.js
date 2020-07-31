// pages/detail/detailChildren/w-recom-info/w-recom-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recom:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
      recom:[]
  },
  observers:{
    recom:function(newvalue){
      console.log(newvalue,'recom')
      
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
