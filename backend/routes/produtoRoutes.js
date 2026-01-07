import express from "express";
const router = express.Router();
import {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto,
} from "../controllers/produtoController.js";
import multer from "multer";

// configuração de upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// rotas
router.get("/", listarProdutos);
router.get("/:id", buscarProduto);
router.post("/", upload.single("imagem"), criarProduto);
router.put("/:id", upload.single("imagem"), atualizarProduto);
router.delete("/:id", deletarProduto);

export default router;
