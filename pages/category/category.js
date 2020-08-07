// pages/category/category.js
import { getCategory, getSubcategory, getCategoryDetail } from '../../servers/crtegory'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [], //左侧分类存储数据数组
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
      this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(0)
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;
    console.log(maitkey,'maitkey')
    // 2.请求的数据
    getSubcategory(maitkey).then(res => {
      console.log(res,'获取对应的maitkey数据')
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.data.list;
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },
  _getCategoryDetail(currentIndex) {
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;

    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, 'pop');

  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      // 1.获取categoryData
      const categoryData = this.data.categoryData;
      console.log(res,'getCategoryDetail')
      // 2.修改数据
      categoryData[index].categoryDetail = res.data;
      console.log(categoryData[index].categoryDetail ,'aaaaaaaaa')
      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })
    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    console.log(e,'e')
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })
    console.log(currentIndex,'currentIndex')
    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
  },
  onShow: function () {

  },
  onHide: function () {

  },


})