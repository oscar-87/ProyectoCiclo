var express = require('express');
var router = express.Router();
var controlador = require('../controladores/main');

/* GET home page. */
router.get('/', controlador.index);
router.get('/pagina',controlador.select);

module.exports = router;
