let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = 'http://localhost:3000';

// Pruebas de API personsList
describe('Listar todas las personas: ', () => {
    it('Deberia listar todas las personas de la BD', (done) => {
        chai.request(url)
            .get('/retrieve')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});

// Pruebas de API addPerson
describe('Insertar una nueva persona: ', () => {

    // Casos Exitosos
    it('Deberia crear la persona correctamente, sin padres asociados.', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Edgar Sorza", birth: "2005-10-06", fatherName: "No aplica", motherName: "No aplica" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Deberia crear la persona correctamente, con padre asociado existente y sin asociar madre', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Juliana Gonzalez", birth: "2005-10-06", fatherName: "Jorge Gonzalez", motherName: "No aplica" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Deberia crear la persona correctamente, con madre asociada existente y sin asociar padre', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Maria Charry", birth: "2005-10-06", fatherName: "No aplica", motherName: "Ana Rodriguez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Deberia crear la persona correctamente, con ambos padres asociados y existan', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Carlos Valencia", birth: "2005-10-06", fatherName: "Jorge Gonzalez", motherName: "Ana Rodriguez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });

    // Casos Fallidos

    it('Deberia generar error, debido a que el padre no existe en la BD', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Laura Leon", birth: "2005-10-06", fatherName: "Ansu Fati", motherName: "No aplica" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(406);
                done();
            });
    });

    it('Deberia generar error, debido a que el padre no existe en la BD, aunque la madre si exista', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Laura Leon", birth: "2005-10-06", fatherName: "Ansu Fati", motherName: "Ana Rodriguez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(406);
                done();
            });
    });

    it('Deberia generar error, debido a que la madre no existe en la BD', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Laura Leon", birth: "2005-10-06", fatherName: "No aplica", motherName: "Rena Florez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(406);
                done();
            });
    });

    it('Deberia generar error, debido a que la madre no existe en la BD, aunque el padre si exista', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Laura Leon", birth: "2005-10-06", fatherName: "Jorge Gonzalez", motherName: "Rena Florez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(406);
                done();
            });
    });

    it('Deberia generar error, debido a que el padre y la madre no existen en la BD', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Laura Leon", birth: "2005-10-06", fatherName: "Ansu Fati", motherName: "Rena Florez" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(406);
                done();
            });
    });

    it('Deberia generar error, debido a que la persona ya existe en la BD', (done) => {
        chai.request(url)
            .post('/create')
            .send({ name: "Juliana Gonzalez", birth: "2005-10-06", fatherName: "No aplica", motherName: "No aplica" })
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(400);
                done();
            });
    });
});


