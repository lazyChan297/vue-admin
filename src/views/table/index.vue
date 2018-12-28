<template>
    <div class="number-wrapper">
        <button @click="add">add</button>
        <button @click="remove">remove</button>
        <div class="list">
            <transition-group name="fade">
                <span v-for="(item) in list" :key="item" class="item">{{item}}</span>
            </transition-group>
        </div>
    </div>
    </template>
<script>
export default {
  data () {
    return {
      list: [1]
    }
  },
  methods: {
    add () {
      let num = this.list.length
      let index = Math.floor(Math.random() * num)
      this.list.splice(index, 0, num + 1)
    },
    remove () {
      let num = this.list.length
      let index = Math.floor(Math.random() * num)
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="stylus" scoped>
    .fade-enter,
    .fade-leave-to
     opacity:0
     transform:translateY(20px)
    .fade-leave-active
     position: absolute
    .item
        margin-right: 10px
        display: inline-block
        transition: all 0.5s
</style>
