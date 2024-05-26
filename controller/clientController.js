const db = require("../models/index");

const Clients = db.Clients;

exports.createClient = async (req, res) => {
  try {
    const datas = req.body;

    const dataToDb = {
      ...datas,
    };

    await Clients.create(dataToDb);

    res.status(200).json({
      message: "Cliente cadastrado com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao cadastrar cliente.",
      success: false,
    });
  }
};

exports.listClients = async (req, res) => {
  try {
    const clients = await Clients.findAll();

    res.status(200).json({
      clients,
      message: "Lista de clientes carregada com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao buscar clientes.",
      success: false,
    });
  }
};
