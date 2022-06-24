const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const {
    describe,
    it
} = require('mocha');

chai.use(chaiHttp)

describe('Suite de testing de integracion para Users', () => {

    // ? Test a ruta protegida
    it('Should return 401 when user has no authorization', (done) => {
        chai.request(app)
            .get('/api/v1/users/:id')
            .end((err, res) => {
                chai.assert.equal(res.status, 401)
                done()
            })
    })

    //? Test an id with data
    it('Should return 200 when data id provided', (done) => {
        chai.request(app)
            .get('/api/v1/users')
            .end((err, res) => {
                chai.assert.equal(res.status, 200)
                done()
            })
    })

    //   //? Test a login con informacion correcta
    //   it('Should reutn 200 when jwt is valid', (done) => {
    //     chai.request(app)
    //       .post('/api/v1/auth/login')
    //       .set("content-type", "application/json")
    //       .send({
    //         email: "sahid.kick@academlo.com",
    //         password: "root"
    //       })
    //       .end((err, res) => {
    //         chai.assert.equal(res.status, 200)
    //         chai.assert.typeOf(res.body.token, 'string')
    //         done()
    //       })
    //   })
})