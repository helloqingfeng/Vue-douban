<template>
	<div id="author">
		<h2>青光乍现，必露锋芒</h2>
		<p>Written by {{author}}</p>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				author:"@青丰与名月"
			}
		}
	}
</script>

<style>
	#author{
		font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size: 16px;
		color: #FF4949;
	}
	#author h2{
		color: #324057;
	}
</style>