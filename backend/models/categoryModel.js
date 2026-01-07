import db from '../config/db.js';

export const CategoryModel = {
  create: (name, slug) => {
    const sql = "INSERT INTO categories (name, slug) VALUES (?, ?)";
    return db.execute(sql, [name, slug]);
  },

  findAll: () => {
    const sql = "SELECT * FROM categories ORDER BY created_at DESC";
    return db.execute(sql);
  },

  findById: (id) => {
    const sql = "SELECT * FROM categories WHERE id = ?";
    return db.execute(sql, [id]);
  },

  findBySlug: (slug) => {
    const sql = "SELECT * FROM categories WHERE slug = ?";
    return db.execute(sql, [slug]);
  },

  update: (id, name, slug) => {
    const sql = "UPDATE categories SET name = ?, slug = ? WHERE id = ?";
    return db.execute(sql, [name, slug, id]);
  },

  delete: (id) => {
    const sql = "DELETE FROM categories WHERE id = ?";
    return db.execute(sql, [id]);
  }
};
