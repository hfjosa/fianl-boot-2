const mongoose = require('mongoose');

// Prueba de conexión remota

const uri = 'mongodb+srv://hfjosa002:iWdkSBc82TS0gLq4@cluster0.icqdntm.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri);
//mongoose.connect('mongodb://localhost:27017/crud');         // Si da fallos, usar 127.0.0.1



const objetoDb = mongoose.connection;

objetoDb.on('connected', () => {
    console.log('Conexión a MongoDb correcta')
});

module.exports = mongoose;