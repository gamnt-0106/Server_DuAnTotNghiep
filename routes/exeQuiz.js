import express from 'express'
import { addQuiz, editQuiz, listExeQuiz, removeQuiz } from '../controllers/exeQuiz';

const routeExeQuiz = express.Router();


// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: ExeQuizs
 *   description: ExeQuizs managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     ExeQuiz:
 *       type: object
 *       required:
 *         - question
 *         - correctAnswer
 *         - timeLimit
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of ExeQuizs
 *         question:
 *           type: string
 *           description: question of ExeQuizs
 *         image:
 *           type: string
 *           description: image of ExeQuizs
 *         correctAnswer:
 *           type: Boolean
 *           description: correctAnswer of ExeQuizs
 *         timeLimit:
 *           type: Number
 *           description: timeLimit of ExeQuizs
 *         createdAt:
 *           type: string
 *           description: Create Time of ExeQuizs
 *         updatedAt:
 *           type: string
 *           description: Update Time of ExeQuizs
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         question: name
 *         image: image
 *         correctAnswer: false
 *         timeLimit: 100000
 *         expiredTime: 2022-08-02T06:37:31.665+00:00
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     ExeQuizId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The ExeQuiz id
 *
 * */

// -------------------Get List ExeQuiz----------------------
/**
 * @swagger
 *   /api/exeQuiz:
 *     get:
 *       summary: Return the list of all ExeQuizs
 *       tags: [ExeQuizs]
 *       responses:
 *         200:
 *           description: The List of ExeQuizs
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/ExeQuiz'
 *
 * */
 routeExeQuiz.get("/exeQuiz",listExeQuiz);
 
 // -------------------Add ExeQuiz----------------------
 /**
  * @swagger
  * /api/exeQuiz:
  *   post:
  *     summary: Create a ExeQuiz
  *     tags: [ExeQuizs]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ExeQuiz'
  *     responses:
  *       200:
  *         description: ExeQuiz was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ExeQuiz'
  *       400:
  *         description: Fail to create a ExeQuiz
  */
 
  routeExeQuiz.post("/exeQuiz",addQuiz);


 
 // -------------------Update ExeQuiz----------------------
 /**
  * @swagger
  * /api/exeQuiz/{id}:
  *   put:
  *     summary: Update a ExeQuiz
  *     tags: [ExeQuizs]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The ExeQuiz id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ExeQuiz'
  *     responses:
  *       200:
  *         description: ExeQuiz was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/ExeQuiz'
  *       400:
  *         description: Fail to updated a ExeQuiz
  */
 
  routeExeQuiz.put("/exeQuiz/:id",editQuiz);


 
 // -------------------Remove ExeQuiz----------------------
 /**
  * @swagger
  * /api/exeQuiz/{id}:
  *   delete:
  *     summary: Remove a ExeQuiz by id
  *     tags: [ExeQuizs]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The ExeQuiz id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/ExeQuiz'
  *     responses:
  *       200:
  *         description: ExeQuiz was successfully removed
  *         content:
  *           application/json: 
  *             schema:
  *               $ref: '#/components/schemas/ExeQuiz'
  *       400:
  *         description: Fail to removed a ExeQuiz
  */

  routeExeQuiz.delete("/exeQuiz/:id",removeQuiz);

  
export default routeExeQuiz;