const express = require('express');
const app = express();
const objetoDb = require('./conexion');
const rutaUsuario = require('./rutas/usuario');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/usuario', rutaUsuario);

app.get('/', (req, res) => {
    res.end('Bienvenidos al backend')
})

app.listen(5000, function() {
    console.log('El servidor Nodemon está activado correctamente')
});