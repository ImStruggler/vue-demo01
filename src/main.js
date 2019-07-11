// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'

import VRouter from 'vue-router'
import VResource from 'vue-resource'


import IndexPage from './pages/index'
import DetailPage from './pages/detail'

import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailPubPage from './pages/detail/publish'
import DetailForPage from './pages/detail/forecast'
import OrderListPage from './pages/orderList'

import Store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VRouter)
Vue.use(VResource)


// let store=new Vuex.Store({
// 	state:{

// 	},
// 	getters:{

// 	},
// 	mutations:{

// 	},
// 	actions:{

// 	},
// 	modules:{
// 		modules:{
			
// 		}
// 	}
// }) 

let router=new VRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:DetailPage,
			children:[
			{
				path:'analysis',
				component:DetailAnaPage
			},
			{
				path:'count',
				component:DetailCouPage
			},
			{
				path:'forecast',
				component:DetailForPage
			},
			{
				path:'publish',
				component:DetailPubPage
			},
			]
		},
		{
			path:'/orderList',
			component:OrderListPage
		}
	]
})

new Vue({
  el: '#app',
  router,
  store:Store,  
  components: { Layout },
  template: '<Layout/>'
})
