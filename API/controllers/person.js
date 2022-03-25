/**
 * @fileoverview El archivo contiene las funciones createPerson y retrivePerson
 * @version 
 * @author  Laura Juliana Leon <ljulianalg19@gmail.com>
*/

const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
})

/**
 * Lista todas las personas en la base de datos incluyendo el nombre de los padres
 * @param  {any} req Datos de la solicitud
 * @param  {any} res Respuesta a la solicitud
 */
const retrievePerson = async (req, res) => {
  const response = await pool.query('SELECT t1.person_id, t1.name, t1.birth, t2.name as father_name, t3.name as mother_name FROM Person AS t1 LEFT JOIN Person AS t2 ON t1.father_id = t2.person_id LEFT JOIN Person AS t3 ON t1.mother_id = t3.person_id');
  res.status(200).json(response.rows);
}

/**
 * Crea un nuevo usuario validando que no exista en la base de datos y que la información de los padres sea correcta
 * @param  {any} req Datos de la solicitud
 * @param  {any} res Respuesta a la solicitud
 */
const createPerson = async (req, res) => {
  const { name, birth, fatherName, motherName } = req.body;
  let status = null;
  let fatherId = null;
  let motherId = null;
  let fatherValidation = null;
  let motherValidation = null;
  let existValidation = null;
  try {
    if (fatherName == "No aplica" && motherName == "No aplica") {
      status = "OKP OKM";
    } else {
      if (fatherName != "No aplica") {
        fatherValidation = (await pool.query('SELECT person_id FROM Person WHERE name=$1', [fatherName.toUpperCase()])).rows;
        if (fatherValidation.length == 0) {
          status = "NOP";
        } else {
          status = "OKP";
          fatherId = fatherValidation[0].person_id;
        }
      } else {
        status = "OKP";
      }
      if (motherName != "No aplica") {
        motherValidation = (await pool.query('SELECT person_id FROM Person WHERE name=$1', [motherName.toUpperCase()])).rows;
        if (motherValidation.length == 0) {
          status = status + " NOM";
        } else {
          status = status + " OKM";
          motherId = motherValidation[0].person_id;
        }
      } else {
        status = status + " OKM";
      }
    }
    if (status == "OKP OKM") {
      existValidation = (await pool.query('SELECT person_id FROM Person WHERE name=$1', [name.toUpperCase()])).rows;
      if (existValidation.length != 0) {
        res.status(400).json({ message: 'La persona ya existe en la base de datos' });
      } else {
        const response = await pool.query('INSERT INTO Person (name, birth, father_id, mother_id) VALUES($1, $2, $3, $4) RETURNING name', [name.toUpperCase(), birth, fatherId, motherId]);
        res.status(200).json({ message: 'Persona creada de forma exitosa' });
      }
    } else {
      res.status(406).json({ message: 'No se han encontrado los datos de los padres en la base de datos' });
    }
  } catch {
    res.status(500).json({ message: 'Error accediendo a la base de datos' });
  }
}

module.exports = {
  retrievePerson,
  createPerson
}