Page({
 
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit: function (e) {
    // console.log(e.detail.value);
    wx.request({
      url: 'http://120.26.91.37:8081/login',
      data: {
        username: e.detail.value.no,
        password: e.detail.value.pwd
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data);
        var resData = res.data;
        if (resData == true) {
          //访问正常
          wx.showToast({
            title: '登录成功',
            duration: 2000,
            success: function () {
              setTimeout(function () {
                wx.redirectTo({
                  url: '../main/main.wxml',
                })
              }, 2000)
            }
          })
        }else{
          wx.showToast({
            title: '登录失败',
            duration: 2000
          })
        }
      }
    })
  },
/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})