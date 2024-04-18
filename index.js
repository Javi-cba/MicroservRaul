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
        const resp = await axios.get(`https://dictionaryapi.com/api/v3/references/spanish/json/Correr?key=47f65980-f725-42b4-8505-2b1c1967450b`);// reemplazalo con el endpoint
        const cjtsArray = resp.data[0].suppl.cjts; 
        res.json(cjtsArray);// aca deberia mostrar el json que devuelve la api de peliculas
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error ' });
    }
  });
  
app.listen(PORT, () => {
    console.log(`Servidor de suma corriendo en http://localhost:${PORT}`);
  });
