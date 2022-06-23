const router = require('express').Router()
const passport = require('passport')
require('../tools/auth.passport')(passport)
const http = require('./auth.http')

router.route('/signin')
    .post(http.registerUser)
router.route('/login')
    .post(http.loginUser)


exports.router = router