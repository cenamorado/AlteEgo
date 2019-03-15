import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import Posts from '../pages/Posts.vue'
import Post from '../pages/Post.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/posts/:category', component: Posts },
    { path: '/post/:slug', component: Post },
    {
      path: '/404',
      component: Error
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

export default router
