// pages/articles/articles.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articles:[],
        
    },
    toup(){
        wx.navigateTo({
          url: '../upload/upload',
        })
    },
    navToDesc(e){
        // 获取文章id
        console.log(e.currentTarget.dataset.id)
        // 跳转并传递id
        wx.navigateTo({
         url: '../artDesc/artDesc?id='+e.currentTarget.dataset.id,
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let db = wx.cloud.database().collection('articles');
        db.get().then(res=>{
            console.log(res.data);
            this.setData({articles:res.data})
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