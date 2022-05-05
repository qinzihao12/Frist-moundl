
<script setup>
import Navigation  from '@/components/Navigation/Navigation.vue'
import axios from 'axios'
import {ref,watch} from 'vue'
let Word =ref(null);
const result =ref([]);
const count=ref(true)
watch(()=>Word.value,getWord)

                // url: 'https://api.dictionaryapi.dev/api/v2/entries/en/hello'
async function getWord(Val){
    const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${Val}`
    try{
        const data =await axios.get(url);
        count.value=true
        result.value=data.data
        console.log(result.value);
    }catch(err){
        count.value=false
        console.log(err);
    }
}         
</script>
<template>
<div class="sun">
<Navigation msg="字典"></Navigation>
<div class="Dichome">
<!-- <h1>{{result[0].wrod}}</h1> -->
<el-input type="text" v-model="Word" name="" id="" placeholder="你要查询什么"/>
<div class="zhu" v-if="count">
<ul  v-for="(item,index) in result"  :key="index">
<div class="heard">
<li>{{item.word}}</li>
<li>{{item.phonetics[0].text||'no'}}</li>
<li><audio :src="item.phonetics[0].audio" controls></audio></li>
<!-- <li>{{item}}</li> -->
</div>
<div v-for="(io,index) in item.meanings" :key="index">
<span >{{io.partOfSpeech}}</span>
<span>{{
    io.definitions.map(definition=>definition.definition).join('')
    }}</span>
</div>
<hr>
</ul>
</div>
<div>
<!-- {{result}} -->
</div>
</div>
</div>

</template>


<style scoped>

.sun{
    
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(250, 250, 250);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
}
.Dichome{
    color: rgb(73, 184, 184);
    height: 80%;
}
.heard{
    display: flex;
    margin-left: .625rem;
    width: 100%;
justify-content: start;
align-items: center;
}
.heard li{
    margin-left: 20px;
}
</style>