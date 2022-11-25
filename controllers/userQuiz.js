import UserQuiz from "../models/userQuiz"

export const listUserQuiz = async (req, res) => {
    try {
        const userQuiz = await UserQuiz.find().exec()
        res.json(userQuiz)
    } catch (error) {
        res.status(400).json({ message: "Không tìm thấy Data" })
    }
}

export const detailUserQuiz = async (req, res) => {
    try {
        const userQuiz = await UserQuiz.findOne({ _id: req.params.id }).exec()
        res.json(userQuiz)
    } catch (error) {
        res.status(400).json({ message: "Không tìm thấy Data" })
    }
}

export const addUserQuiz = async (req, res) => {
    try {
        const userQuiz = await UserQuiz(req.body).save()
        res.json(userQuiz)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}

export const editUserQuiz = async (req, res) => {
    try {
        const userQuiz = await UserQuiz.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec()
        res.json(userQuiz)
    } catch (error) {
        res.status(400).json({ message: "Sửa thất bại" })
    }
}

export const deleteUserQuiz = async (req, res) => {
    try {
        const userQuiz = await UserQuiz.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(userQuiz)
    } catch (error) {
        res.status(400).json({ message: "Xóa thất bại" })
    }
}