var express = require('express');
var app = express();
var db = require('../database/mock-database');

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page 
app.get('/', function(req, res) {
    const data = db();

    res.render('../views/home', {data: data} );
});

app.listen(8080);
console.log("Visit app at http://localhost:8080")