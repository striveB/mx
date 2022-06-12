// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    cardList: [{
      icon: '../../assets/images/qr-code.png',
      name: '兑换码',
      target: ''
    },{
      icon: '../../assets/images/lock.png',
      name: '隐私政策',
      target: ''
    },{
      icon: '../../assets/images/paper.png',
      name: '用户服务协议',
      target: ''
    },{
      icon: '../../assets/images/xuke.png',
      name: '经营信息公示',
      target: ''
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const mobile = wx.getStorageSync('phoneNumber')
    this.setData({
      mobile
    })
  },
  goToLogin(){
    wx.navigateTo({
      url: '/pages/login/index',
    })
  }
})