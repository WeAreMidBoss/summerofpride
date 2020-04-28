import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

/*module.exports = {
  //mode: 'production',
  publicPath:process.env.NODE_ENV === 'production'? '.': '/',
  baseUrl: process.env.NODE_ENV === 'production' ? '.' : '/',
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
  }
}*/