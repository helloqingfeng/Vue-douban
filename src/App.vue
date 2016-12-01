<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="16" :offset="4"><div class="grid-content bg-purple-dark">
       <h1>{{ msg }}</h1>
       <img src="./assets/fanhai.jpg"  alt="fanhai">


       <el-tabs :active-name="activeName">
         <el-tab-pane label="你的名字" name="first">
           <First></First>
         </el-tab-pane>

         <el-tab-pane label="正在热映" name="second">
           <Second></Second>
         </el-tab-pane>

         <el-tab-pane label="电影Top250" name="third">
           <Third></Third>
         </el-tab-pane>
       </el-tabs>
       <Author></Author>
     </div>
   </el-col>
 </el-row>
</div>
</template>

<script>
  import Author from './components/author.vue'
  import Second from './components/second.vue'
  import Third from './components/third.vue'
  import First from './components/first.vue'

  export default {
    data () {
      return {
        msg: 'Use Vue 2.0 Today!',
        activeName: 'first'
      }
    },

  // 注册组件
  components:{
    Author,
    Second,
    First,
    Third
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 4000
      })
    }
  }
}
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
    color:#1F2D3D;
    text-align: center;
  }
</style>
