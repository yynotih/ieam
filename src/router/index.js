import Vue from 'vue'
import Router from 'vue-router'
import Grid from '@/components/Grid'
import MainPage from '@/components/MainPage'
import App from '@/App'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: MainPage
  },{
    path:'/grid',
    component: Grid
  }]
})
