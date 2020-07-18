// pages/collect/collect.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 控制选中选项卡
        selected_collect:1,
        selected:'selected',
        disabled:'disabled',
        // openid
        openid:'',
        // 收藏
        colls:[],
        // 文章
        art:[]
    },
shoucang(s1){
   this.setData({selected_collect:1})
},
jilu(){
    this.setData({selected_collect:2});
    let db = wx.cloud.database().collection('articles');
    db.where({_openid:this.data.openid}).get({
        
        success:res=>{
            // console.log(res);
            this.setData({
                art:res.data
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
toArt(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../artDesc/artDesc?id='+id,
    })
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.cloud.callFunction({
            name:'get_openid',
            data:{},
            success:res=>{
                // console.log(res);
                this.data.openid = res.result.openid;
                let db = wx.cloud.database();
                // 获取集合
                let coll = db.collection('collection');
                coll.where({_openid:this.data.openid}).get({
            
                success:(res)=>{
                    // console.log(res.data);
                    this.setData({colls:res.data})
                 }
                })
            }
        });
        
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