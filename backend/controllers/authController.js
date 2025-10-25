import UserModel from "../models/usermodel.js"
import { hashPass } from "../helpers/authHelper.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

export async function registration(req, res) {
    const { email, phone, name, password } = req.body
    try {
        if (!email || !password || !name) {
            return res.status(400).json({ success: false, msg: "Missing required fields" });
        }

        const hashedPassword = await hashPass(password)

        const userData = new UserModel({ email, password: hashedPassword, name, phone })

        await userData.save()

        return res.status(200).json({
            success: true,
            msg: "Registration Successfully",
            userData
        })
    }

    catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            msg: "  Registration failed ",
            error
        })
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body

        const getData = await UserModel.findOne({ email })

        if (!getData) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = bcrypt.compareSync(password, getData.password);



        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ user: getData._id }, process.env.JWT_SECRET, { expiresIn: "7d" })

        res.status(200).json({
            message: "Login successful", user: {
                id: getData._id,
                name: getData.name,
                email: getData.email,
                phone: getData.phone,
                role: getData.role
            }, token
        },);

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

export async function forgetPassWord(req, res) {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const hashedPassword = hashPass(password)


        await UserModel.findByIdAndUpdate({ user: user._id }, { password: hashedPassword }, { new: true })

        res.status(200).json({ message: "Password updated successfully" });



    } catch (error) {
        console.error("Error updating password:", error);
        return res.status(500).json({ message: "Internal server error" });
    }


}

export function testData(req, res) {

    res.json("Adm rourte")
}

