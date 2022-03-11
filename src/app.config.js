export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/order/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
	"usingComponents": {},
	"tabBar": {
    "custom": true,
    "color": "#000000",
    "selectedColor": "#000000",
    "backgroundColor": "#ffffff",
    "list": [{
      "pagePath": "pages/index/index",
      "text": "组件"
    }, {
      "pagePath": "pages/order/index",
      "text": "接口"
    }]
  }
})
