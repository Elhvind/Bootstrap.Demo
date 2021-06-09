import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home.vue';
import Counter from '@/pages/Counter.vue';
import FetchData from '@/pages/FetchData.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Counter',
        name: 'Counter',
        component: Counter
    },
    {
        path: '/FetchData',
        name: 'FetchData',
        component: FetchData
    }
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact'
});

export default router;
