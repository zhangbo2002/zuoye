<template>
    <div class="xqzhongxq">
        <div class="xqxqtu">
            <img :src="arr.cover_img" alt="">
        </div>
        <p>{{arr.title}}</p>
    </div>
</template>
<script>
import qin from '@/http/service.js'
export default {
    data(){
        return{
            arr:[],
            add:[]
        }
    },
    methods:{

    },
   async created(){
       var res = await qin.get('/courseInfo/basis_id=287?id='+this.$route.params.id)
       console.log(res,'xijie')
       this.arr = res.data.data.info
      
        var qqq = await qin.post('/courseChapter',{
            id:this.$route.params.id
        })
       console.log(qqq.data.data[0].child.datum,'xijie')
    
    }
}
</script>
<style>
.xqzhongxq{
    width: 100vw
}
.xqxqtu{
    width: 100vw;
    height: 200px;
}
.xqxqtu>img{
    width: 100%;
    height: 100%
}
</style>


