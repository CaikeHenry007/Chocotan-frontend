import dotenv from "dotenv";

import express from "express";
import cors from "cors";
import path from "path";
import produtoRoutes from "./routes/produtoRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static(path.resolve("uploads")));

app.use("/api/produtos", produtoRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/categories", categoryRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("API da marca de chocolate funcionando! 🍫");
});

const PORT = 3000;

app.get("/teste", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
