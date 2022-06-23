const { assert } = require("chai");
const res = require("express/lib/response");
const { describe } = require("mocha");
const userControllers = require('../../users/users.controller')

describe('Suite de Testing unitario para el controlador de usuarios getAllUsers', () => {
  it('Should return correctly the body', (done) => {
    const result = getAll(1, body)
    assert.equal(result.id, 1)
    assert.equal(result.password, body.password)
    assert.equal(result.name, 'Sahid')
    assert.equal(result.email, body.email)
    assert.typeOf(result.password, 'string')
    done()
  })
})