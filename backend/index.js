const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const axios = require('axios');

app.listen(process.env.PORT || port, () => console.log(`Server initialized on port ${port}`));

app.post('/get-people/', function (req, res) {
    var skill = req.body.skill;
    var proficiency = req.body.proficiency;
    var bodyFormData = {};
    var url_;
    if (skill && proficiency){
        bodyFormData = {skill:{term:skill, proficiency:proficiency}};
    }
    if(req.body.after){
        url_ = 'https://search.torre.co/people/_search/?after='+req.body.after 
    }else if(req.body.before){
        url_ = 'https://search.torre.co/people/_search/?before='+req.body.before 
    }else{
        url_ = 'https://search.torre.co/people/_search/'
    }
    axios({
        method: 'post',
        url: url_,
        data: JSON.stringify(bodyFormData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
        })
        .then((response) => {res.send(response.data)}) 
        .catch(error => {res.send({status:'error'}) 
    })
});

app.post('/get-profile/', function (req, res) {
    console.log(req.body)
    axios({
        method: 'get',
        url: 'https://bio.torre.co/api/bios/'+req.body.username,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
        })
        .then((response) => {res.send(response.data)}) 
        .catch(error => {res.send({status:'error'}) 
    })
});

