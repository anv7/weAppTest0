Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // imgPath: "/images/...",
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [
      {
        date: "Sep 18 2016",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/avatar/3.png",
      },{
        date: "Sep 19 2017",
        title: "比利中士",
        imgSrc: "/images/post/cat.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "132",
        collection: "96",
        headImgSrc: "/images/avatar/1.png",
      }, {
        date: "Noe 11 2017",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/sls.jpg",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/avatar/2.png",
      }, {
        date: "Sep 10 2017",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/bl.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/avatar/4.png",
      }, {
        date: "Sep 9 2017",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/vr.png",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "12",
        collection: "76",
        headImgSrc: "/images/avatar/3.png",
      }, {
        date: "Sep 19 2017",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/xiaolong.jpg",
        avatar: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把,“看初花的荻芦”和“到楼外楼吃蟹”,并列为秋天来杭州不能错过                 风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，",
        reading: "234",
        collection: "532",
        headImgSrc: "/images/avatar/5.png",
      },
    ]
    this.setData({
      post_key:post_content
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