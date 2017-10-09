import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '@/components/Sidebar'
import Grid from '@/components/Grid'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    components: {
        sidebar: Sidebar
    },
    children: [{
        path: '',
        component: MainPage
    },{
        path: '/grid',
        component: Grid
    }]
    }]
})
