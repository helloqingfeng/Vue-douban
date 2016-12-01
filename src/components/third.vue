<template>
	<div id="movies">
		<el-col :span="8" v-for="article in articles">
			<el-card :body-style="{ padding: '25px' }">
				<img src="http://element.eleme.io/static/hamburger.50e4091.png" class="image">
				<div style="padding: 14px;">
					<span>{{article.title}}</span>
					<div class="bottom clearfix">
						<time class="time">{{ currentDate }}</time>
					</div>
				</div>
			</el-card>
		</div>
	</template>

	<script>
		export default{
			data(){
				return{
					articles:[],
					articleTitle:''
				}
			},
			mounted:function(){
				this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=12',{},{
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