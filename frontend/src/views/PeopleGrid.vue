<template>
    <div class="people-grid-container">
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
        this.people = {
            "total": 1110936,
            "size": 10,
            "results": [
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 1.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 211.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.92706
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 25923.247
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "employee": {
                            "amount": 100000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 52.083333333333336,
                            "periodicity": "yearly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Napa, California, United States",
                    "name": "Alexander Torrenegra",
                    "openTo": [
                        "hiring",
                        "full-time-employment",
                        "mentoring"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_bd307a3ec329e10a2cff8fb87480823da114f8f4.jpg",
                    "professionalHeadline": "CEO of Torre. Focused on making work fulfilling for everyone. Founder of Tribe, Bunny Studio, Voice123, and Emma. Author of Remoter.",
                    "theme": "cyan500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Leadership",
                            "weight": 540.2454
                        },
                        {
                            "name": "Algorithm management",
                            "weight": 0.0
                        },
                        {
                            "name": "Mentoring",
                            "weight": 170.0
                        },
                        {
                            "name": "Product development",
                            "weight": 42.5377
                        },
                        {
                            "name": "Hospitality",
                            "weight": 85.1132
                        },
                        {
                            "name": "Remote work",
                            "weight": 0.0
                        },
                        {
                            "name": "Experience design",
                            "weight": 79.0669
                        },
                        {
                            "name": "Product design",
                            "weight": 0.0
                        },
                        {
                            "name": "Creativity",
                            "weight": 170.0
                        },
                        {
                            "name": "Strategy",
                            "weight": 85.0377
                        },
                        {
                            "name": "Democracy",
                            "weight": 3198.2498
                        },
                        {
                            "name": "Voiceovers",
                            "weight": 130.7034
                        },
                        {
                            "name": "Outsourcing",
                            "weight": 0.0
                        },
                        {
                            "name": "Web Development",
                            "weight": 0.0
                        },
                        {
                            "name": "Video communications",
                            "weight": 0.0
                        },
                        {
                            "name": "Travel",
                            "weight": 0.0
                        },
                        {
                            "name": "Behavioral design",
                            "weight": 1491.3745
                        },
                        {
                            "name": "User experience design",
                            "weight": 47.2498
                        },
                        {
                            "name": "Liderazgo",
                            "weight": 0.0
                        },
                        {
                            "name": "Product management",
                            "weight": 1402.9828
                        },
                        {
                            "name": "Leadership development",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing",
                            "weight": 257.7579
                        },
                        {
                            "name": "Entrepreneurship",
                            "weight": 4449.5438
                        },
                        {
                            "name": "Investing",
                            "weight": 0.0
                        },
                        {
                            "name": "Innovation",
                            "weight": 4297.4615
                        },
                        {
                            "name": "Innovation management",
                            "weight": 0.0
                        }
                    ],
                    "subjectId": "13",
                    "username": "torrenegra",
                    "verified": true,
                    "weight": 25923.247,
                    "ggId": "13"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 2.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 286.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 0.8125
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 105.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.9646
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 2.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 17850.0
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 90000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 46.875,
                            "periodicity": "yearly",
                            "privacy": "public"
                        },
                        "intern": {
                            "amount": 90000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 90000.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 80000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 41.666666666666664,
                            "periodicity": "yearly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Bogotá, Colombia",
                    "name": "Carlos Alfredo Carvajal Guerrero",
                    "openTo": [
                        "flexible-jobs",
                        "internships",
                        "full-time-employment",
                        "mentoring"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_85047d8b01a5194d9c44f267a99a025f5e852312.jpg",
                    "professionalHeadline": "Managing Director, Technology Consultant, Senior Service Delivery Manager,  Project & Program Manager, Business Development Management",
                    "theme": "lightGreen500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Analytical Thinking",
                            "weight": 283.3333
                        },
                        {
                            "name": "Team Leadership",
                            "weight": 0.0
                        },
                        {
                            "name": "Team management",
                            "weight": 1841.6667
                        },
                        {
                            "name": "Customer Service",
                            "weight": 425.0
                        },
                        {
                            "name": "Customer Support",
                            "weight": 0.0
                        },
                        {
                            "name": "Software Development",
                            "weight": 0.0
                        },
                        {
                            "name": "Logistics Knowledge",
                            "weight": 283.3333
                        },
                        {
                            "name": "Active Listening",
                            "weight": 283.3333
                        },
                        {
                            "name": "Communications",
                            "weight": 0.0
                        },
                        {
                            "name": "Creativity",
                            "weight": 708.3333
                        },
                        {
                            "name": "Resilience",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 850.0
                        },
                        {
                            "name": "Adaptability",
                            "weight": 708.3333
                        },
                        {
                            "name": "Result Oriented",
                            "weight": 566.6667
                        },
                        {
                            "name": "Teamwork",
                            "weight": 566.6667
                        },
                        {
                            "name": "Software Development Methodologies",
                            "weight": 0.0
                        },
                        {
                            "name": "Committed",
                            "weight": 283.3333
                        },
                        {
                            "name": "Commited",
                            "weight": 850.0
                        },
                        {
                            "name": "Methodical",
                            "weight": 425.0
                        },
                        {
                            "name": "Analysis",
                            "weight": 283.3333
                        },
                        {
                            "name": "Management",
                            "weight": 283.3333
                        },
                        {
                            "name": "Programming",
                            "weight": 0.0
                        },
                        {
                            "name": "Adaptable",
                            "weight": 283.3333
                        },
                        {
                            "name": "Solutions Oriented",
                            "weight": 283.3333
                        },
                        {
                            "name": "Strategic Thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "Innovation",
                            "weight": 566.6667
                        },
                        {
                            "name": "Client Oriented",
                            "weight": 283.3333
                        },
                        {
                            "name": "Anlaysis",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 0.0
                        },
                        {
                            "name": "Project Management",
                            "weight": 283.3333
                        },
                        {
                            "name": "Commitment",
                            "weight": 283.3333
                        },
                        {
                            "name": "Attention to detail",
                            "weight": 0.0
                        },
                        {
                            "name": "Collaboration",
                            "weight": 283.3333
                        },
                        {
                            "name": "Quality management",
                            "weight": 0.0
                        },
                        {
                            "name": "Teamwor",
                            "weight": 283.3333
                        },
                        {
                            "name": "Results Oriented",
                            "weight": 708.3333
                        },
                        {
                            "name": "Efficiency",
                            "weight": 425.0
                        },
                        {
                            "name": "Solutions oriented",
                            "weight": 0.0
                        },
                        {
                            "name": "Javascript",
                            "weight": 0.0
                        },
                        {
                            "name": "Interpersonal Skills",
                            "weight": 283.3333
                        },
                        {
                            "name": "Software Development Estimation Software",
                            "weight": 0.0
                        },
                        {
                            "name": "Resourceful",
                            "weight": 0.0
                        }
                    ],
                    "subjectId": "33195",
                    "username": "carloscarvajal12",
                    "verified": true,
                    "weight": 17850.0,
                    "ggId": "33195"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 3.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 190.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.93606
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 4.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 10397.9512
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {},
                    "locationName": "Cajicá, Cundinamarca, Colombia",
                    "name": "Daniela Avila Gomez",
                    "openTo": [
                        "hiring"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_c8c06cfae2f59de7d444d46f0681e0845c5fcd68.jpg",
                    "professionalHeadline": "Co-founder and Head of Product Design at Torre",
                    "theme": "pink300",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Adaptable",
                            "weight": 0.0
                        },
                        {
                            "name": "Art Director",
                            "weight": 2.2874
                        },
                        {
                            "name": "Project Management",
                            "weight": 33.8672
                        },
                        {
                            "name": "Adaptability",
                            "weight": 63.75
                        },
                        {
                            "name": "Innovation",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 380.1058
                        },
                        {
                            "name": "Responsible",
                            "weight": 99.4965
                        },
                        {
                            "name": "Visual design",
                            "weight": 4.0164
                        },
                        {
                            "name": "UX research",
                            "weight": 2817.2207
                        },
                        {
                            "name": "Team work",
                            "weight": 6.3038
                        },
                        {
                            "name": "Strategic Thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "UX design",
                            "weight": 0.0
                        },
                        {
                            "name": "Problem solving",
                            "weight": 1754.9891
                        },
                        {
                            "name": "Google Suite",
                            "weight": 0.0
                        },
                        {
                            "name": "Product design",
                            "weight": 306.99
                        },
                        {
                            "name": "Art Direction",
                            "weight": 1502.895
                        },
                        {
                            "name": "Set Design",
                            "weight": 981.9198
                        },
                        {
                            "name": "Communication",
                            "weight": 175.1714
                        },
                        {
                            "name": "Product management",
                            "weight": 59.0801
                        },
                        {
                            "name": "Multitasking",
                            "weight": 782.6054
                        },
                        {
                            "name": "User research",
                            "weight": 18.0517
                        },
                        {
                            "name": "Costume Design",
                            "weight": 0.0
                        },
                        {
                            "name": "UI design",
                            "weight": 0.0
                        },
                        {
                            "name": "Adobe Illustrator",
                            "weight": 0.0
                        },
                        {
                            "name": "Recursive",
                            "weight": 99.3897
                        },
                        {
                            "name": "Product design",
                            "weight": 770.3234
                        },
                        {
                            "name": "Research",
                            "weight": 0.0
                        },
                        {
                            "name": "Planning",
                            "weight": 0.0
                        },
                        {
                            "name": "Audiovisual",
                            "weight": 303.8648
                        },
                        {
                            "name": "Creativity",
                            "weight": 235.623
                        },
                        {
                            "name": "UX",
                            "weight": 0.0
                        }
                    ],
                    "subjectId": "554",
                    "username": "danielaavila",
                    "verified": true,
                    "weight": 10397.9512,
                    "ggId": "554"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 4.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 294.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.66418
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 6.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 9774.4632
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 10.0,
                            "currency": "USD$",
                            "minHourlyUSD": 10.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "intern": {
                            "amount": 10.0,
                            "currency": "USD$",
                            "minHourlyUSD": 10.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 1780.0,
                            "currency": "USD$",
                            "minHourlyUSD": 11.125,
                            "periodicity": "monthly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Bogota D.C., Colombia",
                    "name": "David Esteban Ocampo Arguello",
                    "openTo": [
                        "flexible-jobs",
                        "internships",
                        "full-time-employment",
                        "mentoring"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_d614ccefeeb6a0c5e0c2c658f185cf66a0ca097f.jpg",
                    "professionalHeadline": "Publicidad y Mercadeo",
                    "theme": "teal400",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Negotiations",
                            "weight": 283.3333
                        },
                        {
                            "name": "Product management",
                            "weight": 0.0
                        },
                        {
                            "name": "Comunicaciones",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategic Thinking",
                            "weight": 850.0
                        },
                        {
                            "name": "SEO",
                            "weight": 0.0
                        },
                        {
                            "name": "Cadena de responsabilidad",
                            "weight": 0.0
                        },
                        {
                            "name": "Planner",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Service",
                            "weight": 283.3333
                        },
                        {
                            "name": "Resilience",
                            "weight": 0.0
                        },
                        {
                            "name": "Media",
                            "weight": 566.6667
                        },
                        {
                            "name": "Redes sociales",
                            "weight": 0.0
                        },
                        {
                            "name": "Publicidad",
                            "weight": 0.0
                        },
                        {
                            "name": "Creativo",
                            "weight": 0.0
                        },
                        {
                            "name": "Efficiency",
                            "weight": 850.0
                        },
                        {
                            "name": "Agile methodologies",
                            "weight": 0.0
                        },
                        {
                            "name": "Adaptability",
                            "weight": 0.0
                        },
                        {
                            "name": "Redacción",
                            "weight": 0.0
                        },
                        {
                            "name": "Investigar",
                            "weight": 0.0
                        },
                        {
                            "name": "Palabras Claves",
                            "weight": 0.0
                        },
                        {
                            "name": "Liderazgo",
                            "weight": 283.3333
                        },
                        {
                            "name": "Impacto 360",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing digital",
                            "weight": 0.0
                        },
                        {
                            "name": "NEGOCIACIONES GRANDES ANUNCIANTES - PLANEACION DE MEDIOS - INVENTARIOS - SERVICIO AL CLIENTE - RELACIONES COMERCIALES",
                            "weight": 1133.3333
                        },
                        {
                            "name": "Copywriting",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 283.3333
                        },
                        {
                            "name": "Negociaciones",
                            "weight": 1345.5649
                        },
                        {
                            "name": "Servicio al cliente",
                            "weight": 1983.3333
                        },
                        {
                            "name": "ATL",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategic Planning",
                            "weight": 1062.2316
                        }
                    ],
                    "subjectId": "43227",
                    "username": "davidoa12",
                    "verified": true,
                    "weight": 9774.4632,
                    "ggId": "43227"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 5.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 79.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.97163
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 15.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 7030.8732
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 20.0,
                            "currency": "USD$",
                            "minHourlyUSD": 20.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 2500.0,
                            "currency": "USD$",
                            "minHourlyUSD": 15.625,
                            "periodicity": "monthly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "California, United States",
                    "name": "Mauricio Zabala",
                    "openTo": [
                        "hiring",
                        "full-time-employment",
                        "networking"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_1de998cce8a3d5c1cb85b479876384234598b77e.jpg",
                    "professionalHeadline": "Business Development Manager",
                    "theme": "lime500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Strategic Thinking",
                            "weight": 1224.0061
                        },
                        {
                            "name": "Written Communication",
                            "weight": 151.9697
                        },
                        {
                            "name": "Customer Relationship Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Problem solving - quantitative",
                            "weight": 0.0
                        },
                        {
                            "name": "Accounting",
                            "weight": 151.9697
                        },
                        {
                            "name": "Business Development",
                            "weight": 0.0
                        },
                        {
                            "name": "Entrepreneurship",
                            "weight": 0.0
                        },
                        {
                            "name": "Excel",
                            "weight": 100.4568
                        },
                        {
                            "name": "Stakeholder Relationship Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales",
                            "weight": 2191.6103
                        },
                        {
                            "name": "Sales operations",
                            "weight": 0.0
                        },
                        {
                            "name": "Funnel optimization",
                            "weight": 0.0
                        },
                        {
                            "name": "Problem solving",
                            "weight": 0.0
                        },
                        {
                            "name": "CRM",
                            "weight": 0.0
                        },
                        {
                            "name": "System Dynamics",
                            "weight": 0.0
                        },
                        {
                            "name": "Venture capital",
                            "weight": 0.0
                        },
                        {
                            "name": "Optimization",
                            "weight": 92.5996
                        },
                        {
                            "name": "Partner Relationship Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Problem resolution",
                            "weight": 0.0
                        },
                        {
                            "name": "Analytical thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 875.0047
                        },
                        {
                            "name": "Relationship development",
                            "weight": 0.0
                        },
                        {
                            "name": "Consulting",
                            "weight": 0.0
                        },
                        {
                            "name": "Data Entry",
                            "weight": 0.0
                        },
                        {
                            "name": "Data analysis",
                            "weight": 0.0
                        },
                        {
                            "name": "Finance",
                            "weight": 151.9697
                        },
                        {
                            "name": "Negotiation",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales management",
                            "weight": 0.0
                        },
                        {
                            "name": "Relationship management",
                            "weight": 0.0
                        },
                        {
                            "name": "Negotiation strategy",
                            "weight": 2091.1536
                        },
                        {
                            "name": "Early adopter",
                            "weight": 0.1332
                        }
                    ],
                    "subjectId": "22659",
                    "username": "mjzabala",
                    "verified": true,
                    "weight": 7030.8732,
                    "ggId": "22659"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 6.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 292.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 0.75
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 136.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.95652
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 5.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 10200.0
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 6500.0,
                            "currency": "USD$",
                            "minHourlyUSD": 6500.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 6500.0,
                            "currency": "USD$",
                            "minHourlyUSD": 40.625,
                            "periodicity": "monthly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Santiago de Querétaro, Querétaro, Mexico",
                    "name": "Octavio Humberto Aguilar mata",
                    "openTo": [
                        "flexible-jobs",
                        "full-time-employment",
                        "networking"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_eb3eb0cd578f2c2dc41dfa2a709a3c1b5e7a2268.jpg",
                    "professionalHeadline": "Aiming to improve the quality of living for as many people as we can worldwide, through the experience acquired thus far and in the future",
                    "theme": "blue500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Analytical Thinking",
                            "weight": 283.3333
                        },
                        {
                            "name": "Business Storytelling",
                            "weight": 283.3333
                        },
                        {
                            "name": "assertiveness",
                            "weight": 283.3333
                        },
                        {
                            "name": "Adaptability",
                            "weight": 566.6667
                        },
                        {
                            "name": "Professionalism",
                            "weight": 283.3333
                        },
                        {
                            "name": "collaboration",
                            "weight": 283.3333
                        },
                        {
                            "name": "Core Competencies",
                            "weight": 1558.3333
                        },
                        {
                            "name": "creativity",
                            "weight": 283.3333
                        },
                        {
                            "name": "Teamwork",
                            "weight": 0.0
                        },
                        {
                            "name": "leadership",
                            "weight": 2266.6667
                        },
                        {
                            "name": "Ability to learn new things",
                            "weight": 566.6667
                        }
                    ],
                    "subjectId": "12764",
                    "username": "tavioaguilar",
                    "verified": true,
                    "weight": 10200.0,
                    "ggId": "12764"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 7.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 146.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.95402
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 18.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 6508.1806
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "employee": {
                            "amount": 25000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 13.020833333333334,
                            "periodicity": "yearly",
                            "privacy": "private"
                        }
                    },
                    "locationName": "Bogota D.C., Colombia",
                    "name": "Juan Francisco Suescún",
                    "openTo": [
                        "internships",
                        "full-time-employment"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_442c9ea36cfcd82f985cf83436747681c8add3de.jpg",
                    "professionalHeadline": "Customer Service Specialist",
                    "theme": "deepPurple300",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Commitment",
                            "weight": 141.6663
                        },
                        {
                            "name": "Hard working",
                            "weight": 141.6663
                        },
                        {
                            "name": "Interpreter",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Success",
                            "weight": 1602.8489
                        },
                        {
                            "name": "Team leadership",
                            "weight": 0.0
                        },
                        {
                            "name": "Adaptability",
                            "weight": 283.3333
                        },
                        {
                            "name": "Executive assistance",
                            "weight": 0.0
                        },
                        {
                            "name": "Excel",
                            "weight": 0.0
                        },
                        {
                            "name": "Responsibility",
                            "weight": 1886.0609
                        },
                        {
                            "name": "Empathy",
                            "weight": 0.0
                        },
                        {
                            "name": "Tracking",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 283.3333
                        },
                        {
                            "name": "Customer Service",
                            "weight": 141.6663
                        },
                        {
                            "name": "Microsoft Office",
                            "weight": 0.0
                        },
                        {
                            "name": "Personal development",
                            "weight": 0.0
                        },
                        {
                            "name": "Bilingual",
                            "weight": 0.0
                        },
                        {
                            "name": "Coaching",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 0.0
                        }
                    ],
                    "subjectId": "11825",
                    "username": "juansuescun",
                    "verified": true,
                    "weight": 6508.1806,
                    "ggId": "11825"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 8.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 286.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 0.8125
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 297.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.61603
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 3.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 10949.2307
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "employee": {
                            "amount": 36000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 18.75,
                            "periodicity": "yearly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "New York, United States",
                    "name": "Luz Angélica Jiménez Rozo",
                    "openTo": [
                        "full-time-employment"
                    ],
                    "picture": null,
                    "professionalHeadline": "Systems Engineer. Learning things ...",
                    "theme": "deepOrange500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Versatility",
                            "weight": 283.3333
                        },
                        {
                            "name": "Selenium",
                            "weight": 0.0
                        },
                        {
                            "name": "Python",
                            "weight": 0.0
                        },
                        {
                            "name": "Software engineering",
                            "weight": 987.2287
                        },
                        {
                            "name": "Automation",
                            "weight": 566.6667
                        },
                        {
                            "name": "QA",
                            "weight": 566.6667
                        },
                        {
                            "name": "Front End",
                            "weight": 0.0
                        },
                        {
                            "name": "Frontend development",
                            "weight": 0.0
                        },
                        {
                            "name": "Desarrollo web",
                            "weight": 0.0
                        },
                        {
                            "name": "Creative Thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "Node.js",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 283.3333
                        },
                        {
                            "name": "Desarrollo de software",
                            "weight": 566.6667
                        },
                        {
                            "name": "Javascript",
                            "weight": 0.0
                        },
                        {
                            "name": "SQL",
                            "weight": 0.0
                        },
                        {
                            "name": "Sql",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 283.3333
                        },
                        {
                            "name": "Creativity",
                            "weight": 0.0
                        },
                        {
                            "name": "Java",
                            "weight": 210.2813
                        },
                        {
                            "name": "Critical Thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "Test automation",
                            "weight": 0.0
                        },
                        {
                            "name": "Perseverance",
                            "weight": 1060.281
                        },
                        {
                            "name": "Adaptability",
                            "weight": 2799.7546
                        }
                    ],
                    "subjectId": "14379",
                    "username": "langelicajr",
                    "verified": true,
                    "weight": 10949.2307,
                    "ggId": "14379"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 9.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 58.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.9764
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 26.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 5826.8031
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 40.0,
                            "currency": "USD$",
                            "minHourlyUSD": 40.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 60000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 31.25,
                            "periodicity": "yearly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Bogotá, Colombia",
                    "name": "Daniella Gonzalez Rubio",
                    "openTo": [
                        "flexible-jobs",
                        "hiring",
                        "full-time-employment"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v0/origin/starrgate/users/profile_d29f4ee7bd101494abeb467559e381197a9d436e.jpg",
                    "professionalHeadline": "People Ops Lead at Frubana",
                    "theme": "lightGreen500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Learner",
                            "weight": 0.0
                        },
                        {
                            "name": "Efficient",
                            "weight": 0.0
                        },
                        {
                            "name": "Human resources management",
                            "weight": 0.0
                        },
                        {
                            "name": "Portuguese",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Adaptability",
                            "weight": 283.3333
                        },
                        {
                            "name": "Time Management",
                            "weight": 1308.6112
                        },
                        {
                            "name": "Recursive",
                            "weight": 0.0
                        },
                        {
                            "name": "Achiever",
                            "weight": 0.0
                        },
                        {
                            "name": "Google AdWords",
                            "weight": 0.0
                        },
                        {
                            "name": "SQL",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 283.3333
                        },
                        {
                            "name": "Technical recruitment",
                            "weight": 0.0
                        },
                        {
                            "name": "Multitasking",
                            "weight": 0.0
                        }
                    ],
                    "subjectId": "5906",
                    "username": "daniellagonzalezrubio",
                    "verified": true,
                    "weight": 5826.8031,
                    "ggId": "5906"
                },
                {
                    "context": {
                        "signaled": null
                    },
                    "_meta": {
                        "ranker": {
                            "@type": "and",
                            "rank": 10.0,
                            "score": null,
                            "and": [
                                {
                                    "@type": "scorer",
                                    "rank": 1.0,
                                    "scorer": "completion",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "completion": 1.0
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 283.0,
                                    "scorer": "grammar",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "grammar": 0.80602
                                        }
                                    }
                                },
                                {
                                    "@type": "scorer",
                                    "rank": 16.0,
                                    "scorer": "weight",
                                    "score": null,
                                    "input": {
                                        "criteria": null,
                                        "person": {
                                            "weight": 6885.121
                                        }
                                    }
                                }
                            ]
                        },
                        "filter": null
                    },
                    "compensations": {
                        "flexible-job": {
                            "amount": 25.0,
                            "currency": "USD$",
                            "minHourlyUSD": 25.0,
                            "periodicity": "hourly",
                            "privacy": "public"
                        },
                        "employee": {
                            "amount": 65000.0,
                            "currency": "USD$",
                            "minHourlyUSD": 33.854166666666664,
                            "periodicity": "yearly",
                            "privacy": "public"
                        }
                    },
                    "locationName": "Vancouver, BC, Canada",
                    "name": "Alvaro Andres Salom D Luyz",
                    "openTo": [
                        "flexible-jobs",
                        "hiring",
                        "internships",
                        "full-time-employment",
                        "mentoring"
                    ],
                    "picture": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1633410137/origin/starrgate/users/profile_bd5347b2e59451304d85bffebcd5812bc63e00d3.jpg",
                    "professionalHeadline": "Bachelor of Business Administration and Finance",
                    "theme": "blue500",
                    "remoter": true,
                    "skills": [
                        {
                            "name": "Contabilidad",
                            "weight": 0.0
                        },
                        {
                            "name": "Data Driven",
                            "weight": 0.0
                        },
                        {
                            "name": "Trabajo remoto",
                            "weight": 0.0
                        },
                        {
                            "name": "Result-oriented",
                            "weight": 0.0
                        },
                        {
                            "name": "Analysis",
                            "weight": 0.0
                        },
                        {
                            "name": "Proactivo",
                            "weight": 0.0
                        },
                        {
                            "name": "Discipline",
                            "weight": 0.0
                        },
                        {
                            "name": "B2B Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Team worker",
                            "weight": 0.0
                        },
                        {
                            "name": "líder",
                            "weight": 0.0
                        },
                        {
                            "name": "Salesforce",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategy",
                            "weight": 0.0
                        },
                        {
                            "name": "Attention to details",
                            "weight": 0.0
                        },
                        {
                            "name": "Cash Flow",
                            "weight": 0.0
                        },
                        {
                            "name": "Honestidad",
                            "weight": 0.0
                        },
                        {
                            "name": "CRM",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales Growth",
                            "weight": 0.0
                        },
                        {
                            "name": "Project Manager",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing Management",
                            "weight": 13.9615
                        },
                        {
                            "name": "Manager",
                            "weight": 0.0
                        },
                        {
                            "name": "Base de datos",
                            "weight": 0.0
                        },
                        {
                            "name": "Adaptability",
                            "weight": 0.0
                        },
                        {
                            "name": "Future of work",
                            "weight": 0.0
                        },
                        {
                            "name": "Teamworks",
                            "weight": 219.0107
                        },
                        {
                            "name": "Account Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Salesforce administration",
                            "weight": 0.0
                        },
                        {
                            "name": "Solar Energy",
                            "weight": 0.0
                        },
                        {
                            "name": "B2B",
                            "weight": 0.0
                        },
                        {
                            "name": "Tecnología",
                            "weight": 0.0
                        },
                        {
                            "name": "Tecnology",
                            "weight": 0.0
                        },
                        {
                            "name": "Trabajo en equipo",
                            "weight": 537.6881
                        },
                        {
                            "name": "HR",
                            "weight": 0.0
                        },
                        {
                            "name": "finanzas",
                            "weight": 167.2382
                        },
                        {
                            "name": "Marketing de redes sociales",
                            "weight": 0.0
                        },
                        {
                            "name": "Tecnicas de hacking",
                            "weight": 0.0
                        },
                        {
                            "name": "Business",
                            "weight": 0.0
                        },
                        {
                            "name": "Autonomy",
                            "weight": 0.0
                        },
                        {
                            "name": "Entrepreneurship",
                            "weight": 0.0
                        },
                        {
                            "name": "Operations",
                            "weight": 0.0
                        },
                        {
                            "name": "Interpersonal Skills",
                            "weight": 0.0
                        },
                        {
                            "name": "B2C",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Experience",
                            "weight": 0.0
                        },
                        {
                            "name": "Environmental Research",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategic Thinker",
                            "weight": 0.0
                        },
                        {
                            "name": "Monitor de cliente",
                            "weight": 0.0
                        },
                        {
                            "name": "ordenado",
                            "weight": 0.0
                        },
                        {
                            "name": "LEAD",
                            "weight": 0.0
                        },
                        {
                            "name": "Desarrollo web",
                            "weight": 0.0
                        },
                        {
                            "name": "Creativity",
                            "weight": 502.623
                        },
                        {
                            "name": "Team management",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing Strategy",
                            "weight": 0.0
                        },
                        {
                            "name": "Leadership",
                            "weight": 29.9214
                        },
                        {
                            "name": "Team Leadership",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Service",
                            "weight": 226.3271
                        },
                        {
                            "name": "Sales & Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Absolute manage",
                            "weight": 0.0
                        },
                        {
                            "name": "Selling",
                            "weight": 0.0
                        },
                        {
                            "name": "Técnologia",
                            "weight": 0.0
                        },
                        {
                            "name": "APEX programming",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer care",
                            "weight": 0.0
                        },
                        {
                            "name": "Excellent Communicator",
                            "weight": 0.0
                        },
                        {
                            "name": "Data Analyst",
                            "weight": 0.0
                        },
                        {
                            "name": "Project Finance",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication skill",
                            "weight": 0.0
                        },
                        {
                            "name": "Entusiasta",
                            "weight": 0.0
                        },
                        {
                            "name": "Compromiso",
                            "weight": 0.0
                        },
                        {
                            "name": "Coordination",
                            "weight": 0.0
                        },
                        {
                            "name": "Networking",
                            "weight": 0.0
                        },
                        {
                            "name": "Financial Processes",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Success",
                            "weight": 0.0
                        },
                        {
                            "name": "Budget Forecast",
                            "weight": 0.0
                        },
                        {
                            "name": "Liderazgo",
                            "weight": 1805.1591
                        },
                        {
                            "name": "Project Development",
                            "weight": 0.0
                        },
                        {
                            "name": "SaaS",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales",
                            "weight": 0.0
                        },
                        {
                            "name": "Negociación",
                            "weight": 0.0
                        },
                        {
                            "name": "Public Relations - PR",
                            "weight": 0.0
                        },
                        {
                            "name": "Fundraising",
                            "weight": 0.0
                        },
                        {
                            "name": "Customer Support",
                            "weight": 0.0
                        },
                        {
                            "name": "Innovador",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategic",
                            "weight": 0.0
                        },
                        {
                            "name": "Enterprenour",
                            "weight": 0.0
                        },
                        {
                            "name": "Marketing",
                            "weight": 0.0
                        },
                        {
                            "name": "Leader",
                            "weight": 0.0
                        },
                        {
                            "name": "Communication skills",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales Strategy",
                            "weight": 0.0
                        },
                        {
                            "name": "Business Operations",
                            "weight": 0.0
                        },
                        {
                            "name": "Product Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Strategic Thinking",
                            "weight": 0.0
                        },
                        {
                            "name": "Financial Analysis",
                            "weight": 272.2083
                        },
                        {
                            "name": "People Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Sales Operations",
                            "weight": 0.0
                        },
                        {
                            "name": "Efficiency",
                            "weight": 0.0
                        },
                        {
                            "name": "Gastos e ingresos",
                            "weight": 0.0
                        },
                        {
                            "name": "Gerencia",
                            "weight": 0.0
                        },
                        {
                            "name": "Administración financiera y contable",
                            "weight": 346.496
                        },
                        {
                            "name": "Innovation",
                            "weight": 244.3307
                        },
                        {
                            "name": "Customer Focus",
                            "weight": 0.0
                        },
                        {
                            "name": "Relaciones interpersonales",
                            "weight": 411.569
                        },
                        {
                            "name": "Project Management",
                            "weight": 0.0
                        },
                        {
                            "name": "Emprendedor",
                            "weight": 1076.838
                        },
                        {
                            "name": "Entrepreneur",
                            "weight": 0.0
                        },
                        {
                            "name": "Management",
                            "weight": 466.6293
                        }
                    ],
                    "subjectId": "45952",
                    "username": "alvaroasalom",
                    "verified": true,
                    "weight": 6885.121,
                    "ggId": "45952"
                }
            ],
            "aggregators": {},
            "offset": 0,
            "pagination": {
                "previous": null,
                "next": "eyJhdXRvIjoxMTgyMzQ0LCJyYW5rVmFsdWUiOjAuNTUyNjI5MzY5Njc1OTA3NH0="
            }
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
</style>