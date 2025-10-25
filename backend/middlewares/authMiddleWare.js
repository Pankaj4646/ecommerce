import jwt from "jsonwebtoken"
import UserModel from "../models/usermodel.js"

export async function requireMiddleware(req, res, next) {
    try {

        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)

        req.user = decode
        next()

    } catch (error) {
        console.log(error)
    }

}

export async function isAdmin(req, res, next) {
    try {
        const userId = req.user.user
        console.log(userId)
        const user = await UserModel.findById(userId);
        if (!user || user.role !== 1) {
            return res.status(403).json({ success: false, message: "Unauthorized Admin Access" });
        }
        next();
    } catch (error) {
        console.error("Error in Admin Middleware:", error);
        res.status(500).json({ success: false, message: "Error in admin middleware" });
    }
}

