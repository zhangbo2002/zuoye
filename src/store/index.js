import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    tokengg:'',
    laoshi:[],
    xqzy:[],
    qiandao:[]
  },
  mutations: {
    token(state,data){
      state.tokengg = data
      console.log(state.tokengg,'vuex')
    },
    shanchutoken(state){
      state.tokengg = ''
    },
    jiangshi(state,data){
      state.laoshi = data
    },
    mimatoken(state,data){
      state.tokengg = data
    },
    xq(state,data){
      state.xqzy = data
      console.log(state.xqzy,'222222222')
    },
    rili(state,data){
      state.qiandao.push(data)
      console.log(state.qiandao,'xijie')
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
