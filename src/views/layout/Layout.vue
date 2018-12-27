<template>
    <div class="app-wrapper" :class="classObj">
        <!-- menu -->
        <sidebar/>
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
    .app-wrapper
      height:100%
      &.hideSidebar
       .main-container
         margin-left: 49px
      &.openSidebar
        .main-container
         margin-left: 113px
</style>
