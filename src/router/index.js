import { createRouter, createWebHistory } from 'vue-router'
import Blingathon from '../components/Blingathon.vue'
import Blogs from '../components/Blogs.vue'
import HTF from '../components/HTF.vue'
import Cybersec from '../components/Cybersec.vue'
import UCDP from '../components/UCDP.vue'
import LicenseManager from '../components/LicenseManager.vue'
import html2pdf from '../components/html2pdf.vue'
import Cv from '../components/Cv.vue'
import Website from '../components/Website.vue'

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
  {
    path: '/ucdp',
    name: 'UCDP',
    component: UCDP
  },
  {
    path: '/license-manager',
    name: 'License Manager',
    component: LicenseManager
  },
  {
    path: '/html2pdf',
    name: 'HTMl to PDF',
    component: html2pdf
  },
  {
    path: '/CV',
    name: 'CV',
    component: Cv
  },
  {
    path: '/website',
    name: 'Website',
    component: Website
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router