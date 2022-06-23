const initModels = require('../models/init-models')
const sequelize = require('../models/index').sequelize
const models = initModels(sequelize)
const uuid = require('uuid')


const postPartici = async (data, idC) =>{
    const id = uuid.v4()
    const fecha = new Date
    const today = fecha.getDate()
    const participan = await models.participants.create({
        id,
        ...data,
        conversation_id: idC,
        createdAt: today
    }) 
    return participan
}
const getPartici = async (id) =>{
    const participants = await models.conversations.findOne({
        where:{
            id
        },
        include: [
            {
                model: models.participants,
                as: "participants"
            }
        ]
    })
    return participants
}
module.exports = {
    postPartici,
    getPartici
}