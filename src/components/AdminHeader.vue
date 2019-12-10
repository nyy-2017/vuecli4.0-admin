<template>
  <section class="header">
    <div class="logo">
      <img src="@/assets/images/_logo.png" alt />
      <span>&nbsp;&nbsp; TCC路网中心</span>
    </div>
    <!-- 左侧的折叠 -->
    <div style="position: fixed;left: 180px;">
      <span class="nav-link" @click="sidebarMinimize">&#9776;</span>
    </div>
    <!-- header的主标题 -->
    <div class="header-item">
      <ul>
        <li v-for="(item, index) in headers" :key="index" @click="getClick(index)">
          <i :class="item.icon"></i>
          <span>{{item.name}} </span>
        </li>
      </ul>
    </div>
    <!-- 右侧的登录用户和退出 -->
    <div class="nav-button">
      <a href target="_blank" style="color: #fff;" class="pad-10">
        <i class="el-icon-star-off"></i> admin
      </a>
      <span @click="logout" class="pad-10">
        <i class="el-icon-switch-button"></i> 退出
      </span>
    </div>
  </section>
</template>

<script>
export default {
  name: "adminHeader",
  data(){
   const admin = require('../assets/json/admin.json')
    return{
      headers: admin.operation.header,
      isCollapse: true,
    }
  },
  methods: {
    //左侧的折叠
    sidebarMinimize() {
      console.log(123, this.isCollapse)
      this.bus.$emit("showAside", this.isCollapse)
      this.isCollapse = !this.isCollapse
    },
    //获取header id
    getClick(index){
      this.bus.$emit("sendIndex", index);
    },
    //退出登录
    logout() {
      this.$confirm("您确定要退出登录吗？ 是否继续?", "温馨提示：", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        //定义token退出值
        localStorage.removeItem("token"); //清除token
        this.$router.push("/login");
      });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #202c3a;
  color: #fff;
  font-size: 20px;
  .logo {
    display: inline-block;
    vertical-align: middle;
    img {
      width: 30px;
      vertical-align: inherit;
    }
  }
  .nav-button {
    float: right;
    span {
      cursor: pointer;
    }
  }
}
.nav-link{
  display:inline-block;
  font-size:1.25rem;
  line-height:1;
  color:#2d8cf0 !important;
  transition:color .2s ease;
  cursor: pointer;
  z-index: 999;
}
.header-item {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 200px;
  font-size: 17px;
}
.header-item ul{
  padding: 0;
}
.header-item ul li {
  height: 60px;
  line-height: 60px;
  display: inline-block;
  min-width: 120px;
  text-align: center;
  color: #fff;
}
.header-item ul li:hover{
  background-color: rgb(39, 49, 88) !important;
  cursor: pointer;
}
.header-item ul li span{
  display: inline-block;
  margin-left: 5px;
}
</style>