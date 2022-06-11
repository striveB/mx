// app.js
App({
  onLaunch(){
    wx.cloud.init()
  },
  getPhoneNumber(){
    return wx.getStorageSync('phoneNumber')
  }
})
