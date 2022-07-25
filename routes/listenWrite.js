import express from "express";
import { addListenWrite, deleteListenWrite, detailListenWrite, editListenWrite, listListenWrite } from "../controllers/listenWrite";



const router = express.Router()

router.get("/listenWrite", listListenWrite )
router.get("/listenWrite/:id", detailListenWrite )
router.post("/listenWrite", addListenWrite )
router.put("/listenWrite/:id", editListenWrite )
router.delete("/listenWrite/:id", deleteListenWrite )

export default router