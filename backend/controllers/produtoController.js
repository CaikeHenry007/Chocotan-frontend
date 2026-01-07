import Produto from "../models/Produto.js";

export const listarProdutos = (req, res) => {
  Produto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

export const buscarProduto = (req, res) => {
  const { id } = req.params;
  
  Produto.getById(id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};

export const criarProduto = (req, res) => {
  const data = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
    imagem: req.file ? req.file.filename : null
  };

  Produto.create(data, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Produto criado!", id: results.insertId });
  });
};

export const atualizarProduto = (req, res) => {
  const { id } = req.params;

  const data = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    preco: req.body.preco,
  };

  if (req.file) data.imagem = req.file.filename;

  Produto.update(id, data, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Produto atualizado!" });
  });
};

export const deletarProduto = (req, res) => {
  const { id } = req.params;

  Produto.delete(id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Produto deletado!" });
  });
};
