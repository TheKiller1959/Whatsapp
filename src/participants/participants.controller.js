const { participants, conversations } = require('../models/init-models').initModels();
const uuid = require('uuid')


const postPartici = async (data, idC) => {
    const id = uuid.v4()
    const fecha = new Date
    const today = fecha.getDate()
    const participan = await participants.create({
        id,
        ...data,
        conversation_id: idC,
        createdAt: today
    })
    return participan
}
const getPartici = async (id) => {
    const participants = await conversations.findOne({
        where: {
            id
        },
        include: [
            {
                model: participants,
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