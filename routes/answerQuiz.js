import express from "express";
import { addAnswerQuiz, deleteAnswerQuiz, detailAnswerQuiz, editAnswerQuiz, listAnswerQuiz } from "../controllers/answerQuiz";



const router = express.Router()

router.get("/answerQuiz", listAnswerQuiz )
router.get("/answerQuiz/:id", detailAnswerQuiz )
router.post("/answerQuiz", addAnswerQuiz )
router.put("/answerQuiz/:id", editAnswerQuiz )
router.delete("/answerQuiz/:id", deleteAnswerQuiz )

export default router