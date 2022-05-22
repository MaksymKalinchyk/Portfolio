import { createRouter, createWebHistory } from 'vue-router'
import Blingathon from '../components/Blingathon.vue'
import Blogs from '../components/Blogs.vue'
import HTF from '../components/HTF.vue'
import Cybersec from '../components/Cybersec.vue'

const routes = [
  {
    path: '/',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blingathon',
    name: 'Blingathon',
    component: Blingathon
  },
  {
    path: '/hack-the-future',
    name: 'HTF',
    component: HTF
  },
  {
    path: '/cybersec',
    name: 'Cybersec',
    component: Cybersec
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router