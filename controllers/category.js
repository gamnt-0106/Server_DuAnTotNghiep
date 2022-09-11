
import categories from "../models/category"
import ListenWrite from "../models/listenWrite";
import Quiz from "../models/quiz";
import Speak  from "../models/speak";



export const listCategories = async (req, res) => {
    try {
        const category = await categories.find().exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const detailCategory = async (req, res) => {
    try {
        const category = await categories.findOne({_id: req.params.id }).exec();
        const quizs = await Quiz.find({category: category._id}).populate("category").exec()

        const speak = await Speak.find({category: category._id}).populate("category").exec()
        const listenWrite = await ListenWrite.find({category: category._id}).populate("category").exec()
        res.json({category, quizs, speak, listenWrite})

        // const quiz = await Quiz.findOne({_id: req.params.id }).exec()
        // const answerQuiz = await AnswerQuiz.find({quiz}).populate("quiz").exec()
        // res.json({quiz,answerQuiz})
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


