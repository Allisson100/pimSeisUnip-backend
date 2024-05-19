const jwt = require("jsonwebtoken");

const TOKEN_EXPIRATION_TIME = 259200; // 3 dias em segundos

exports.login = async (req, res) => {
  // try {
  //   const { email, password } = req.body;
  //   // Verifica no banco de dados e retorna o token
  //   //Caso ache o suaurio no bacno devemos comaprar as senhas
  //   // const passwordMatch = await bcrypt.compare(password, senha_hash_que_vem_do_banco);
  //   if (passwordMatch) {
  //     const token = jwt.sign(
  //       {
  //         // Infos do usuário
  //       },
  //       process.env.JWT_SECRET,
  //       { expiresIn: TOKEN_EXPIRATION_TIME }
  //     );
  //     res.status(200).json({
  //       message: "Login efetuado com sucesso.",
  //       token,
  //       success: true,
  //     });
  //   } else {
  //     res.status(200).json({
  //       message: "Credenciais inválidas ou usuário não cadastrado.",
  //       success: false,
  //     });
  //   }
  // } catch (error) {
  //   res.status(200).json({
  //     message: "Erro ao efetuar o login, tente novamente.",
  //     success: false,
  //   });
  // }
};
