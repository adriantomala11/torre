<template>
  <div id="app">
    <navbar :title="navbarTitle"></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Layouts/Navbar.vue'

export default {
  data(){
    return {
      skill:null,
      navbarTitle:'torre'
    }
  },
  components:{
    Navbar
  }
}
</script>

<style>
body{
  overflow: overlay;
  background-color: #272a2d !important;
  min-height: 100vh;
}

body::-webkit-scrollbar {
    height: 10px!important;
    background-color: transparent;
}

body::-webkit-scrollbar-thumb {
    background-color: #565b64;
    border-radius: 10px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;;
  background-color: #272a2d;
  width: fit-content;
}
</style>
