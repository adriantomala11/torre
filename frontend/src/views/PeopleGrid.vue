<template>
    <div class="people-grid-container">
        <h4 class="mb-4 mt-2">Showing results for <b>{{$route.query.proficiency}}s</b> on "{{$route.query.skill}}"</h4>
        <b-container class="bv-example-row">
            <b-row>
                <b-col class="people-card-container" v-for="person in people.results" :key="person.username">
                    <people-card
                        :picture="person.picture"    
                        :name="person.name"
                        :professionalHeadline="person.professionalHeadline"
                        :locationName="person.locationName"
                        :username="person.username"
                    >
                    </people-card>
                </b-col>
            </b-row>
        </b-container>
        
    </div>    
</template>
<script>
import PeopleCard from '../components/PeopleGrid/PeopleCard.vue'
import axios from '@/axios'
export default {
    components:{
        PeopleCard
    },
    data(){
        return{
            people:null
        }
    },
    created(){
        axios.post('get-people/',{skill:this.$route.query.skill, proficiency:this.$route.query.proficiency}).then(response=>{
            this.people=response.data
        }).catch(error => console.log(error))
    }
}
</script>
<style>
    .people-grid-container{
        padding-top: 100px;
        width: 100vw;
    }

    .people-card-container{
        padding-bottom: 40px;
    }
</style>