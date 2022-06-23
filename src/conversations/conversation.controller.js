const initModels = require('../models/init-models')
const sequelize = require('../models/index').sequelize
const models = initModels(sequelize)
const uuid = require('uuid')


const getAllConversations = async () =>{
    const conversations = await models.conversations.findAll({})
    return conversations
}
const createConversation = async (data) =>{
    const id = uuid.v4()
    const fecha = new Date
    const today = fecha.getDate()
    const newConver = await models.conversations.create({
        id,
        ...data,
        createdAt: today
    })
    return newConver
}
const getMyCon = async (id) =>{
    const userCon = await models.conversations.findOne({
        where:{
            id
        }
    })
    return userCon
}

const updateCon = async (body, id) => {
    const fecha = new Date
    const today = fecha.getDate()
    const conversationU = await models.conversations.update({...body, updatedAt: today} ,  {where: {id}})
    if(!conversationU){
        return null
    }
    const update = await getMyCon(id)
    return update
}
const deleteConv = async (id) =>{
    const deleteCon = await models.conversations.destroy({
        where:{
            id
        }
    })
    return deleteCon
}
module.exports = {
    createConversation,
    getAllConversations,
    getMyCon,
    updateCon,
    deleteConv
}