import express from "express";
import { addHistory, deleteHistory, detailHistory, detailHistoryByUserActivity, editHistory, listHistory, listHistoryByUser } from "../controllers/history";


const router = express.Router()

router.get("/history", listHistory )
router.get("/history/:id", detailHistory )
router.get("/history/:userId", listHistoryByUser); // Lấy list history theo user
router.get("/history/:activityId&:userId", detailHistoryByUserActivity); // Lấy detail history theo activity và user
router.post("/history", addHistory )
router.put("/history/:id", editHistory )
router.delete("/history/:id", deleteHistory )

export default router