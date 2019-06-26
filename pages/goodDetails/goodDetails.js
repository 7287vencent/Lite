// miniprogram/pages/goodDetails/goodDetails.js
const WXAPI = require('../../wxapi/main')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'', //商品id
    // 下面四条是swiper的配置信息
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    swiper_img:[], //需要轮播的图片
    brief: [],     //商品的描述信息
    defaultData: [],  //默认的商品信息
    details_param: [],  //默认的配置信息
    details_img: [],  //概述图片
    param_img: [],    //参数图片
    state: 'details_img', //判断概述 参数
    allNum: 0,  //选择了的商品数量
    default_change: {}, // 已选所显示的信息
    address: [] //用户地址信息
  },

  /**
   * 生命周期函数--监听页面加载9
   */
  onLoad: function (options) {
    WXAPI.showLoading()
    // 获取用户的地址信息
    const address = wx.getStorageSync('Address');
    this.setData({
      id: options.id,
      address
    })
    this.getGoodDetail()
  },
  // 获取页面所需的数据信息
  getGoodDetail() {
    let self = this
    WXAPI
      .getGoodDetail()
      .then(res => {
        wx.hideLoading()
        const detail = self.getSpecific(res)
        let default_change = {
          name: detail.name,
          memory: detail.defaultData.memory,
          color: detail.defaultData.choose,
          num: 1
        }
        self.setData({
          id: detail.id,
          swiper_img: detail.swiper_img,
          name: detail.name,
          brief: detail.brief,
          defaultData: detail.defaultData,
          details_param: detail.details_param,
          details_img: detail.details_img,
          param_img: detail.param_img,
          default_change
        })
      })
  },
  // 改变默认的版本数据 default_change
  changeDefauleChange() {
    console.log(this.data.default_change,'000')
    const goods = wx.getStorageSync('goods') || [];
    if(goods.length === 0) {
      return
    }
    const id = this.data.id
    const default_change = goods[goods.length - 1]
    let memory = default_change.memory.toString()
    memory = memory.substring(0,memory.length - 4)
    default_change.memory = memory
    this.setData({
      default_change
    })
  },
  // 按页面传入的id 获取具体的数据
  getSpecific(res) {
    let id = this.data.id
    let detailArr = res.data
    let detail = detailArr.find(item => {
      return item.id == id
    }) 
    return detail
  },
  // 改变概述和参数
  changeState() {
    let state = this.data.state
    if(state === 'details_img') {
      state = 'param_img'
    } else {
      state = 'details_img'
    }
    this.setData({
      state
    })
  },
  // 跳转到购物页面
  goSelectGoods() {
    const id = this.data.id   
    wx.navigateTo({
      url: `../selectGoods/selectGoods?id=${id}`,
    });
      
  },
  goCart() {
    wx.reLaunch({
      url: '/pages/cart/cart',
    });   
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
   const allNum = wx.getStorageSync('allNum');
  //  console.log("allNum",allNum)
   this.setData({
     allNum
   })
   this.changeDefauleChange()
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