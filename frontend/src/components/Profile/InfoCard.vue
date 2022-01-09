<template>
    <div class="torre-card" :style="{'overflow':overflow}" @mouseenter="handleScroll()" @mouseleave="handleScroll()">
        <div class="pp-container">
            <div class="pp">
                <svg viewbox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                        <image :xlink:href="picture" x="-25" width="150" height="100" />
                        </pattern>
                    </defs>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
                </svg>
            </div>
        </div>
        <h4>{{name}}</h4>
        <p class="subtext1">{{professionalHeadline}}</p>
        <p class="subtext2">{{location.shortName}}</p>
        <div class="skills-container">
            <p class="subtitle2">Skills and interests</p>
            <skills-container :strengths="strengths"></skills-container>
        </div>
    </div>
</template>
<script>
import SkillsContainer from './SkillsContainer.vue'

export default {
    props:{
        name: String,
        professionalHeadline: String,
        picture: String,
        location: Object,
        strengths: Array,
    },
    data(){
        return {
            overflow: 'hidden'
        }
    },
    components:{
        SkillsContainer
    },
    methods:{
        handleScroll (event) {
            this.overflow = this.overflow==='hidden' ? 'overlay' : 'hidden'
        }
    }
}
</script>
<style>
    .pp-container{
        width: 100%;
        height: 100px;
        margin-bottom: 10px;
    }
    svg{
        width:30%;
        margin:0 auto;
    }

    #hex{
        stroke-width:3;
        stroke: #5d626c;
    }

    .skills-container{
        margin-top: 20px;
    }
</style>