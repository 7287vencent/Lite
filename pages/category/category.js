// miniprogram/pages/category/category.js
const WXAPI = require('../../wxapi/main')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroy:[],    //商品信息
    curIndex: 'A',  //当前的选中的标签
    toView: 'A',    //
    // 存入每个list的高度叠加
    heightArr: [],
    // 最后一个list,就是最后一个标签的id
    endActive: 'A'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(1)
    WXAPI.showLoading()
    this.getCategroy() 
  },
  getCategroy() {
    // console.log(2)
     WXAPI
      .getCategroy()
      .then(res => {
        // console.log(3)
        this.setData({
          categroy: res.data
        })
        // 只有等页面数据渲染完成了，才能开始计算页面信息
        this.getPageMessage()
        wx.hideLoading()
      })
  },
  // 点击左边标签要修改的信息
  switchTab(e) {
    this.setData({
      curIndex: e.target.dataset.index,
      toView: e.target.dataset.index
    })
  },
  // 判断curIndex因该是那个
  getCurrentIndex(scrollTop) {
    const scrollArr = this.data.heightArr
    let find = scrollArr.findIndex(item => {
      // 提前10rpx触发效果
      return scrollTop < item - 10
    })
    let curChar = String.fromCharCode(65 + find)
    return curChar
  },
  // 页面滑动到底部触发
  scrollEnd() {
    const scrollArr = this.data.heightArr
    const length = scrollArr.length - 1
    let endChar = String.fromCharCode(65 + length)
    this.setData({
      curIndex: endChar,
      endActive: endChar
    })
  },
  // 页面滑动时触发
  scrollContent(e) {
    const scrollTop = e.detail.scrollTop
    const scrollArr = this.data.heightArr
    const length = scrollArr.length - 1
    let endChar = String.fromCharCode(65 + length)
    let curChar = this.getCurrentIndex(scrollTop)
    if(this.data.endActive != endChar) {
      this.setData({
        curIndex: curChar
      })
    } else {
      this.setData({
        endActive: 'A'
      })
    }
  },
  getPageMessage() {
    // console.log(4)
    let self = this
    let heightArr = []
    let h = 0
    const query = wx.createSelectorQuery()
    query.selectAll('.right-list').boundingClientRect()
    query.exec( res => {
      res[0].forEach( item => {
        h += item.height
        heightArr.push(h)
      })
      self.setData({
        heightArr: heightArr
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log('ready')
    // console.log(4)
    // let self = this
    // let heightArr = []
    // let h = 0
    // const query = wx.createSelectorQuery()
    // query.selectAll('.right-list').boundingClientRect()
    // // console.log(query,'++')
    // query.exec( res => {
    //   // console.log('query',res)
    //   res[0].forEach( item => {
    //     h += item.height
    //     heightArr.push(h)
    //   })
    //   self.setData({
    //     heightArr: heightArr
    //   })
    //   console.log(self.data.heightArr)
    // })
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