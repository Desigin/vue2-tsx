import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import '@/assets/css/reset.css'
import '@/assets/css/app.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
