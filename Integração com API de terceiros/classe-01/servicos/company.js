const axios = require("axios");

const instanciaAxios = axios.create({
    baseURL:"https://companyenrichment.abstractapi.com/v1/",
    params:{
        api_key:"4eb57348416247668bdedd70b888b5f9"
    }
})

module.exports = instanciaAxios;