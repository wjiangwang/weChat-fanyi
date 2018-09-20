//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    this.globalData.currentLanguage = wx.getStorageSync('currentLanguage') || this.globalData.languageList[0]
    console.log('onLaunch')
    console.log(this.globalData.currentLanguage)

  },
  globalData: {
    currentLanguage: '',
    languageList: [{
        chs: '英语',
        en: 'en',
        index: 0
      },
      {
        chs: '中文',
        en: 'zh',
        index: 1
      },
      {
        chs: '日语',
        en: 'jp',
        index: 2
      },
      {
        chs: '韩语',
        en: 'kor',
        index: 3
      },
      {
        chs: '法语',
        en: 'fra',
        index: 4
      },
      {
        chs: '泰语',
        en: 'th',
        index: 5
      },
      {
        chs: '阿拉伯语',
        en: 'ara',
        index: 6
      },
      {
        chs: '俄语',
        en: 'ru',
        index: 7
      },
      {
        chs: '葡萄牙语',
        en: 'pt',
        index: 8
      },
      {
        chs: '德语',
        en: 'de',
        index: 9
      }
    ]
  }
})