<template>
    <div class="main-container" v-if="profile">
        <info-card
            :name="profile.person.name"
            :professionalHeadline="profile.person.professionalHeadline"
            :picture="profile.person.picture"
            :location="profile.person.location"
            :strengths="profile.strengths"
        ></info-card>
        <reputation-card></reputation-card>
        <resume-card></resume-card>
        <psycometrics-card></psycometrics-card>
        <jobs-posted-card></jobs-posted-card>
        
    </div>
</template>

<script>
import axios from '@/axios'
import InfoCard from '../components/Profile/InfoCard.vue'
import ReputationCard from '../components/Profile/ReputationCard.vue'
import ResumeCard from '../components/Profile/ResumeCard.vue'
import PsycometricsCard from '../components/Profile/PsychometricsCard.vue'
import JobsPostedCard from '../components/Profile/JobsPostedCard.vue'

export default {
    data(){
        return{
            profile:null
        }
    },
    created(){
        axios.post('get-profile/',{username:this.$route.params.username}).then(response=>{
            this.profile=response.data
        }).catch(error => console.log(error))

    },
    components:{
        InfoCard,
        ReputationCard,
        ResumeCard,
        PsycometricsCard,
        JobsPostedCard,
    },
}

</script>

<style>
    .main-container{
        display: flex;
        height: 100vh;
        padding: 25px;
        padding-top: 100px;
        width: fit-content;
    }

    .torre-card{
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
    }

    div::-webkit-scrollbar {
        width: 6px!important;
        background-color: transparent;
    }

    div::-webkit-scrollbar-thumb {
        background-color: #565b64;
        border-radius: 5px;
    }

    .subtext1{
        font-size: 16px;
        margin-bottom: 0;
    }

    .subtext2{
        font-size: 13px;
        margin-bottom: 0;
        color: #a5a5a5;
    }

    .subtitle2{
        font-size: 18px;
    }

    @media (max-width:600px)  {
        .main-container{
            display: block;
            height: fit-content;
        }

        .torre-card{
            width: 100%;
            height: 100%;
            background-color: #272a2d;
            border-radius: 0.5rem;
            padding: 10px;
            margin-bottom: 20px;
        }
    }

</style>
