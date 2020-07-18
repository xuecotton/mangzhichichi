// pages/categories/categories.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 控制输入框不会一开始就获取焦点
        inputShow:false,
        // 选中时的样式
        selected:"selected",
        // 控制选中标签的值
        currentTab:0,
        // 接受传来的数据
        res:[],
    // 传给列表组件的值
        items:{}
    },
    toList(e){
        let classid=e.target.dataset.id
        wx.navigateTo({
          url: '../search/search?classid='+classid,
        })
        // console.log(e)
    },
// 切换标签按钮
clickTab(e){
    // 获取自定义数据值
    var current =e.currentTarget.dataset.current;
    if(this.data.res!=""){
        // 如果加载完成了在改制
        this.setData({
            currentTab:current,
            items:this.data.res.result[current]
        })
    }
    
},

    // 获取焦点时跳转
    toSearchList(){
    wx.navigateTo({
      url: '../search/search',
    })
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.request({
          url: 'https://api.jisuapi.com/recipe/class?appkey=57ba84ab07e7a7ae',
          data:{},
          method:'GET',
          success:(res)=>{
            //   console.log(res)
              this.setData({res:res.data,items:res.data.result[0]})
              // console.log(this.data.items)
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