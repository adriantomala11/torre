<template>
    <div class="people-card">
        <div class="pp-container">
            <div class="pp">
                <svg viewbox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern :id="username" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image :xlink:href="picture" x="-25" width="150" height="100" />
                        </pattern>
                    </defs>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25" :fill="'url(#'+username+')'"/>
                </svg>
            </div>
        </div>
        <h4>{{name}}</h4>
        <p class="subtext1">{{professionalHeadline}}</p>
        <p class="subtext2">{{locationName}}</p>
        <b-button class="mt-4 mb-4">See More</b-button>
    </div>
</template>
<script>
export default {
    props:{
        name: String,
        professionalHeadline: String,
        picture: String,
        locationName: Object,
        strengths: Array,
        username: String
    },
    data(){
        return {
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
.people-card{
    width: 360px;
    height: 100%;
    background-color: #272a2d;
    border-radius: 0.5rem;
    padding: 10px;
    margin-bottom: 5px;
    box-shadow: -4px -4px 4px rgb(56 59 64 / 70%), 2px 2px 6px rgb(1 1 1 / 40%);
    -webkit-box-shadow: -4px -4px 4px rgb(56 59 64 / 70%), 2px 2px 6px rgb(1 1 1 / 40%);
    -moz-box-shadow: -4px -4px 4px rgb(56 59 64 / 70%), 2px 2px 6px rgb(1 1 1 / 40%);
    margin-right: 30px;
    margin:auto;
}
</style>