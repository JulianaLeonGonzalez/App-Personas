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

const retrievePerson = async (req, res) => {
  const response = await pool.query('SELECT t1.person_id, t1.name, t1.birth, t2.name as father_name, t3.name as mother_name FROM Person AS t1 LEFT JOIN Person AS t2 ON t1.father_id = t2.person_id LEFT JOIN Person AS t3 ON t1.mother_id = t3.person_id'); 
  res.status(200).json(response.rows);
}

const createPerson = async (req, res) =>{
  const { name, birth, fatherName, motherName } = req.body;
  let status = null;
  let fatherId = null;
  let motherId = null;
  let fatherValidation = null;
  let motherValidation = null;
try{
  if(fatherName == "No aplica" && motherName == "No aplica"){
      status = "OKP OKM";
  }else{
      if(fatherName != "No aplica"){
      fatherValidation = (await pool.query('SELECT person_id FROM Person WHERE name=$1', [fatherName])).rows;
          if(fatherValidation.length == 0){
              status = "NOP";
          }else{
              status = "OKP";
              fatherId = fatherValidation[0].person_id; 
          }
      }else{
        status = "OKP";
      }
      if(motherName != "No aplica"){
          motherValidation = (await pool.query('SELECT person_id FROM Person WHERE name=$1', [motherName])).rows;
          if(motherValidation.length == 0){
              status = status + " NOM";
          }else{
              status = status + " OKM";
              motherId = motherValidation[0].person_id;
          }
      }else{
        status = status + " OKM";
      }
  }
  if (status == "OKP OKM"){
      const response = await pool.query('INSERT INTO Person (name, birth, father_id, mother_id) VALUES($1, $2, $3, $4) RETURNING name', [name, birth, fatherId, motherId]); 
      res.status(200).json({
          message: 'Persona creada de forma exitosa',
        });
  }else{
    res.status(406).json({
      message: 'Persona creada de forma exitosa',
    });
      }
    }catch{
        res.status(500).json({message: 'Error accediendo a la base de datos'});
      }
}

module.exports = {
  retrievePerson,
  createPerson
}