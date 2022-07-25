import AnswerSpeak from "../models/answerSpeak"

export const listAnswerSpeak = async (req,res)=>{
    try {
        const answerSpeak = await AnswerSpeak.find().exec()
        res.json(answerSpeak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailAnswerSpeak = async (req,res)=>{
    try {
        const answerSpeak = await AnswerSpeak.findOne({_id: req.params.id }).exec()
        res.json(answerSpeak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addAnswerSpeak = async (req,res)=>{
    try {
        const answerSpeak = await AnswerSpeak(req.body).save()
        res.json(answerSpeak)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editAnswerSpeak = async (req,res)=>{
    try {
        const answerSpeak = await AnswerSpeak.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(answerSpeak)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteAnswerSpeak = async (req,res)=>{
    try {
        const answerSpeak = await AnswerSpeak.findOneAndDelete({_id: req.params.id }).exec()
        res.json(answerSpeak)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}