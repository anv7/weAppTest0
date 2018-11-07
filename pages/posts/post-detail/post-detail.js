var postsData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var postId = options.id;
    // var postData = postsData.postList[postId];
    // this.setData.postData = postData;
    this.setData({
      postData: postsData.postList[postId]
    });
    // wx.setStorageSync('key', '风暴英雄')
    wx.setStorageSync('key', {
      game:'风暴营行',
      develpor:'hehhe'
    })
  },
  onCollectionTap(event){
    var game = wx.getStorageSync('key');
    console.log(game)
  },
  onShareTap(){
    wx.removeStorageSync('key');
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