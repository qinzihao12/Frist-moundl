<script setup>
import {ref,computed,onMounted, reactive,provide} from 'vue'
import {useStore,mapMutations} from 'vuex'
import loyu from './views/loyu/loyu.vue' 
import {useRoute,useRouter} from 'vue-router'

const Route=useRoute() 
const Router=useRouter() 
const store=useStore();
const i=computed(()=>{
  return store.state.IFoeNO  
})
onMounted(()=>Router.push('/loyu'));
provide('yi',"亲只好")
</script>
<template>

 <!-- <loyu></loyu>  -->

 <router-view class="p"></router-view>

</template>



<style>
*{
  list-style: none;
  margin: 0;
  padding: 0;
}
.p{
  transition: 2s linear all;
  
}

</style>