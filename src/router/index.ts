import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Profile from "../views/Profile.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        redirect: "/login",
      },
    {
        path: "/login",
        name: "login",
        component: Login,
      },
    /* {
        path: '/',
        redirect: '/tabs/tab1'
    }, */
    {
        path: "/profile",
        name: "profile",
        component: Profile,
      },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
        {
            path: '',
            redirect: 'tab1'
        },
        {
            path: 'tab1',
            component: () => import('@/views/Tab1.vue')
        },
        {
            path: 'tab2',
            component: () => import('@/views/Tab2.vue')
        },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
