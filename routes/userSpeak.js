import express from "express";
import { addUserSpeak, deleteUserSpeak, detailUserSpeak, editUserSpeak, listUserSpeak } from "../controllers/userSpeak";


const router = express.Router()

router.get("/userSpeak", listUserSpeak )
router.get("/userSpeak/:id", detailUserSpeak )
router.post("/userSpeak", addUserSpeak )
router.put("/userSpeak/:id", editUserSpeak )
router.delete("/userSpeak/:id", deleteUserSpeak )

export default router