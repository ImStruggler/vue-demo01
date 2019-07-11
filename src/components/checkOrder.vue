<template>
	<div>
		<my-dialog :is-show="isShowCheckDialog"
		@on-close="checkStatus">
			请检查您的支付状态!
			<div class="button" @click="checkStatus">
				支付成功
			</div>
			<div class="button" @click="checkStatus">
				支付失败
			</div>
		</my-dialog>
		<my-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">支付成功！</my-dialog>
		<my-dialog :is-show="isShowFailDialog" @on-close="toOrderList">支付失败！</my-dialog>
	</div>
</template>

<script>
import Dialog from './dialog'
export default{
	components:{
		MyDialog:Dialog
	},
	props:{
		isShowCheckDialog:{
			type:Boolean,
			default:false
		},
		orderId:{
			type:[String,Number]
		}
	},
	data(){
		return{
			isShowSuccessDialog:false,
			isShowFailDialog:false,
			curOrderId:this.orderId
		}
	},
	methods:{
		checkStatus(){
			this.$http.post('/api/checkOrder',{
				curOrderId:this.curOrderId
			})
			.then((res) => {
				this.curOrderId = res.data.curOrderId
				this.isShowSuccessDialog = true
				this.$emit('on-close-check-dialog') 
			},(err) => {
				this.isShowFailDialog = true
				this.$emit('on-close-check-dialog') 
			})
		},
		// hideSucDialog(){
		// 	this.isShowSuccessDialog = false
		// },
		// hideFailDialog(){
		// 	this.isShowFailDialog = false
		// }
		toOrderList(){
			this.$router.push({path:'/orderList'})
		}
	}
}
</script>


<style scoped>

</style>