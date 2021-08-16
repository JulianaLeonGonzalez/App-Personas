const { validationResult } = require('express-validator/check');
const { Pool } = require('pg')
const Person = require('../models/person');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '...',
  port: 5438,
})

exports.retrievePerson = (req, res, next) => {
  pool
    .query('SELECT * FROM Person')
    .then(result => {
      res.status(200).json({
        message: 'Lista de personas:',
        person: result.rows
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error obteniendo la lista de personas'
      });
    });;
    pool.end;
};

exports.createPerson = (req, res, next) => {
  const name = req.body.name;
  const birth = req.body.birth;
  const person = new Person({
    name: name,
    birth: birth,
  });
  pool
    .query('INSERT INTO Person (name, birth) VALUES($1, $2) RETURNING name', [name, birth])
    .then(result => {
      res.status(200).json({
        message: 'Persona creada de forma exitosa',
        person: result.rows
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Error añadiendo la persona'
      });
    });;
    pool.end;
};