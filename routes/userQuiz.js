import express from "express";
import { addUserQuiz, deleteUserQuiz, detailUserQuiz, editUserQuiz, listUserQuiz } from "../controllers/userQuiz";

const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: UserQuizs
 *   description: UserQuizs managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     UserQuiz:
 *       type: object
 *       required:
 *         - quiz
 *         - history
 *         - answerQuiz
 *         - answer
 *         - time
 *         - point
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of UserQuizs
 *         quiz:
 *           type: string
 *           description: quiz of UserQuizs
 *         history:
 *           type: string
 *           description: history of UserQuizs
 *         answerQuiz:
 *           type: string
 *           description: answerQuiz of UserQuizs
 *         point:
 *           type: number
 *           description: point of UserQuizs
 *         time:
 *           type: string
 *           description: time of UserQuizs
 *         answer:
 *           type: string
 *           description: answer of UserQuizs
 *         createdAt:
 *           type: string
 *           description: Create Time of UserQuizs
 *         updatedAt:
 *           type: string
 *           description: Update Time of UserQuizs
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         quiz: 62e8c62b587bcad52fbaf0b
 *         answerQuiz: 62e8c62b587bcad52fbaf0b
 *         history: 62e8c62b587bcad52fbaf0b
 *         time: time
 *         point: 0
 *         answer: 0
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     UserQuizId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The UserQuiz id
 *
 * */

// -------------------Get List UserQuiz----------------------
/**
 * @swagger
 *   /api/userQuiz:
 *     get:
 *       summary: Return the list of all UserQuizs
 *       tags: [UserQuizs]
 *       responses:
 *         200:
 *           description: The List of UserQuizs
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/UserQuiz'
 *
 * */
 router.get("/userQuiz", listUserQuiz )





 // -------------------Get Detail UserQuiz----------------------
 /**
  * @swagger
  *   /api/userQuiz/{id}:
  *     get:
  *       summary: Get UserQuiz by id
  *       tags: [UserQuizs]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The UserQuizs id
  *       responses:
  *           200:
  *             description: The UserQuizs detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/UserQuiz'
  *           400:
  *             description: The UserQuizs is Not found
  */
 
  router.get("/userQuiz/:id", detailUserQuiz )




 
 // -------------------Add UserQuiz----------------------
 /**
  * @swagger
  * /api/userQuiz:
  *   post:
  *     summary: Create a UserQuiz
  *     tags: [UserQuizs]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserQuiz'
  *     responses:
  *       200:
  *         description: UserQuiz was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserQuiz'
  *       400:
  *         description: Fail to create a UserQuiz
  */
 
  router.post("/userQuiz", addUserQuiz )




 // -------------------Update UserQuiz----------------------
 /**
  * @swagger
  * /api/userQuiz/{id}:
  *   put:
  *     summary: Update a UserQuiz
  *     tags: [UserQuizs]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The UserQuiz id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserQuiz'
  *     responses:
  *       200:
  *         description: UserQuiz was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserQuiz'
  *       400:
  *         description: Fail to updated a UserQuiz
  */
 
  router.put("/userQuiz/:id", editUserQuiz )

 
 // -------------------Remove UserQuiz----------------------
 /**
  * @swagger
  * /api/userQuiz/{id}:
  *   delete:
  *     summary: Remove a UserQuiz by id
  *     tags: [UserQuizs]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The UserQuiz id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserQuiz'
  *     responses:
  *       200:
  *         description: UserQuiz was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserQuiz'
  *       400:
  *         description: Fail to removed a UserQuiz
  */

router.delete("/userQuiz/:id", deleteUserQuiz )

export default router