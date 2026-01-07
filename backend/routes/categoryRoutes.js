import { Router } from "express";
import { CategoryController } from "../controllers/categoryController.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const router = Router();

router.post("/", authAdmin, CategoryController.create);
router.get("/", CategoryController.index);
router.get("/:id", CategoryController.show);
router.put("/:id", authAdmin, CategoryController.update);
router.delete("/:id", authAdmin, CategoryController.delete);

export default router;
