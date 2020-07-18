// pages/choiceness/choiceness.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title:'精品推荐',
        res:[]
    },
// 获取焦点时跳转
toSearchList(){
    wx.navigateTo({
      url: '../search/search',
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
          url: 'https://api.jisuapi.com/recipe/byclass?classid=612&start=0&num=10&appkey=57ba84ab07e7a7ae',
          success:res=>{
              // console.log(res)
              this.setData({res:res.data.result})
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