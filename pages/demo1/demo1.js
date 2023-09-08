// pages/demo1/demo1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    danjia: 19,
    jiage: 19,
    shuli: 1,
    gg: 2,
    ht: false,
    td: 3,
    bz: 0,
    kt: 0,
    bwd: 0,
    xinxi:['大杯','正常冰','5分糖','','']
  },
  a: 0,
  jisuan() {
    this.a = this.data.danjia + this.data.kt + this.data.bwd
  },
  ts(e) {
    if (e.target.id == 4) {
      wx.showModal({
        content: '已选择0卡糖，不能选择去糖(不额外加糖)',
        showCancel: false
      })
    } else {
      wx.showModal({
        content: '已选择去糖(不额外加糖)，不能选择0卡糖',
        showCancel: false
      })
    }
  },
  bz(e) {
    if (this.data.bz == 0) {
      this.setData({
        bz: e.target.id,
        bwd: e.currentTarget.dataset.jg,
        'xinxi[4]': e.currentTarget.dataset.lx,
      })
      this.jisuan()
      this.setData({
        jiage: this.a
      })
    } else if (e.target.id == 6) {
      if (this.data.bz == 7) {
        this.setData({
          bz: e.target.id,
          bwd: e.currentTarget.dataset.jg,
          'xinxi[4]': e.currentTarget.dataset.lx,
        })
        this.jisuan()
        this.setData({
          jiage: this.a
        })
      } else {
        this.setData({
          bz: 0,
          bwd: 0,
          'xinxi[4]': null,
        })
        this.jisuan()
        this.setData({
          jiage: this.a
        })
      }
    } else if (e.target.id == 7) {
      if (this.data.bz == 6) {
        this.setData({
          bz: e.target.id,
          bwd: e.currentTarget.dataset.jg,
          'xinxi[4]': e.currentTarget.dataset.lx,
        })
        this.jisuan()
        this.setData({
          jiage: this.a
        })
      } else {
        this.setData({
          bz: 0,
          bwd: 0,
          'xinxi[4]': null,
        })
        this.jisuan()
        this.setData({
          jiage: this.a
        })
      }
    }
  },
  td(e) {
    console.log(e.currentTarget.dataset.lxx)
    this.setData({
      td: e.target.id,
      'xinxi[1]': e.currentTarget.dataset.lxx,
    })
    // if(e.target.id == 3) {
    //   console.log(1)
    //   this.setData({
    //     'xinxi[1]': e.currentTarget.dataset.lx,
    //   })
    // } else if(e.target.id == 4) {
    //   this.setData({
    //     'xinxi[1]': e.currentTarget.dataset.lx,
    //   })
    // }else {
    //   this.setData({
    //     'xinxi[1]': e.currentTarget.dataset.lx,
    //   })
    // }
  },
  ht(e) {
    this.setData({
      ht: !this.data.ht,
      'xinxi[3]': e.currentTarget.dataset.lx,
    })
    if (this.data.ht == true) {
      this.setData({
        kt: e.currentTarget.dataset.jg,
        'xinxi[3]': e.currentTarget.dataset.lx,
      })
      this.jisuan()
      this.setData({
        jiage: this.a
      })
    } else {
      this.setData({
        kt: 0,
        'xinxi[2]': null,
      })
      this.jisuan()
      this.setData({
        jiage: this.a
      })
    }
  },
  gg(e) {
    // console.log(e)
    this.setData({
      gg: e.target.id,
      'xinxi[0]': e.currentTarget.dataset.lx,
    })
    if (e.target.id == 2) {
      this.setData({
        danjia: e.currentTarget.dataset.jg,
      })
      this.jisuan()
      this.setData({
        jiage: this.a
      })
    } else {
      this.setData({
        danjia: e.currentTarget.dataset.jg,
      })
      this.jisuan()
      this.setData({
        jiage: this.a
      })
    }
  },
  jian() {
    if (this.data.shuli <= 1) {
      wx.showModal({
        content: '已是最小起购数量~',
        showCancel: false
      })
    } else {
      var q = (--this.data.shuli) * this.data.danjia
      this.setData({
        shuli: this.data.shuli,
      })
    }
  },
  jia() {
    var q = (++this.data.shuli) * this.data.danjia
    this.setData({
      shuli: this.data.shuli,
    })
  },
  go() {
    wx.switchTab({
      url: '/pages/demo/demo',
    })
  },
  gundong(e) {
    if (e.detail.scrollTop > 20) {
      this.setData({
        flag: 1
      });
    } else {
      this.setData({
        flag: 0
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

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