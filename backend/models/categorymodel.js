
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        lowercase: true,
        trim: true

    },

}, { timestamps: true })

const CategoryModel = mongoose.models.Category || mongoose.model("Category", categorySchema)


export default CategoryModel