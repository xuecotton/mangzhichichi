// pages/upload/upload.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 图片上传成功提示
        isok:false
        // pic:'',
        // title:'',
        // desc:'',
    },
// input数据双向绑定
updateValue(e){
    let name = e.currentTarget.dataset.name;
    let nameMap = {}
    nameMap[name] = e.detail && e.detail.value
    this.setData(nameMap)
    // console.log(this.data.title)
},

    // 文件改名
    buildFilename(oldFilename){
        // 获取源文件扩展名
        let ext = oldFilename.substring(oldFilename.lastIndexOf('.')+1).toLowerCase()
        let mainname = ''+Date.now() + Math.floor(Math.random()*90000);
        return mainname + '.' +ext;
    }
    ,
    //上传图片
    uppic(){
        wx.chooseImage({
        count:1,
          success: (result) => {
            //   console.log(result.tempFilePaths[0]);
            //   console.log(this.buildFilename(result.tempFilePaths[0]));
              wx.cloud.uploadFile({ //将图片上传至云服务器
                  filePath:result.tempFilePaths[0],
                  cloudPath:'articles/'+this.buildFilename(result.tempFilePaths[0]),
                  success:(res)=>{
                    // console.log(res)
                    // console.log(res.fileID)
                      this.setData({pic:res.fileID,isok:true});
                    //   图片上传成功
                  //  console.log(this.data.userInfo)

                  }
              })
          },
        })
    },
            //  文章提交 
    upDB(){
      // 判断三条信息都输入,个人信息页输入了在发送
        if(this.data.title!=''&&this.data.pic!=''&&this.data.desc!=''&&this.userInfo!=''){
            // console.log(this.data.title)
            // console.log(this.data.pic)
            // console.log(this.data.desc)
            let db = wx.cloud.database().collection('articles');
            db.add({
                data:{
                    title:this.data.title,
                    desc:this.data.desc,
                    pic:this.data.pic,
                    avatar:this.data.userInfo.avatarUrl,
                    nickName:this.data.userInfo.nickName
                }
            }).then(res=>{
                // console.log(res)
                // 显示成功并且点击跳转
                wx.showModal({
                  title:'提示',
                  content:'文章分享成功',
                  success(res){
                    //   确认取消都跳转
                      if(res.confirm){
                          wx.switchTab({
                            url: '../index/index',
                          })
                      }else if(res.cancel){
                        wx.switchTab({
                            url: '../index/index',
                          })
                      }
                  }
                })
            })
        }else{
           wx.showToast({
             title: '文章有内容缺失,请补充完整',
           })
        }
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      var that = this;
        // 问是否同意公开展示,并获取信息
        wx.showModal({
         
            title:'提示',
            content:'是否确认愿意将分享的内容进行展示?',
            success(res){
              //   确认取消都跳转
                if(res.confirm){
                  wx.getUserInfo({
                    complete: (res) => {
                      // console.log(res.userInfo)
                      // 将用户信息放到data中
                     that.setData({userInfo:res.userInfo})
                    },
                  })
                }else if(res.cancel){
                  wx.switchTab({
                      url: '../articles/articles',
                    })
                }
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