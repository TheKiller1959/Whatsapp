const initModels = require('../models/init-models')
const uuid = require('uuid')

const postNewMessage = async (data) =>{
    const id = uuid.v4()
    const fecha = new Date
    const today = fecha.getDate()
    const message = await models.message.create({
        id,
        ...data,
        createdAt: today
    })
    return message
}
const getFullConver = async (id) =>{
    const fullConver = await models.conversations.findOne({
        where: {id},
        include: [
            {
                model: models.message,
                as: "messages"
            }
        ]
    })
    return fullConver
}

module.exports = {
    postNewMessage,
    getFullConver
}