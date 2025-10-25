import express from "express"
import ConnectDB from "./config/database.js"
import cors from "cors";
import mongoose from "mongoose"
import dotenv from "dotenv";
import morgan from "morgan"
import authRoutes from "./routes/authRoute.js"
import categoryRoute from "./routes/categoryRoute.js"

const app = express()


// DotEnv
dotenv.config();

//Connect Db from MongoDB
ConnectDB()

app.use(cors());
app.use(express.json())

app.use(morgan("dev"))


app.use("/api/v1", authRoutes)
app.use("/api/v1/category", categoryRoute)



app.get("/", (req, res) => {
    res.send("This is a Home-page")
})


// Listner
app.listen(process.env.PORT, () => {
    console.log(
        `Server is running ${process.env.PORT}`
    )
})

