import express from "express"
import { createCategoryController, UpdateCategory, getAll, getOne, deleteCategory } from "../controllers/categoryControllers.js"
import { requireMiddleware, isAdmin } from "../middlewares/authMiddleWare.js"
const router = express.Router()

router.post("/create-cateogry", requireMiddleware, isAdmin, createCategoryController)

router.put("/update-category/:id", requireMiddleware, isAdmin, UpdateCategory)
router.get("/get-all", getAll)
router.get("/get-one/:slug", getOne)
router.delete("/delete-category/:id", requireMiddleware, isAdmin, deleteCategory)




export default router