// pages/home/home.js
var bmap = require('../../utils/bmap-wx.min.js');//引进百度地图api
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[],
    newmovie:[],
    city:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://139.155.100.80/getData',
      dataType:"json",
      success:(res)=>{
        this.setData({
          imgUrls: res.data.subjects
        })
        //console.log(this.data.imgUrls)
      }
    });


    wx.request({
      url:"http://139.155.100.80/newmovie",
      dataType:"json",
      success:(res)=>{
        this.setData({
          newmovie: res.data.entries
        })
      }
    });

    //实例百度地图
    var BMap = new bmap.BMapWX({
      ak: 'VDlv4pUKQ1gYoLBQZZVQqStWP40v73qz'
    }); 


    wx.getLocation({
      success:(res)=>{
        //在微信api获取到经度纬度，传给百度地图
        BMap.regeocoding({
          location: res.latitude+','+res.longitude,
          success:(result)=>{
            //console.log(result.originalData.result.addressComponent.city);百度地图的返回结果
            this.setData({
              city: result.originalData.result.addressComponent.city
            })
          }
        })
      },
    })
  },
  jump(ev){
    //跳转页面的时候携带id号
    wx.navigateTo({
      url: '../info/info?id=' + ev.target.dataset.id,
    })
  }
})