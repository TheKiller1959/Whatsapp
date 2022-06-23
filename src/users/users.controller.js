const initModels = require('../models/init-models')


const getAll = async () =>{
    const users = await models.users.findAll({})
    return users
}
const getMyUser = async (id) =>{
    const user = await models.users.findOne({
        where:{
            id
        }
    })

    return user
}

const updateMyUser = async (id, data) =>{
    const update = await models.users.update({...data} ,  {where: {id}})
    if(update){
        const user = await models.users.findOne({
            where: {id}
        })
        return user
    }
    return null
}

const deleteUser = async (id) =>{
    const deleteUser = await models.users.destroy({
        where: {
            id
        }
    })
    return deleteUser
}

const getMeUser = async (email) =>{
    const user = await models.users.findOne({
        where: {
            email
        }
    })
    return user
}
module.exports = {
    getAll,
    getMyUser,
    updateMyUser,
    deleteUser,
    getMeUser
}