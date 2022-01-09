const express = require("express");
const bodyParser = require('body-parser');
const app = express();

var cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const axios = require('axios');

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

app.post('/get-people/', function (req, res) {
    var skill = req.body.skill
    const  bodyFormData = {skll:{term:skill}};
    axios({
        method: 'post',
        url: 'https://search.torre.co/people/_search/',
        data: JSON.stringify(bodyFormData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        }
        })
        .then((response) => {res.send(response.data)}) 
        .catch(error => {res.send('Error') 
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
        .catch(error => {res.send('Error') 
    })
});

