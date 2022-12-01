const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaUsuario = new esquema({
    idUsuario: String,
    nombre: String,
    apellido: String,
    email: String,
    telefono: String
});

const modeloUsuario = mongoose.model('usuarios', esquemaUsuario);

module.exports = router;

router.post('/agregarUsuario', (req, res) => {
    const nuevoUsuario = new modeloUsuario({
        idUsuario: req.body.idUsuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono
    })
    nuevoUsuario.save(function(err){
        if(!err) {
            res.send('Usuario agregado correctamente')
        }
        else {
            res.send(err)
        }
    })
})

router.get('/obtenerUsuarios', (req, res) => {
    modeloUsuario.find({}, function(docs, err){
        if(!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})

router.post('/obtenerDataUsuario', (req, res) => {
    modeloUsuario.find({idUsuario:req.body.idUsuario}, function(docs, err){
        if(!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})
// Revisar !!!
router.post('/actualizarUsuario', (req, res) => {

    modeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario}, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        telefono: req.body.telefono
    }, (err) => {
            if(!err) {
                res.send('Usuario actualizado correctamente')
            }
            else {
                res.send(err)
            }
    })
})


router.post('/borrarUsuario', (req, res) => {

    modeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario},
        (err) => {
            if(!err) {
                res.send('Usuario borrado correctamente')
            }
            else {
                res.send(err)
            }
    })
})
