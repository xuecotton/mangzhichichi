// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 输入框中的值
        value:''
    },
    // 输入值时,获取到并且放到data
    getValue(e){
        console.log(e.detail.value)
        this.setData({
            value:e.detail.value
        })
    },
    // 发送请求
    sendRequest(){
        // 如果输入框为空,不执行
        if(this.data.value==""){return}else{
            // 发送请求,并且将获取到的数据放到data
            // ....
            console.log('发送完了')
        }
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