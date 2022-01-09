<template>
    <div>
        <div class="skills" v-for="(value, propertyName) in skills" :key="propertyName">
            <p>{{propertyName|capitalizeFirst}}</p>
            <div>
                <div class="skill" v-for="skill in value" :key="skill.id" @click="relatedPeople(skill)">
                    <p>{{skill.name}}</p>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        strengths: Array
    },
    data(){
        return{
            skills:{}
        }
    },
    created(){
        for(var i=0; i<this.strengths.length; i++){
            if (this.strengths[i].proficiency in this.skills){
                this.skills[this.strengths[i].proficiency].push(this.strengths[i])
            }else{
                this.skills[this.strengths[i].proficiency] = [this.strengths[i],]   
            }
        }
    },
    filters:{
        capitalizeFirst(value){
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    },
    methods:{
        relatedPeople(skill){
            try{
                this.$router.push(String('/people/'+skill.id+'/'))
            }catch{}
        }
    },
}
</script>
<style>
    .skill{
        background-color: #383b40;
        color: rgba(255,255,255,.9);
        border-radius: 50px;
        padding: 5px 15px;
        width: fit-content;
        cursor: pointer;
        display: inline-block;
        margin-left: 5px;
        margin-bottom: 8px;
    }

    .skill:hover{
        color: #383b40;
        background-color: rgba(255,255,255,.9);
    }

    .skill > p{
        margin:0;
        font-size: 14px;
    }

    .skills > p{
        width: 100%;
        font-size: 15px;
    }
</style>