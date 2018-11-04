// 为什么要把数据和程序分开，因为必须要这样，业务就是业务，数据就是数据，两者不能混在一起！！重要思想
var postsData = require('../../data/posts-data.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 小程序在读取data之前，会先执行onLoad事件 emmm
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  // 重要
    this.setData({
      post_key: postsData.postList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})