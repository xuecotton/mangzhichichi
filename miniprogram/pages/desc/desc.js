// pages/desc/desc.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

        // 存放数据res
        
    },
// 收藏
collect(){
    // 获取当前页面信息
   let id = this.data.res.result.id;
   let name = this.data.res.result.name;
   let pic = this.data.res.result.pic;
   let tag =this.data.res.result.tag;
   let content = this.data.res.result.content;
//   请求
let db = wx.cloud.database().collection('collection');
db.add({
    data:{
        hid:id,
        name:name,
        pic:pic,
        tag:tag,
        content:content
    }
}).then(res=>{
    wx.showModal({
      title:'提示',
      content:'收藏成功'
    })
})



},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        let id = options.id;
        wx.request({
          url: 'https://api.jisuapi.com/recipe/detail?id='+id+'&appkey=57ba84ab07e7a7ae',
        //   url: 'https://api.jisuapi.com/recipe/detail?id=5&appkey=57ba84ab07e7a7ae',
          data:{},
          method:'GET',
          success:res=>{
              this.setData({
                  res:res.data
              })
            //   console.log(res)
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