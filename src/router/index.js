import { createRouter, createWebHistory } from "vue-router"
import home from '@/views/home/home.vue'
import login from '@/views/login/login.vue'
import loyu from '@/views/loyu/loyu.vue'
import dic from '@/views/Dictionary/Dictionary.vue'
import kiss from '@/views/kiss/kiss.vue'
const routes = [{
        path: '/loyu',
        component: loyu,
        name: 'loyu'

    },


    {
        path: '/login',
        component: login,
        name: 'login'

    }, {
        path: '/home',
        component: home,
        name: 'home'
    },

    {
        path: '/kiss',
        component: kiss,
        name: 'kiss'
    },

    {
        path: '/dic',
        component: dic,
        name: 'dic'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;