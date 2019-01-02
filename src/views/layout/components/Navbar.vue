<template>
    <div class="navbar-wrapper">
        <div class="navbar-left">
          <hamburger :toggle-click="toggleSidebar" :is-active="sidebar.opened" class="hamburger-container"></hamburger>
          <breadrumd />
        </div>
        <el-dropdown class="navbar-right" trigger="click">
            <div class="el-dropdown-link">
              <img :src="avatar" alt="" width="40" height="40">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Home</el-dropdown-item>
              <el-dropdown-item divided>
                <span style="display:block;" @click="logout">logout</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
    </div>
</template>
<script>
import breadrumd from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import {mapGetters} from 'vuex'
export default {
  components: {
    breadrumd,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSideBar')
    },
    logout () {
      console.log('logout')
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
    .navbar-wrapper
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        .navbar-left
          display: flex
          align-items: center
          .hamburger-container
            line-height: 1;
            margin-right: 10px
        .navbar-right
          height: 40px;
          display: block;
          img
            border-radius:10px
</style>
