// INTALAR:
const express = require('express');
const axios = require('axios');
require('dotenv').config();
//

const app = express();
const PORT = 3500

// ENDPOINT para recibir datos del otro microservice:
app.get('/Peliculas', async(req, res) => {
    
    try {
        const resp = await axios.get(`http://localhost:OtroPuerto/listMovies`);// reemplazalo con el endpoint
        res.json(resp.data);// aca deberia mostrar el json que devuelve la api de peliculas
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error ' });
    }
  });
  
app.listen(PORT, () => {
    console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
  });
