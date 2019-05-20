//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    imgUrls: [
      "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3132631451,4038392954&fm=11&gp=0.jpg",
      "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2806231217,3952963792&fm=11&gp=0.jpg",
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=470011781,2715767137&fm=11&gp=0.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems: [
      {
        name: '外卖',
        url: 'dishes'
      },
      {
        name: '休闲娱乐',
        url: 'play'
      },
      {
        name: '电影',
        url: 'movie'
      },
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
})