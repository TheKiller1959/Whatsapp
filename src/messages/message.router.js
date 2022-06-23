const router = require('express').Router()
const http = require('./message.http')

router.route('/conversations/:uuid/message')
    .get(http.getMessage)
    .post(http.postMessage)
    //.delete()



exports.router = router