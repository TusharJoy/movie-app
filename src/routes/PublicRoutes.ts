import {RouteRecordRaw} from 'vue-router';

export const PublicRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/movies',
    },
    {
        path: '/movies',
        name: 'movies',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Dashboard/index.vue'),
    },
    {
        path: '/movie',
        name: 'movie',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Movie/index.vue'),
    },
    {
        path: '/tv-series',
        name: 'tv-series',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/TvShow/index.vue'),
    },
    {
        path: '/tv',
        name: 'tv',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/TvDetails/index.vue'),
    },
    {
        path: '/persons',
        name: 'person',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Person/index.vue'),
    },
    {
        path: '/person',
        name: 'person.details',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Movie/index.vue'),
    },

    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunkName: "about" */ '@/modules/Search/index.vue'),
    },
];
