<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
body{
  overflow-x: overlay;
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
