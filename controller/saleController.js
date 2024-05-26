const db = require("../models/index");

const Sales = db.Sales;
const Clients = db.Clients;
const Products = db.Products;

const getClientProv = async (uuid) => {
  const client = await Clients.findOne({
    where: {
      uuid: uuid,
    },
  });

  return {
    ...client.dataValues,
  };
};

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

    const newArray = await Promise.all(
      sales?.map(async (sale) => {
        const getObservations = JSON.parse(sale?.dataValues?.observations);
        const getProducts = JSON.parse(sale?.dataValues?.products);

        return {
          id: sale?.dataValues?.id,
          uuid: sale?.dataValues?.uuid,
          products: await Promise.all(
            getProducts?.map(async (item) => {
              const { dataValues } = await Products.findOne({
                where: {
                  uuid: item,
                },
              });

              return {
                ...dataValues,
              };
            })
          ),
          client_uuid: sale?.dataValues?.client_uuid,
          canceled: sale?.dataValues?.canceled,
          client: await getClientProv(sale?.dataValues?.client_uuid),
          price: sale?.dataValues?.price,
          payment_method: sale?.dataValues?.payment_method,
          payment_status: sale?.dataValues?.payment_status,
          sale_status: sale?.dataValues?.sale_status,
          observations: getObservations,
          createdAt: sale?.dataValues?.createdAt,
          updatedAt: sale?.dataValues?.updatedAt,
        };
      })
    );

    res.status(200).json({
      sales: newArray,
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

exports.cancelSales = async (req, res) => {
  try {
    const { uuid } = req.params;

    const dataToUpdate = {
      canceled: true,
    };

    await Sales.update(dataToUpdate, {
      where: {
        uuid: uuid,
      },
    });

    res.status(200).json({
      message: "Venda cancelada com sucesso.",
      success: true,
    });
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao cancelar venda.",
      success: false,
    });
  }
};
