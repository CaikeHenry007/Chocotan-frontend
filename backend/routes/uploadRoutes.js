import express from "express";
import upload from "../uploads/multer.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Nenhuma imagem enviada" });
  }

  res.status(201).json({
    message: "Upload realizado com sucesso",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
});

export default router;
