const { describe, it } = require("mocha");
const assert = require("chai").assert;
const converControllers = require('../conversation.controller')


describe("Suite de Testing unitario para los controladores de conversaciones", () => {
    it("Testing to getAllconversations", (done) => {
        const testFunc = converControllers.getMyCon(0)
        assert.equal(testFunc.image_url, 'prueba')
        done()
    });
});