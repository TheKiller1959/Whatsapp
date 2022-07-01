const users = require('../database/models/init-models').initModels().users;
const uuid =require('uuid')
const crypto = require('../tools/crypto')

const registerNewUser = async (data) =>{
    
        const hashedPassword = crypto.hashPassword(data.password);
        const user_id = uuid.v4();
        const newUser = await users.create({
            id: user_id,
            ...data,
            password: hashedPassword
        });
        return {
            message: `User created succesfully with the id: ${user_id}`,
            user: newUser,
        };
}

const getMyUserByEmail = async (email) => {
    const myUser = await users.findOne({
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