// INTALAR:
const express = require('express');
const axios = require('axios');
require('dotenv').config();
//

const app = express();
const PORT = process.env.PORT2;
const PORTmserv = process.env.PORT;


// Endpoints para recibir datos del microservice:
app.get('/Peliculas', async(req, res) => {
    
    try {
        const resp = await axios.get(`http://localhost:${PORTmserv}/peliculas`);
        res.json(resp.data);
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error ' });
    }
  });
  
  app.get('/Peliculas/:title', async(req, res) => {
    const tittle= req.params.title;
    try {
        const resp = await axios.get(`http://localhost:${PORTmserv}/peliculas/title/${tittle}`);
        res.json(resp.data);
     
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error ' });
    }
  });


app.listen(PORT, () => {
    console.log(`Servidor Principal http://localhost:${PORT}`);
  });
