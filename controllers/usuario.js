const {response} = require('express');

const usuarioGet = (req, res=response) => {
    //res.send('Hello World')
    const {q, nombre="No name", apikey} = req.query;
    res.json({
        msg:'get API',
        q,
        nombre,
        apikey
    })  ;
}

const usuarioPost = (req, res) => {
    const body= req.body;
    res.status(201).json({
        msg:'post API',
        body
    });  
}

const usuarioPut = (req, res) => {
    const id = req.params.id //el mismo nombre con el que especificamos en la ruta
    res.status(400).json({
        msg:'put API',
        id
    });  
}

const usuarioPatch = (req, res) => {
    res.status(201).json({
        msg:'patch API'
    });  
}

const usuarioDelete = (req, res) => {
    res.json({
        msg:'delete API'
    }) ; 
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioPut,
    usuarioPatch,
    usuarioDelete
}