const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.get('/peliculas', async (req, res) => {
    try {
        const tmdbResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);
        res.json(tmdbResponse.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener datos de TMDb' });
    }
});

app.listen(PORT, () => {
    console.log(`Microservicio de TMDb corriendo en http://localhost:${PORT}`);
});
