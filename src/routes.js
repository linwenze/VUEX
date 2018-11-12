// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import homePage from './pages/home.vue';
import aboutPage from './pages/about.vue';
///f3
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: homePage
    }, {
        path: '/about',
        component: aboutPage
    }]
})