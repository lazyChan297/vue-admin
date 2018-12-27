<template>
    <!-- hidden:true 在导航菜单显示-->
    <div v-if="!item.hidden&&item.children" class="menu-wrapper">
        <!-- 直接显示及1级路由or1级路由下的唯一一条子路由 点击不展开下拉列表直接跳转-->
        <template v-if="hasOneShowingChild(item.children, item)&&(!onlyOneChild.children || noShowingChildren)">
            <app-link :to="resolvePath(onlyOneChild.path)" :key="onlyOneChild.path">
                <el-menu-item :index="onlyOneChild.path">
                    <s-item :icon="onlyOneChild.meta.icon"
                        :title="onlyOneChild.meta.title">
                    </s-item>
                </el-menu-item>
            </app-link>
        </template>
        <!--点击下拉／隐藏子菜单-->
        <el-submenu v-else :index="resolvePath(item.path)">
            <template slot="title">
                <s-item v-if="item.meta" :title="item.meta.title" :icon="item.meta.icon">
                </s-item>
            </template>
            <!--隐藏的子菜单列表-->
            <template v-for="child in item.children" v-if="!child.hidden">
                <sidebar-item
                    v-if="child.children&&child.children.length>0"
                    :item="child"
                    :key="child.path"
                    :base-path="resolvePath(child.path)"
                    :is-nest="true">
                </sidebar-item>
                <app-link v-else :to="resolvePath(child.path)" :key="child.path">
                    <el-menu-item :index="resolvePath(child.path)">
                        <s-item
                            v-if="child.meta"
                            :title="child.meta.title"
                            :icon="item.meta.icon" >
                        </s-item>
                    </el-menu-item>
                </app-link>
            </template>
        </el-submenu>
    </div>
</template>
<script>
import path from 'path'
import AppLink from './Link'
import SItem from './Item'
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  components: {
    AppLink,
    SItem
  },
  methods: {
    // 判断层级
    hasOneShowingChild (child, parent) {
      // parent1级路由 child1级路由下的数组
      const showingChild = child.filter(item => {
        if (item.hidden) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // console.log(this.onlyOneChild)
      // 显示该条子路由
      if (showingChild.length === 1) {
        return true
      }
      // 显示该条路由
      if (showingChild.length === 0) {
        this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
        return true
      }
      return false
    },
    resolvePath (routePath) {
      // 绝对路径/this.basePath/routePath
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
<style>
    .menu-wrapper{
      min-width:0;
      width: 100%;
    }
    .el-submenu__title {
      
    }     
    .el-submenu .el-menu-item {
      min-width:0;
      padding: 0 20px !important
    }
</style>
