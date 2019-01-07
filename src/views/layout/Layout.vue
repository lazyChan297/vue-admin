<template>
    <div class="app-wrapper" :class="classObj">
        <!-- menu -->
        <sidebar class="slidebar-container"/>
        <!-- <el-menu class="slidebar-container">
          <div class="menu-wrapper" v-for="(item,index) in list" :key="index">
            <el-menu-item :index="index">{{item}}</el-menu-item>
          </div>
        </el-menu> -->
        <div class="main-container">
            <navbar/>
            <app-main/>
        </div>
    </div>
</template>
<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/navbar'
import AppMain from './components/AppMain'
export default {
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data () {
    return {
      list:['a','b','c']
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    classObj () {
      return {
        hideSidebar: this.sidebar.opened,
        openSidebar: !this.sidebar.opened
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
    /* .app-wrapper
      height:100%
      &.hideSidebar
       .main-container
         margin-left: 36px
      &.openSidebar
        .main-container
         margin-left: 180px
      .slidebar-container
        transition: width 28s;
        height: 100%;
        position: fixed;
        font-size: 0px;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 1001;
        overflow: hidden;
    .app-wrapper.openSidebar .slidebar-container
        width: 180px !important;
    .app-wrapper.hideSidebar .slidebar-container
        width: 36px !important; */
</style>
