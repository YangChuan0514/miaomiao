import Vue from 'vue'
import VueRouter from 'vue-router'
import CinemaRouter from './cinema'
import MineRouter from './Mine'
import MovieRouter from './Movie'

Vue.use(VueRouter)

const routes = [
  CinemaRouter,
  MineRouter,
  MovieRouter,
  {
    path:'/*',
    redirect:'/movie'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
