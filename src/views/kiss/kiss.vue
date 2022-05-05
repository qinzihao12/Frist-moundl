<script setup>
import {ref,computed,onMounted, reactive} from 'vue'
import {useStore,mapMutations} from 'vuex'
import { alert } from '@/Aleart/index.js'
import Navigation  from '@/components/Navigation/Navigation.vue'
const store=useStore()
const name=ref(null)
const avatar=ref(null)
const Y=ref(true)
 function reduce() {
            const app={id:Date.now(),nickname:name.value,count:Y,avatar:avatar.value}
            store.commit('Todo/setUser',app)
 }
 function remove(i) {
            store.commit('Todo/removeUser',i)
 }
 function ALL() {
            store.commit('Todo/fff')
 }
 


 const profile=computed(()=>{return store.state.Todo.profile})
 const POP=computed(()=>{return store.getters['Todo/IAll']})
 const FFF=computed(()=>{return store.getters['Todo/SHI']})
//  console.log(POP.value);
//  console.log(profile[0].id);
</script>
<template>
<div class="sun">
<Navigation  msg="Todolist"/>  
<div  class="Todo" >
<span>今日计划</span>
<el-input placeholder="今天要做些什么呢----"  @keydown.enter="reduce()" v-model="name" ></el-input>
<div>
<ul  v-for="(data,index) in profile" :key="index" :class="{active:data.count,Box:!data.count}">
<li>{{data.nickname}}</li>
<li><el-button @click="remove(index)">删除{{index}}</el-button>
<el-button @click="alert(index)">弹出</el-button>
<input type='checkbox'   @change="data.count=!data.count" :checked="data.count" name="" id="">
</li>
</ul>
</div>
 <el-button @click="reduce(a)">提及爱哦</el-button>
 <el-button @click="ALL()">全选{{POP}}</el-button>
 <input type="checkbox" :checked="FFF" name="" id="">
</div>


</div>
</template>
<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.sun{
    position: absolute;
    width: 100%;
    height: 100%;    
    background-color: rgb(49, 90, 58);
    display: flex;
    flex-direction: column;
}
.Todo{
    position: relative;
    top: 0%;

}
.active{
    background-color: rgb(247, 22, 22);
    box-shadow: 5px 10px rgba(0, 0, 0, 0.3);
     margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    height: 3.125rem;
    
}
.Box{
    background-color: #fff;
    margin-top: .625rem;
    display: flex;
    justify-content: space-between;
}
</style>