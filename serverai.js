const https = require("https");
const fs = require('fs');
//const express = require('express');

//const app = express();



var opciones = {
    key: fs.readFileSync('openeuralai.key'),
    cert: fs.readFileSync('1243627926.crt'),
    ca: fs.readFileSync ('1243627926.ca-bundle')
};

https.createServer(opciones, (req, res) =>{
    res.writeHead(200);
    res.end("server is runing at port 3000");
}).listen(3000);

/*https.createServer(opciones, app)
    .listen(3000, ()=>{
        console.log('server is runing at port 4000')
    });*/

//app.get('/', (req, res) => res.send("Hola mundo!"))