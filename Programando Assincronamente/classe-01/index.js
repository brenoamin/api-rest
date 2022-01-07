const express = require("express");
const axios = require("axios");
const app = express();

app.get("/pokemon", async (req, res) => {
    const inicio = Number(req.query.inicio);
    const quantidade = Number(req.query.quantidade);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`)
    res.json({
        pokemon: response.data.results,
    });

});

app.get("/pokemon/:parametro", async (req, res) => {
    const parametro = req.params.parametro;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${parametro}/`)
    res.json({
        id: response.data.id,
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        base_experience: response.data.base_experience,
        forms: response.data.forms,
        abilities: response.data.abilities,
        species: response.data.species,
    })
})

app.listen(8080)