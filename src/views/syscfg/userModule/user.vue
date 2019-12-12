<template>
  <div>

  <section class="search-form-wrapper">
    <el-form :inline="true">
      <el-row :gutter="24">
        <el-col :span="20">
          <div class="fl">
            <el-form-item>
              <el-input placeholder="请输入用户名称" clearable v-model="searchForm.name" ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="searchBtn()" type="primary" icon="el-icon-search">查询</el-button>
              <!-- <el-button @click="resetSearchBtn()" size="mini">重置</el-button> -->
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="4" class="text-right">
          <el-button type="primary" @click="addHandle()" icon="el-icon-plus">新增用户</el-button>
        </el-col>
      </el-row>
    </el-form>
  </section>









    <div class="listfile" :style="minHeight" style="overflow:auto;background: #fff;margin-top: 15px;">
      <el-table :data="tableData" border style="width: 100%" >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column prop="date" label="日期" width="180" align="center">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180" align="center"></el-table-column>
        <el-table-column prop="address" label="地址" align="center"></el-table-column>
        <el-table-column label="操作" width="200" align="center">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click.native.prevent="deleteRow(scope.$index, tableData)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="float: right; margin: 20px 0;">
      <el-pagination background layout="total,prev, pager, next" :total="total" :current-page.sync="currentPage" :page-size="pageSize"  @size-change="size_Change" @current-change="current_change"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //搜索
      searchForm: {
        type: Object,
        default: Object,
        required: true
      },

      total:0,// 初始化信息总条数
      currentPage:1, //当前页
      pageSize:10,// 每页显示多少条
      minHeight:{
　　　　height:'',
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      Data:[],
    };
  },
  methods: {
    //查询
    searchBtn() {
      return this.$message({
        type: "error",
        message: "请先配置接口哦"
      });
      this.$emit("searchBtn", this.searchForm);
    },
    // //重置
    // resetSearchBtn() {
    //   this.$emit("resetSearchBtn");
    // },
    //添加
    addHandle() {
      this.$emit("addHandle");
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    //获取当前浏览器的高度的函数
    getminHeight(){
      this.minHeight.height = (window.innerHeight)*0.7 + 'px';
    },
    //index当前页码
    // changepage(index){
    //     this.currentPage = index;
    //     var _start = ( index - 1 ) * this.pageSize;
    //     var _end = index * this.pageSize;
    //     this.tableData = this.tableData.slice(_start,_end);
    //     let sessionId = Cookies.get('status'); 
    // },
    current_change(currentPage){
      console.log(`当前页: ${currentPage}`);
      this.currentPage = currentPage;
      var _start = ( currentPage - 1 ) * this.pageSize;
      var _end = currentPage * this.pageSize;
      this.tableData = this.Data.slice(_start,_end);
      // let sessionId = Cookies.get('status');
    },
    size_Change(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
  },
  created(){
    this.total=this.tableData.length;
  },
  mounted(){
    this.getminHeight(); //调获取当前浏览器的高度 
    this.Data = this.tableData;
  },
  destroyed(){
    this.$destroy();
  }
};
</script>

<style>
</style>