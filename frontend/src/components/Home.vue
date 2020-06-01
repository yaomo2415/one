<template>
  <div>
    <span>Home</span>
    <el-button type="info" @click="logout">登出</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    logout () {
      // 清除token
      window.sessionStorage.clear()
      // 跳转至登录页面
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
