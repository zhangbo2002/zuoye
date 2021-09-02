import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ziji',
    name: 'ziji',
    component: ()=>import('@/views/ziji.vue'),
    redirect:'/sy',
    children:[
      {
        path:'/sy',
        name:'sy',
        component:()=>import('@/views/sy')
      },
      {
        path:'/kc',
        name:'kc',
        component:()=>import('@/views/kc')
      },
      {
        path:'/ts',
        name:'ts',
        component:()=>import('@/views/ts')
      },
      {
        path:'/wd',
        name:'wd',
        component:()=>import('@/views/wd')
      },
      {
        path:'/zx',
        name:'zx',
        component:()=>import('@/views/zx')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/mima',
    name:'mima',
    component:()=>import('@/views/mima')
  },
  {
    path:'/mimimi',
    name:'mimimi',
    component:()=>import('@/views/mimimi.vue')
  },
  {
    path:'/qiandao',
    name:'qiandao',
    component:()=>import('@/views/qiandao.vue')
  },
  {
    path:'/xq',
    name:'xq',
    component:()=>import('@/views/xq.vue')
  },
  {
    path:'/xqxq/:id',
    name:'xqxq',
    component:()=>import('@/views/xqxq.vue')
  },
  {
    path:'/zxxq',
    name:'zxxq',
    component:()=>import('@/views/zxxq.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
