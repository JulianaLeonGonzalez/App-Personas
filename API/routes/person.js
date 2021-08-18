/**
 * @fileoverview El archivo contiene las rutas de la API para listar personas /retive y para crear una nueva persona /create
 * @version 1.0.0
 * @author  Laura Juliana Leon <ljulianalg19@gmail.com>
*/

const express = require('express');
const personController = require('../controllers/person');
const router = express.Router();

// GET /retrieve
router.get('/retrieve', personController.retrievePerson);
// POST /create
router.post('/create',personController.createPerson);
module.exports = router;
