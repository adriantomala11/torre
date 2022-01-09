<template>
    <div class="my-navbar" ref="navbar">
        <h2>{{title}}</h2>
    </div>
</template>
<script>
export default {
    props:{
        title: String 
    },
}
</script>
<style>
.my-navbar{
    width: 100vw;
    height: 70px;
    position: fixed;
    background-color: #27292d!important;
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.75);
    text-align: left;
    padding: 19px 25px;
}

.my-navbar h2{
    font-weight: 800;
}
</style>