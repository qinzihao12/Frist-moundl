// 用户模块
export default {
    namespaced: true,
    state() {
        return {
            nickname: '阿沁',
            // 用户信息
            profile: {
                id: '1',
                avatar: '@/assets/avatar/老头.png',
                nickname: '秦王',
                styletext: "@/assets/logo.png",
                mobile: '',
                token: ''
            }
        }
    },
    mutations: {
        // 修改用户信息，payload就是用户信息对象
        setUser(state, payload) {
            state.profile = payload
            console.log(state.profile);
        },
        updatedname(state) {
            alert(state.profile.avatar)
        },
    }
}