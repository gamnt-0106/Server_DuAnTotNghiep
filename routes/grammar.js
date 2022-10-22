import express from "express";
import { addGrammar, deleteGrammar, detailGrammar, getDayGrammar, listGrammar, updateGrammar } from "../controllers/grammarController";

const router = express.Router();

router.get("/grammar", listGrammar);
// router.get("/grammar/:id", detailGrammar);
router.get("/grammar/:dayId", getDayGrammar);
router.post("/grammar", addGrammar);
router.put("/grammar/:id", updateGrammar);
router.delete("/grammar/:id", deleteGrammar);
export default router;