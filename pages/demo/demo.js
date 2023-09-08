// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,src:'/images/杨梅.png',title:'东魁杨梅'},
      {id:2,src:'/images/牛奶.png',title:'牧场酸奶'},
      {id:3,src:'/images/桑葚.png',title:'大凉山桑葚'},
      {id:4,src:'/images/酒杯.png',title:'古法酒酿'},
      {id:5,src:'/images/吃水果.png',title:'找鲜果'},
      {id:6,src:'/images/奶茶.png',title:'找奶茶'},
      {id:7,src:'/images/柠檬.png',title:'柠檬茶'},
      {id:8,src:'/images/茶.png',title:'冷萃茶'},
      {id:9,src:'/images/加椰果.png',title:'加料'},
      {id:10,title:'保温袋'}
    ],
    naicha_1:[
      {id:1,src:'/images/ymbbs.jpg',bt:'杨梅啵啵冰',jg:15},
      {id:2,src:'/images/ymbbs.jpg',bt:'杨梅啵啵冰',jg:15},
      {id:3,src:'/images/ymbbs.jpg',bt:'杨梅啵啵冰',jg:15},
      {id:4,src:'/images/ymbbs.jpg',bt:'杨梅啵啵冰',jg:15}
    ],
    naicha_2:[
      {id:1,src:'/images/wqmh.jpg',bt:'乌漆嘛黑',jg:15},
      {id:2,src:'/images/wqmh.jpg',bt:'乌漆嘛黑',jg:15},
      {id:3,src:'/images/wqmh.jpg',bt:'乌漆嘛黑',jg:15},
      {id:4,src:'/images/wqmh.jpg',bt:'乌漆嘛黑',jg:15}
    ],
    baise: 1,
    top: 0,
    top1: 0
  },
  mod() {
    wx.showModal({
      title: '',
      content: '暂未开放~',
      showCancel:false
    })
   },
   dianji(e) {
    //  console.log(e.currentTarget.dataset.id)
    //  console.log(e.currentTarget)
    this.setData({
      baise:e.currentTarget.dataset.id,
      top:e.currentTarget.offsetTop,
    })
    if(e.currentTarget.dataset.id == 1) {
      this.setData({
        top1:0
      })
    }else if(e.currentTarget.dataset.id == 2) {
      this.setData({
        top1:592
      })
    }else if(e.currentTarget.dataset.id == 3) {
      this.setData({
        top1:1197
      })
    }else if(e.currentTarget.dataset.id == 4) {
      this.setData({
        top1:1795
      })
    }else if(e.currentTarget.dataset.id == 5) {
      this.setData({
        top1:2394
      })
    }else if(e.currentTarget.dataset.id == 6) {
      this.setData({
        top1:2992
      })
    }else if(e.currentTarget.dataset.id == 7) {
      this.setData({
        top1:3590
      })
    }else if(e.currentTarget.dataset.id == 8) {
      this.setData({
        top1:4189
      })
    }else if(e.currentTarget.dataset.id == 9) {
      this.setData({
        top1:4787
      })
    }else if(e.currentTarget.dataset.id == 10) {
      this.setData({
        top1:5386,
        
      })
    }
   },
  //  dianji1(e) {
  //    console.log(e.currentTarget.dataset.index)
  //    console.log(e.currentTarget.offsetTop)
  //  },
   yidong(e) {
    //  console.log(e)
    //  console.log(e.detail.scrollTop)
    if(e.detail.scrollTop < 592) {
      this.setData({
        baise:1
      })
    }else if(e.detail.scrollTop < 1197){
      this.setData({
        baise:2
      })
    }else if(e.detail.scrollTop < 1795){
      this.setData({
        baise:3
      })
    }else if(e.detail.scrollTop < 2394){
      this.setData({
        baise:4
      })
    }else if(e.detail.scrollTop < 2992){
      this.setData({
        baise:5
      })
    }else if(e.detail.scrollTop < 3590){
      this.setData({
        baise:6
      })
    }else if(e.detail.scrollTop < 4189){
      this.setData({
        baise:7
      })
    }else if(e.detail.scrollTop < 4787){
      this.setData({
        baise:8
      })
    }else if(e.detail.scrollTop < 5386){
      this.setData({
        baise:9
      })
    }else if(e.detail.scrollTop >= 5386){
      this.setData({
        baise:10
      })
    }
   },
   goto() {
     wx.navigateTo({
       url: '/pages/demo1/demo1',
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
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})