import express from "express";
import cors from "cors";
import produtoRoutes from "./routes/produtoRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.use("/api/produtos", produtoRoutes);

app.use("/categories", categoryRoutes);

app.get("/", (req, res) => {
  res.send("API da marca de chocolate funcionando! 🍫");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
