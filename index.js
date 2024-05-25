require("dotenv").config();
const express = require("express");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");
const productsRoutes = require("./routes/productsRoutes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);
app.use("/products", productsRoutes);
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

app.use("/", (req, res) => {
  res.send("Tá funcionando");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server running ... PORT: ${PORT}`);
});
