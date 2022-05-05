<template>
  <div class="Navigation">
  <div style="flex:1">{{msg}}</div>
 <div class="ul">
   <img src="@/assets/avatar/lll.png" alt="">
 </div> 
 <div class="name">
  <img @click="al()" src="@/assets/avatar/缩小.png" alt="">
 <img src="@/assets/avatar/放大.png" alt="">
 </div>
  </div>
</template>

<script setup>

import { useStore} from 'vuex'
import {computed, reactive,ref} from 'vue'
defineProps({
    msg:String
    // sMasterwork:Array
})
const store=useStore();
const a=ref(40);
const users=computed(()=>{
  return store.state.Navigation.profile
})

function al(){
  alert("122")
}
</script>

<style scoped>
  .Navigation{
    
    position: relative;
    width: 100%;
    height: 4.0rem; 
    background: rgb(212, 201, 201,0.5);
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 1.875rem;
    padding-top: 10px;
    font-family:'Times New Roman', Times, serif;
  }
  .ul{ 
     list-style: none;
     display: flex;
     justify-content: space-around;
     align-items: center;
     flex: 1;
  }
 .ul img{
   width: 4.0rem;
   height: 4.0rem;
 }
 .name{
   flex: 1;
   color: rgb(22, 22, 22);
   display: flex;
   justify-content:space-around;
   align-items: center;
  
 }
 .name img{
  width: 10%;
  
 }
 .name img:hover{
  width: 9%;
 }

</style>