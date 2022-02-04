import {RouteRecordRaw} from 'vue-router';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/movies',
    },
    {
        path: '/movies',
        name: 'admin.dashboard',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Dashboard/index.vue'),
    },
    {
        path: '/movie',
        name: 'movie',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Movie/index.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Search/index.vue'),
    },
];
