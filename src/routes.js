// 引用模板
import Vue from 'vue';
import Router from 'vue-router';
import homePage from './pages/home.vue';
import aboutPage from './pages/about.vue';
import xghome from './pages/xghome.vue';
import xgsort from './pages/xgsort.vue';
import active from './pages/active.vue';
import detail from './pages/detail.vue';
import test from './pages/test.vue';
///f3
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: homePage
    }, {
        path: '/about',
        component: aboutPage
    },{
        path: '/xghome',
        component: xghome
    },{
        path: '/xgsort',
        component: xgsort
    },{
        path: '/active',
        component: active
    },{
        path: '/detail',
        component: detail
    },{
        path: '/test',
        component: test
    }]
})