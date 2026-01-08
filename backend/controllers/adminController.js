import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AdminModel } from "../models/adminModel.js";

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha obrigatórios" });
  }

  try {
    const [existing] = await AdminModel.findByEmail(email);

    if (existing.length > 0) {
      return res.status(400).json({ message: "Admin já existe" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await AdminModel.create(name, email, hashedPassword);

    return res.status(201).json({ message: "Admin criado com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao registrar admin" });
  }
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [admins] = await AdminModel.findByEmail(email);

    if (admins.length === 0) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const admin = admins[0];

    const validPassword = await bcrypt.compare(password, admin.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        isAdmin: true,
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    return res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao fazer login" });
  }
};
