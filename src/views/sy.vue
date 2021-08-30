<!--  -->
<template>
  <div>
    <div class="tou">
      <p><img
          src="@/assets/one.png"
          alt=""
        ></p>
      <p>
        <input
          type="text"
          class="shuru"
          placeholder="搜索"
        >
        <i class="van-icon van-icon-search">
          <!----></i>
      </p>
      <p class="san"><img
          src="@/assets/two_03.gif"
          alt=""
        ></p>
    </div>
    <div class="lb">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
      >
        <van-swipe-item><img
            src="http://120.53.31.103:84/uploads/image/2021-04-08/3g04sBbCgNAG6WRlnJANB7BtWVHXhwdiZHTM6uDp.jpeg"
            alt=""
            class="l"
          ></van-swipe-item>
        <van-swipe-item><img
            src="http://120.53.31.103:84/uploads/image/2021-07-02/eWIwuaHogrdpTM8POFMGCSWuhkK3yUkgK58F6L0x.png"
            alt=""
            class="l"
          ></van-swipe-item>
      </van-swipe>
    </div>
    <div class="dwtl">
      <img
        src="@/assets/three.png"
        alt=""
      >
    </div>
    <div class="zjs">
       <div class="jiangshi" @click="jiangshi">
      <div class="hong"></div>
      <p class="jsz">资深讲师</p>
      <div class="yyy">更多></div>
    </div>
      <div
        class="xjs"
        v-for="(item,index) in arr"
        :key="index"
      >
        <div class="touxiang">
          <img
            :src="item.teacher_avatar"
            alt=""
            class="tu22"
          >
        </div>
        <div class="xxx">
          <p >{{item.teacher_name}}</p>
          <p class="xxx1">{{item.introduction}}</p>
        </div>
      </div>
    </div>
    <div class="zhong">
       <div class="jiangshi">
      <div class="hong"></div>
      <p class="jsz">资深讲师</p>
      <div class="yyy">更多></div>
    </div>
      <div class="zhong1" v-for="(item,index) in add" :key="index">
        <div class="zzuo">
          <img
            :src="item.cover_img"
            alt=""
            class="ss"
          >
        </div>
        <div class="zyou">
            <p>{{item.title}}</p>
            <p class="xxx1">细节</p>
        </div>
      </div>
    </div>
    <div class="zui">
       <div class="jiangshi" @click="jiangshi">
      <div class="hong"></div>
      <p class="jsz">名师</p>
      <div class="yyy">更多></div>
    </div>
      <div class="hou" v-for="(item,index) in app" :key="index">
        <div class="hzuo" >
          <img :src="item.teacher_avatar" alt="" class="htu">
        </div>
        <div class="hyou">
          <p>{{item.teacher_name}}</p>
          <p class="xxx1">{{item.introduction}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import qin from "@/http/service.js";
import kapian from "@/components/jiangshikapian.vue";
import shangcai from "@/components/shangcai.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { kapian, shangcai },
  data() {
    //这里存放数据
    return {
      arr: [],
      add: [],
      app:[]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async shuju() {
      let res = await qin.get("/recommend/appIndex");
      // console.log(res.data.data[0].list,'shuju')
      this.arr = res.data.data[0].list;
      this.add = res.data.data[1].list;
      this.app = res.data.data[2].list;
      console.log(this.app, "shujue");
    },
    jiangshi(){
      this.$router.push('/kc')
      this.$store.commit('jiangshi',this.app)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.shuju();
  }
  //生命周期 - 挂载完成（可以访问DOM元素）
};
</script>
<style>
.xxx1{
  margin-top: 10px;
}
.htu{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.hou{
  width: 90vw;
  height: 80px;
  background: white;
  margin: auto;
  border-radius: 15px;
  display: flex;
  margin-top: 20px
}
.hyou{
  margin-top: 20px;
  margin-left: 20px
}
.hzuo{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 10px
}
.zui{
  width: 100vw;
  height: 700px;
  background: #f7f8fa;
}
.ss{
  width: 100%;
  height: 100%;
}
.zyou{
  margin-top: 20px;
  height: 50vw;
  /* background: green */
  margin-left: 20px
}
.zzuo{
  width: 50px;
  height: 50px;
  margin-left: 10px;
  padding-top: 15px
}
.zhong{
  width: 100vw;
  height: 800px;
  background: #f7f8fa;
  /* margin-top: 20px */
}
.zhong1{
  width: 90vw;
  height: 100px;
  background: white;
  border-radius: 15px;
  margin: auto;
  display: flex;
  margin-top: 20px
}
.tu22 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.xjs {
  width: 90vw;
  height: 80px;
  background: white;
  margin-left: 18px;
  border-radius: 15px;
  display: flex;
  margin-top: 20px;
  box-sizing: content-box;
}
.touxiang {
  width: 50px;
  height: 50px;
  background: red;
  border-radius: 50%;
  margin-top: 16px;
  margin-left: 10px;
}
.xxx {
  width: 70vw;
  height: 50px;
  /* background: blue; */
  margin-top: 16px;
  margin-left: 25px
}
.shishi {
  width: 100vw;
  height: 500px;
  background: green;
}
.wxia {
  margin-top: 20px;
}
.zjs {
  width: 100vw;
  height: 500px;
  background: #f7f8fa;
}
.jiangshi {
  width: 100vw;
  height: 40px;
  background: #f7f8fa;
  display: flex;
}
.hong {
  width: 5px;
  height: 30px;
  background: red;
  margin-top: 5px;
  margin-left: 5px;
}
.jsz {
  margin-left: 10px;
  width: 80vw;
  height: 40px;
  line-height: 40px;
}
.yyy {
  line-height: 40px;
}
.tou {
  width: 100vw;
  height: 30px;
  display: flex;
  position: relative;
}
.shuru {
  width: 85vw;
  height: 25px;
  border-radius: 30px;
  border: 1px solid #9999;
}
.van-icon {
  position: absolute;
  font-size: 25px;
  right: 35px;
  top: 3px;
}
.san {
  width: 30px;
  height: 30px;
  margin-top: 5px;
}
.my-swipe {
  width: 100vw;
  height: 200px;
}
.l {
  width: 100%;
  height: 100%;
}
.dwtl {
  height: 80px;
  width: 100vw;
}
</style>