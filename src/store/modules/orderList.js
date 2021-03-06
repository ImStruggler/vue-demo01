import Vue from 'vue'

const state = {
	orderList:[],
	params:{}
}

const getters = {
	getOrderList: state => state.orderList
	
}

// 异步操作
const actions = {
	fetchOrderList ({commit,state}){
		Vue.http.post('/api/getOrderList',state.params)
		.then((res) => {
			//console.log(res.data)
			commit('updateOrderList',res.data.list)
			
		},(err) => {

		})
	}
}

// 同步操作
const mutations = {
	updateOrderList(state,payload){
		state.orderList = payload
	},
	updateParams(state,{key,val}){
		state.params[key] = val
		//console.log(state.params)
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}