<!-- 导航菜单 -->
<template>
    <el-scrollbar wrap-class="scroll-wrapper">
        <!--
            show-timeout 展开延时
            collapse: 是否水平折叠收起菜单
        -->
        <el-menu
            :show-timeout="200"
            :default-active="$route.path"
            mode="vertical"
            :collapse="isCollpse"
            background-color="#304156"
            text-color="#bfcbd9"
            active-text-color="#409EFF">
            <sidebar-item v-for="route in routes" :item="route" :base-path="route.path" :key="route.path"/>
        </el-menu>
    </el-scrollbar>
</template>
<script>
import SidebarItem from './sidebarItem'
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      isUnique: true
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    // 获取路由表
    routes () {
      return this.$router.options.routes
    },
    isCollpse () {
      return this.sidebar.opened
    }
  },
  components: {
    SidebarItem
  }
}
</script>
<style lang="stylus">
    .el-scrollbar
      position:fixed
      left:0
      top:0
      bottom:0
      height:100%
      background:#304156
      .scroll-wrapper
        overflow:hidden !important
        margin-right: 0 !important
    .el-menu
      border-right:0
    .el-menu--collapse
      width:49px;
</style>
