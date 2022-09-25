import comment from "../models/comment"



export const listComment = async (req, res) => {
    try {
        const comment = await comment.find().exec();
        res.json(comment)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addComment = async (req, res) => {
    try {
        const comment = await comment(req.body).save();
        res.json(comment)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editComment = async (req, res) => {
    try {
        const comment = await comment.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(comment)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeComment = async (req, res) => {
    try {
        const comment = await comment.findOneAndDelete({_id:req.params.id}).exec();
        res.json(comment)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const getCommentById = async (req, res) => {
    try {
        const comment = await comment.findOne({_id:req.params.id}).exec();
        res.json(comment)  
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}


