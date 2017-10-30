<template>
  <div id="app">
    <el-row>
      <el-col>
        <div id="ieam-header">
          <el-row>
            <el-col :span='4'>
              <a href='/'><img src="./assets/image/midea.png"></a>
            </el-col>
            <el-col :span='20'>
              <div>
                <el-button icon='edit'>edit</el-button>
                <el-button icon='share'>share</el-button>
                <el-button icon='delete'>delete</el-button>
                <el-button icon='search'>search</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <div id='ieam-sidebar'>
      <el-input v-model="filterText" placeholder="please input condition"></el-input>
      <el-tree class="filter-tree" :data="nodes" :filter-node-method="filterNode" :load="loadNode" @node-click="handNodeClick" lazy accordion highlight-current show-checkbox>
      </el-tree>
    </div>
    <div id="ieam-mainarea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'app',
  data: function() {
    return {
      active: true,
      filterText: '',
      nodes: []
    }
  },
  methods: {
    filterNode(value, data) {
      console.log(value, data);
    },
    loadNode(node, resolve) {
      if (node.level > 1) {
        return resolve([]);
      } else {
        return resolve([{
          label: '资产规划',
          url:'/grid'
        }, {
          label: '项目立项',
          url:'/grid'
        }]);
      }
    },
    handNodeClick(data, node, component) {
      if(node.isLeaf){
        this.$router.push(data.url);
      }
    }
  }
}

</script>
<style>
#ieam-header{
  background-color: #1D8CE0;
  margin-top: -8px;
  margin-left: -8px;
  margin-right: -8px;
}

#ieam-sidebar{
  display: inline-block;
  /* padding-top: 5px; */
  position: fixed;
  border-style: groove;
  border-color: rgba(0, 78, 255, 0.15);
  border-width: 2px;
  height: 550px;
  margin-left: -8px;
  /* margin-right: -8px; */
}

#ieam-mainarea{
  display: inline-block;
  border-style: groove;
  border-color: rgba(0, 78, 255, 0.15);
  border-width: 2px;
  position: fixed;
  left: 220px;
  width: 1141px;
  height: 550px;
}
</style>
