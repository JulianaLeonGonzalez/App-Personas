/**
 * @fileoverview Modelo de persona
 * @version 1.0.0
 * @author  Laura Juliana Leon <ljulianalg19@gmail.com>
*/

module.exports = class Person {
  constructor(id, name, birth, father_id, mother_id) {
    this.id = id;
    this.name = name;
    this.birth = birth;
    this.father_id = father_id;
    this.mother_id = mother_id;
  }

  childrenList = [];

  adopt(child) {
    this.childrenList.push(child);
  }

};
