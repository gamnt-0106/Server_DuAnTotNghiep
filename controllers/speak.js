import Speak from "../models/speak";

export const listSpeak = async (req,res)=>{
    try {
        const speak = await Speak.find().exec()
        res.json(speak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailSpeak = async (req,res)=>{
    try {
        const speak = await Speak.findOne({_id: req.params.id }).exec()
        res.json(speak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addSpeak = async (req,res)=>{
    try {
        const speak = await Speak(req.body).save()
        res.json(speak)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editSpeak = async (req,res)=>{
    try {
        const speak = await Speak.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(speak)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteSpeak = async (req,res)=>{
    try {
        const speak = await Speak.findOneAndDelete({_id: req.params.id }).exec()
        res.json(speak)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}