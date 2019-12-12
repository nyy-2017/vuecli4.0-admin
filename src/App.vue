<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 会被缓存的视图组件 -->
      </router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive">
      <!-- 不被缓存的视图组件 -->
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{

  },
  created(){
    console.log("router",window.location.pathname,this.$route.meta.keepAlive); 
    this.$router.push(window.location.pathname)
  },
  mounted(){

  }
}
</script>
<style lang="css">
#app {
  height: 100%;
}
</style>