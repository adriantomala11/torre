<template>
    <div class="torre-card" :style="{'overflow':overflow}" @mouseenter="handleScroll()" @mouseleave="handleScroll()">
        <h4>Resumé</h4>
        <p>No resume found for this user.</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            overflow: 'hidden'
        }
    },
    methods:{
        handleScroll (event) {
            this.overflow = this.overflow==='hidden' ? 'overlay' : 'hidden'
        }
    }
}
</script>
<style>
</style>