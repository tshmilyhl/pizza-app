<template>
  <div id="app">
 <div class="container">
   <app-header></app-header>
 </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: 'app',
  components:{
    appHeader:Header
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {

}

</style>
