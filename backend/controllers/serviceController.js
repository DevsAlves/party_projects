// Importa o model "Service" do arquivo de models e renomeia para ServiceModel
const { Service: ServiceModel } = require("../models/Service");

// Cria um objeto que vai agrupar os métodos do controller
const serviceController = {
  // Método assíncrono para criar um novo serviço
  create: async (req, res) => {
    try {
      // Monta o objeto "service" com dados vindos da requisição (req.body)
      const service = {
        name: req.body.name, // Nome do serviço enviado no body
        description: req.body.description, // Descrição do serviço
        price: req.body.price, // Preço (ERRO: está pegando description ao invés de price)
        image: req.body.image, // URL ou caminho da imagem
      };

      // Chama o model para salvar o serviço no banco de dados
      const response = await ServiceModel.create(service);

      // Retorna status 201 (criado) com os dados e uma mensagem
      res.status(201).json({ response, msg: "Serviço criado com sucesso!" });
    } catch (error) {
      // Em caso de erro, exibe no console
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const services = await ServiceModel.find();
      res.json(services);
    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      res.json(service);
    } catch (error) {
      res.status(404).json({ msg: "Serviço não encontrado" });
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;
      const service = await ServiceModel.findById(id);

      const deleteService = await ServiceModel.findByIdAndDelete(id);

      res.status(200).json({ deleteService, msg: "Serviço deletado" });
    } catch (error) {
      res.status(404).json({ msg: "Serviço não encontrado" });
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;
      const service = {
        name: req.body.name, // Nome do serviço enviado no body
        description: req.body.description, // Descrição do serviço
        price: req.body.price, // Preço (ERRO: está pegando description ao invés de price)
        image: req.body.image, // URL ou caminho da imagem
      };

      const updateService = await ServiceModel.findByIdAndUpdate(id, service);
      res.status(200).json({ service, msg: "Serviço atualizado" });
    } catch (error) {
      res.status(404).json({ msg: "Serviço não encontrado" });
      console.log(error);
    }
  },
};

// Exporta o controller para ser usado nas rotas
module.exports = serviceController;
