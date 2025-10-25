import express from "express"
// import registration from "../controllers/authController.js"
import { forgetPassWord, login, registration, } from "../controllers/authController.js"
import { testData } from "../controllers/authController.js"
import { requireMiddleware, isAdmin } from "../middlewares/authMiddleWare.js"

const router = express.Router()

router.post("/register", registration)
router.post("/login", login)
router.post("/forget-password", forgetPassWord)
router.get("/test", requireMiddleware, testData)
router.get("/user-auth", requireMiddleware, (req, res) => {
    res.status(201).send({ ok: true })

})
router.get("/admin-auth", requireMiddleware, isAdmin, (req, res) => {
    res.status(201).send({ ok: true })

})





export default router


