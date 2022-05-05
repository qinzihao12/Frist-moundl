import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import Navigation from './Navigation'
import Todo from './Todo'

export default createStore({
    state: {



    },
    getters: {

    },
    mutations: {
        updatedname(state) {
            alert(state.count)
        },
    },

    modules: {
        Navigation,
        Todo
    },
    plugins: [
        createPersistedState({
            key: 'erabbit-client-pc-store', // 本地存储名字
            paths: ['Todo', 'Navigation'] // 指定需要存储的模块
        })
    ]
})