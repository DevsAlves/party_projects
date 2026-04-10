const Party = require("../models/Party");

const checkPartyBudget = (budget, services) => {
  const priceSum = services.reduce((sum, service) => sum + service.price, 0);


  if (priceSum > budget) {
    return false;
  }

  return true;
};

const partyController = {
  create: async (req, res) => {
    try {
      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "Orçamento insuficiente" });
        return;
      }

      const response = await Party.create(party);

      res.status(201).json({ response, msg: "Festa criada com sucesso" });
    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const parties = await Party.find();
      res.json(parties);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await Party.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Festa não encontrada" });
      }

      res.json(party);
    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const party = await Party.findById(id);

      if (!party) {
        return res.status(404).json({ msg: "Festa não encontrada" });
      }

      const deletedParty = await Party.findByIdAndDelete(id);

      res.status(200).json({ deletedParty, msg: "Festa excluída" });
    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const party = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        budget: req.body.budget,
        image: req.body.image,
        services: req.body.services,
      };

      if (party.services && !checkPartyBudget(party.budget, party.services)) {
        res.status(406).json({ msg: "Orçamento insuficiente" });
        return;
      }

      const updateParty = await Party.findByIdAndUpdate(id, party);

      if (!updateParty) {
        return res.status(404).json({ msg: "Festa não encontrada" });
      }

      res.status(200).json({ updateParty, msg: "Festa foi atualizada" });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = partyController;
