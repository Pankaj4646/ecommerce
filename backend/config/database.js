import mongoose from "mongoose"


export default async function ConnectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Connected DB : ${conn.connection.host}`)

    } catch (err) {
        console.log(`Not Conneted ${err}`, err)

    }

}


