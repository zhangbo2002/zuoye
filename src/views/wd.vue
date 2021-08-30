<!--  -->
<template>
    <div class="zuida">
       
        <div class="tou2">
             <img
                src="@/assets/333.png"
                alt=""
                class="xxx"
            >
                <p class="ding" @click="$router.push('/about')" v-if="this.$store.state.tokengg == ''"> 登录/注册</p>
            <div class="datou"  v-else>
                <p class="da1"></p>
                <p class="da2">{{$store.state.tokengg.nickname}}</p>
                <p class="da3" @click="tuichu">退出登录</p>
            </div>
        
        </div>
        <div >
            <van-grid :column-num="3">
    <van-grid-item v-for="value in 1" :key="value" icon="photo-o" text="我的课时" />
    <van-grid-item v-for="value in 1" :key="value" icon="photo-o" text="本周课时" />
    <van-grid-item v-for="value in 1" :key="value" icon="photo-o" text="我的积分" />
        </van-grid>
        <div class="tiao"></div>
        <div class="zuoye">
                <van-cell-group>
                <van-cell title="我的作业" value=">" />
                <van-cell title="我的社区" value=">" />
                </van-cell-group>
        </div>
        <div class="tiao"></div>
         <div class="zuoye">
                <van-cell-group>
                <van-cell title="课程订阅" value=">" />
                <van-cell title="图书订阅" value=">" />
                </van-cell-group>
        </div>
        <div class="tiao"></div>
         <div class="zuoye">
                <van-cell-group>
                <van-cell title="优惠券" value=">" />
                <van-cell title="学习卡" value=">" />
                <van-cell title="分销中心" value=">" />
                </van-cell-group>
        </div>
        <div class="tiao"></div>
        <div class="zuihou">
             <van-cell-group>
                <van-cell title="消息中心" value=">" />
                <van-cell title="地址管理" value=">" />
                <van-cell title="关于我们" value=">" />
                <van-cell title="意见反馈" value=">" />
                <van-cell title="设置" value=">"  @click="$router.push('/mima')"/>
                </van-cell-group>
        </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
        arr:JSON.parse( sessionStorage.getItem('shuju'))||[],
        kai:false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    tuichu(){
       this.$store.commit('shanchutoken')
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    console.log( this.$store.state.tokengg,'细节死了')
  }
};
</script>
<style>
.zuida{
  width: 100vw;
  height: 100%;
}
.tututu{
    width: 100%;
    height: 100%
}
.da1{
    width: 80px;
    height: 80px;
    background: blue;
    border-radius: 50%;
}
.da3{
  position: absolute;
  right: 50px;
  bottom: -10px
}
.datou{
    width: 100vw;
    height: 80px;
    /* background: blue; */
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
}
.xxx{
    width: 100%;
    height: 100%;
}
.zuihou{
    width: 100vw;
    height: 350px;
    background: #f7f8fa
}
.tiao{
    width: 100vw;
    height: 20px;
    background: #f7f8fa
}
.gg{
    width: 100vw;
}
.tou {
  width: 100vw;
  height: 200px;
  position: relative;
}
.tou2 {
  width: 100vw;
  height: 200px;
  position: relative;
}
.ding {
  position: absolute;
  bottom: 50px;
  left: 155px;
  color: white;
}
</style>