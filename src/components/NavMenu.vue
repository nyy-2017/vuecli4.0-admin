<template>
  <!-- :collapse="isCollapse" -->
  <el-menu
    class="nav-menu el-menu-vertical-demo"
    :style="{width: isCollapse? '50px': '200px'}"
    :router="true"
    :default-active="$route.fullPath"
    :collapse-transition="true"
    @select="handleSelect"
    background-color="#202c3a"
    text-color="#fff"
    active-text-color="#ffd04b"
    mode="vertical"
  >
    <!--页面刷新会保存状态$route.path-->
    <el-menu-item v-for="(item, index) in routers[index].children" :key="index" :index="item.path">
      <router-link :to="item.path">
        <i :class="item.icon"></i>
        <span style="margin-left: 5px;">{{item.name}}</span>
      </router-link>
    </el-menu-item>

    <div class="fixed-text">
      <div>技术支持</div>
      <div>SJRE 京&copy; 2020 </div>
    </div>
  </el-menu>
</template>
<script>
export default {
  name: "navMenu",
  data() {
    const admin = require("../assets/json/admin.json");
    return {
      routers: admin.operation.router,
      index: 0,
      isCollapse: false
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //console.log(key, keyPath)
    }
  },
  created() {
    console.log("router",window.location.pathname); 
    let currentPath = window.location.pathname
    this.routers.map((v, i) => {
      v.children.map(item => {
        if(item.path === currentPath) {
          this.index = i
        }
      })
    })
    this.$router.push(window.location.pathname)
  },
  mounted() {
    this.bus.$on("sendIndex", content => {
      // console.log('content', content);
      this.index = content;
      if(this.routers){
        this.$router.push(this.routers[this.index].redirect);
      }
    });
    this.bus.$on("showAside", content => {
      // console.log("content22",content);
      this.isCollapse = content;
    });
  }
};
</script>
<style lang="less" >
.nav-menu {
  transition: all 0.5s ease;
  height: 100%;
  .fixed-text {
    position: absolute;
    left: 0;
    bottom: 80px;
    width: 100%;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #999;
  }
}
.bodyLeft {
  width: 200px;
  height: 100%;
  color: #fff;
}
.bodyLeft ul {
  width: 200px;
  height: 50px;
}
.bodyLeft ul li {
  width: 200px;
  height: 50px;
  line-height: 50px;
}
.bodyLeft ul li a {
  color: #fff;
}
.bodyLeft ul li:hover {
  width: 200px;
  background-color: rgb(39, 49, 88) !important;
  cursor: pointer;
}
.el-submenu .el-menu {
  border: none;
  overflow: hidden;
}
.el-menu-item {
  padding: 0 !important;
}
// .el-menu-item.is-active{
//   background-color: rgb(39, 49, 88) !important;
//   color: #fff !important;
// }
.el-menu-item a {
  display: block;
  width: 100%;
  color: #fff;
  padding: 0 20px;
}
.el-menu-item .router-link-exact-active {
  background: rgb(39, 49, 88);
}
</style>