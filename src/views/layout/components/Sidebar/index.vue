<!-- 左侧导航菜单 -->
<template>
    <el-scrollbar wrap-class="scroll-wrapper" cl>
        <el-menu
            :show-timeout="200"
            mode="vertical"
            :collapse="isCollpse">
            <sidebar-item v-for="route in routes" :item="route"></sidebar-item>
        </el-menu>
    </el-scrollbar>
</template>
<script>
    import SidebarItem from './sidebarItem'
    export default {
        data() {
            return {
                isCollpse: true
            }
        },
        created() {
            console.log(this.routes)
        },
        computed: {
            // 获取路由表
            routes() {
                return this.$router.options.routes
            }
        },
        components: {
            SidebarItem
        }
        
        
    }
</script>
<style lang="stylus" scoped>
    .el-scrollbar
        position:fixed
        left:0
        top:0
        bottom:0
</style>