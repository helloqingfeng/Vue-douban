import Vue from 'vue'
import VueRouter from "vue-router";
import VueResource from "vue-resource"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

import Author from './components/author.vue'
import First from './components/first.vue'
import Second from './components/second.vue'
import Third from './components/third.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router=new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
	{path:'/first',component:First},
	{path:'/second',component:Second},
	{path:'/third',component:Third}
	]
})


// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app=new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
