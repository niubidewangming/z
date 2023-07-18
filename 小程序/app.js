// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
     // 获取系统信息
     wx.getSystemInfo({
      success: (res) => {
        // console.log(res);
        //750指的是基准iphone6  iphone6的分辨率为750*1334
        this.globalData.navBarHeight = res.statusBarHeight * (750 / res.windowWidth) + 88;
        this.globalData.screenHeight = res.screenHeight;
      }
    })
  },
  globalData: {
    userInfo: null,
    navBarHeight: 0,
    screenHeight: 0,
  }
})
