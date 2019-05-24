// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: "http://139.155.100.80/movieInfo?id="+options.id,
      dataType: "json",
      success: (res) => {
        this.setData({
          info:res.data
        })
      }
    })
  },
  info_jump(){
    wx.navigateBack({
      delta:1
    })
  }
})