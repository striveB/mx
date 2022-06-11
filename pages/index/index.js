// index.js
import swiper from '../../api/swiper'
const app = getApp()
Page({
  data: {
    swiperList: [],
    current: 0,
    memberInfo: false
  },
  onLoad(){
    swiper.list().then(res => {
      let {data: swiperList} = res
      this.setData({
        swiperList
      })
    })
  },
  onShow(){
    this.loadMemberInfo();
  },
  loadMemberInfo(){
    if(wx.getStorageSync('phoneNumber')) {
      this.setData({
        memberInfo: true
      })
    }
  },
  onSwiperChange(e){
    let {current} = e.detail;
    this.setData({
      current
    })
  },
  onSwiperTap(e){
    const { item } = e.currentTarget.dataset
    if(item.type === 'url'){
      wx.navigateTo({
        url: `/pages/web-view/index?url=${item.target}`
      })
    } else if(item.type === 'product') {
      wx.navigateTo({
        url: `/pages/product/detail?product_id=${item.target}`
      })
    }
  },
  goToLogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  }
})
