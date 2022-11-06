import express from "express";
import { addQuestionListenWrite, deleteQuestionListenWrite, editQuestionListenWrite, listQuestionListenWriteByIdQuestion } from "../controllers/questionListenWrite";


const router = express.Router()


// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: QuestionListenWrites
 *   description: QuestionListenWrites managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     QuestionListenWrite:
 *       type: object
 *       required:
 *         - idListenWrite
 *         - name
 *         - order
 *         - text
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of QuestionListenWrites
 *         idListenWrite:
 *           type: string
 *           description: idListenWrite of QuestionListenWrites
 *         name:
 *           type: string
 *           description: name of QuestionListenWrites
 *         text:
 *           type: string
 *           description: text of QuestionListenWrites
 *         order:
 *           type: number
 *           description: order of QuestionListenWrites
 *         createdAt:
 *           type: string
 *           description: Create Time of QuestionListenWrites
 *         updatedAt:
 *           type: string
 *           description: Update Time of QuestionListenWrites
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         idListenWrite: 62e8c62b587bcad52fbaf0b
 *         text: text
 *         name: name
 *         order: 0
 *         audio: audio
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     QuestionListenWriteId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The QuestionListenWrite id
 *
 * */




 // -------------------Get Detail QuestionListenWrite----------------------
 /**
  * @swagger
  *   /api/questionListenWrite/{id}:
  *     get:
  *       summary: Get QuestionListenWrite by id
  *       tags: [QuestionListenWrites]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The QuestionListenWrites id
  *       responses:
  *           200:
  *             description: The QuestionListenWrites detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/QuestionListenWrite'
  *           400:
  *             description: The QuestionListenWrites is Not found
  */
 
  router.get("/questionListenWrite/:id", listQuestionListenWriteByIdQuestion )

 
 // -------------------Add QuestionListenWrite----------------------
 /**
  * @swagger
  * /api/questionListenWrite:
  *   post:
  *     summary: Create a QuestionListenWrite
  *     tags: [QuestionListenWrites]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/QuestionListenWrite'
  *     responses:
  *       200:
  *         description: QuestionListenWrite was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/QuestionListenWrite'
  *       400:
  *         description: Fail to create a QuestionListenWrite
  */
 
  router.post("/questionListenWrite", addQuestionListenWrite )


 // -------------------Update QuestionListenWrite----------------------
 /**
  * @swagger
  * /api/questionListenWrite/{id}:
  *   put:
  *     summary: Update a QuestionListenWrite
  *     tags: [QuestionListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The QuestionListenWrite id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/QuestionListenWrite'
  *     responses:
  *       200:
  *         description: QuestionListenWrite was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/QuestionListenWrite'
  *       400:
  *         description: Fail to updated a QuestionListenWrite
  */
  router.put("/questionListenWrite/:id", editQuestionListenWrite )

 // -------------------Remove QuestionListenWrite----------------------
 /**
  * @swagger
  * /api/questionListenWrite/{id}:
  *   delete:
  *     summary: Remove a QuestionListenWrite by id
  *     tags: [QuestionListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The QuestionListenWrite id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/QuestionListenWrite'
  *     responses:
  *       200:
  *         description: QuestionListenWrite was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/QuestionListenWrite'
  *       400:
  *         description: Fail to removed a QuestionListenWrite
  */

router.delete("/questionListenWrite/:id", deleteQuestionListenWrite )

export default router