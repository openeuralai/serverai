const https = require("https");
const fs = require('fs');
const express = require('express');
const hbs = require('hbs');

const app = express();
//const path = require('path');
const puerto = 3000;
//app.set('views', path.join(__dirname, 'views'));

var credenciales = {
    key: fs.readFileSync('cert/openeuralai.key'),
    cert: fs.readFileSync('cert/1243627926.crt'),
    ca: fs.readFileSync('cert/1243627926.ca-bundle')
};

const servidor = https.createServer(credenciales, app);
servidor.listen(3000);

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'openeural.ai'
    })
});

console.log(`Example app listening on port 3000`);

/*app.get('*', (req, res) => {
    res.send('404 | Page not found');
});*/

/*servidor.listen(puerto, () => {
    console.log(`Example app listening on port ${puerto}`)
});*/