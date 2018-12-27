<template>
    <div class="navbar-wrapper">
        <div class="navbar-left">
          <hamburger :toggle-click="toggleSidebar" :is-active="sidebar.opened" class="hamburger-container"></hamburger>
          <breadrumd />
        </div>
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
  methods: {
    toggleSidebar () {
      this.$store.dispatch('toggleSideBar')
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ])
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
</style>
