import LearningProgress from "../models/learningProgress";
export const getListLearningProgress = async (req, res) => {
  try {
    const list = await LearningProgress.find()
      .populate("user")
      .populate("day")
      .exec();
    res.json(list);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const detailLearningProgress = async (req, res) => {
  try {
    const itemLearningProgress = await LearningProgress.findOne({
      _id: req.params.id,
    })
      .populate("user")
      .populate("day")
      .exec();
    res.json({ learningProgress: itemLearningProgress });
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const addLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress(req.body).save();
    res.json({ learningProgress: learningProgress });
  } catch (error) {
    res.status(400).json({ message: "Thêm thất bại" });
  }
};

export const editLearningProgress = async (req, res) => {
  try {
    const editLearningProgress = await LearningProgress.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .populate("user")
      .populate("day")
      .exec();
    res.json({ learningProgress: editLearningProgress });
  } catch (error) {
    res.status(400).json({ message: "Sửa thất bại" });
  }
};

export const deleteLearningProgress = async (req, res) => {
  try {
    const deleteLearningProgress = await LearningProgress.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json({ learningProgress: deleteLearningProgress });
  } catch (error) {
    res.status(400).json({ message: "Xóa thất bại" });
  }
};
