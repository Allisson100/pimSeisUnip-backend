require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");
const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Tá funcionando");
});

app.use("/login", loginRoutes);

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server running ... PORT: ${PORT}`);
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Modelos sincronizados com o banco de dados");
  })
  .catch((error) => {
    console.error("Erro ao sincronizar modelos:", error);
  });
