import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/Counter',
        name: 'Counter',
        component: () => import('../pages/Counter.vue'),
        meta: {
            title: 'Counter'
        }
    },
    {
        path: '/FetchData',
        name: 'FetchData',
        component: () => import('../pages/FetchData.vue'),
        meta: {
            title: 'Weather forecast'
        }
    },
    {
        path: '/Demo',
        name: 'Demo',
        component: () => import('../pages/Demo.vue'),
        meta: {
            title: 'Demo page'
        }
    }
];

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
    linkActiveClass: 'active-child',
    linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    // Update title
    const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);
    if (nearestWithTitle) {
        document.title = `BS Demo - ${nearestWithTitle.meta.title}`;
    } else {
        document.title = 'BS Demo';
    }

    // Navigate
    next();
});

export default router;
