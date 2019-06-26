// miniprogram/pages/deleteGoods/deleteGoods.js
const WXAPI = require('../../wxapi/main');
let goods = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',  //商品id
    curIndex: 0,  
    curItem: {},
    arrItem: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    index: 0,   
    num: 0,
    allColor: [],
    colorIndex: 0,
    color: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const id = options.id
    const curIndex = options.index || 0
    goods = wx.getStorageSync('goods');
    const curItem = goods[curIndex]
    const color = curItem.color
    this.setData({
      id,
      curIndex,
      curItem,
      color,
      num: curItem.num,
      index: curItem.num - 1
    })
    this.getSelectGoods()
  },
  getSelectGoods() {
    const self = this
    WXAPI
      .getGoodDetail()
      .then(res => {
        // console.log(res)
        const goodData = res.data.filter(item => item.id === self.data.id)[0]
        console.log(goodData.versionData.colorImg)
        const allColor = goodData.versionData.colorImg
        const colorIndex = allColor.findIndex(item =>  item.choose == this.data.color)
        console.log(colorIndex)
        this.setData({
          allColor,
          colorIndex
        })
      })
  },
  changeNum(e) {
    // console.log(e)
    const num = +e.detail.value + 1
    this.setData({
      num
    })
  },
  confirm() {
    const num = this.data.num
    const curIndex = this.data.curIndex
    const color = this.data.color
    goods[curIndex].num = num
    goods[curIndex].color = color
    wx.setStorage({
      key: 'goods',
      data: goods,
      success: (result) => {
        let pageIndex = getCurrentPages()
        let backIndex = pageIndex.length - 2
        wx.navigateBack({
          delta: backIndex
        })
      },
    });
  },
  delete() {
    const curIndex = this.data.curIndex
    wx.showModal({
      title: '你确认要删除商品吗?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3CC51F',
      success: (res) => {
        // console.log(res)
        if (res.confirm) {
          goods.splice(curIndex, 1)
          wx.setStorage({
            key: 'goods',
            data: goods,
            success: (result) => {
              this.changeAllNum()
              let pageIndex = getCurrentPages()
              let backIndex = pageIndex.length - 2
              wx.navigateBack({
                delta: backIndex
              })
            },
          });
        }
      },
      fail: () => {},
      complete: () => {}
    });

  },
  changeAllNum() {
    let allNum = wx.getStorageSync('allNum');
    const curNum = this.data.curItem.num
    allNum -= (+curNum)
    wx.setStorageSync('allNum', allNum);
  },
  changeColor(e) {
    // console.log(e)
    const colorIndex = e.currentTarget.dataset.index
    const color = e.currentTarget.dataset.color
    this.setData({
      colorIndex,
      color
    })
    console.log(colorIndex,color)
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