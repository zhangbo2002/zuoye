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
                <van-swipe-item><img src="http://120.53.31.103:84/uploads/image/2021-04-08/3g04sBbCgNAG6WRlnJANB7BtWVHXhwdiZHTM6uDp.jpeg" alt="" class="l"></van-swipe-item>
                <van-swipe-item><img src="http://120.53.31.103:84/uploads/image/2021-07-02/eWIwuaHogrdpTM8POFMGCSWuhkK3yUkgK58F6L0x.png" alt="" class="l"></van-swipe-item>
            </van-swipe>
        </div>
        <div class="dwtl">
            <img src="@/assets/three.png" alt="">
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  async created() {
    var res = await qin.get("/banner");
    console.log(res, "45645646");
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style>
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
.my-swipe{
    width: 100vw;
    height: 200px;
}
.l{
    width: 100%;
    height: 100%;
}
.dwtl{
    height: 200px;
    width: 100vw;
}
</style>