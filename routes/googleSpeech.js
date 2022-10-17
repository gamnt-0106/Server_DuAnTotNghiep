import express from "express";
import { ggSpeech } from "../controllers/googleSpeech";

const router = express.Router();
router.get("/googlespeech",ggSpeech)
router.get('/googlespeech2', (request,response)=>{
    response.send(ggSpeech());
})

export default router;