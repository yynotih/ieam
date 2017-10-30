// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import EnLocale from 'element-ui/lib/locale/lang/en'
import ZhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueResource)
Vue.use(VueI18n)
Vue.use(ElementUI)

Vue.config.lang = 'zh-CN'
Vue.locale('zh-CN',ZhLocale)
Vue.locale('en',EnLocale)

Vue.http.options.root = '/'

Vue.config.productionTip = false

/* eslint-disable no-new */

/*router.redirect({
  '/':'/home'
})*/

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});



