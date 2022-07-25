import express from "express";
import { addAnswerSpeak, deleteAnswerSpeak, detailAnswerSpeak, editAnswerSpeak, listAnswerSpeak } from "../controllers/answerSpeak";



const router = express.Router()

router.get("/answerSpeak", listAnswerSpeak )
router.get("/answerSpeak/:id", detailAnswerSpeak )
router.post("/answerSpeak", addAnswerSpeak )
router.put("/answerSpeak/:id", editAnswerSpeak )
router.delete("/answerSpeak/:id", deleteAnswerSpeak )

export default router