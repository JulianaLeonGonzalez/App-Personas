-- Creation of product table
CREATE TABLE IF NOT EXISTS Person (
  person_id SERIAL,
  name VARCHAR(50) NOT NULL,
  birth DATE NOT NULL,
  father_id INT,
  mother_id INT,
  PRIMARY KEY (person_id),
  FOREIGN KEY (father_id) REFERENCES Person (person_id),
  FOREIGN KEY (mother_id) REFERENCES Person (person_id)
);



