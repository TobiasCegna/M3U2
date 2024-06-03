app.Method(PATH, HANDLER)

var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hola Mundo');
});

app.get('/', function (req, res) {
    res.send('GET > vamos a la pagina homepage');
});

app.post('/', function (req, res) {
    res.send('POST > vamos a la pagina homepage')
});

app.all('/secret' , function (req, res, next) {
    console.log('Accessing the secret section ...');
    next();
});

app.get('/', function (req, res) {
    res.send('root');
});

app.get('/quienes', function (req, res) {
    res.send('quienes');
});

app.get('/random.text', function (req, res) {
    res.send('random.text');
});

app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});

app.get('/example/a', function (req, res) {
    res.send('Hello from A');
});

app.get('/example/b', function (req, res, next) {
    console.log('the response will be sent by the next function ...');
    next();
}, function (req, res) {
    res.send('Hello from B');
});

app.route('/book')
    .get(function(req, res) { 
        res.send('Consigue un libro al azar');
    })
    .post(function(req, res) {
        res.send('Agregar un libro');
    })
    .put(function(req, res) {
        res.send('Actualizar un libro');
    });

var nosotrosRouter = require('./routes/nosotros');

app.use('/nosotros', nosotrosRouter);