<template>
	<div id="yourname">
		<el-row>
			<el-col :span="24"><div class="grid-content bg-purple-dark">
				<div class="block center">
					<span class="wrapper">
						<el-button type="info">你的名字</el-button>
					</span>
				</div>
				<p><strong>电影简介</strong></p>
				<p>是由新海诚导演的一部日本动画电影，由神木隆之介、上白石萌音担任主要配音演员，人设是由参与过《我们仍未知道那天所看见的花的名字。》的田中将贺担当，作画导演由曾创作过《千与千寻》、《幽灵公主》的安藤雅司执笔。作品于2016年8月26日在日本上映。中国内地定于2016年12月2日上映，分为日语原声中文字幕版和中文配音版2种版本。作品讲述了男女高中生在梦中相遇的幻想故事。</p>
				<p><img src="../assets/yourname.jpg"></p>
			</div></el-col>
		</el-row>
	</div>
</template>

<style>
	#yourname{
		width: 880px;
		text-align: left;
		line-height: 1.5em;
		font-family:"Helvetica Neue";
	}
	#yourname .center{
		text-align: center;
		color:#1D8CE0;
	}
	#yourname span{
		font-size: 20px;
	}
	#yourname p img{
		display: block;
		margin: 0 auto;
	}
</style>