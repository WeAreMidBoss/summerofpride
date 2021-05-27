import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'animate.css'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false
Vue.use(VScrollLock)

new Vue({
  render: h => h(App),
}).$mount('#app')

