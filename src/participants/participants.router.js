const router = require('express').Router()
const http = require('./participants.http')

router.route('/conversations/:uuid/participans')
    .get(http.getParticipans)
    .post(http.postParticipans)


exports.router = router