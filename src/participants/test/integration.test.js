const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const {
    describe,
    it
} = require('mocha');

chai.use(chaiHttp)

describe('Suite de testing de integracion para conversaciones', () => {

    // ? Test a ruta protegida
    it('Should return 200 when data exist', (done) => {
        chai.request(app)
            .get('/api/v1/conversations')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    });

    it('Should return 200 when data is valid', (done) => {
        chai.request(app)
            .get('/api/v1/conversations/df1d80f8-e94b-40bc-8f8b-ffd715244862')
            .set('Authorization','JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhNmRlZjUwLThiYTQtNDc4OS05MjU2LTJjNTE0YTM2YzBiZCIsImVtYWlsIjoiam1veWFAYWNhZGVtbG8uY29tIiwiaWF0IjoxNjU2MDkxNTU5fQ.TSvME9SZP8e8d53J3B_ltY8V76xpsFr3iBQZ3jcTW0o')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    });


    it('Should return 401 when user has no authorization', (done) => {
        chai.request(app)
            .get('/api/v1/conversations/:uuid')
            .end((err, res) => {
                chai.assert.equal(res.status, 401)
                done()
            })
    });

    it('Should return 201 when data is sent correctly', (done) => {
        chai.request(app)
            .post('/api/v1/conversations')
            .set('content-type', 'application/json')
            .send({
                title : "prueba para eliminar",
                image_url : "",
                created_by : "da6def50-8ba4-4789-9256-2c514a36c0bd"
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 201)
                done()
            })
    });

    it('Should return 400 when the data does not exist ', (done) => {
        chai.request(app)
            .post('/api/v1/conversations')
            
            .send({
                
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 400)
                done()
            })
    });

    it('Should return 200 when data is sent correctly', (done) => {
        chai.request(app)
            .put('/api/v1/conversations/cf7e39cc-5466-4768-8426-4d7ce5979aff')
            .set('Authorization','JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhNmRlZjUwLThiYTQtNDc4OS05MjU2LTJjNTE0YTM2YzBiZCIsImVtYWlsIjoiam1veWFAYWNhZGVtbG8uY29tIiwiaWF0IjoxNjU2MDkxNTU5fQ.TSvME9SZP8e8d53J3B_ltY8V76xpsFr3iBQZ3jcTW0o')
            .send({
                title : "prueba de que salio bien",
                image_url : "",
                created_by : "da6def50-8ba4-4789-9256-2c514a36c0bd"
            })
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    })
})