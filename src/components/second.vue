<template>
	<div id="second">
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark">
					<el-card class="box-card">
						<div slot="header" class="clearfix">
							<h2 style="line-height: 36px;">{{articleTitle}}</h2>
						</div>
						<ol class="text item list-style">
							<li v-for="article in articles">
								{{article.title}}
							</li>
						</ol>
						</el-card>
				</div>
			</el-col>
		</el-row>

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
		mounted: function() {
			this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters', {}, {
				headers: {
				},
				emulateJSON: true
			}).then((response) =>{
      // 响应成功回调(简洁的ES 6的Lambda写法)
      this.articles = response.data.subjects;
      this.articleTitle=response.data.title;
  }, (response)=> {
        // 响应错误回调
        console.log(response)
    });
		}
	}
</script>

<style>
	#second h1{
		line-height: 28px;
	}

	.item {
		padding: 10px 3px;
	}
	.list-style{
		font-size: 18px;
		text-align: left;
		margin-left:330px;
	}
	.box-card{
		width: 880px;
	}
</style>
