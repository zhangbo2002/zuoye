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
        <p class="yi"><img src="@/assets/4.png" alt="" class="ji"><input type="text" placeholder="请输入手机号" class="xia222" v-model="mobile"><p class="fu" @click="dianji">{{ttt}}</p></p>
        <div class="xianxian"></div>
        <p class="er"><img src="@/assets/5.png" alt="" class="dun"><input type="text" placeholder="请输入验证码" class="xia222" v-model="shuru"></p>
        <div class="xianxian"></div>
    </div>
    <div class="dl">
        <p @click="denglu">登 录</p>
    </div>
    <div class="xiaozi">
      <p class="qq7">*未注册的手机号将自动注册</p>
      <p class="xx1" @click="mmca">密码登录</p>
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
      mobile:'',
      sms_type:'login',
      shuru:'',
      ttt:'获取验证码',
      // num:5,
      kai:false,
      add:[]
    }
  },
 created(){
   
 },
  methods:{
    
      async shuju(){
      var res =await service.post('/smsCode',{
        mobile:this.mobile,sms_type:this.sms_type
      })
        console.log(res)
    },  
    dianji(){
      var aa = /^[1]([3-9])[0-9]{9}$/
      if(!aa.test(this.mobile)){
        alert('请输入正确的手机格式')
      }else{
         this.shuju()
        this.xijie()
         this.kai =true
      }
    },
    xijie(){
      console.log(11111)
      var shu = 5
      var aa = setInterval(()=>{
          this.ttt = `还有${shu}秒`
          if(shu <= 0){
            clearInterval(aa)
            this.ttt = '获取验证码'
          }
            shu--
      },1000)
    },
    denglu(){
      if(this.shuru==''){
        alert('请输入验证码')
        return false
      }else{
        this.$axios.post('http://120.53.31.103:84/api/app/login',{
          mobile:this.mobile,sms_code:this.shuru,type:2,client:'1'
        }
        ).then(res=>{
          this.add = res.data.data
          console.log(res,'看一看')
          // sessionStorage.setItem('shuju',JSON.stringify(this.add))
          if(res.data.code == 200){
            this.$router.push('/ziji')
           this.$store.commit('token',this.add.remember_token)
          }
          // alert('登录成功')
        })
        
      }
    },
   async mmca(){
        this.$router.push('/mimimi')
          var res =await service.post('/login',{
        mobile:this.mobile,sms_code:this.shuru,type:1,client:'1'
      })
      console.log(res,'mima')
    },
  }
}
</script>

<style>
.qq7{
  margin-left: 10px;
}
.fu{
  position: absolute;
  right: 20px;
  margin-top: -40px;
  color: red
}
.xx1{
  margin-left: 110px
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
  margin-top: 20px;
  width: 80vw;
  
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

