const app = getApp()
console.log(app.globalData);
Component({

  properties: { //接收参数
    title: { type: String, value: '' }, //标题
  },

  data: {
    navH:0,
  },
  lifetimes:{
    attached(){
      this.setData({ navH: app.globalData.navBarHeight })
    }
  },
  methods: {

  },
  options:{
    addGlobalClass: true
  }
})
