import express from "express";
import { addSpeak, deleteSpeak, detailSpeak, editSpeak, listSpeak } from "../controllers/speak";

const router = express.Router()

router.get("/speak", listSpeak )
router.get("/speak/:id", detailSpeak )
router.post("/speak", addSpeak )
router.put("/speak/:id", editSpeak )
router.delete("/speak/:id", deleteSpeak )

export default router