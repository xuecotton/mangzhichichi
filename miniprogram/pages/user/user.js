// pages/user/user.js
// 修改全局数据

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 登录状态
        isLogin:false,
        // 用户信息
        userInfo:{}
    },

    getUser(e){
        
        // 授权登录:
        wx.getSetting({
            complete: (res) => {
                success:(res)=>{
                  if(res.authSetting['scope.userInfo']){
                      // 授权了就获取
                      wx.getUserInfo({
                        complete: (res) => {
                            success:(res)=>{
                                this.setData({userInfo:res.userInfo,isLogin:true})
                                //  console.log(res.userInfo)
                            }
                        },
                      })
                  }
                }
            },
          })
        //   查看是否登录,然后显示头像
        // console.log(e.detail.userInfo)
        // 查看是否授权
        if(e.detail.userInfo.nickName){
            
            this.setData({
                // 改变登录状态
                isLogin:true,
                userInfo:e.detail.userInfo
            });
            // 改变全局数据
           
        }
        
    },


    // 转发分享
   
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