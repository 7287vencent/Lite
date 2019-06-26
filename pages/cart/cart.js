// miniprogram/pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasCart: false,  //购物车是否为空
    cartgoods:[],    //购物的商品
    selectAll: true, //是否全选 
    totalPrice: '',  //计算总价
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 计算选择了的商品的总价
  getTotalPrice() {
    let cartgoods = this.data.cartgoods
    let total = 0
    for(let item of cartgoods) {
      if(item.select) {
        total += parseInt(item.price) * parseInt(item.num);
      }
    }
    this.setData({
      totalPrice:total
    })
  },
  // 全选小图标
  selectAll() {
    let selectAll = this.data.selectAll
    selectAll = !selectAll
    let cartgoods = this.data.cartgoods
    for(let item of cartgoods) {
      item.select = selectAll
    }
    this.setData({
      selectAll,
      cartgoods
    })
    this.getTotalPrice()
  },
  // 每件商品的小图标
  selectList(e) {
    // console.log(e)
    let index = e.target.dataset.index
    let cartgoods = this.data.cartgoods
    cartgoods[index].select = !cartgoods[index].select

    this.setData({
      cartgoods
    })
    this.getTotalPrice()
  },
  // 跳转到首页查看商品信息
  goIndex() {
    wx.redirectTo({
      url: '/pages/index/index',
    });
      
  },
  // 去删除商品页面
  goDeleteGoods(e) {
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/deleteGoods/deleteGoods?index=${index}&id=${id}`,
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
  // 页面显示时，会从本地Storage中获取购买的商品信息
  onShow: function () {
    let cartgoods = wx.getStorageSync('goods') || [];
    if(cartgoods.length === 0) {
      this.setData({
        cartgoods,
        hasCart: false
      })
      return
    }
    this.setData({
      cartgoods,
      hasCart: true
    })
    this.getTotalPrice()
    // 这里是统计的所有购买的商品
    const allNum = this.getAllNum(cartgoods)
    wx.setStorageSync('allNum', allNum);     
  },
  // 计算总的商品数量
  getAllNum(cartgoods) {
    return cartgoods.reduce((sum, item) => {
      return sum + (+item.num)
    },0)
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