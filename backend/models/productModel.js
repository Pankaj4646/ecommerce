import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },

    slug: {
        type: String,
        required: true,

    },

    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.ObejectId,
        ref: "Category",
        required: true,

    },
    quantity: {
        type: Number,
        required: true
    },

    photo: {
        type: Number,
        required: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    shipping: {
        type: Boolean
    }
},
    {
        timestamps: true  // automatically adds createdAt and updatedAt fields
    });

// create and export the model
const Product = mongoose.model("Product", productSchema);

export default Product;
