const db = require("../models/index");

const Employees = db.Employees;
const Permissions = db.Permissions;
const Products = db.Products;

exports.createProduct = async (req, res) => {
  try {
    const files = req.files;
    const datas = JSON.parse(req.body.datas);

    const fileNames = files.map((item) => item.filename);

    const dataToDb = {
      ...datas,
      image: JSON.stringify([...fileNames]),
    };

    await Products.create(dataToDb);

    res.status(200).json({
      message: "Produto cadastrada com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao cadastrar produto.",
      success: false,
    });
  }
};
