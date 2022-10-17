import replycomment from "../models/replycomment"



export const listreplyComment = async (req, res) => {
    try {
        const comments = await replycomment.find().exec();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addreplyComment = async (req, res) => {
    try {
        const comments = await replycomment(req.body).save();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editreplyComment = async (req, res) => {
    try {
        const comments = await replycomment.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removereplyComment = async (req, res) => {
    try {
        const comments = await replycomment.findOneAndDelete({_id:req.params.id}).exec();
        res.json(comments)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const getreplyCommentById = async (req, res) => {
    try {
        const comments = await replycomment.findOne({_id:req.params.id}).exec();
        res.json(comments)  
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}



