import Vue from 'vue'
import VueResource from "vue-resource"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'

//开启debug模式
Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(ElementUI);

import Author from './components/author.vue'
import First from './components/first.vue'
import Second from './components/second.vue'
import Third from './components/third.vue'

const app=new Vue({
	render: h => h(App)
}).$mount('#app')
