<template>

  <div class="alert">
 <span>名字:<input/></span> 
 <span>头像:<input/> </span> 
 <span>ID :<input/> </span> 
  </div>
</template>
<script steup>
// import {ref,onMounted} from 'vue'
// import {alert} from './index'

// const fun=()=>alert(10)
// onMounted(() => {
  // fun();
// }),
</script>


<style>
.alert{
position: fixed;
width: 300px;
height: 300px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

border-radius: 4px;
background-color: rgb(243, 243, 243);
display: flex;
flex-wrap: wrap;
justify-content: center;}
</style>