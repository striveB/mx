// index.js
import swiper from '../../api/swiper'
Page({
  data: {
    swiperList: [],
    current: 0,
  },
  onLoad(){
    swiper.list().then(res => {
      let {data: swiperList} = res
      this.setData({
        swiperList
      })
    })
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
  }
})
