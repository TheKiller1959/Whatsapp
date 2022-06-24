const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../../app').app
const { describe, it, before } = require('mocha');

chai.use(chaiHttp)

describe('Suite de testing de integracion para Users', () => {

  it('Should return 401 when user has no authorization', (done) => {
    chai.request(app)
      .get('/api/v1/users/:uuid')
      .end((err, res) => {
        chai.assert.equal(res.status, 401)
        done()
      })
  })

  it('Should return 200 when user data provided', (done) => {
    chai.request(app)
      .get('/api/v1/users')
      .end((err, res) => {
        chai.assert.equal(res.status, 200)
        done()
      })
  })

  it('Should return 401 when admin has no authorization to view personal profile info', (done) => {
    chai.request(app)
      .get('/api/v1/users/me')
      .end((err, res) => {
        chai.assert.equal(res.status, 401)
        done()
      })
  })
})