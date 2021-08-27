<template>
    <div class="da">
    <div class="dian" v-for="(item,index) in arr" :key="index" @click="dian(index)">
        <router-link :to="item.url" class="hen"><img :src="ss==index?item.nav_img:item.nav_img_checked" alt="" class="tu"><p>{{item.name}}</p></router-link>
    </div>
    </div>
</template>
<script>
import qin from '@/http/service.js'
export default {
    data(){
        return{
            arr:[],
            add:['/sy','/kc','/zx','/ts','/wd'],
            ss:0
        }
    },
    async created() {
    let res = await qin.get('/nav/bottom')
    console.log(res.data.data.index)
    this.arr = res.data.data.index
     this.arr.forEach((item,key)=>{
           item.url = this.add[key]
       })
    },
    methods:{
        dian(index){
            
            this.ss = index
            console.log(this.ss,'sss')
        }
    }
}
</script>
<style>
.da{
    width: 100vw;
    height: 60px;
    display: flex;
    background: pink
}
.dian{
    width: 20vw;
    height: 60px;
    display: flex;
    /* background: red; */
    margin-left: 20px
}
.tu{
    width: 30px;
    height: 30px
}
.router-link-active{
    color: red
}
</style>


