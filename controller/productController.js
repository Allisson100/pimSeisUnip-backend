const db = require("../models/index");
const { Op } = require("sequelize");

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

exports.listProducts = async (req, res) => {
  try {
    const { page, size } = req.params;
    const { searchingFor } = req.query;

    const getPage = parseFloat(page);
    const newPage = Number(getPage - 1);

    if (
      searchingFor !== null &&
      searchingFor !== undefined &&
      searchingFor !== ""
    ) {
      const productsFiltered = await Products.findAll({
        where: {
          [Op.or]: [
            {
              barcode: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
            {
              name: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
            {
              category: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
            {
              manufacturer: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
            {
              price: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
            {
              platform: {
                [Op.like]: `%${searchingFor}%`,
              },
            },
          ],
        },
      });

      res.status(200).json({
        productsFiltered,
        message: "Lista de produtos carregada com sucesso.",
        success: true,
      });
    } else {
      const products = await Products.findAll({
        offset: newPage * size,
        limit: parseInt(size),
      });

      res.status(200).json({
        products,
        message: "Lista de produtos carregada com sucesso.",
        success: true,
      });
    }
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao cadastrar produto.",
      success: false,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { uuid } = req.params;

    await Products.destroy({
      where: {
        uuid: uuid,
      },
    });

    res.status(200).json({
      message: "Produto deletado com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao deletar produto.",
      success: false,
    });
  }
};

exports.findProductById = async (req, res) => {
  try {
    const { uuid } = req.params;

    const product = await Products.findOne({
      where: {
        uuid: uuid,
      },
    });

    res.status(200).json({
      product,
      message: "Produto encontrado com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao procurar produto.",
      success: false,
    });
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { uuid } = req.params;
    const datas = req.body;

    await Products.update(datas, {
      where: {
        uuid: uuid,
      },
    });

    res.status(200).json({
      message: "Produto editado com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao editar produto.",
      success: false,
    });
  }
};
