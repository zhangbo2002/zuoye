<template>
  <div class="qiandao">
    <div class="tou2">
      <img
        src="@/assets/333.png"
        alt=""
        class="xxx"
      >
      <p
        class="ding"
        @click="$router.push('/about')"
        v-if="this.$store.state.tokengg == ''"
      > 登录/注册</p>
      <div
        class="datou"
        v-else
      >
        <p class="da1"></p>
        <p class="da2">{{$store.state.tokengg.nickname}}</p>
        <p class="da3"  @click="chulai">签到规则</p>
      </div>

    </div>

    <van-calendar
      title="日历"
      :round="true"
      :poppable="false"
      :formatter="formatter" 
      :show-confirm="false"
      :style="{ height: '400px',width:'80vw',position:'absolute'}"
      @select='shi'
      class="xx"
    />
    <div class="ji">

    </div>
    <div class="xia">
      <p class="yi"></p>
      <p class="er">好课推荐</p>
      <p class="san">更多></p>
    </div>
    <div class="tu">
      <div class="zuozuo">
        <img
          src="http://120.53.31.103:84/uploads/image/2021-01-21/0iHDEF8fiqFAern6hLl0erzc1P1d94OAHUPkgNBw.jpeg"
          alt=""
          class="tu222"
        >
      </div>
      <div class="youyou">
        <p class="zhanan">渣男的自我修养</p>
      </div>
    </div>
    <div class="xia">
      <p class="yi"></p>
      <p class="er">热门图书</p>
      <p class="san">更多></p>
    </div>
    <div class="tu">
      <div class="zuozuo">
        <img
          src="http://120.53.31.103:84/uploads/image/2021-04-07/H2FyMmqIV87LZIUR0qG1AQziJsgVtgGcidQFoGZz.jpeg"
          alt=""
          class="tu222"
        >
      </div>
      <div class="youyou">
        <p
          class="zhanan"
         
        >渣男的自我修养</p>
      </div>
    </div>
  </div>

</template>
<script>
import qin from '@/http/service.js'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      date: "",
      show: false
    };
  },
  methods: {
     formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
     
      let  qq = new Date()
      const nian = qq.getFullYear()
      const yue = qq.getMonth()+1
      const ri = qq.getDate()
       console.log(yue,ri)
       console.log(day,'日历')
       if(month == yue && date == ri){
          day.bottomInfo = '+1';
       }
      // if (month === 5) {
      //   if (date === 1) {
      //     day.topInfo = '劳动节';
      //   } else if (date === 4) {
      //     day.topInfo = '青年节';
      //   } else if (date === 11) {
      //     day.text = '今天';
      //   }
      // }

      // if (day.type === 'start') {
      //   day.bottomInfo = '入住';
      // } else if (day.type === 'end') {
       
      // }

      return day;
    },
   async shi(e) {
      var aa = `${e.getMonth() + 1}/${e.getDate()}`;
      console.log(aa,'2213212');
      // var res = await qin.get('/user/integral/signRecord?date=2021-9-1&?data='+aa)
      // console.log(res,'签到')
      // alert ('已签到'+aa)
      // this.$store.commit('rili',aa)
      // return false
    },
    chulai() {
      Dialog.alert({
        title: "签到规则",
        message: "规则就是用来打破的————蔚"
      }).then(() => {
        // on close
      });
    }
  }
};
</script>
<style>
.zhanan {
  margin-top: 20px;
}
.tu222 {
  width: 100%;
  height: 100%;
}
.tu {
  width: 80vw;
  height: 100px;
  margin: auto;
  display: flex;
}
.zuozuo {
  width: 40vw;
  height: 100px;
}
.xia {
  width: 100vw;
  height: 30px;
  /* background: black; */
  line-height: 30px;
  /* padding-top: 10px; */
  display: flex;
}
.yi {
  width: 5px;
  height: 25px;
  background: red;
  margin-left: 10px;
}
.er {
  margin-left: 20px;
}
.san {
  margin-left: 200px;
  color: #9999;
}
.ji {
  width: 100vw;
  height: 350px;
  /* background: red */
}
.qiandao {
  width: 100vw;
  position: relative;
}
.xx {
  position: absolute;
  margin: auto;
  top: 130px;
  left: 40px;
  border-radius: 10px;
}
.tou2 {
  width: 100vw;
  height: 200px;
  position: relative;
}
.xxx {
  width: 100%;
  height: 100%;
}
.da1 {
  width: 80px;
  height: 80px;
  background: blue;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}
.da2 {
  position: absolute;
  top: 50px;
  left: 130px;
}
.da3{
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid white;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  right: 20px
}
.da3 {
  position: absolute;
  right: 20px;
  bottom: 30px;
}
</style>


