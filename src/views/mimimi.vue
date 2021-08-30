<template>
  <div class="about">
    <div class="tt">
        <img src="@/assets/3.png" alt="" @click="$router.push('/wd')">
    </div>
    <div class="box">
          <div class="zuo">
              <img src="@/assets/2.png" alt="" class="tu">
          </div>
          <div class="you111">
              <p><b>每时每刻  因你而设</b></p>
              <div class="tiao">

              </div>
              <p>在线领导<b>·</b>答疑<b>·</b>陪读</p>
          </div>
    </div>
    <!-- <span class="z" @click="dianji" v-show="!kai">获取验证码</span><span v-show="kai" class="fu">{{num}}</span> -->
    <div class="caozuo">
       <van-field v-model="tel"  label="手机号"  class="ui"/>
       <van-field v-model="tel2"  label="密码"  class="ai"/>
        <div class="xianxian"></div>
    </div>
    <div class="dl">
        <p @click="denglu">登 录</p>
    </div>
    <div class="xiaozi">
      <p class="aa">找回密码</p>
      <p class="xx" @click="qq">验证码登录</p>
    </div>
  </div>
</template>
<script>
import  service from '@/http/service.js'
import { json } from 'body-parser';
import { setInterval, clearInterval } from 'timers';
export default {
  data(){
    return{
    tel:'',
    tel2:''
    }
  },
 created(){
   
 },
  methods:{
      async denglu(){
      var res =await service.post('/login',{
        mobile:this.tel,password:this.tel2,client:'1',type:1
      })
      if(res.data.code == 200){
        this.tel=''
        this.tel2=''
        this.$router.push('/ziji')
        this.$store.commit('mimatoken',res.data.data)
      }
        console.log(res)
    },  
    qq(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>
.ui{
  width: 80vw;
  margin: auto;
  margin-top: 20px;
}
.ai{
  width: 80vw;
  margin: auto;
  margin-top: 20px;
}
.fu{
  position: absolute;
  right: 20px;
  margin-top: -40px;
  color: red
}
.xx{
  margin-left: 190px
}
.aa{
  margin-left: 30px
}
.xiaozi{
  display: flex;
  font-size: 15px;
  color: #9999;
  margin-top: 15px;
}
.dl{
  width: 80vw;
  height: 50px;
  margin: auto;
  background: #eb6100;
  border-radius: 6px;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  color: white;
  /* margin-top: 10px */
}
.yi{
  margin-top: 20px
}
.xianxian{
  width: 310px;
  height: 1px;
  background: #9999;
  float: right;
  margin-right: 10px
}
.z{
 float: right;
width: 85px;
height: 30px;
background: #eb6100;
line-height: 30px;
margin-right: 10px;
margin-top: 15px;
border-radius: 2px;
color: white
}
.ji{
  margin-left: 5px
}
.er{
  margin-top: 50px;
}
.xia222{
  height: 35px;
  position: absolute;
  margin-top: 15px;
  border: 1px solid white;
}
.caozuo{
  width: 100%;
  height: 200px;
  /* background: blue; */
  position: relative;
}
.box {
  width: 375px;
  height: 180px;
  /* background: red; */
  display: flex;
  color: orange;
}
.tiao{
  width: 150px;
  height: 2px;
  background: orange
}
.you111{
    margin-top: 80px;
    font-size: 18px
}
.zuo{
    width: 100px;
    height: 100px;
    margin-left: 80px;
    margin-top: 50px
}
.tu{
  width: 100%;
  height: 100%;
}
</style>

