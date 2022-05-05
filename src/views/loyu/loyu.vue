<script setup>

import kiss from '@/views/kiss/kiss.vue'
import home from '@/views/home/home.vue'
import Navigation  from '@/components/Navigation/Navigation.vue'
import boli  from '@/components/bolikuang/bolikuang.vue'
import login from '@/views/login/login.vue'
import dic from '@/views/Dictionary/Dictionary.vue'
import {useRoute,useRouter} from 'vue-router'
import {useStore} from 'vuex'
import { getCurrentInstance,ref,h,onMounted,inject} from 'vue'
const route=useRoute() 
const router=useRouter() 
const store=useStore();
const rou =['home','login','kiss','dic']

const goto =function(i){
  //  router.push("/home").catch(err=>{
router.replace(`/${rou[i]}`)
// })
}
const aff= inject('yi')
// console.log(route.path  ,router);
const a =home;
const b =login;
const c =kiss;    
const d =dic;    
const components =[a,b,c,dic]

</script>
<template>

<div class="shou">

<Navigation @click="add()" msg="主页" ></Navigation >
<!-- <div class="views"> -->
<el-carousel :interval="4000"  type="card" height='25rem'>
    <el-carousel-item  v-for="item in 4" :key="item"   >
 
          <boli  @click="goto(item-1)"></boli>
         <component  :is='components[item-1]'></component>        
    </el-carousel-item>
</el-carousel>

<!-- </div> -->
  
</div>
</template>



<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
.shou{
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 251, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.views{
  bottom: 1.25rem;
  position: absolute;
}

.el-carousel__item  {
  position: relative;
  color: #475669;
  opacity: 0.8;
  margin: 0;
  text-align: center;

}
.el-carousel{
  
  width: 100%;
  
  
}
</style>