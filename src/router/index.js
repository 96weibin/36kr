import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/index"
import Detail from "@/components/detail"

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name:'Index',
      component: Index
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    }
  ]
})
