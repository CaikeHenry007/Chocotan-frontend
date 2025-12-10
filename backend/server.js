const express = require("express");
const cors = require("cors");
const produtoRoutes = require("./routes/produtoRoutes");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/produtos", produtoRoutes);

app.get("/", (req, res) => {
  res.send("API da marca de chocolate funcionando! 🍫");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
