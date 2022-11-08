import express from "express";
import { transcribeSpeech } from "../controllers/googleSpeech";


const router = express.Router();
router.get("/googlespeech",transcribeSpeech)
router.get('/googlespeech2', (request,response)=>{
    response.send(ggSpeech());
})

export default router;