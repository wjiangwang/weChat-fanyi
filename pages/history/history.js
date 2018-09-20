const app = getApp()
Page({
  data: {
    history: []
  },
  onShow: function() {
    this.setData({
      'history': wx.getStorageSync('history')
    })
  },
  onTap: function(e) {
    console.log(e.currentTarget)
    wx.reLaunch({
      url: `/pages/index/index?query=${e.currentTarget.dataset.src}&languageIndex=${e.currentTarget.dataset.languageindex}`
    })
  }


})