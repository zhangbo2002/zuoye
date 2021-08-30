<template>
    <div class="shezhi">
      <van-field v-model="zh" type="tel" label="手机号"  class="xi"/>
      <van-field v-model="yi" type="tel" label="密码"  class="xi"/>
      <van-field v-model="er" type="tel" label="验证码" class="xi"/>
     <van-button type="primary" class="an">确定</van-button>
    </div>
</template>
<script>
import shuju from '@/http/service.js'
export default {
    data(){
        return{
            zh:'',
            yi:'',
            er:''
        }
    },
    methods:{
       async mima(){
            var res = await shuju.post('/password',{
                mobile:this.zh,
                password:this.yi,
                sms_code:this.er
            })
            this.zh = ''
            this.yi = ''
            this.er = ''
            if(res.data.code == 200){
                this.$router.push('/mimimi')
            }
            console.log(res)
        },
        async huoqu(){
           var aaa =await shuju.post('/smsCode',{
                mobile:this.zh,
                sms_type:'login'
            })
            console.log(aaa,'78')
        }
    }
}
</script>
<style>
.shezhi{
    width: 100vw;
    height: 300px;
    /* background: #eaeaea */
}
.xi{
    margin-top: 15px;
}
.an{
    margin-top: 10px;
    position: absolute;
    right: 20px;
}
</style>


