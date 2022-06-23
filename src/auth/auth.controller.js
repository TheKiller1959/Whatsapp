const initModels = require('../models/init-models')
const uuid =require('uuid')


const registerNewUser = async (data, hashPassword) =>{
    const id = uuid.v4()
    const fecha = new Date
    const today = fecha.getDate()
    const newUser = await models.users.create({
        id,
        ...data,
        password: hashPassword,
        createdAt: today
    })
    return newUser
}

const getMyUserByEmail = async (email) => {
    const myUser = await models.users.findOne({
        where:{
            email
        }
    })
    return myUser
}
module.exports = {
    registerNewUser,
    getMyUserByEmail
}