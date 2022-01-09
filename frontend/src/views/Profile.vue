<template>
    <div class="main-container">
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
        this.profile = {
            "person": {
                "professionalHeadline": "Computer Engineer",
                "completion": 1,
                "showPhone": false,
                "created": "2021-10-01T02:32:53Z",
                "verified": true,
                "flags": {
                    "benefits": false,
                    "canary": false,
                    "enlauSource": false,
                    "fake": false,
                    "featureDiscovery": true,
                    "firstSignalSent": true,
                    "signalsOnboardingCompleted": true,
                    "importingLinkedin": false,
                    "onBoarded": true,
                    "remoter": true,
                    "signalsFeatureDiscovery": true,
                    "importingLinkedinRecommendations": false,
                    "contactsImported": false,
                    "appContactsImported": false,
                    "genomeCompletionAcknowledged": true,
                    "cvImported": true,
                    "communityCreatedPrivate": false,
                    "communityCreatedClaimed": false,
                    "connectBenefitsViewed": true
                },
                "weight": 143.5125,
                "ggId": "1190257",
                "completionStage": {
                    "stage": 3,
                    "progress": 1
                },
                "locale": "es",
                "subjectId": 1190257,
                "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1633068210/origin/starrgate/users/profile_2b91535d6277a630ab92c3e2987f5899c4e99ac2.jpg",
                "hasEmail": true,
                "isTest": false,
                "name": "Adrian Tomala",
                "links": [
                    {
                        "id": "BMLBLGQy",
                        "name": "github",
                        "address": "https://github.com/adriantomala11"
                    },
                    {
                        "id": "vy59bXoy",
                        "name": "instagram",
                        "address": "https://instagram.com/luisadriant_"
                    },
                    {
                        "id": "ANaaAVDN",
                        "name": "linkedin",
                        "address": "https://www.linkedin.com/in/adriantomalav/"
                    }
                ],
                "location": {
                    "name": "Guayaquil, Guayas, Ecuador",
                    "shortName": "Guayaquil, Guayas, Ecuador",
                    "country": "Ecuador",
                    "latitude": -2.1894128,
                    "longitude": -79.8890662,
                    "timezone": "America/Guayaquil",
                    "timezoneOffSet": -18000000,
                    "placeId": "ChIJX4BV6MsTLZARc6T89JKkFYA"
                },
                "theme": "brown100",
                "id": "kNmk08Xj",
                "pictureThumbnail": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_fill,h_150,w_150/v1633068210/origin/starrgate/users/profile_2b91535d6277a630ab92c3e2987f5899c4e99ac2.jpg",
                "claimant": false,
                "weightGraph": "https://hcti.io/v1/image/a8bb96b0-edbf-420c-99da-04188bd04070",
                "publicId": "adriantomalav"
            },
            "stats": {
                "jobs": 2,
                "education": 1,
                "strengths": 51
            },
            "strengths": [
                {
                    "id": "M4na3gky",
                    "code": 194792,
                    "name": "Material design",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2022-01-05T17:42:25"
                },
                {
                    "id": "MEem0k1M",
                    "code": 32043,
                    "name": "Kotlin",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2022-01-05T17:42:20"
                },
                {
                    "id": "jwgGAxYj",
                    "code": 6085401,
                    "name": "Software architecture",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2022-01-05T17:42:19"
                },
                {
                    "id": "M7G2AzxM",
                    "code": 32059,
                    "name": "Scala",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2022-01-05T17:42:16"
                },
                {
                    "id": "NKGJ4PoN",
                    "code": 56482,
                    "name": "Strategic Thinking",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2022-01-05T17:42:12"
                },
                {
                    "id": "jlEV33Py",
                    "code": 29411,
                    "name": "Ruby on Rails",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-29T00:00:00"
                },
                {
                    "id": "MBDvee2y",
                    "code": 7497,
                    "name": "Testing",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:59:56"
                },
                {
                    "id": "yolxqqWN",
                    "code": 6380,
                    "name": "API",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:59:53"
                },
                {
                    "id": "MRYKooWN",
                    "code": 28888,
                    "name": "REST",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:59:52"
                },
                {
                    "id": "yb0V44kM",
                    "code": 23813,
                    "name": "Node.js",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:59:48"
                },
                {
                    "id": "ykrVdYaj",
                    "code": 32021,
                    "name": "Clojure",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:54:43"
                },
                {
                    "id": "ydzVLXrM",
                    "code": 61332,
                    "name": "Software development",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T23:54:40"
                },
                {
                    "id": "MgEVWnLy",
                    "code": 40852,
                    "name": "DevOps",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T15:29:08"
                },
                {
                    "id": "yJeDQwRj",
                    "code": 186838,
                    "name": "Bases de datos",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T15:28:43"
                },
                {
                    "id": "MqAVEndM",
                    "code": 65332,
                    "name": "Cloud",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T15:28:41"
                },
                {
                    "id": "Mvr6v5mM",
                    "code": 55516,
                    "name": "Front end development",
                    "proficiency": "proficient",
                    "weight": 16.5828,
                    "recommendations": 1,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:45"
                },
                {
                    "id": "jp97ZbJy",
                    "code": 317833,
                    "name": "Bootstrap 4",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:42"
                },
                {
                    "id": "jA9p18Rj",
                    "code": 9607901,
                    "name": "Metodología BEM",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:40"
                },
                {
                    "id": "MelV5wdN",
                    "code": 34500,
                    "name": "Scrum",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:37"
                },
                {
                    "id": "Nm6OV51M",
                    "code": 7107995,
                    "name": "Bootstrap 5",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:34"
                },
                {
                    "id": "yZmo089j",
                    "code": 23822,
                    "name": "SASS",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:32"
                },
                {
                    "id": "ykrVo58j",
                    "code": 56649,
                    "name": "UX/UI",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:07:29"
                },
                {
                    "id": "ydzVk72M",
                    "code": 32052,
                    "name": "PHP",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:04:39"
                },
                {
                    "id": "jlEVn5Py",
                    "code": 6124164,
                    "name": "Full Stack development",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:04:34"
                },
                {
                    "id": "NO4KqZbM",
                    "code": 3922732,
                    "name": "WebFlow",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:04:13"
                },
                {
                    "id": "M9EDQeOM",
                    "code": 56891,
                    "name": "Web Development",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:04:11"
                },
                {
                    "id": "NVYKDqKy",
                    "code": 49214,
                    "name": "PostgreSQL",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:01:18"
                },
                {
                    "id": "ynrVB9ly",
                    "code": 7182649,
                    "name": "SQLAlchemy",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:01:16"
                },
                {
                    "id": "MRYKXeWN",
                    "code": 172097,
                    "name": "Programación orientada a objetos",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T07:00:59"
                },
                {
                    "id": "8jp8a70j",
                    "code": 234085,
                    "name": "Desarrollo de software",
                    "proficiency": "proficient",
                    "weight": 26.1655,
                    "recommendations": 1,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:37:27"
                },
                {
                    "id": "OMvY26RN",
                    "code": 6810913,
                    "name": "Ingeniería",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:37:27"
                },
                {
                    "id": "XMqz2Vbj",
                    "code": 177818,
                    "name": "Ciencia de los datos",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:37:27"
                },
                {
                    "id": "pyJv4Dmy",
                    "code": 32056,
                    "name": "Python",
                    "proficiency": "proficient",
                    "weight": 5.0893,
                    "recommendations": 1,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "LMgm5VWy",
                    "code": 55906,
                    "name": "Java",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "xyXKQ1rj",
                    "code": 18319,
                    "name": "Javascript",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "vN8o1W2y",
                    "code": 9486,
                    "name": "GIT",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "0yz723zN",
                    "code": 59162,
                    "name": "SQL",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "AMWxQkwj",
                    "code": 5993,
                    "name": "AWS",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "RyDZ43aM",
                    "code": 23802,
                    "name": "HTML",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "qNPzQWmj",
                    "code": 32590,
                    "name": "TypeScript",
                    "proficiency": "novice",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "zNGe4AEj",
                    "code": 18318,
                    "name": "HTML5",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "gyY7QA0M",
                    "code": 4273951,
                    "name": "Ingeniero de software",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "qy0oRYJj",
                    "code": 55548,
                    "name": "Gestión de proyectos",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "KNxxVYKN",
                    "code": 54426,
                    "name": "UX",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "GNKqbJYj",
                    "code": 257805,
                    "name": "Desarrollo web",
                    "proficiency": "proficient",
                    "weight": 16.5828,
                    "recommendations": 1,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "wM7V12JN",
                    "code": 231374,
                    "name": "Programación",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "Vjw02GOy",
                    "code": 4396186,
                    "name": "Analítica de datos",
                    "proficiency": "no-experience-interested",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "9ME39mpy",
                    "code": 23826,
                    "name": "Vue.js",
                    "proficiency": "proficient",
                    "weight": 47.8375,
                    "recommendations": 3,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "nM4o1a5N",
                    "code": 29346,
                    "name": "Django",
                    "proficiency": "proficient",
                    "weight": 31.2547,
                    "recommendations": 2,
                    "media": [],
                    "supra": false,
                    "created": "2021-10-01T05:39:22"
                },
                {
                    "id": "MLzGAwry",
                    "code": 23009,
                    "name": "CSS",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T06:52:14"
                },
                {
                    "id": "yX71GnVj",
                    "code": 63253,
                    "name": "JS",
                    "proficiency": "proficient",
                    "weight": 0,
                    "recommendations": 0,
                    "media": [],
                    "supra": false,
                    "created": "2021-12-28T06:33:10"
                }
            ],
            "interests": [],
            "experiences": [
                {
                    "id": "OMvG11Oj",
                    "category": "jobs",
                    "name": "Desarrollador Web",
                    "organizations": [
                        {
                            "id": 810280,
                            "name": "Comextweb SA",
                            "publicId": "ComextwebSA1"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "February",
                    "fromYear": "2020",
                    "additionalInfo": "Javascript",
                    "highlighted": true,
                    "weight": 15.2678,
                    "verifications": 1,
                    "recommendations": 1,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                },
                {
                    "id": "XMq711py",
                    "category": "jobs",
                    "name": "Ride Operator",
                    "organizations": [
                        {
                            "id": 1019579,
                            "name": "Six Flags Magic Mountain",
                            "publicId": "SixFlagsMagicMountain"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "February",
                    "fromYear": "2019",
                    "toMonth": "May",
                    "toYear": "2019",
                    "additionalInfo": "Java",
                    "highlighted": true,
                    "weight": 0,
                    "verifications": 0,
                    "recommendations": 0,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                },
                {
                    "id": "pyJ1rroj",
                    "category": "education",
                    "name": "Ingeniería en Computación",
                    "organizations": [
                        {
                            "id": 752444,
                            "name": "Escuela Superior Politécnica del Litoral",
                            "publicId": "EscuelaSuperiorPolitCnicaDelLitoral1",
                            "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_scale,h_200,w_200/v1605978878/origin/bio/organizations/qrvphxxq8qqbsctcp2yw.png"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "August",
                    "fromYear": "2015",
                    "toMonth": "September",
                    "toYear": "2021",
                    "remote": false,
                    "additionalInfo": "",
                    "highlighted": true,
                    "weight": 128.2447,
                    "verifications": 2,
                    "recommendations": 2,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                }
            ],
            "awards": [],
            "jobs": [
                {
                    "id": "OMvG11Oj",
                    "category": "jobs",
                    "name": "Desarrollador Web",
                    "organizations": [
                        {
                            "id": 810280,
                            "name": "Comextweb SA",
                            "publicId": "ComextwebSA1"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "February",
                    "fromYear": "2020",
                    "additionalInfo": "Javascript",
                    "highlighted": true,
                    "weight": 15.2678,
                    "verifications": 1,
                    "recommendations": 1,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                },
                {
                    "id": "XMq711py",
                    "category": "jobs",
                    "name": "Ride Operator",
                    "organizations": [
                        {
                            "id": 1019579,
                            "name": "Six Flags Magic Mountain",
                            "publicId": "SixFlagsMagicMountain"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "February",
                    "fromYear": "2019",
                    "toMonth": "May",
                    "toYear": "2019",
                    "additionalInfo": "Java",
                    "highlighted": true,
                    "weight": 0,
                    "verifications": 0,
                    "recommendations": 0,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                }
            ],
            "projects": [],
            "publications": [],
            "education": [
                {
                    "id": "pyJ1rroj",
                    "category": "education",
                    "name": "Ingeniería en Computación",
                    "organizations": [
                        {
                            "id": 752444,
                            "name": "Escuela Superior Politécnica del Litoral",
                            "publicId": "EscuelaSuperiorPolitCnicaDelLitoral1",
                            "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/c_scale,h_200,w_200/v1605978878/origin/bio/organizations/qrvphxxq8qqbsctcp2yw.png"
                        }
                    ],
                    "responsibilities": [],
                    "fromMonth": "August",
                    "fromYear": "2015",
                    "toMonth": "September",
                    "toYear": "2021",
                    "remote": false,
                    "additionalInfo": "",
                    "highlighted": true,
                    "weight": 128.2447,
                    "verifications": 2,
                    "recommendations": 2,
                    "media": [],
                    "rank": 1,
                    "strengths": []
                }
            ],
            "opportunities": [
                {
                    "id": "yYmgwWDy",
                    "interest": "jobs-full-time",
                    "field": "private",
                    "data": false
                },
                {
                    "id": "y0ZDnewM",
                    "interest": "gigs",
                    "field": "active",
                    "data": true
                },
                {
                    "id": "NxbB4WWj",
                    "interest": "gigs",
                    "field": "private",
                    "data": false
                },
                {
                    "id": "NKzKra4y",
                    "interest": "internships",
                    "field": "active",
                    "data": true
                },
                {
                    "id": "M7qx8XVy",
                    "interest": "internships",
                    "field": "private",
                    "data": false
                },
                {
                    "id": "jw7kXzmj",
                    "interest": "hiring",
                    "field": "active",
                    "data": false
                },
                {
                    "id": "M7qx8AVy",
                    "interest": "internships",
                    "field": "desirable-compensation-currency",
                    "data": "USD$"
                },
                {
                    "id": "jw7kXAmj",
                    "interest": "internships",
                    "field": "desirable-compensation-periodicity",
                    "data": "yearly"
                },
                {
                    "id": "ME27D0Rj",
                    "interest": "internships",
                    "field": "desirable-compensation-amount",
                    "data": 10000
                },
                {
                    "id": "M47OG36N",
                    "interest": "internships",
                    "field": "desirable-compensation-publicly-visible",
                    "data": true
                },
                {
                    "id": "yQY3Gady",
                    "interest": "jobs",
                    "field": "desirable-compensation-currency",
                    "data": "USD$"
                },
                {
                    "id": "M2mkGrAN",
                    "interest": "jobs",
                    "field": "desirable-compensation-periodicity",
                    "data": "yearly"
                },
                {
                    "id": "j66OKezj",
                    "interest": "jobs",
                    "field": "desirable-compensation-amount",
                    "data": 12000
                },
                {
                    "id": "MLp0BQAM",
                    "interest": "jobs",
                    "field": "desirable-compensation-publicly-visible",
                    "data": true
                },
                {
                    "id": "y5OD9mAM",
                    "interest": "gigs",
                    "field": "desirable-compensation-currency",
                    "data": "USD$"
                },
                {
                    "id": "NalraROy",
                    "interest": "gigs",
                    "field": "desirable-compensation-periodicity",
                    "data": "hourly"
                },
                {
                    "id": "jr7J6RWy",
                    "interest": "gigs",
                    "field": "desirable-compensation-amount",
                    "data": 12
                },
                {
                    "id": "ybqo8a1j",
                    "interest": "gigs",
                    "field": "desirable-compensation-publicly-visible",
                    "data": true
                },
                {
                    "id": "jAmGzKqj",
                    "interest": "jobs-full-time",
                    "field": "active",
                    "data": true
                },
                {
                    "id": "MRAo4A5N",
                    "interest": "advising",
                    "field": "active",
                    "data": true
                }
            ],
            "languages": [
                {
                    "code": "es",
                    "language": "Spanish",
                    "fluency": "fully-fluent"
                },
                {
                    "code": "en",
                    "language": "English",
                    "fluency": "fully-fluent"
                }
            ],
            "personalityTraitsResults": {
                "groups": [
                    {
                        "id": "extraversion",
                        "order": 0,
                        "median": 3.5,
                        "stddev": 0.57
                    },
                    {
                        "id": "openness-to-experience",
                        "order": 1,
                        "median": 3.41,
                        "stddev": 0.6
                    },
                    {
                        "id": "conscientiousness",
                        "order": 2,
                        "median": 3.44,
                        "stddev": 0.56
                    },
                    {
                        "id": "agreeableness",
                        "order": 3,
                        "median": 2.94,
                        "stddev": 0.58
                    },
                    {
                        "id": "honesty-humility",
                        "order": 4,
                        "median": 3.19,
                        "stddev": 0.62
                    },
                    {
                        "id": "emotionality",
                        "order": 5,
                        "median": 3.43,
                        "stddev": 0.62
                    }
                ],
                "analyses": [
                    {
                        "groupId": "openness-to-experience",
                        "analysis": 3.63
                    },
                    {
                        "groupId": "honesty-humility",
                        "analysis": 3.81
                    },
                    {
                        "groupId": "agreeableness",
                        "analysis": 3.63
                    },
                    {
                        "groupId": "altruism",
                        "analysis": 4.5
                    },
                    {
                        "groupId": "conscientiousness",
                        "analysis": 4.31
                    },
                    {
                        "groupId": "emotionality",
                        "analysis": 3.31
                    },
                    {
                        "groupId": "extraversion",
                        "analysis": 3.25
                    }
                ]
            },
            "professionalCultureGenomeResults": {
                "groups": [
                    {
                        "id": "3",
                        "nativeOrder": 3,
                        "text": {
                            "common": "Adaptable"
                        },
                        "answer": "4",
                        "order": 0,
                        "median": 3.53455274,
                        "stddev": 0.6204672813
                    },
                    {
                        "id": "9",
                        "nativeOrder": 9,
                        "text": {
                            "common": "Competitive"
                        },
                        "answer": "4",
                        "order": 1,
                        "median": 2.983387237,
                        "stddev": 0.9488376744
                    },
                    {
                        "id": "13",
                        "nativeOrder": 13,
                        "text": {
                            "common": "Fair"
                        },
                        "answer": "4",
                        "order": 2,
                        "median": 3.61264673,
                        "stddev": 0.6273839106
                    },
                    {
                        "id": "14",
                        "nativeOrder": 14,
                        "text": {
                            "common": "Honest"
                        },
                        "answer": "4",
                        "order": 3,
                        "median": 3.849761837,
                        "stddev": 0.3852109863
                    },
                    {
                        "id": "15",
                        "nativeOrder": 15,
                        "text": {
                            "common": "Innovative"
                        },
                        "answer": "4",
                        "order": 4,
                        "median": 3.391966471,
                        "stddev": 0.7194864422
                    },
                    {
                        "id": "23",
                        "nativeOrder": 51,
                        "text": {
                            "common": "Supportive"
                        },
                        "answer": "4",
                        "order": 5,
                        "median": 3.521348496,
                        "stddev": 0.6202686763
                    },
                    {
                        "id": "25",
                        "nativeOrder": 24,
                        "text": {
                            "common": "Tolerant"
                        },
                        "answer": "4",
                        "order": 6,
                        "median": 3.429954405,
                        "stddev": 0.6756940264
                    },
                    {
                        "id": "26",
                        "nativeOrder": 25,
                        "text": {
                            "common": "Willing to experiment"
                        },
                        "answer": "4",
                        "order": 7,
                        "median": 3.336304234,
                        "stddev": 0.7469585025
                    },
                    {
                        "id": "27",
                        "nativeOrder": 26,
                        "text": {
                            "common": "Conflict-resolution-oriented"
                        },
                        "answer": "4",
                        "order": 8,
                        "median": 3.101074538,
                        "stddev": 0.9032905675
                    },
                    {
                        "id": "28",
                        "nativeOrder": 27,
                        "text": {
                            "common": "Cooperative"
                        },
                        "answer": "4",
                        "order": 9,
                        "median": 3.637398991,
                        "stddev": 0.5441371579
                    },
                    {
                        "id": "30",
                        "nativeOrder": 29,
                        "text": {
                            "common": "Quality-driven"
                        },
                        "answer": "4",
                        "order": 10,
                        "median": 3.622124519,
                        "stddev": 0.5685579656
                    },
                    {
                        "id": "33",
                        "nativeOrder": 30,
                        "text": {
                            "common": "Highly ethical"
                        },
                        "answer": "4",
                        "order": 11,
                        "median": 3.627091571,
                        "stddev": 0.6464404497
                    },
                    {
                        "id": "38",
                        "nativeOrder": 35,
                        "text": {
                            "common": "Able to learn from mistakes"
                        },
                        "answer": "4",
                        "order": 12,
                        "median": 3.685785863,
                        "stddev": 0.5356724665
                    },
                    {
                        "id": "39",
                        "nativeOrder": 36,
                        "text": {
                            "common": "Listening to customers"
                        },
                        "answer": "4",
                        "order": 13,
                        "median": 3.684881005,
                        "stddev": 0.5685013891
                    },
                    {
                        "id": "44",
                        "nativeOrder": 40,
                        "text": {
                            "common": "Focused towards organizational goals over unit's goals"
                        },
                        "answer": "4",
                        "order": 14,
                        "median": 2.817963301,
                        "stddev": 0.9484849627
                    },
                    {
                        "id": "45",
                        "nativeOrder": 41,
                        "text": {
                            "common": "Respectful"
                        },
                        "answer": "4",
                        "order": 15,
                        "median": 3.862969241,
                        "stddev": 0.3800380304
                    },
                    {
                        "id": "48",
                        "nativeOrder": 44,
                        "text": {
                            "common": "Open with information"
                        },
                        "answer": "4",
                        "order": 16,
                        "median": 2.204781432,
                        "stddev": 1.247555541
                    },
                    {
                        "id": "49",
                        "nativeOrder": 45,
                        "text": {
                            "common": "Stable"
                        },
                        "answer": "4",
                        "order": 17,
                        "median": 3.373058016,
                        "stddev": 0.7308361333
                    },
                    {
                        "id": "54",
                        "nativeOrder": 50,
                        "text": {
                            "common": "Team player"
                        },
                        "answer": "4",
                        "order": 18,
                        "median": 3.504892548,
                        "stddev": 0.6398516423
                    },
                    {
                        "id": "1",
                        "nativeOrder": 1,
                        "text": {
                            "common": "Achievement-oriented"
                        },
                        "answer": "3",
                        "order": 19,
                        "median": 3.307087211,
                        "stddev": 0.7408654995
                    },
                    {
                        "id": "7",
                        "nativeOrder": 7,
                        "text": {
                            "common": "Calm"
                        },
                        "answer": "3",
                        "order": 20,
                        "median": 3.220002337,
                        "stddev": 0.7320363351
                    },
                    {
                        "id": "8",
                        "nativeOrder": 8,
                        "text": {
                            "common": "Careful"
                        },
                        "answer": "3",
                        "order": 21,
                        "median": 3.297779509,
                        "stddev": 0.721817971
                    },
                    {
                        "id": "10",
                        "nativeOrder": 10,
                        "text": {
                            "common": "Customer-oriented"
                        },
                        "answer": "3",
                        "order": 22,
                        "median": 3.426673945,
                        "stddev": 0.7629528583
                    },
                    {
                        "id": "17",
                        "nativeOrder": 17,
                        "text": {
                            "common": "People-oriented"
                        },
                        "answer": "3",
                        "order": 23,
                        "median": 3.323092158,
                        "stddev": 0.7719721827
                    },
                    {
                        "id": "18",
                        "nativeOrder": 18,
                        "text": {
                            "common": "Precise"
                        },
                        "answer": "3",
                        "order": 24,
                        "median": 3.202731585,
                        "stddev": 0.7136453554
                    },
                    {
                        "id": "21",
                        "nativeOrder": 21,
                        "text": {
                            "common": "Results-oriented"
                        },
                        "answer": "3",
                        "order": 25,
                        "median": 3.402746414,
                        "stddev": 0.6924228714
                    },
                    {
                        "id": "24",
                        "nativeOrder": 23,
                        "text": {
                            "common": "Team-oriented"
                        },
                        "answer": "3",
                        "order": 26,
                        "median": 3.515253662,
                        "stddev": 0.6403773213
                    },
                    {
                        "id": "29",
                        "nativeOrder": 28,
                        "text": {
                            "common": "Focused on professional growth"
                        },
                        "answer": "3",
                        "order": 27,
                        "median": 3.640229705,
                        "stddev": 0.5835093756
                    },
                    {
                        "id": "31",
                        "nativeOrder": 52,
                        "text": {
                            "common": "Fast-moving"
                        },
                        "answer": "3",
                        "order": 28,
                        "median": 3.078259813,
                        "stddev": 0.7687488044
                    },
                    {
                        "id": "32",
                        "nativeOrder": 53,
                        "text": {
                            "common": "Hard-driving"
                        },
                        "answer": "3",
                        "order": 29,
                        "median": 2.843729747,
                        "stddev": 1.108178542
                    },
                    {
                        "id": "34",
                        "nativeOrder": 31,
                        "text": {
                            "common": "Highly expectant for performance"
                        },
                        "answer": "3",
                        "order": 30,
                        "median": 3.490903614,
                        "stddev": 0.6463617196
                    },
                    {
                        "id": "35",
                        "nativeOrder": 32,
                        "text": {
                            "common": "Integrity-driven"
                        },
                        "answer": "3",
                        "order": 31,
                        "median": 3.754173109,
                        "stddev": 0.4849079849
                    },
                    {
                        "id": "37",
                        "nativeOrder": 34,
                        "text": {
                            "common": "Transparent with individual goals"
                        },
                        "answer": "3",
                        "order": 32,
                        "median": 3.090594345,
                        "stddev": 0.9397403977
                    },
                    {
                        "id": "41",
                        "nativeOrder": 37,
                        "text": {
                            "common": "Unhindered by many rules"
                        },
                        "answer": "3",
                        "order": 33,
                        "median": 2.395910707,
                        "stddev": 1.044083104
                    },
                    {
                        "id": "42",
                        "nativeOrder": 38,
                        "text": {
                            "common": "Detail-oriented"
                        },
                        "answer": "3",
                        "order": 34,
                        "median": 3.530555446,
                        "stddev": 0.6241323568
                    },
                    {
                        "id": "47",
                        "nativeOrder": 43,
                        "text": {
                            "common": "Driven by security of employment"
                        },
                        "answer": "3",
                        "order": 35,
                        "median": 3.169801154,
                        "stddev": 0.8803406124
                    },
                    {
                        "id": "50",
                        "nativeOrder": 46,
                        "text": {
                            "common": "Ready to claim responsibility"
                        },
                        "answer": "3",
                        "order": 36,
                        "median": 3.385036017,
                        "stddev": 0.729758287
                    },
                    {
                        "id": "53",
                        "nativeOrder": 49,
                        "text": {
                            "common": "Oriented towards acquiring knowledge over acquiring connections"
                        },
                        "answer": "3",
                        "order": 37,
                        "median": 2.07754721,
                        "stddev": 1.153373214
                    },
                    {
                        "id": "2",
                        "nativeOrder": 2,
                        "text": {
                            "common": "Action-oriented"
                        },
                        "answer": "2",
                        "order": 38,
                        "median": 3.182707783,
                        "stddev": 0.7414651075
                    },
                    {
                        "id": "4",
                        "nativeOrder": 4,
                        "text": {
                            "common": "Avoiding conflict"
                        },
                        "answer": "2",
                        "order": 39,
                        "median": 3.184795276,
                        "stddev": 0.8784443312
                    },
                    {
                        "id": "6",
                        "nativeOrder": 6,
                        "text": {
                            "common": "Analytical"
                        },
                        "answer": "2",
                        "order": 40,
                        "median": 3.390055005,
                        "stddev": 0.6916525511
                    },
                    {
                        "id": "11",
                        "nativeOrder": 11,
                        "text": {
                            "common": "Decisive"
                        },
                        "answer": "2",
                        "order": 41,
                        "median": 3.280022884,
                        "stddev": 0.7333204925
                    },
                    {
                        "id": "16",
                        "nativeOrder": 16,
                        "text": {
                            "common": "Market-driven"
                        },
                        "answer": "2",
                        "order": 42,
                        "median": 2.704610857,
                        "stddev": 0.9381360182
                    },
                    {
                        "id": "19",
                        "nativeOrder": 19,
                        "text": {
                            "common": "Quick to take advantage of opportunities"
                        },
                        "answer": "2",
                        "order": 43,
                        "median": 3.155788266,
                        "stddev": 0.7910802406
                    },
                    {
                        "id": "20",
                        "nativeOrder": 20,
                        "text": {
                            "common": "Reflective"
                        },
                        "answer": "2",
                        "order": 44,
                        "median": 3.200198307,
                        "stddev": 0.7582734099
                    },
                    {
                        "id": "22",
                        "nativeOrder": 22,
                        "text": {
                            "common": "Rule-oriented"
                        },
                        "answer": "2",
                        "order": 45,
                        "median": 3.119940441,
                        "stddev": 0.8511788641
                    },
                    {
                        "id": "40",
                        "nativeOrder": 54,
                        "text": {
                            "common": "Oriented towards making their numbers"
                        },
                        "answer": "2",
                        "order": 46,
                        "median": 3.194500771,
                        "stddev": 0.8527745846
                    },
                    {
                        "id": "43",
                        "nativeOrder": 39,
                        "text": {
                            "common": "Predictable"
                        },
                        "answer": "2",
                        "order": 47,
                        "median": 2.931484545,
                        "stddev": 0.8854629428
                    },
                    {
                        "id": "46",
                        "nativeOrder": 42,
                        "text": {
                            "common": "Risk-taker"
                        },
                        "answer": "2",
                        "order": 48,
                        "median": 2.843108659,
                        "stddev": 0.8711670703
                    },
                    {
                        "id": "51",
                        "nativeOrder": 47,
                        "text": {
                            "common": "Ready to take initiative"
                        },
                        "answer": "2",
                        "order": 49,
                        "median": 3.303996319,
                        "stddev": 0.7403525539
                    },
                    {
                        "id": "12",
                        "nativeOrder": 12,
                        "text": {
                            "common": "Easygoing"
                        },
                        "answer": "1",
                        "order": 50,
                        "median": 3.418765284,
                        "stddev": 0.7478766839
                    },
                    {
                        "id": "36",
                        "nativeOrder": 33,
                        "text": {
                            "common": "Confrontational"
                        },
                        "answer": "1",
                        "order": 51,
                        "median": 0.8046163721,
                        "stddev": 0.9958574145
                    },
                    {
                        "id": "52",
                        "nativeOrder": 48,
                        "text": {
                            "common": "Urgent"
                        },
                        "answer": "1",
                        "order": 52,
                        "median": 2.606840978,
                        "stddev": 0.9817675335
                    },
                    {
                        "id": "5",
                        "nativeOrder": 5,
                        "text": {
                            "common": "Aggressive"
                        },
                        "answer": "0",
                        "order": 53,
                        "median": 0.8133620243,
                        "stddev": 0.8965000891
                    }
                ],
                "analyses": [
                    {
                        "groupId": "3",
                        "analysis": 4
                    },
                    {
                        "groupId": "9",
                        "analysis": 4
                    },
                    {
                        "groupId": "13",
                        "analysis": 4
                    },
                    {
                        "groupId": "14",
                        "analysis": 4
                    },
                    {
                        "groupId": "15",
                        "analysis": 4
                    },
                    {
                        "groupId": "23",
                        "analysis": 4
                    },
                    {
                        "groupId": "25",
                        "analysis": 4
                    },
                    {
                        "groupId": "26",
                        "analysis": 4
                    },
                    {
                        "groupId": "27",
                        "analysis": 4
                    },
                    {
                        "groupId": "28",
                        "analysis": 4
                    },
                    {
                        "groupId": "30",
                        "analysis": 4
                    },
                    {
                        "groupId": "33",
                        "analysis": 4
                    },
                    {
                        "groupId": "38",
                        "analysis": 4
                    },
                    {
                        "groupId": "39",
                        "analysis": 4
                    },
                    {
                        "groupId": "44",
                        "analysis": 4
                    },
                    {
                        "groupId": "45",
                        "analysis": 4
                    },
                    {
                        "groupId": "48",
                        "analysis": 4
                    },
                    {
                        "groupId": "49",
                        "analysis": 4
                    },
                    {
                        "groupId": "54",
                        "analysis": 4
                    },
                    {
                        "groupId": "1",
                        "analysis": 3
                    },
                    {
                        "groupId": "7",
                        "analysis": 3
                    },
                    {
                        "groupId": "8",
                        "analysis": 3
                    },
                    {
                        "groupId": "10",
                        "analysis": 3
                    },
                    {
                        "groupId": "17",
                        "analysis": 3
                    },
                    {
                        "groupId": "18",
                        "analysis": 3
                    },
                    {
                        "groupId": "21",
                        "analysis": 3
                    },
                    {
                        "groupId": "24",
                        "analysis": 3
                    },
                    {
                        "groupId": "29",
                        "analysis": 3
                    },
                    {
                        "groupId": "31",
                        "analysis": 3
                    },
                    {
                        "groupId": "32",
                        "analysis": 3
                    },
                    {
                        "groupId": "34",
                        "analysis": 3
                    },
                    {
                        "groupId": "35",
                        "analysis": 3
                    },
                    {
                        "groupId": "37",
                        "analysis": 3
                    },
                    {
                        "groupId": "41",
                        "analysis": 3
                    },
                    {
                        "groupId": "42",
                        "analysis": 3
                    },
                    {
                        "groupId": "47",
                        "analysis": 3
                    },
                    {
                        "groupId": "50",
                        "analysis": 3
                    },
                    {
                        "groupId": "53",
                        "analysis": 3
                    },
                    {
                        "groupId": "2",
                        "analysis": 2
                    },
                    {
                        "groupId": "4",
                        "analysis": 2
                    },
                    {
                        "groupId": "6",
                        "analysis": 2
                    },
                    {
                        "groupId": "11",
                        "analysis": 2
                    },
                    {
                        "groupId": "16",
                        "analysis": 2
                    },
                    {
                        "groupId": "19",
                        "analysis": 2
                    },
                    {
                        "groupId": "20",
                        "analysis": 2
                    },
                    {
                        "groupId": "22",
                        "analysis": 2
                    },
                    {
                        "groupId": "40",
                        "analysis": 2
                    },
                    {
                        "groupId": "43",
                        "analysis": 2
                    },
                    {
                        "groupId": "46",
                        "analysis": 2
                    },
                    {
                        "groupId": "51",
                        "analysis": 2
                    },
                    {
                        "groupId": "12",
                        "analysis": 1
                    },
                    {
                        "groupId": "36",
                        "analysis": 1
                    },
                    {
                        "groupId": "52",
                        "analysis": 1
                    },
                    {
                        "groupId": "5",
                        "analysis": 0
                    }
                ]
            }
        }
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
