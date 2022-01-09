<template>
    <div class="people-grid-container">
        <div v-if="people">
            <h4 v-if="$route.query.skill && people" class="mb-4 mt-2">Showing {{people.offset+1}}-{{people.offset+10}} of {{people.total}} results for <b style="color: #cddc39;">{{$route.query.proficiency}}s</b> on <b style="color: #cddc39;">"{{$route.query.skill}}"</b></h4>
            <b-container class="bv-example-row" v-if="people">
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
            <div class="mb-5">
                <div v-if="people" class="paginator">
                    <div v-if="people.pagination.previous" class="paginator-btn" @click="previousPage()">Previous</div>
                    <div v-if="people.pagination.next" class="paginator-btn" @click="nextPage()" style="margin-left: 40px;">Next</div>
                </div>
            </div>
        </div>
        <loader v-else></loader>
    </div>    
</template>
<script>
import PeopleCard from '../components/PeopleGrid/PeopleCard.vue'
import Loader from '../components/Loader.vue'
import axios from '@/axios'


export default {
    components:{
        PeopleCard,
        Loader
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
    },
    methods:{
        nextPage(){
            window.scrollTo(0,0);
            axios.post('get-people/',{skill:this.$route.query.skill, proficiency:this.$route.query.proficiency, after:this.people.pagination.next}).then(response=>{
                this.people=response.data;
            }).catch(error => console.log(error))
        },
        previousPage(){
            window.scrollTo(0,0);
            axios.post('get-people/',{skill:this.$route.query.skill, proficiency:this.$route.query.proficiency, before:this.people.pagination.previous}).then(response=>{
                this.people=response.data;
            }).catch(error => console.log(error))
        }
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
    
    .paginator{
        display: flex;
        width: fit-content;
        margin: auto;
    }

    .paginator-btn{
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
    }

    .paginator-btn:hover{
        color: #cddc39;
    }

    button:hover{
        color: #cddc39 !important;
    }
</style>