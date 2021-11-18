<template>
<div class="home">
 <h1>home</h1>
  <button @click="goToMenu" class="btn btn-success">Let's order!</button>
</div>
</template>

<script>
export default {
  name: "Home",
  methods:{
    goToMenu(){
      //路由跳转的三种方式
      // this.$router.go(-1)
      // this.$router.replace("/menu")
      // this.$router.replace({name:'menuLink'})
    //  通过push跳转
    //   this.$router.push("/menu")
      this.$router.push({name:'menuLink'})

    }
  }
}
</script>

<style scoped>

</style>
