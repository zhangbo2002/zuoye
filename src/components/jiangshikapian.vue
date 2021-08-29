<template>
    <div class="zjs">
         <div class="xjs" v-for="(item,index) in arr" :key="index">
           <div class="ui" v-for="(it,ind) in item.list" :key="ind">
                <div class="touxiang">

            </div>
            <div class="xxx">
              <p>谢龙</p>
              <p>全栈开发项目经理</p>
            </div>
           </div>
          </div>
    </div>
</template>
<script>
import qin from "@/http/service.js";
export default {
    data(){
        return{
            arr:[]
        }
    },
    methods:{
    async shuju(){
        let res = await qin.get('/recommend/appIndex')
        this.arr = res.data.data
        console.log(this.arr,'45456')
        }
    },
    created(){
        this.shuju()
    }
}
</script>
<style>
.zjs{
  width: 100vw;
  height: 400px;
  background: #9999;
}

</style>

