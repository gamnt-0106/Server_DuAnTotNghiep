import express from "express";
import { addGrammar, detailGrammar, listGrammar } from "../controllers/grammarController";

const router = express.Router();

router.get("/grammar", listGrammar)
router.get("/grammar/:id", detailGrammar)
router.post("/grammar", addGrammar)

export default router;