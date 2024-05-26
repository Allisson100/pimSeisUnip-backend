const db = require("../models/index");

const Sales = db.Sales;

exports.createSale = async (req, res) => {
  try {
    const datas = req.body;

    const dataToDb = {
      ...datas,
      products: JSON.stringify(datas?.products),
      observations: JSON.stringify(datas?.observations),
    };

    await Sales.create(dataToDb);

    res.status(200).json({
      message: "Venda cadastrada com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao cadastrar venda.",
      success: false,
    });
  }
};

exports.listSales = async (req, res) => {
  try {
    const sales = await Sales.findAll();

    res.status(200).json({
      sales,
      message: "Lista de vendas carregada com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao buscar vendas.",
      success: false,
    });
  }
};
