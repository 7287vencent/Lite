import * as MOCK from "./mock"
import * as API from "./Api"
const request = (url,mock = true,data) => {
  let _url = url
  // console.log(_url)
  return new Promise((resolve, reject) => {
    if (mock) {
      let res = {
        statusCode: 200,
        data: MOCK[_url]
      }
      if (res && res.statusCode === 200 && res.data) {
        resolve(res.data)
      } else {
        // self.alert('提示', res)
        reject(res)
      }
    } else {
      wx.request({
        url: url,
        data,
        success(request) {
          resolve(request.data)
        },
        fail(error) {
          reject(error)
        }
      })
    }
  });
}

const showLoading = () => {
  wx.showLoading({
    title: '数据加载中',
    mask: true,
  });  
}

const geocoder = (lat, lon) => {
  // return request({
  //   url: 'https://apis.map.qq.com/ws/geocoder/v1/',
  //   data: {
  //     location: `${lat},${lon}`,
  //     key: API.QQ_MAP_KEY,
  //     get_poi: 0
  //   },
  //   success: (res) => {
  //     console.log(res)
  //   },
  //   fail: () => {},
  //   complete: () => {}
  // });
  return request(API.MAPURL,false,{
        location: `${lat},${lon}`,
        key: API.QQ_MAP_KEY,
        get_poi: 0
      })
}

module.exports = {
  getBanners: () => {
    // return request('banners')
    return request(API.banners,false)
  },
  getNavData: () => {
    // return request('navdata')
    return request(API.navdata,false)
  },
  getGoodList: () => {
    // return request('goodList')
    return request(API.goodList,false)
  },
  getCategroy: () => {
    // return request('category')
    return request(API.category,false)
  },
  getFindData: () => {
    // return request('findData')
    return request(API.findData,false)
  },
  getUserData: () => {
    // return request('userData')
    return request(API.userData,false)
  },
  getGoodDetail: () => {
    // return request('goodDetail')
    return request(API.goodDetail,false)
  },
  showLoading,
  geocoder
}