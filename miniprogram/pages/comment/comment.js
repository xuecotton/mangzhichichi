// pages/comment/comment.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        selected:'selected',
        currentTab:0,
        classid:[562,563,565]
    },
clickTab:function(e){
    var current =e.currentTarget.dataset.current;
    this.setData({
        currentTab:current,
    });
    wx.request({
      url: 'https://api.jisuapi.com/recipe/byclass?classid='+this.data.classid[current]+'&start=0&num=10&appkey=57ba84ab07e7a7ae',
      success:res=>{
        //   console.log(res);
          this.setData({
              res:res.data.result
          })
      }
    })
},
toDesc(e){
  let id = e.currentTarget.dataset.id;
  // console.log(id)
  wx.navigateTo({
    url: '../desc/desc?id='+id,
  })
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'https://api.jisuapi.com/recipe/byclass?classid=562&start=0&num=10&appkey=57ba84ab07e7a7ae',
          data:{},
          success:res=>{
            //   console.log(res);
              this.setData({
                res:res.data.result
            })
          }
        })
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