//index.js
const app = getApp()

Page({
  data: {
    // input进来时不获取焦点
    inputShow:false,
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    // 轮播图
    carousel:[],
    // 标签跳转参数
    
  },
  // 左上角图标跳转
  toclassify(){
    wx.switchTab({
      url: '../categories/categories',
    })
  },
  // 获取焦点时跳转
  toSearchList(){
    console.log('1')
    wx.navigateTo({
      url: '../search/search',
    })
  },
// 上方标签跳转
navTosancan(){
  wx.navigateTo({
    url: '../comment/comment',
  })
},
navTo(){
  wx.navigateTo({
    url: '../choiceness/choiceness',
       
  })
},
toclass(){
  wx.switchTab({
    url: '../categories/categories',
  })
},
  onLoad: function() {
    // 不让input获取焦点

    let db = wx.cloud.database();
    // 获取集合
    let carPic = db.collection('carousel');
    carPic.get({
      success:(res)=>{
        console.log(res.data);
        this.setData({carousel:res.data})
      }
    })

    

 
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
