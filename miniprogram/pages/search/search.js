// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 输入框中的值
        value:''
    },

    // 跳转
    toDesc(e){
        // console.log(e)
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '../desc/desc?id='+id,
        })
    },
    // 输入值时,获取到并且放到data
    getValue(e){
        // console.log(e.detail.value)
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
            wx.request({
              url: 'https://api.jisuapi.com/recipe/search?keyword='+this.data.value+'&num=10&appkey=57ba84ab07e7a7ae',
              data:{},
              method:'GET',
              success:res=>{
                //   console.log(res)
                  this.setData({
                      res:res.data.result
                  })
              }
            })
            // console.log('发送完了')
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // console.log(options)
        let classid = options.classid;
        this.setData({classid:classid})
        if(this.data.classid){
            wx.request({
                url: 'https://api.jisuapi.com/recipe/byclass?classid='+classid+'&start=1&num=10&appkey=57ba84ab07e7a7ae',
                //   url: 'https://api.jisuapi.com/recipe/byclass?classid=612&start=1&num=10&appkey=57ba84ab07e7a7ae',
                  data:{},
                  method:'GET',
                  success:res=>{
                    //   console.log(res)
                      this.setData({res:res.data.result})
                  }
                })
        }
       
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