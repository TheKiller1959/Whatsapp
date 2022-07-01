const controllers = require('./auth.controller')
const jwt = require('jsonwebtoken')
const toPromise = require('../tools/toPromise').toPromise
const config = require('../config')



const registerUser = async (req, res) => {
    
    
        const [user, err] = await toPromise(controllers.registerNewUser(req.body));
        if (err || !req.body) {
            res.status(400).json({ message: 'Data Missing' });
        }
        res.status(201).json({user});
    
}
const loginUser = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: 'Invalid Credentials' })
    }

    const [myUser, err] = await toPromise(controllers.getMyUserByEmail(req.body.email))
    if (err || !myUser) {
        return res.status(401).json({ message: 'Invalid Email' })
    }

    const verification = crypto.comparePassword(req.body.password, myUser.password)
    if (!verification) {
        return res.status(401).json({ message: 'Invalid Password' })
    }
    const token = jwt.sign({
        id: myUser.id,
        email: req.body.email
    }, config.jwtSecret)

    res.status(200).json({ token })
}

module.exports = {
    registerUser,
    loginUser
}