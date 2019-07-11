<template>
	<div class="chooser-component">
		<ul class="chooser-list">
			<li v-for="(item,index) in banks"
			@click="chooseSelection(index)"
			:title="item.label"
			:class="[item.name,{active:index === nowIndex}]"></li>
		</ul>
		
	</div>
</template>

<script>
export default{
	data(){
		return{
			nowIndex:0,
			banks:[
			{
				id:101, 
				label:'中国银行',
				name:'zhongguo'
			},
			{
				id:201, 
				label:'中国农业银行',
				name:'nongye'
			},
			{
				id:301, 
				label:'中国工商银行',
				name:'gongshang'
			},
			{
				id:401, 
				label:'招商银行',
				name:'zhaoshang'
			},
			{
				id:501, 
				label:'中国邮政',
				name:'youzheng'
			},
			{
				id:601, 
				label:'中国建设银行',
				name:'jianshe'
			},
			{
				id:701, 
				label:'交通银行',
				name:'jiaotong'
			},			
			{
				id:801, 
				label:'民生银行',
				name:'minsheng'
			}
			]
		}
	},
	methods:{
		chooseSelection(index){
			this.nowIndex = index 
			this.$emit('on-change',this.banks[index])
		}
	}
}
</script>

<style scoped>

.chooser-component{
	position: relative;
	display: inline-block;
}
.chooser-list li.active{
	border:2px solid #4fc08d;
}
.chooser-list li{
	display: inline-block;
	width: 170px;
	height: 45px;
	background-image: url(../../assets/bank/666.jpg);
	background-repeat: no-repeat;
	margin: 5px;
	border: 2px solid #e3e3e3;
	cursor: pointer;
}
.zhaoshang{
	background-position: -175px -133px;
}
.gongshang{
	background-position: 0 -135px;
}
.zhongguo{
	background-position: 0 -83px;
}
.nongye{
	background-position: -178px -83px;
}
.jianshe{
	background-position: -182px -186px;
}
.youzheng{
	background-position: 0 -186px;
}
.jiaotong{
	background-position: 0 -242px;
}
.minsheng{
	background-position: -2px -291px;
}
</style>