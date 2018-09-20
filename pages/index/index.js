import {
  translate
} from '../../utils/api.js'
const app = getApp()

Page({
  data: {
    currentLanguage: app.globalData.currentLanguage,
    query: '',
    hideClearIcon: true,
    result: ''
  },
  onLoad: function(option) {
    if (option.query) {
      this.setData({
        query: option.query,
        currentLanguage: app.globalData.languageList[option.languageIndex]
      })
      wx.setStorageSync('currentLanguage', this.data.currentLanguage)
      app.globalData.currentLanguage = this.data.currentLanguage
      this.onConfirm()
    }
  },
  onShow: function() {
    if (this.data.currentLanguage.index !== app.globalData.currentLanguage.index) {
      this.setData({
        currentLanguage: app.globalData.currentLanguage
      })
      this.onConfirm()
    }
  },
  onInput: function(e) {
    this.setData({
      'query': e.detail.value
    })
    if (this.data.query.length > 0) {
      this.setData({
        'hideClearIcon': false
      })
    } else {
      this.setData({
        'hideClearIcon': true
      })
    }
  },
  onConfirm: function() {
    console.log('confirm')
    console.log(this.data.currentLanguage)
    if (!this.data.query) {
      this.setData({
        'result': ''
      })
      return
    }
    translate(this.data.query, {
      from: 'auto',
      to: this.data.currentLanguage.en || this.data.currentLanguage
    }).then((result) => {
      this.setData({
        'result': result.trans_result
      })
      let history = wx.getStorageSync('history') || []
      let languageIndex
      app.globalData.languageList.map((item) => {
        if (item.en === result.to) {
          languageIndex = item.index
        }

      })
      history.map((item, index) => {
        if (item.src === result.trans_result[0].src && item.dst === result.trans_result[0].dst) {
          history.splice(index, 1);
        }
      })
      history.unshift({
        'languageIndex': languageIndex,
        'src': result.trans_result[0].src,
        'dst': result.trans_result[0].dst
      })
      history.length = history.length > 10 ? 10 : history.length
      wx.setStorageSync('history', history)
    })
  },
  onTapClose: function() {
    this.setData({
      query: '',
      'hideClearIcon': true
    })
  },
})