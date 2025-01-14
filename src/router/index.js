import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Sims4 from '../views/sims4/Sims4.vue'
import Sims4Main from '../components/page/Sims4/Sims4Main.vue'
import NotFound from '../views/NotFound.vue'
import DiscountCal from '../components/page/Sims4/DiscountCal.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/sims4',
    name: 'Sims4',
    component: Sims4,
    children: [
      {
        path: 'main',
        name: 'Sims4Main',
        component: Sims4Main
      },
      {
        path: 'discount',
        name: 'discount',
        children: [
          {
            path: 'calculator',
            name: 'calculator',
            component: DiscountCal
          }
        ]
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHashHistory(), // Hash 모드 사용
  routes,
})

export default router
