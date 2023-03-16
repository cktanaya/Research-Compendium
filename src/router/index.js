import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Article from '../views/Article.vue'
import ArticleDetails from '../views/Articles/ArticleDetails.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
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
