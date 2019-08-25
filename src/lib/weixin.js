import {
  date,uid
} from 'quasar'
import sha1 from 'js-sha1'
import wx from 'weixin-js-sdk'
import axios from 'axios'


let wxConfig = function () {
  return new Promise((resolve, reject) => {
    let jsapi_ticket = ''
    axios('http://bigdata.ipguide.com.cn/intelligenttourguide_api/accessToken').then(res => {
      if (res.code == 200) {
        jsapi_ticket = res.desc
        //准备参数    
        //let hash=window.location.hash
        //hash=hash.substr(1,hash.length-1)
        //history.pushState(null,null,hash)
        //let _url=encodeURIComponent('http://bigdata.ipguide.com.cn/yxOfficial/')
        let _appId = process.env.APPID
        let _url = window.location.href.split('#')[0]
        let d = new Date()
        let str = date.formatDate(d, 'YYYY/MM/DD HH:mm:ss')
        let _timestamp = Math.round(new Date(str).getTime() / 1000)
        let _nonceStr = uid()

        //签名生成规则如下：参与签名的字段包括noncestr（随机字符串）, 有效的jsapi_ticket, timestamp（时间戳）, url（当前网页的URL，不包含#及其后面部分） 。
        //对所有待签名参数按照字段名的ASCII 码从小到大排序（字典序）后，使用URL键值对的格式（即key1=value1&key2=value2…）拼接成字符串string1。
        //这里需要注意的是所有参数名均为小写字符。对string1作sha1加密，字段名和字段值都采用原始值，不进行URL 转义
        let string1 = `jsapi_ticket=${jsapi_ticket}&noncestr=${_nonceStr}&timestamp=${_timestamp}&url=${_url}`
        console.log(string1)
        let _signature = sha1(string1)

        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: _appId, // 必填，公众号的唯一标识
          timestamp: _timestamp, // 必填，生成签名的时间戳
          nonceStr: _nonceStr, // 必填，生成签名的随机串
          signature: _signature, // 必填，签名
          jsApiList: ['getLocation', 'scanQRCode', 'updateAppMessageShareData', 'updateTimelineShareData','onMenuShareAppMessage', 'onMenuShareTimeline' ] // 必填，需要使用的JS接口列表
        });
      } else {
        reject('获取accessToken失败')
        console.log('获取accessToken失败')
      }

    }).catch(err => {
      reject(err)
    })


    wx.ready(() => {
      resolve('wxConfig success')
    })
    wx.error((res) => {
      console.log(res)
      reject(res)
    })
  })
}


export {
  wxConfig
}
