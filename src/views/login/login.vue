<script setup>
import {ref,computed,onMounted, reactive} from 'vue'
import {useStore,mapMutations} from 'vuex'
import { NButton } from 'naive-ui'
import Navigation  from '@/components/Navigation/Navigation.vue'
const store=useStore()
let a=reactive({
                id: '1',
                avatar: null,
                nickname: null,
                img: "@/assets/logo.png",
                mobile: '',
                token: ''
})
 function reduce() {
            store.commit('Navigation/setUser',a)
 }

</script>
<template>

<div class="sun">
 
<Navigation msg="登录页面"/> 
 <!-- /登录框     -->  
<div  class="login">
<div class="Xiao">
<!-- 账号 -->
<span>账号:<el-input></el-input></span>
<!-- 密码 -->
 <span>密码:<el-input></el-input></span>
<el-button><router-link to="home">登录</router-link></el-button>
</div>
</div>
</div>
</template>


<style scoped>
.sun{
    position:absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(176, 255, 193);

}
.login{
    position: relative;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    width: 25rem;
    height: 31.25rem; 
    display: flex;
    align-items: center;
    justify-content: center;
    

}
.Login-mode{
    position: absolute;
    top: 30px;
left: 0;
}
.Xiao{
    
    position: absolute;
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
}

</style>