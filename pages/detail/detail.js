// pages/detail/detail.js
import {detailData,  getRecommends} from '../../servers/detail'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid:'',
    topImage:[],
    baseGoodInfo:{},
    shopInfo:{},
    detailInfo: {},
    paramInfo: {},
    commentInfo:{},
    recommends:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options)
      // 获取点击商品传过来的id
      let iid = options.iid;
      this.setData({
        iid:iid
      }),
      this._getDetailData();
      // 请求商品推荐数据
      this._getRecommends()
  },
  _getRecommends() {
    getRecommends().then(res => {
      console.log(res,'推荐相关数据')
      console.log(res.data.data.list)
      this.setData({
        recommends: res.data.data.list
      })
    })
  },
  _getDetailData(){
    detailData(this.data.iid).then(res=>{
      console.log(res.data,'根据点击的id获取数据')
      // 取出顶部轮播图图片
      let topImage = res.data.result.itemInfo.topImages;
      console.log(topImage,'topImage')
      // 商品介绍 基本信息
      let baseGoodInfo = {
          title:res.data.result.itemInfo.title,
          desc : res.data.result.itemInfo.desc,
          newPrice : res.data.result.itemInfo.price,
          oldPrice : res.data.result.itemInfo.oldPrice,
          discount : res.data.result.itemInfo.discountDesc,
          columns : res.data.result.columns,
          services : res.data.result.shopInfo.services,
          realPrice : res.data.result.itemInfo.lowNowPrice,
      }
      console.log(baseGoodInfo,'商品基本信息')
      // 店铺信息
      let shopInfo = {
        logo : res.data.result.shopInfo.shopLogo,
        name : res.data.result.shopInfo.name,
        fans : res.data.result.shopInfo.cFans,
        sells : res.data.result.shopInfo.cSells,
        score : res.data.result.shopInfo.score,
        goodsCount : res.data.result.shopInfo.cGoods
      }
      console.log(shopInfo,'店铺信息')
      // 商品detail介绍信息
      let detailInfo = res.data.result.detailInfo;
      console.log(detailInfo,'detail信息')
      // 细节展示信息
      let paramInfo = {
        image : res.data.result.itemParams.info.images ? res.data.result.itemParams.info.images[0] : '',
        infos : res.data.result.itemParams.info.set,
        sizes : res.data.result.itemParams.rule.tables
      }
      console.log(paramInfo,'细节展示')
      // 用户评论
      let commentInfo = {}
      if (res.data.result.rate && res.data.result.rate.cRate > 0) {
        commentInfo = res.data.result.rate.list[0]
      }
      console.log(commentInfo,'用户评论')
      // 商品相关信息图片

      this.setData({
        topImage:topImage,
        baseGoodInfo:baseGoodInfo,
        shopInfo:shopInfo,
        detailInfo:detailInfo,
        paramInfo:paramInfo,
        commentInfo:commentInfo
      })
    })
  },
  onAddCart() {
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.iid;
    obj.imageURL = this.data.topImage[0];
    obj.title = this.data.baseGoodInfo.title;
    obj.desc = this.data.baseGoodInfo.desc;
    obj.price = this.data.baseGoodInfo.realPrice;
    console.log(obj,'加入购物车信息')
    // 2.加入到购物车列表
    app.addToCart(obj)

    // 3.加入成功提示
    wx.showToast({
      title: '加入购物车成功',
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
  onShareAppMessage: function () {

  }
})