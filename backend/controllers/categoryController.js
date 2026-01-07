import { CategoryModel } from "../models/categoryModel.js";
import slugify from "slugify";

export const CategoryController = {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Nome é obrigatório" });
    }

    const slug = slugify(name, { lower: true, strict: true });

    try {
      await CategoryModel.create(name, slug);
      return res.status(201).json({ message: "Categoria criada com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao criar categoria", error });
    }
  },

  async index(req, res) {
    try {
      const [categories] = await CategoryModel.findAll();
      return res.json(categories);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao listar categorias" });
    }
  },

  async show(req, res) {
    const { id } = req.params;

    try {
      const [category] = await CategoryModel.findById(id);

      if (category.length === 0) {
        return res.status(404).json({ message: "Categoria não encontrada" });
      }

      return res.json(category[0]);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar categoria" });
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    const slug = slugify(name, { lower: true, strict: true });

    try {
      await CategoryModel.update(id, name, slug);
      return res.json({ message: "Categoria atualizada com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao atualizar categoria" });
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      await CategoryModel.delete(id);
      return res.json({ message: "Categoria removida com sucesso" });
    } catch (error) {
      return res.status(500).json({ message: "Erro ao remover categoria" });
    }
  }
};
