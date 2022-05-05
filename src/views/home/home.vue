<script setup>
import {ref,computed,onMounted, reactive} from 'vue'
import {useStore,mapMutations} from 'vuex'
import { NButton,NInput} from 'naive-ui'
import Navigation  from '@/components/Navigation/Navigation.vue'
const store=useStore();
const  Learning_Websites=reactive([
    {name:'山西考试招生网',
     url:'http://www.sxkszx.cn/index.html',
     icon:'./src/assets/logo.png',
    },
    {name:'VUE3官网',
     url:'https://v3.cn.vuejs.org',
     icon:'./src/assets/logo.png',
    },
    {name:'稀土掘金',
     url:'https://juejin.cn/',
     icon:'./src/assets/juejin.png',
    },
    {name:'W3shool',
     url:'https://www.w3school.com.cn/h.asp',
     icon:'./src/assets/w3school.png',
    },
    {name:'矢量库',
     url:'https://www.iconfont.cn/',
     icon:'./src/assets/ALBB.png',
    },
    ]);
</script>
<template>

<div class="sun">
<Navigation></Navigation>
<div class="nima">
<div class="f" v-for="item in Learning_Websites" :key='item'>
    <img v-bind:src="item.icon" alt="">
     <!-- <h6 class="name">{{item.name}}</h6> -->
     <a :href="item.url">{{item.name}}</a>
    
</div>
</div>

</div>
</template>



<style scoped>
*{
text-decoration: none;
    margin: 0;
    padding: 0;
    list-style: none;
}
.f{
    position: relative;
    width: 6.25rem;
    height: 7.5rem;
    text-align: center;
    margin-left: .625rem;
    
}
.nima{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
img{
    width: 100%;
    height: 100%;

}

.sun{
    position:absolute;
    width: 100%;
    height: 100%;    
    background-color: rgb(176, 255, 193);
  

    
}
.Navigation{
    background-color: rgb(30, 188, 228);
}

</style>