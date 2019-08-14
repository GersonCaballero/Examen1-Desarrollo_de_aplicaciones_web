var express = require('express');
var sql = require('mssql');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser());

var server = app.listen(8081, function () {
});

app.post('/api/calculadora/suma', function(req, res){
    var arr = [1,2,3,4,5]
    var suma = 0;
    var valores = req.body.valores || arr;
    var val = valores.split(",");

    for(i = 0; i < val.length; i++){
        entero = parseInt(val[i]);
        suma = suma + entero;
    }

    res.send(`La suma total es: ${suma}`);
});

app.post('/api/calculadora/resta', function(req, res){
    var arr = [1,2,3,4,5]
    var resta = 0;
    var valores = req.body.valores || arr;
    var val = valores.split(",");

    for(i = 0; i < val.length; i++){
        entero = parseInt(val[i]);
        resta = resta - entero;
    }

    res.send(`La resta total es: ${resta}`);
});