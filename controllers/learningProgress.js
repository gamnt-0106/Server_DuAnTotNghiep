import LearningProgress from "../models/learningProgress";



export const getListLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.find()
      .populate("user")
      .populate("day")
      .exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const getListProgressByUser = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.find({
      user: req.params.userId
    })
    .populate("day")
      .populate("user")
      .exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const getProgressByUserAndDay = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.findOne({
      day: req.params.dayId,
      user: req.params.userId
    })
      .populate("user")
      .populate("day")
      .exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const detailLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.findOne({
      _id: req.params.id,
    })
      .populate("user")
      .populate("day")
      .exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Không tìm thấy Data" });
  }
};

export const addLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress(req.body).save();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Thêm thất bại" });
  }
};

export const editLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    )
      .populate("user")
      .populate("day")
      .exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Sửa thất bại" });
  }
};

export const deleteLearningProgress = async (req, res) => {
  try {
    const learningProgress = await LearningProgress.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(learningProgress);
  } catch (error) {
    res.status(400).json({ message: "Xóa thất bại" });
  }
};
