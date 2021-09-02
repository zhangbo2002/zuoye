<!--  -->
<template>
    <div class="zx">
         <!-- <button @click="guanjian">试试</button> -->
        <div class="zxtabler">
            <van-tabs
                v-model="active"
                @change="zxdian"
            >
                <van-tab title="全部"></van-tab>
                <van-tab
                    :title="item.name"
                    v-for="(item,index) in arr"
                    :key="index"
                ></van-tab>
            </van-tabs>
        </div>
        <div class="zxyangzi">
            <van-card
                num="2"
                :price="item.click_rate"
                :desc="item.description"
                :title="item.title"
                :thumb="item.thumb_img"
                v-for="(item,index) in add" :key="index"
                @click="tiao(item.id)"
            />
        </div>
        <div class="zxxianshi" v-show="this.add.length == 0">
           <van-empty description="没有" />
        </div>
        <div class="ding"  :style="{ height:qqq+'px'}">
           
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import qin from "@/http/service.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      active: 2,
      arr: [],
      add:[],
      zxid: 0,
      kai:false,
      tou:0,
      bian:0,
      bian1:3,
      qqq:200,
      cishu:1,
      aaa:[]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async zxdian(i) {
          
            if(i== 0){
                this.zxid = 0
                this.kai =false
            }else{
                 if(i==5){
                this.zxid = 9
                this.kai =true
            }else{
                 this.zxid = this.arr[i].id 
            }
            }
            // if(i==1){
            //     this.zxid = 9
            //     this.kai =false
            // }
            // if(i==2){
            //     this.zxid = 10
            //     this.kai =false
            // }
            // if(i==3){
            //     this.zxid = 33
            //     this.kai =false
            // }
            // if(i==4){
            //     this.zxid = 33
            //     this.kai =false
            // }
           
     
      var aa = await qin.post("/information/index", {
        page: 1,
        limit: 10,
        classify_id: this.zxid
      });
        this.add = aa.data.data.list
      console.log(aa , "1");
    },
    tiao(i){
        this.$router.push({
            path:'/zxxq',
            name:'zxxq',
            params:{
                id:i
            }
        })
    },
   handleScroll(){
            
          
            let innerHeight = document.querySelector('#app').clientHeight
            let outerHeight = document.documentElement.clientHeight
            let scrollTop = document.documentElement.scrollTop
            // console.log(innerHeight,'应该是页面的总高度')
            // console.log(outerHeight,'可是窗口的高度')
            // console.log(scrollTop,'距离顶部的距离')
            if(innerHeight < outerHeight){
               
                this.qqq = outerHeight + 50 - scrollTop 
              
            }
            
            if(innerHeight - scrollTop == outerHeight){
                var data = new Date()
                data =  this.add.slice(this.bian,this.bian1)
                console.log(data,'崭新的开始')
                this.add = data
                    this.bian = this.bian +1
                    this.bian1 = this.bian1 +1
                  if(this.bian > 2){
                       this.bian = 2
                   var aa =  this.aaa.slice(3,5)
                   this.add = aa
                 console.log(aa,'jier')
                }
                if(this.bian1 > 5){
                  this.bian1 = 5
                }
                
                console.log(this.bian,this.bian1,'qisile')
            }
            if(this.cishu < 5){
                return false
            }
   },
   guanjian(){
    //      let innerHeight = document.querySelector('#app').clientHeight
    //         let outerHeight = document.documentElement.clientHeight
    //    console.log(innerHeight,outerHeight,'太关键了')
                 var aa = new Date()
                aa =  this.add.slice(0,1)
           console.log(1111)
   }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    var res = await qin.get("/information/classify");
    this.arr = res.data.data;
      var aa = await qin.post("/information/index", {
        page: 1,
        limit: 10,
        classify_id: 0
      });
      this.add = aa.data.data.list
        this.aaa = aa.data.data.list
    let innerHeight = document.querySelector('#app').clientHeight
            let outerHeight = document.documentElement.clientHeight
              console.log(innerHeight,outerHeight,'ssss');
    if(innerHeight < outerHeight ){
        console.log('我草')
    }
  },
  
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      window.addEventListener('scroll',this.handleScroll)
    this.tou = document.documentElement.scrollTop
    console.log(this.tou,'关键的一步')
  },

};
</script>
<style lang='scss' scoped>
.ding{
    width: 100vw;
    // background: #999;
}
.zx {
  width: 100vw;
}
.zxxianshi{
    width: 100vw;
    height: 200px;
    background: red
}
.xxx{
    width: 100vw;
    height: 500px
}
</style>