// miniprogram/pages/index/index.js
const WXAPI = require('../../wxapi/main')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    indicatorDots: true,
    autoPlay: true,
    interval: 3000,
    duration: 1000,
    navdata: [],
    goodList: [],
    goodListOne: {},
    name:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    WXAPI.showLoading()
    this.getBanners()
    this.getNavData()
    this.getGoodList()
    this.getLocation()
  },
  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: this.getAddress,
      fail: () => {
        this.openLocation()
      }
    })
  },
  getAddress(res) {
    let { latitude: lat, longitude: lon} = res
    // console.log(res)
    WXAPI.geocoder(lat, lon)
    .then(res => {
      // console.log(res)
      if(res.status !== 0 || !res.result) {
        return
      } 

      let {address_component
      } = res.result
      // console.log(address_component)
      const Address = {
        city: address_component.city,
        district: address_component.district
      }
      wx.setStorageSync("Address", Address);
    })
  },
  openLocation() {
    wx.showToast({
      title: '检测到您未授权使用位置权限，请先开启',
      icon: 'none',
      duration: 3000
    });
      
  },
  getBanners() {
    WXAPI
    .getBanners()
    .then(res => {
      // console.log(res)
      wx.hideLoading()
      this.setData({
        banners: res.data
      })
    })
  },
  getNavData() {
    WXAPI
      .getNavData()
      .then(res => {
        console.log(res)
        this.setData({
          navdata: res.data
        })
      })
  },
  getGoodList() {
    WXAPI
    .getGoodList()
    .then(res => {
      // console.log(res)
      this.setData({
        goodListOne: res.data.one,
        goodList: res.data.section
      })
    })
  },
  goDetails(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id
    // console.log(id)
    wx.navigateTo({
      url: `/pages/goodDetails/goodDetails?id=${id}`,
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