<template>
	<div id="third">
		<el-row class="width-row">
			<el-col :span="6" v-for="article in articles">
				<div class="grid-content overflow">
					<p>{{article.title}}</p>
					<!--列表浮动布局必须要限制高度，负责出现锯齿排列，不整齐-->
					<img v-bind:src="article.images['large']" height="300">
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				currentDate: new Date().toString(),
				articles:[],
				articleTitle:''
			}
		},
		mounted:function(){
			this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=24',{},{
				headers:{
				},
				emulateJSON:true
			}).then(function(response){
				// 处理正确的回调
				this.articles=response.data.subjects;
				this.articleTitle=response.data.title;
			},function(response){
				console.log(response);
			});
		}
	}
</script>
<style>
.width-row{
		max-width: 880px;
	}
</style>