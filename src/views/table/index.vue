<template>
  <el-table
    :data="tableData">
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="phone" label="电话"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
  </el-table>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: 'louis',
          phone: 18677185487,
          address: '北京'
        },
        {
          name: 'jay',
          phone: 18677185400,
          address: '上海'
        },
        {
          name: 'tiffany',
          phone: 18677185487,
          address: '广州'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .el-table
    padding 0 20px
</style>
