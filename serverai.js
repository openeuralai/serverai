const https = require("https");
const fs = require('fs');
const express = require('express');

const app = express();



var opciones = {
    clave: fs.readFileSync('/cert/openeuralai.key'),
    certificado: fs.readFileSync('/cert/1243627926.crt'),
    ca: fs.readFileSync ('/cert/1243627926.ca-bundle')
};

https.createServer(opciones, app)
    .listen(3000, ()=>{
        console.log('server is runing at port 4000')
    });

app.get('/', (req, res) => res.send("Hola mundo!"))