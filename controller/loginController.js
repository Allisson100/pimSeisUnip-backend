const bcrypt = require("bcrypt");
const db = require("../models/index");

const Employees = db.Employees;
const Permissions = db.Permissions;

const jwt = require("jsonwebtoken");
const TOKEN_EXPIRATION_TIME = 259200; // 3 dias em segundos

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Employees.findOne({
      where: {
        email: email,
      },
      include: [
        {
          model: Permissions,
        },
      ],
    });

    console.log("user", user.Permission.dataValues.name);

    if (user) {
      const userPassword = user?.dataValues?.password;
      const passwordMatch = await bcrypt.compare(password, userPassword);

      if (passwordMatch) {
        const token = jwt.sign(
          {
            name: user?.dataValues?.name || null,
            email: user?.dataValues?.email || null,
            cpf: user?.dataValues?.cpf || null,
            permission: user?.Permission?.dataValues?.name || null,
          },
          process.env.JWT_SECRET,
          { expiresIn: TOKEN_EXPIRATION_TIME }
        );

        res.status(200).json({
          message: "Login efetuado com sucesso.",
          token,
          success: true,
        });
      } else {
        res.status(200).json({
          message: "Credenciais inválidas ou usuário não cadastrado.",
          success: false,
        });
      }
    } else {
      throw new Error("Usuário não encontrado");
    }
  } catch (error) {
    res.status(200).json({
      message: error?.message || "Erro ao efetuar o login, tente novamente.",
      success: false,
    });
  }
};
