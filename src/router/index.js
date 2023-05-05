import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Article from '../views/Article.vue'
import ArticleDetails from '../views/Articles/ArticleDetails.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Navbar from '../views/navbar.vue'
import LoggedNav from '../views/loggednav.vue'
import LoggedHome from '../views/loggedHome.vue'
import ProfHome from '../views/ProfHome.vue'
import ProfLogin from '../views/ProfLogin.vue'
import AddingArticles from '../views/AddingArticles.vue'
import settings from '../views/settings.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profhome',
    name: 'profhome',
    component:ProfHome
  },
  {
    path: '/proflogin',
    name: 'proflogin',
    component:ProfLogin
  },
  {
    path: '/addingarticles',
    name: 'addingarticles',
    component:AddingArticles
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/settings',
    name: 'settings',
    component:settings
  },
  {
    path: '/navbar',
    name: 'navbar',
    component:Navbar
  },
  {
    path: '/loggednav',
    name: 'loggednav',
    component:LoggedNav
  },
  {
    path: '/loggedhome',
    name: 'loggedHome',
    component:LoggedHome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/article',
    name: 'article',
    component: Article

  },
  {
    path: '/Articles/:id',
    name: 'ArticleDetails',
    component: ArticleDetails,
    props: true
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
