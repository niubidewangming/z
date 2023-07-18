// pages/work/work.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList: [],
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.getUserInfo()
      .then((nickname) => {
        const greetingText = "早上好! " + nickname + "先生";
        const imageList = [
          '/assets/png1.png',
          '/assets/png1.png',
          '/assets/png1.png'
        ];
        const menuList =[
          { icon: '/assets/feature1.jpg', label: '功能1' },
          { icon: '/assets/feature1.jpg', label: '功能2' },
          { icon: '/assets/feature1.jpg', label: '功能3' },
          { icon: '/assets/feature1.jpg', label: '功能4' },
          { icon: '/assets/feature1.jpg', label: '功能5' },
        ]
        const featureList =[
            { icon: '/assets/featureA.jpg', label: '功能A' },
            { icon: '/assets/featureA.jpg', label: '功能B' },
            { icon: '/assets/featureA.jpg', label: '功能C' },
            { icon: '/assets/featureA.jpg', label: '功能D' },
            { icon: '/assets/featureA.jpg', label: '功能E' },
            { icon: '/assets/featureA.jpg', label: '功能F' },
            { icon: '/assets/featureA.jpg', label: '功能G' },
            { icon: '/assets/featureA.jpg', label: '功能H' },
            { icon: '/assets/featureA.jpg', label: '功能Z' },
            { icon: '/assets/featureA.jpg', label: '功能X' },
        ]
        const tabList =[
          { icon: '/assets/nav3.jpg', label: '功能A' },
          { icon: '/assets/nav3.jpg', label: '功能A' },
          { icon: '/assets/nav3.jpg', label: '功能A' },
          { icon: '/assets/nav3.jpg', label: '功能A' },
          { icon: '/assets/nav3.jpg', label: '功能A' }]
        this.setData({
          greetingText: greetingText,
          imageList: imageList,
          menuList:menuList,
          featureList:featureList,
          tabList:tabList
        });
      })
      .catch((error) => {
        console.error('Failed to get user info:', error);
      });
  },
  
  getUserInfo: function () {
    return new Promise((resolve, reject) => {
      wx.getUserInfo({
        success: function (res) {
          const { nickName: nickname } = res.userInfo;
          resolve(nickname);
        },
        fail: function (error) {
          reject(error);
        }
      });
    });
  },
  
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})