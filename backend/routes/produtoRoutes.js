const express = require("express");
const router = express.Router();
const produtoController = require("../controllers/produtoController");
const multer = require("multer");

// configuração de upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// rotas
router.get("/", produtoController.listarProdutos);
router.get("/:id", produtoController.buscarProduto);
router.post("/", upload.single("imagem"), produtoController.criarProduto);
router.put("/:id", upload.single("imagem"), produtoController.atualizarProduto);
router.delete("/:id", produtoController.deletarProduto);

module.exports = router;
