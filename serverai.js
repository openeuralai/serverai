const https = require("https");
const http = require("http");
const fs = require('fs');
//const express = require('express');

//const app = express();



var opciones = {
    key: fs.readFileSync('/cert/openeuralai.key'),
    cert: fs.readFileSync('/cert/1243627926.crt'),
    ca: fs.readFileSync('/cert/1243627926.ca-bundle')
};

https.createServer(opciones, function(req, res) {
    res.writeHead(200);
    res.end("server is runing at port 3000");
}).listen(3000);

console.log('server is runing at port 3000');

/*https.createServer(opciones, app)
    .listen(3000, ()=>{
        console.log('server is runing at port 4000')
    });*/

//app.get('/', (req, res) => res.send("Hola mundo!"))