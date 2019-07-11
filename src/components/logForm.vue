<template>
	<div class="login-form">
		<div class="g-form">
			<div class="g-form-line">
				<span class="g-form-lable">用户名：</span>
				<div class="g-form-input">
					<input type="text"
					v-model="usernameModel" placeholder="请输入用户名">
					<span class="g-form-error">{{userErrors.errorText}}</span>

				</div>
			</div>
			<div class="g-form-line">
				<span class="g-form-lable">密码：</span>
				<div class="g-form-input">
					<input type="password"
					v-model="passwordModel" placeholder="请输入密码">
				</div>
				<span class="g-form-error">{{passwordErrors.errorText}}</span>
			</div>
			<div class="g-form-line">
				<div class="g-form-input">
					<a class="button g-form-btn" @click="onLogin">登录</a>
				</div>
			</div>
			<div>{{errorText}}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default{
	props:{

	},
	data(){
		return{
			usernameModel:'',
			passwordModel:'',
			errorText:'',
			
		}
	},
	computed:{
		userErrors(){
			let errorText,status
			if(!/@/g.test(this.usernameModel)){
				status=false
				errorText='请包含@'
			}else{
				status = true
				errorText = ''
			}
			if(!this.userFlag){				
				errorText = ''
				this.userFlag = true
			}
			return {
				status,
				errorText
			}
		},
		passwordErrors(){
			let errorText,status
			if(!/^\w{1,6}$/g.test(this.passwordModel)){
				status=false
				errorText='密码长度控制在1-6位'
			}else{
				status = true
				errorText = ''
			}
			if(!this.passwordFlag){
				
				errorText = ''
				this.passwordFlag = true
			}
			return {
				status,
				errorText
			}
		}

	},
	methods:{
		onLogin(){
			if(!this.userErrors.status || !this.passwordErrors.status){
				
				this.errorText = "部分选项有错"
			}else{
				
				this.errorText = ""
				this.$http.get('api/login')
				.then((res)=>{
					this.$emit('has-log',res.data)
					console.log(res);
					
				},(error)=>{
					console.log(error);
				})
			}
			
		}
	}
}
</script>
