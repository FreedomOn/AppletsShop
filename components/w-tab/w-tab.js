// components/w-tab/w-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]  
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clicktab(e){
      // console.log(e);
      let index = e.currentTarget.dataset.index;
      // console.log(index)
      this.setData({
        currentIndex:index
      })
      // 自定义点击 告知首页
      this.triggerEvent('tabclick',{index,title:this.properties.titles[index]},{})
    }
  }
})
