<template>
    <div class="xqzhongxq" @scroll="scrollEvent" ref="scrolldiv">
        <div class="xqxqtu" >
            <img
                :src="arr.cover_img"
                alt=""
            >
        </div>
        <div class="xqxqzhong">
            <p class="xqxqzhongp1"><b>{{arr.title}}</b></p>
            <p class="xqxqzhongp2">剩余名额:{{arr.stock}}</p>
            <p class="xqxqzhongp2">报名截止时间:{{add.start_play}}</p>
            <p class="xqxqzhongp2">开课时间：{{add.total_start_play}}---{{add.total_end_play}}</p>
            <p class="xqxqzhongp2">开课地点：{{arr.city_name}}{{arr.district_name}}{{arr.address}}</p>
            <p class="xqxqzhongp2"><s class="xqxqzhongp10">{{yuanjia}}</s><span class="xqxqzhongp11">{{xianjia}}</span></p>
        </div>
        <div class="xqxqtiao"></div>
        <div
            class="xqxqzhanshi"
            v-for="(item,index) in arr.service"
            :key="index"
        >
            <p class="xqxqzhanshi2">服务：{{item.name}}</p>
            <p
                class="xqxqzhanshi1"
                @click="chu"
            >详情 ></p>
            <van-popup
                v-model="show"
                position="bottom"
                :style="{ height: '50%' }"
            >
                同在屋檐下，鸟不一般大。
                {{item.description}}
            </van-popup>
        </div>
        <div class="xqxqtiao"></div>
        <div class="xqxqtuandui">
            <div class="xqxqtuanduitou">
                <p class="xqxqzhongp3"><b>教学团队</b></p>
            </div>
            <div class="xqxqtuanduixia">
                <div
                    class="xqxqtuanduixiayang"
                    v-for="(item,index) in app"
                    :key="index"
                >
                    <p class="xqxqtuanduixiayangyuan"><img
                            :src="item.avatar"
                            alt=""
                            class="xqxqtuanduixiayangyuantu"
                        ></p>
                    <p class="xqxqtuanduixiayangyuan1">{{item.real_name}}</p>
                </div>
            </div>
        </div>
        <div class="xqxqtiao"></div>
        <div class="xqxqjs">
            <!-- <p @mousedown="fen">粉</p><p @click="zou">黑</p><p @click="pao">红</p>
             -->
           <p @click="fen" :style="{'border-bottom': aa}">课程介绍</p>
           <p @click="zou" :style="{'border-bottom': bb}">课程大纲</p>
           <p @click="pao" :style="{'border-bottom': cc}">课程评价</p>
        </div>
        <div class="xqxqdy">
            <p>课程介绍</p>
            <p v-html="arr.course_details" class="xixixixi"></p>
        </div>
        <div class="xqxqde">
            <p>课程大纲</p>
            <van-collapse v-model="activeNames">
                <van-collapse-item
                    title="1丶字符的魅力"
                    name="1"
                >
                    <!-- <p v-for="(item,index) in zuihou" :key="index">
                    {{item.teacher_name}}
                </p> -->
                    规则是用来打破的————蔚
                </van-collapse-item>
            </van-collapse>
        </div>
        <van-empty description="描述文字">
            <van-button
                round
                type="danger"
                class="bottom-button"
            >
           
            立即报名</van-button>
        </van-empty>
         <p class="xixi">课程评价</p>
        <div class="xqxiaci">
        </div>
    </div>
