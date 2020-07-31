// pages/category/category.js
import {getCategory ,  getSubcategory, getCategoryDetail} from '../../servers/crtegory'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    categoryData: {},
    currentIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 请求分类数据
      this._getData()
  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {
      console.log(res)
      // 1.获取左侧数据列表
      const categories = res.data.data.category.list;

      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
        }
      }

      // 3.修改data中的数据
      this.setData({
        categories: res.data.data.category.list,
        categoryData: categoryData
      })

      // 4.请求第一个类别的数据
      // this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      // this._getCategoryDetail(0)
    })
  },

  onShow: function () {

  },
  onHide: function () {

  },


})