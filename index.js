require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");
const { sequelize } = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);

app.use("/", (req, res) => {
  res.send("Tá funcionando");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server running ... PORT: ${PORT}`);
});
