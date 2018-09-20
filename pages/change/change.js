const app = getApp()
Page({
  data: {
    currentLanguage: app.globalData.currentLanguage,
    languageList: app.globalData.languageList,
    hideClearIcon: true
  },
  onTap: function(e) {
    let currentLanguage = e.currentTarget.dataset
    this.setData({
      'currentLanguage': currentLanguage
    })
    wx.setStorageSync('currentLanguage', currentLanguage)
    app.globalData.currentLanguage = currentLanguage
    wx.switchTab({
      url: '../index/index'
    })
  },
  onShow: function() {
    this.setData({
      'currentLanguage': app.globalData.currentLanguage
    })
  }
})