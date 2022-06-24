const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const { describe, it, before } = require('mocha');

chai.use(chaiHttp)

describe('Suite de testing de integracion para AUTH', () => {
  // ? Test a ruta protegida
  it('Should return 401 when no jwt available', (done) => {
    chai.request(app)
      .get('/api/v1/auth/login')
      .end((err, res) => {
        chai.assert.equal(res.status, 401)
        done()
      })
  })

  //? Test a login sin data
  it('Should return 400 when no data id provided', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .end((err, res) => {
        chai.assert.equal(res.status, 400)
        done()
      })
  })

  //? Test a login con informacion correcta
  it('Should reutn 200 when jwt is valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .set("content-type", "application/json")
      .send({"id": "2c3ac422-9309-4dff-80ca-8824091de982",
      firstname: "alivier",
      lastname: "zapata",
      email: "alivierz@cademlo.com",
      password: "$2b$10$TxqtNPqRtDGy7EW9QxFTPucgScZ6up70K/GTKYpxkxiaAbrDZACYK",
      profile_image: "",
      phone: "98328480"
      })
      .end((err, res) => {
        chai.assert.equal(res.status, 200)
        chai.assert.typeOf(res.body.token, 'string')
        done()
      })
  })
})