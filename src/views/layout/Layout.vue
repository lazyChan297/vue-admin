<template>
    <div class="app-wrapper">
        <!-- 导航 -->
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
    }
}
</script>
<style lang="stylus" scoped>
    
</style>