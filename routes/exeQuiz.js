import express from 'express'
import { addQuiz, editQuiz, listExeQuiz, removeQuiz } from '../controllers/exeQuiz';

const routeExeQuiz = express.Router();

routeExeQuiz.get("/exeQuiz",listExeQuiz);
routeExeQuiz.post("/exeQuiz",addQuiz);
routeExeQuiz.get("/exeQuiz:id",editQuiz);
routeExeQuiz.get("/exeQuiz:id",removeQuiz);
