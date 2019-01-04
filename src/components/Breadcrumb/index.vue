<!-- navbar breadcrumb -->
<template>
    <el-breadcrumb class="app-breadcrumd" separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" v-if="item.meta.title" :key="item.path">
                <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
                <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>
<script>
import pathToRegexp from 'path-to-regexp'
export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb (item) {
      console.log(this.$router.matched)
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      console.log(matched)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {title: 'dashboard'}}].concat(matched)
      }
      this.levelList = matched
    },
    pathCompile (path) {
      const {params} = this.$route
      var toPath = pathToRegexp.compile(path)
      return toPath(params)
    },
    handleLink (item) {
      const {redirect, path} = item
      if (redirect) {
        this.$router.push(redirect)
        return
      }
      this.$router.push(this.pathCompile(path))
    }
  }
}
</script>
