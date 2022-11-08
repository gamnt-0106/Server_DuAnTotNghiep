import AnswerQuiz from "../models/answerQuiz"

export const listAnswerQuiz = async (req,res)=>{
    try {
        const answerQuiz = await AnswerQuiz.find().exec()
        res.json(answerQuiz)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const detailAnswerQuiz = async (req,res)=>{
    try {
        const answerQuiz = await AnswerQuiz.findOne({_id: req.params.id }).exec()
        res.json(answerQuiz)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy Data"})
    }
}

export const addAnswerQuiz = async (req,res)=>{
    try {
        const answerQuiz = await AnswerQuiz(req.body).save()
        res.json(answerQuiz)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editAnswerQuiz = async (req,res)=>{
    try {
        const answerQuiz = await AnswerQuiz.findOneAndUpdate({_id: req.params.id }, req.body ,{new:true}).exec()
        res.json(answerQuiz)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const deleteAnswerQuiz = async (req,res)=>{
    try {
        const answerQuiz = await AnswerQuiz.findOneAndDelete({_id: req.params.id }).exec()
        res.json(answerQuiz)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}

export const getAnswerByIdQuiz = async (req,res)=>{
  try {
      const answerQuiz = await AnswerQuiz.find({quiz: req.params.quiz }).exec()
      res.json(answerQuiz)
  } catch (error) {
      res.status(400).json({message:"Không tìm thấy Data"})
  }
}