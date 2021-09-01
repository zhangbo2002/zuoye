<!--  -->
<template>
    <div class="zuida">
       <div class="hou" v-for="(item,index) in arr" :key="index" @click="dan(index,item.id)"> 
        <div class="hzuo" >
          <img :src="item.avatar" alt="" class="htu">
        </div>
        <div class="hyou">
          <p>{{item.real_name}}</p>
          <p class="xxx1">{{item.introduction}}</p>
        </div>
      </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import qin from '@/http/service.js'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
  arr:[]
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    dan(index,id){
      console.log(this.$store.state.laoshi)
       this.$store.commit('xq',{shuju:this.arr,id:id,dian:index})
       this.$router.push('/xq')
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
async created() {
    var res = await qin('/teacher/search/attrs')
  
    this.arr = res.data.data.list
      console.log(this.arr,'课程')
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style>
.xxx1{
  margin-top: 10px;
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
.htu{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
</style>