// components/tabbar/tabbar.js
// 全局里面存了一个page 表示当前 路由
const app =  getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否选中
    on:{
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到相应的页面
    // 加了一个判断
    // 因为如果现在显示的是当前页面就不需要再跳转
    goToPage(e) {
      let page = e.currentTarget.dataset.page || 'user';
      if(app.globalData.page === page) {
        return ;
      }
      wx.redirectTo({
        url: `/pages/${page}/${page}`,
      });
      app.globalData.page = page;
    }
  }
})
