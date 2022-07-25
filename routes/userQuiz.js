import express from "express";
import { addUserQuiz, deleteUserQuiz, detailUserQuiz, editUserQuiz, listUserQuiz } from "../controllers/userQuiz";

const router = express.Router()

router.get("/userQuiz", listUserQuiz )
router.get("/userQuiz/:id", detailUserQuiz )
router.post("/userQuiz", addUserQuiz )
router.put("/userQuiz/:id", editUserQuiz )
router.delete("/userQuiz/:id", deleteUserQuiz )

export default router