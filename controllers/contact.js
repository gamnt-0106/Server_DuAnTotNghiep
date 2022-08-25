import contact from "../models/contact"



export const listContact = async (req, res) => {
    try {
        const contact = await contact.find().exec();
        res.json(contact)
    } catch (error) {
        res.status(400).json({message:"Không tìm thấy"})
    }
}

export const addContact = async (req, res) => {
    try {
        const contact = await contact(req.body).save();
        res.json(contact)
    } catch (error) {
        res.status(400).json({message:"Thêm thất bại"})
    }
}


export const editContact = async (req, res) => {
    try {
        const contact = await contact.findOneAndUpdate({_id:req.params.id}, req.body, {new: true});
        res.json(contact)
    } catch (error) {
        res.status(400).json({message:"Sửa thất bại"})
    }
}

export const removeContact = async (req, res) => {
    try {
        const contact = await contact.findOneAndDelete({_id:req.params.id}).exec();
        res.json(contact)
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}
export const getContactById = async (req, res) => {
    try {
        const contact = await contact.findOne({_id:req.params.id}).exec();
        res.json(contact)  
    } catch (error) {
        res.status(400).json({message:"Xóa thất bại"})
    }
}


