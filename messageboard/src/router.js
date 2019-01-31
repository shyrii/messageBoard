import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import MessageBoard from './views/MessageBoard.vue'
import Writing from './views/Writing.vue'
// import Comments from './views/Comments.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/messageboard',
      name:'/messageboard',
      component:MessageBoard
    },
    {
      path:'/writing',
      name:'/writing',
      component:Writing
    },
    // {
    //   path:'/comments',
    //   name:'/comments',
    //   component:Comments
    // }
  ]
})
