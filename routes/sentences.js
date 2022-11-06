import express  from "express";
import { addSentence, deleteSentence, editSentence, getDetailSentence, getlistSentence, getlistSentenceByIdActivity, getlistSentenceByIdDay } from "../controllers/sentencesController";

const router = express.Router();

router.get("/sentences", getlistSentence);
router.get("/sentences/:id", getDetailSentence);
router.post("/sentences", addSentence);
router.put("/sentences/:id", editSentence);
router.delete("/sentences/:id", deleteSentence);

router.get("/sentences/activity/:id", getlistSentenceByIdActivity);
router.get("/sentences/day/:dayId", getlistSentenceByIdDay);

export default router;
