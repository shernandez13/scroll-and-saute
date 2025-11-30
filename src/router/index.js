import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipesView from '../views/RecipesView.vue'
import CreatorsView from '../views/CreatorsView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/recipes', name: 'Recipes', component: RecipesView },
  { path: '/creators', name: 'Creators', component: CreatorsView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
