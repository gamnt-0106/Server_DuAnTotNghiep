import History from "../models/history"


export const listHistory = async (req,res)=>{
    try {
        const history = await History.find().exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailHistory = async (req,res)=>{
    try {
        const history = await History.findOne({_id: req.params.id }).exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addHistory = async (req,res)=>{
    try {
        const history = await History(req.body).save()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editHistory = async (req,res)=>{
    try {
        const history = await History.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteHistory = async (req,res)=>{
    try {
        const history = await History.findOneAndDelete({_id: req.params.id }).exec()
        res.json(history)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}