</template>
<script>
import { Popup } from "vant";
import qin from "@/http/service.js";
export default {
  data() {
    return {
      arr: [],
      add: [],
      app: [],
      yuanjia: [],
      xianjia: [],
      show: false,
      jl: 0,
      active: 0,
      activeNames: ["1"],
      zuihou: [],
      aa:'',
      bb:'',
      cc:'',
      xxx:0,

    };
  },
  methods: {
    chu() {
      this.show = true;
    },
    scrollEvent(){
        console.log(1111)
    },
    fen() {
      console.log(this.jl);
      let html = document.documentElement;
      html.scrollTop = 160;
      this.aa = '3px solid red'
       this.bb = ''
      this.cc = 0
    },
    zou() {
      let html = document.documentElement;
      html.scrollTop = 300;
       this.cc = ''
      this.aa = ''
      this.bb = '3px solid red'
    },
    pao() {
      let html = document.documentElement;
      html.scrollTop = 500;
      this.bb = ''
      this.aa = ''
      this.cc = '3px solid red'
    }
  },
  mounted() {
    console.log(111);
    window.addEventListener("scroll", () => {
      let html = document.documentElement;
      this.jl = html.scrollTop;
    });
  },
  async created() {
    var res = await qin.get("/courseInfo/basis_id=" + this.$route.params.id);
    console.log(res, "xxxxx");
    this.arr = res.data.data.info;

    var qqq = await qin.post("/courseChapter", {
      id: this.$route.params.id
    });
    this.add = qqq.data.data[0].child[0];
    this.yuanjia = this.arr.underlined_price / 100 + ".00";
    this.xianjia = this.arr.price / 100 + ".00";
    var aaa = await qin.get("/teacher/search/attrs");
    this.app = aaa.data.data.list;
    this.zuihou = this.add.teachers;
    console.log(qqq, "xijie");
  },
  computed: {},
  watch:{
    xxx(newVal,oldVal){
      
         this.html = document.documentElement;
         this.xxx = html.scrollTop
     console.log(this.xxx,'xizhi')
    }
  }
};
</script>

<style>
.xixixixi{
    margin-left: 15px;
}
.bottom-button{
    position: relative;
    
}
.xixi{
    position: absolute;
    top: 15px;
    left: 20px
}
.xqquan {
  width: 100vw;
}
.xqxiaci {
  width: 100vw;
  height: 1000px;
}
.xqxqds {
  width: 100vw;
  height: 200px;
  /* background: red; */
}
.xqxqde {
  width: 100vw;
  height: 150px;
  /* background: black; */
}
.xqxqdy {
  width: 100vw;
  height: 100px;
  /* background: pink; */
}
.xqxqjs {
  width: 100vw;
  height: 43px;
  /* background: orange; */
  display: flex;
  border-bottom: 1px solid #9999;
}
.xqxqjs>p{
    width: 33vw;
    height: 40px;
    text-align: center;
    line-height: 50px;
}
.xqxqtuanduixiayangyuan1 {
  font-size: 8px;
}
.xqxqtuanduixiayangyuantu {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.xqxqtuanduixiayang {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: black;
  margin-left: 30px;
}
.xqxqtuanduixia {
  width: 100vw;
  height: 60px;
  /* background: red; */
  display: flex;
  text-align: center;
  /* margin-left: 10px */
}
.xqxqzhongp1 {
  margin-left: 10px;
  margin-top: 10px;
}
.xqxqzhongp2 {
  margin-left: 10px;
  margin-top: 10px;
  color: #aeaeae;
  font-size: 12px;
}
.xqxqzhongp3 {
  margin-left: 15px;
  margin-top: 15px;
}
.xqxqzhongp10 {
  font-size: 8px;
}
.xqxqzhongp11 {
  color: red;
}
.xqxqtuandui {
  width: 100vw;
  height: 80px;
  /* background: blue; */
}
.xqxqzhanshi {
  width: 100vw;
  height: 50px;
  line-height: 50px;
  /* background: black */
  display: flex;
}
.xqxqzhanshi1 {
  margin-left: 50vw;
}
.xqxqzhanshi2 {
  margin-left: 10px;
}
.xqxqtiao {
  width: 100vw;
  height: 10px;
  background: #f7f8fa;
}
.xqxqzhong {
  width: 100vw;
  height: 200px;
  /* background: red; */
}
.xqzhongxq {
  width: 100vw;
}
.xqxqtu {
  width: 100vw;
  height: 200px;
}
.xqxqtu > img {
  width: 100%;
  height: 100%;
}
</style>


