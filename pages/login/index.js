// pages/login/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  login(){
    wx.setStorageSync('phoneNumber', 18739009031)
    wx.navigateBack()
  }
})