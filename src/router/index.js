import Vue from 'vue'
import Router from 'vue-router'
import Advertisments from '@/components/Advertisments'
import BankingAndFinance from '@/components/BankingAndFinance/menu'
import BookStore from '@/components/BookStore/menu'
import Clothing from '@/components/Clothing/menu'
import Dining from '@/components/Dining/menu'
import ElectronicsAndPhoto from '@/components/ElectronicsAndPhoto/menu'
import Entertainment from '@/components/Entertainment/menu'
import FoodCourt from '@/components/FoodCourt/menu'
import GiftShops from '@/components/GiftShops/menu'
import Health from '@/components/Health/menu'
import HomeImprovement from '@/components/HomeImprovement/menu'
import Homepage from '@/components/Homepage'
import ToyHobbiesCraft from '@/components/ToyHobbiesCraft/menu'
import TravelAndOutdoors from '@/components/TravelAndOutdoors/menu'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Advertisments',
      component: Advertisments
    },
    {
      path: '/Homepage',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/BankingAndFinance',
      name: 'BankingAndFinance',
      component: BankingAndFinance
    },
    {
      path: '/BookStore',
      name: 'BookStore',
      component: BookStore
    },
    {
      path: '/Clothing',
      name: 'Clothing',
      component: Clothing
    },
    {
      path: '/Dining',
      name: 'Dining',
      component: Dining
    },
    {
      path: '/ElectronicsAndPhoto',
      name: 'ElectronicsAndPhoto',
      component: ElectronicsAndPhoto
    },
    {
      path: '/Entertainment',
      name: 'Entertainment',
      component: Entertainment
    },
    {
      path: '/FoodCourt',
      name: 'FoodCourt',
      component: FoodCourt
    },
    {
      path: '/GiftShops',
      name: 'Health',
      component: Health
    },
    {
      path: '/HomeImprovement',
      name: 'HomeImprovement',
      component: HomeImprovement
    },
    {
      path: '/ToyHobbiesCraft',
      name: 'ToyHobbiesCraft',
      component: ToyHobbiesCraft
    },
    {
      path: '/TravelAndOutdoors',
      name: 'TravelAndOutdoors',
      component: TravelAndOutdoors
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
