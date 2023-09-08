// index.js
Page({

  /**
   * 页面的初始数据
   */
  data:{
    list:[
      {id:1,src:'/images/xtb.jpg',text:'熊猫币商城'},
      {id:2,src:'/images/xtb1.jpg',text:'社群福利'},
      {id:3,src:'/images/xtb2.jpg',text:'会员任务'},
      {id:4,src:'/images/xtb3.jpg',text:'一起喝'}
    ],
    list1:[
      {id:1,src:'/images/hy.jpg'},
      {id:2,src:'/images/hy.jpg'},
      {id:3,src:'/images/hy.jpg'},
      {id:4,src:'/images/hy.jpg'},
      {id:5,src:'/images/hy.jpg'},
      {id:6,src:'/images/hy.jpg'}
    ]
 },
 mod() {
  wx.showModal({
    content: '敬请期待~',
    showCancel:false
  })
 },
 //为修改信息的button绑定事件
 edit:function(){
  wx.switchTab({
    url: '/pages/demo/demo',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
