import Grammar from "../models/grammar";

export const listGrammar = async (req, res) => {
    try {
        const data = await Grammar.find().exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }

}

export const addGrammar = async (req, res) => {
    console.log(req.body);
    try {
        const data = await Grammar(req.body).save();
        res.json(data)
    } catch (error) {
        res.status(400).json({message: "Fail!"})
    }
}

export const detailGrammar = async (req,res)=>{
    try {
        const data = await Grammar.findOne({_id: req.params.id }).exec()
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const updateGrammar = async (req, res) =>{
    console.log(req.body);
    try {
        const data = await Grammar.findOneAndUpdate({_id:req.params.id}, req.body, {new:true}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Lỗi"})
    }
}

export const deleteGrammar = async (req, res) => {
    try {
        const data = await Grammar.findOneAndDelete({_id:req.params.id}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

export const getDayGrammar = async (req, res) => {
    console.log(req.params.dayId);
    try {
        console.log(req.params.dayId);
        const data = await Grammar.findOne({dayId: req.params.dayId}).exec();
        res.json(data)
    } catch (error) {
        res.status(400).json({message:"nothing"})
    }
}