const express = require('express');
const personController = require('../controllers/person');

const router = express.Router();

// GET /retrieve
router.get('/retrieve', personController.retrievePerson);

// POST /create
router.post(
  '/create',
  personController.createPerson
);
module.exports = router;
