import CategoryModel from "../models/categoryModel.js";
import slugify from "slugify"

export async function createCategoryController(req, res) {
    try {

        // Extract name from body
        const { name } = req.body

        if (!name) return res.status(400).json({
            success: false,
            message: "Required catrgory name",

        })

        // Exist Catagory

        const existCategory = await CategoryModel.findOne({ name })

        if (existCategory) return res.status(200).json({
            success: false,
            message: "Category already exists"
        })


        // create Category
        const createCat = new CategoryModel({
            name, slug: slugify(name, { lower: true, strict: true })
        })

        await createCat.save()

        res.status(201).json({
            success: true,
            message: "Create Category",
            createCat
        })

    } catch (error) {
        console.error("Error in createCategory:", error);
        res.status(500).json({
            success: false,
            message: "Error while creating category",
            error: error.message,
        })
    }

}

export async function UpdateCategory(req, res) {
    try {
        const { name } = req.body
        const { id } = req.params

        const UpdateCategory = await CategoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })

        res.status(201).json({
            success: true,
            message: "Update Category",
            UpdateCategory
        })


    } catch (error) {
        console.log(`Error`, error)
        res.status(500).json({
            success: false,
            message: "failed updation while Update",

        })
    }


}

export async function getAll(req, res) {

    try {
        const getAll = await CategoryModel.find({})

        res.status(200).json({
            success: true, message: "Get Category successfull",
            getAll
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error While get Category"
        })
    }

}

export async function getOne(req, res) {
    const { slug } = req.params
    try {
        const category = await CategoryModel.findOne({ slug })

        if (!category) {
            return res.status(404).json({
                success: false,
                message: "Category not found",
            });
        }
        res.status(200).json({
            success: true, message: "Get Category successfull",
            getAll
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error While get Category"
        })
    }

}

export async function deleteCategory(req, res) {
    try {
        const { id } = req.params
        await CategoryModel.findByIdAndDelete({ id })
        res.status(201).json({
            success: true,
            message: "Deleted"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error while in Delete",
            error
        })
    }

}

