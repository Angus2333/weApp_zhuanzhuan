// pages/shopcar/shopcar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:{},
    cart:[]
  },
  //获取收货地址wx.chooseAddress
  handleAddress(){
    //获取用户权限状态
    wx.getSetting({
      success: (result) => {
       const scopeAddress = result.authSetting["scope.address"];
       if(scopeAddress===true||scopeAddress===undefined){
         wx.chooseAddress({
           success: (address) => {
            //  console.log(result1);
            wx.setStorageSync("address", address);
           }          
         });
             }else{
         wx.openSetting({
           success: (res) => {
            wx.chooseAddress({
              success: (result3) => {
                // console.log(result3);
            wx.setStorageSync("address", address);
           }
              
            });
           }
         });
           
       }
      }
    });
    
      
      
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        
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
     
    //获取缓存中收货地址信息
    const address = wx.getStorageSync("address");
    const cart = wx.getStorageSync("cart");
      // console.log(address);
    this.setData({
      address,
      cart
    })
      
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