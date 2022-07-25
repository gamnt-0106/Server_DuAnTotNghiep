import categories from "../models/category"



export const listCategories = async (req, res) => {
    try {
        const category = await categories.find().exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addCategory = async (req, res) => {
    try {
        const category = await categories(req.body).save();
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editCategory = async (req, res) => {
    try {
        const category = await categories.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeCategory = async (req, res) => {
    try {
        const category = await categories.findOneAndDelete({_id:req.params.id}).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const getCategoryById = async (req, res) => {
    try {
        const category = await categories.findOne({_id:req.params.id}).exec();
        res.json(category)  
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}


