import express from "express";
import { addHistory, deleteHistory, detailHistory, detailHistoryByUserActivity, editHistory, listHistory } from "../controllers/history";


const router = express.Router()

router.get("/history", listHistory )
router.get("/history/:id", detailHistory )
router.get("/history/:acivityId&:userId", detailHistoryByUserActivity);
router.post("/history", addHistory )
router.put("/history/:id", editHistory )
router.delete("/history/:id", deleteHistory )

export default router