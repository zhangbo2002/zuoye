import axios from 'axios'
import { Toast } from 'vant'
import { baseUrl } from '../config/index'
import store from '@/store/index.js';
//基础配置
let service = axios.create({
    baseURL:baseUrl,
    // withcredentials:true,
    timeout:50000
})
//请求拦截
let loding;
service.interceptors.request.use(
    config => {
        console.log(1111)
           loding = Toast.loading({
            
                  message: "加载中...",
                  forbidClick: true
        });
        config.headers["Authorization"] ='Bearer '+ store.state.token 
        return config
    },(error)=>{
        console.log(error)
        return Promise.reject(error)
    }
)
//响应拦截
service.interceptors.response.use(
    (res)=>{
        loding.clear()
        return Promise.resolve(res)
    },
    (error)=>{
        loding.clear()
        console.log("err"+error)
        return Promise.reject(error)
    }
)
export default service