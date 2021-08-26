<template>
  <div class="about">
    <div class="tt">
        <img src="@/assets/3.png" alt="">
    </div>
    <div class="box">
          <div class="zuo">
              <img src="@/assets/2.png" alt="" class="tu">
          </div>
          <div class="you">
              <p><b>每时每刻  因你而设</b></p>
              <div class="tiao">

              </div>
              <p>在线领导<b>·</b>答疑<b>·</b>陪读</p>
          </div>
    </div>
    <div class="caozuo">
        <p class="yi"><img src="@/assets/4.png" alt="" class="ji"><input type="text" placeholder="请输入手机号" class="xia" v-model="mobile"><span class="z" @click="dianji" v-show="!kai">获取验证码</span><span v-show="kai" class="fu">{{num}}</span></p>
        <div class="xianxian"></div>
        <p class="er"><img src="@/assets/5.png" alt="" class="dun"><input type="text" placeholder="请输入验证码" class="xia" v-model="shuru"></p>
        <div class="xianxian"></div>
    </div>
    <div class="dl">
        <p @click="denglu">登 录</p>
    </div>
    <div class="xiaozi">
      <p>*未注册的手机号将自动注册</p>
      <p class="xx">密码登录</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      mobile:'',
      sms_type:'login',
      shuru:'',
      num:60,
      kai:false
    }
  },
  methods:{
    shuju(){
      this.$axios.post('http://120.53.31.103:84/api/app/smsCode',{mobile:this.mobile,sms_type:this.sms_type}).then(res=>{
        console.log(res)
      })
    },
    dianji(){
      var aa = /^[1]([3-9])[0-9]{9}$/
      if(!aa.test(this.mobile)){
        alert('请输入正确的手机格式')
      }else{
         this.shuju()
         this.xun()
         this.kai =true
      }
    },
    xun(){
      this.num --
      if(this.num > 0){
       var xx = setTimeout(()=>{
        this.xun()
      },1000)
      }else{
        clearTimeout(xx)
        this.kai = false
      }
    },
    denglu(){
      if(this.shuru==''){
        alert('请输入验证码')
        return false
      }else{
        alert('登录成功')
      }
    }
  }
}
</script>

<style>
.fu{
  position: absolute
}
.xx{
  margin-left: 110px
}
.xiaozi{
  display: flex;
  font-size: 15px;
  color: #9999
}
.dl{
  width: 100vw;
  height: 65px;
  background: #eb6100;
  border-radius: 6px;
  line-height: 65px;
  text-align: center;
  font-size: 25px;
  color: white;
  margin-top: 20px
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
.xia{
  height: 35px;
  position: absolute;
  margin-top: 15px;
  border: 1px solid white;
}
.caozuo{
  width: 100%;
  height: 240px;
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
.you{
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

