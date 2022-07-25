import UserSpeak from "../models/userSpeak"

export const listUserSpeak = async (req,res)=>{
    try {
        const userSpeak = await UserSpeak.find().exec()
        res.json(userSpeak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailUserSpeak = async (req,res)=>{
    try {
        const userSpeak = await UserSpeak.findOne({_id: req.params.id }).exec()
        res.json(userSpeak)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addUserSpeak = async (req,res)=>{
    try {
        const userSpeak = await UserSpeak(req.body).save()
        res.json(userSpeak)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editUserSpeak = async (req,res)=>{
    try {
        const userSpeak = await UserSpeak.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(userSpeak)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteUserSpeak = async (req,res)=>{
    try {
        const userSpeak = await UserSpeak.findOneAndDelete({_id: req.params.id }).exec()
        res.json(userSpeak)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}