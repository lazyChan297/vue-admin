<template>
    <div class="app-container">
        <el-form ref="form" :model="form" label-width="120px">
                <el-form-item label="用户名">
                    <el-input placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="区域">
                    <el-select v-model="form.region" placeholder="请选择区域">
                        <el-option label="beijing" value="beijing"></el-option>
                        <el-option label="shanghai" value="shanghai"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="time">
                    <el-col :span="11">
                        <!-- span珊格占据的列数 -->
                        <el-date-picker type="date"
                                        placeholder="选择日期"
                                        v-model="form.date1"
                                        style="width:100%">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="2" class="line">-</el-col>
                    <el-col :span="11">
                        <el-time-picker type="date"
                                        placeholder="选择时间"
                                        v-model="form.date2"
                                        style="width:100%">
                        </el-time-picker>
                    </el-col>
                </el-form-item>
                <el-form-item label="swift">
                    <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="checkbox">
                    <el-checkbox-group v-model="form.type">
                        <el-checkbox label="chocolate" name="type"></el-checkbox>
                        <el-checkbox label="banana" name="type"></el-checkbox>
                        <el-checkbox label="orange" name="type"></el-checkbox>
                        <el-checkbox label="juice" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item label="radio">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="man"></el-radio>
                        <el-radio label="women"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submit">submit</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>
<script>
import { Message } from 'element-ui'
export default {
  data () {
    return {
      form: {
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: ''
      }
    }
  },
  methods: {
    submit () {
      let form = this.form
      console.log(form)
      Message({
        type: 'success',
        message: '提交成功'
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
    .el-form
        padding 0 20px
    .line
        text-align center
</style>
