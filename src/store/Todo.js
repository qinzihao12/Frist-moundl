// 用户模块
export default {
    namespaced: true,
    state() {
        return {
            // JSON.parse(uni.getStorageSync('cart') || '[]'),
            // 用户信息
            profile: [],
        }
    },
    getters: {
        IAll(state) {
            return state.profile.filter(todo => todo.count).length
                // return state.profile.length
                // state.profile.forEach(e => {
                //     if (e.count != true) {
                //         return 0;
                //     }
                // })
                // return 1
        },
        SHI(state) {

            // return state.profile.filter(todo => todo.count).length
            return state.profile.length === state.profile.filter(todo => todo.count).length
                //     state.profile.forEach(e => {
                //         if (e.count != true) {
                //             return 0;
                //         }
                //     })
                //     return 1
                // }


        },
    },
    mutations: {
        // 修改用户信息，payload就是用户信息对象
        setUser(state, payload) {
            // console.log(payload);
            state.profile.unshift(payload)
            console.log(state.profile);
            // localStorage.setItem(state.profile)
        },
        removeUser(state, index) {
            console.log(index);
            state.profile.splice(index, 1);
            // localStorage.setItem(state.profile)
            console.log(state.profile);
        },
        updatedname(state) {
            alert(state.profile.avatar)
        },
        fff(state) {
            state.profile.forEach(e => {
                e.count = true
            });
        }
    }
}