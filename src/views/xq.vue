<template>
    <div class="xq">
        <div class="xqtt">
            <div class="xqyuan">
                <img
                    :src="$store.state.xqzy.shuju[$store.state.xqzy.dian].avatar"
                    alt=""
                >
            </div>
            <p class="xqtzi">
                {{$store.state.xqzy.shuju[$store.state.xqzy.dian].real_name}}
            </p>
        </div>
        <van-tabs class="xqqiehuan">
            <van-tab title="标签 1" class="xiaozizi">
                <p>老师介绍</p>
                {{$store.state.xqzy.shuju[$store.state.xqzy.dian].introduction}}
            </van-tab>
            <van-tab title="标签 2">
              <div class="xqbao" v-for="(item,index) in arr" :key="index" @click="$router.push(`/xqxq/${item.id}`)">
                <div class="xqbaozuo">
                  <img :src="item.cover_img" alt="">
                </div>
                <div class="xqbaoyou">
                  <p>{{item.title}}</p>
                </div>
              </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import qin from '@/http/service.js'
export default {
  data() {
    return {
      arr: []
    };
  },
  methods: {
  
  },
 async created(){
           let res = await qin.post('/teacher/mainCourse',
            {page: 1, limit: 10, teacher_id:this.$store.state.xqzy.id})
            console.log(res)
            this.ke = res.data.data.list
        this.arr =  res.data.data.list
        // console.log(this.arr,'xiaogabenside')
  },
  computed: {
    
  }
};
</script>
<style>
.xqbao{
  width: 90vw;
  display: flex;
  height: 120px;
  /* background: red; */
  margin: auto;
  margin-top: 15px
}
.xqbaozuo{
  width: 35vw;
  /* background: blue; */
}
.xqbaoyou>p{
  margin-left: 10px
}
.xqbaozuo>img{
  width: 100%;
  height: 100%
}
.xiaozizi>p{
    font-size: 10px;
    color: #999
}
.xq {
  width: 100vw;
}
.xqtt {
  width: 100vw;
  height: 150px;
  /* background: red; */
  display: flex;
}
.xqyuan {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  /* background: blue */
  margin-left: 20px;
}
.xqyuan > img {
  width: 100%;
  height: 100%;
  border-radius: 50%
}
.xqtzi {
  margin-top: 35px;
}
</style>


