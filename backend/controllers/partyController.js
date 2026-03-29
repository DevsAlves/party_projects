const {Party : PartyModel} = require("../models/Party")

const partyController = {
    create: async(req, res) => {
        try {
            const party = {
                title: req.body.title,
                author:req.body.author,
                description:req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services
            }

        const response = await PartyModel.create(party)

        res.status(201).json({response , msg:"Festa criada com sucesso"})
        
        } catch (error) {
            console.log(error)
        }
    },
    getAll: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    get: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    delete: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    },
    update: async(req, res) => {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = partyController