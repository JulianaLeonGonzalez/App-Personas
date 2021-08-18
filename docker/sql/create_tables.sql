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

INSERT INTO Person (name, birth) VALUES('JORGE GONZALEZ', '1994-05-10');
INSERT INTO Person (name, birth) VALUES('ANA RODRIGUEZ', '1990-12-01');



