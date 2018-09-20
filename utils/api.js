import md5 from './md5-min.js'
const appid = '20180919000209161';
const key = 'VeoCZwmIoC5N4_7tDVe0';

function translate(query, {
  from = 'auto',
  to = 'auto'
} = {
  from: 'auto',
  to: 'auto'
}) {
  return new Promise(function(resolve, reject) {
    let salt = (new Date).getTime();
    // 多个query可以用\n连接  如 query='apple\norange\nbanana\npear'
    let str1 = appid + query + salt + key;
    let sign = md5(str1);
    wx.request({
      url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
      data: {
        q: query,
        appid: appid,
        salt: salt,
        from: from,
        to: to,
        sign: sign
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if (res.data && res.data.trans_result) {
          resolve(res.data)
        } else {
          reject({
            status: 'error',
            msg: '翻译失败'
          })
          wx.showToast({
            title: '翻译失败',
            icon: 'none',
            duration: 3000
          })
        }
      },
      fail() {
        reject({
          status: 'error',
          msg: '翻译失败'
        })
        wx.showToast({
          title: '网络异常',
          icon: 'none',
          duration: 3000
        })
      }
    })
  })


}
export {
  translate
}