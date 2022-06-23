const controllers = require('./participants.controller')

const postParticipans = async (req, res) =>{
    if(!req.body){
        return res.status(400).json({message: 'Misssing Data 1'})
    }
    const newPar = await controllers.postPartici(req.body, req.params.uuid)
    
    if(!newPar){
        return res.status(400).json({message: 'Missing Data 2'})
    }
    res.status(201).json(newPar)
}
const getParticipans = async (req, res) =>{
    if(!req.params){
        return res.status(400).json({message: 'Misssing Data 1'})
    }
    const participants = await controllers.getPartici(req.params.uuid)
    if(!participants){
        return res.status(400).json({message: 'Missing Data 2'})
    }
    res.status(201).json(participants)
}
module.exports = {
    postParticipans,
    getParticipans
}





