import express from "express";
import { addAnswerListenWrite, deleteAnswerListenWrite, detailAnswerListenWrite, editAnswerListenWrite, listAnswerListenWrite } from "../controllers/answerListenWrite";


const router = express.Router()

router.get("/answerListenWrite", listAnswerListenWrite )
router.get("/answerListenWrite/:id", detailAnswerListenWrite )
router.post("/answerListenWrite", addAnswerListenWrite )
router.put("/answerListenWrite/:id", editAnswerListenWrite )
router.delete("/answerListenWrite/:id", deleteAnswerListenWrite )

export default router