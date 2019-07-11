<template>
	<div class="chooser-component">
		<div class="chooser-list">
			<li v-for="(item,index) in selections" 
			@click="chooseSelection(index)" 
			:title="item.label"
			:class="{active:index === nowIndex}" >
				{{item.label}}
			</li>

		</div>
	</div>
</template>

<script>
export default{
	props:{
		selections:{
			type:Array,
			default:[{
				label:'text',
				value:0
			}]
		}
	},
	data(){
		return{
			nowIndex:0
		}
	},
	methods:{
		chooseSelection(index){
			this.nowIndex = index 
			this.$emit('on-change',this.selections[index])
		}
	}
}
</script>


<style scoped>
.chooser-component{
	display: inline-block;
	position: relative;
}
.chooser-list li{
	display: inline-block;
	border: 1px solid #4fc08d;
	height: 25px;
	line-height: 25px;
	padding: 0 8px;
	margin-right:10px;
	cursor: pointer;
}
.active{
	background: #4fc08d;
	color: #fff;
}
</style>