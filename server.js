const express = require('express');
const app = express();
const axios = require("axios");

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
}

/** from LMAO Ninja */
app.get("/LMAO/global", (req, res, next) => {
    var endpoint = "https://corona.lmao.ninja/all";
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})
app.get("/LMAO/countries", (req, res, next) => {
    var endpoint = "https://corona.lmao.ninja/countries?sort=country";
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})
app.get("/LMAO/countries/:name", (req, res, next) => {
    var endpoint = `https://corona.lmao.ninja/countries/${req.params.name}`;
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})


/** from CovidAPI.info */
app.get("/global/timeline", (req, res, next) => {
    var endpoint = "https://covidapi.info/api/v1/global/count";
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})
app.get("/timeline/:country", (req, res, next) => {
    var endpoint = `https://covidapi.info/api/v1/country/${req.params.country}`;
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})


/** from Kawal Corona */
app.get("/provinsi", (req, res, next) => {
    var endpoint = "https://api.kawalcorona.com/indonesia/provinsi";
    axios.get(endpoint, config)
    .then(response => { res.json(response.data) })
    .catch(err => next(err))
})

const port = 2020;
app.listen(port, () => console.log('sudah terhubung ke ' + port))