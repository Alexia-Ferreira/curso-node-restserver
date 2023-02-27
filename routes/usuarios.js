const {Router} = require('express');
const { usuarioGet, usuarioPost,  usuarioPut, usuarioDelete, usuarioPatch} = require('../controllers/usuario');


const router = Router();


//http://localhost:8080/api/usuarios?q=hola&nombre=fernando&apikey=123456
router.get('/', usuarioGet);

//parametro por segmento
//http://localhost:8080/api/usuarios/125
router.put('/:id',  usuarioPut);

router.post('/',  usuarioPost);

router.patch('/',  usuarioPatch);

router.delete('/',  usuarioDelete);

module.exports = router;
