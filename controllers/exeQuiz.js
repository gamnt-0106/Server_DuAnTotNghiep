import ExeQuiz from "../models/ExeQuiz";



export const listExeQuiz = async (req, res) => {
    try {
        const quiz = await ExeQuiz.find().exec();
        res.json(quiz)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addQuiz = async (req, res) => {
    try {
        const quiz = await ExeQuiz(req.body).save();
        res.json(quiz)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editQuiz = async (req, res) => {
    try {
        const quiz = await ExeQuiz.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(quiz)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeQuiz = async (req, res) => {
    try {
        const quiz = await ExeQuiz.findOneAndDelete({id:req.params.id});
        res.json(quiz)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

