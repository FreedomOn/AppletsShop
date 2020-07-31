// pages/index/index.js
import {getIndexData ,getGoodsData,ceshi} from '../../servers/index.js'
const types = ['pop','new','sell']
const topdistance = 800;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    recomends:[],
    tab:['流行','新款','精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop',
    shoubacktop:false,
    isfixed:false,
    tabTop:0    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图以及推荐的数据
    this._getHomeData();
    // 请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
    // 测试数据
    // ceshi().then((res)=>{
    //   console.log(res,'测试数据')
    // })
  },

  // 首页点击tab切换事件
  handeleTabClick(e){
    // console.log(e)
    let index = e.detail.index;
    let title = e.detail.title;
    console.log(index,title)
    // 设置currentType
    this.setData({
      currentType:types[index]
    })
  },
  _getHomeData(){
    getIndexData().then((res)=>{
      console.log(res,'首页数据')
      // 取出轮播图的数据
      const banner = res.data.data.banner.list.map(item => {
        return item.image
      })
      console.log(banner,'banner')
      // 取出推荐数据
      let recomends = res.data.data.recommend.list;
      // console.log(banner)
      // console.log(recomends)
      this.setData({
        banner:banner,
        recomends:recomends
      })
    })
  },
  _getGoodsData(type){
    //  获取对应的页码
    let page = this.data.goods[type].page + 1 ;
    console.log(page,'page')
       // 发送网络请求  
    getGoodsData(type,page).then((res)=>{
      console.log(res,'goos数据')
      let list = res.data.data.list;
      // 2.将数据临时获取
      const goods = this.data.goods;
      goods[type].list.push(...list)
      goods[type].page += 1;
      // 3.最新的goods设置到goods中
      this.setData({
        goods: goods
      })
      // let oldlist = this.data.goods[type].list
      // oldlist.push(...list)
      // // 将data中的数据设置到goods中
      // let typekey = `goods.${type}.list`;
      // let pagekey = `goods.${type}.page`
      // this.setData({
      //   [typekey]:oldlist,
      //   [pagekey]:pagekey
      // })
    })
  },
  onPageScroll(options){
    //  console.log(options)
    //  不要在滚动的过程中频繁的调用this。setdata
      let flag = options.scrollTop >= topdistance 
      //判断一下提搞性能
      if(flag != this.data.shoubacktop){
          this.setData({
            shoubacktop:flag
          })
      }
       // 修改 isfixed属性 根据滑动的高度 判断tab是否固定到顶部
       let tab = options.scrollTop  >=this.data.tabTop;
       if(tab != this.data.isfixed){
         this.setData({
           isfixed:tab
         })
       }
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log('页面下老到底部')
      // 上拉加载更多  请求新的数据
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        success:(()=>{
          console.log(this.data.currentType)
          this._getGoodsData(this.data.currentType)
        })
      })
   
  },
  //tab组件悬浮
  onImageLoad(){
    //给自定义一个组件一个id或class 通过下面一些列代码  获取自定义组件到顶部的距离
    wx.createSelectorQuery().select('#tab').boundingClientRect((rect) => {
      console.log(rect)
      this.setData({
        tabTop: rect.top
      })
    }).exec()
   
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})