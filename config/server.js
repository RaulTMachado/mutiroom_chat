/* import express */
let express = require('express');

/* import consign */
let consign = require('consign');

/* import body-parser */
let bodyParser = require('body-parser');

/* import express-validator */
let expressValidator = require('express-validator');

/* init express */
let app = express(); //this instance is what app.js is waiting

/* set the 'view-engine' and 'views' from express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* config middleware */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({ extended: true })); //we can get info when post by atr "body" from request. 
app.use(expressValidator());

/* config routes, controllers and models autoload to app object */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* Export to app.js */
module.exports = app;


