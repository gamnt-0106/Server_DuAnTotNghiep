import express from "express";
import {
  addHistory,
  deleteHistory,
  detailHistory,
  detailHistoryByUserActivity,
  editHistory,
  listHistory,
  listHistoryByUser,
} from "../controllers/history";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Historys
 *   description: Historys managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     History:
 *       type: object
 *       required:
 *         - user
 *         - practiceActivity
 *         - learningProgress
 *         - score
 *         - totalScore
 *         - totalCorrect
 *         - result
 *         - type
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Historys
 *         user:
 *           type: string
 *           description: user of Historys
 *         practiceActivity:
 *           type: string
 *           description: practiceActivity of Historys
 *         learningProgress:
 *           type: string
 *           description: learningProgress of Historys
 *         score:
 *           type: number
 *           description: score of Historys
 *         totalScore:
 *           type: number
 *           description: totalScore of Historys
 *         totalCorrect:
 *           type: number
 *           description: totalCorrect of Historys
 *         result:
 *           type: number
 *           description: result of Historys
 *         type:
 *           type: string
 *           description: type of Historys
 *         createdAt:
 *           type: string
 *           description: Create Time of Historys
 *         updatedAt:
 *           type: string
 *           description: Update Time of Historys
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         user: 62e8c62b587bcad52fbaf0b
 *         practiceActivity: 62e8c62b587bcad52fbaf0b
 *         learningProgress: 62e8c62b587bcad52fbaf0b
 *         score: 3123
 *         totalScore: 4323
 *         totalCorrect: 2332321
 *         result: 213321
 *         type: type
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     HistoryId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The History id
 *
 * */

// -------------------Get List History----------------------
/**
 * @swagger
 *   /api/history:
 *     get:
 *       summary: Return the list of all Historys
 *       tags: [Historys]
 *       responses:
 *         200:
 *           description: The List of Historys
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/History'
 *
 * */
router.get("/history", listHistory);

// -------------------Get Detail History----------------------
/**
 * @swagger
 *   /api/history/{id}:
 *     get:
 *       summary: Get History by id
 *       tags: [Historys]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Historys id
 *       responses:
 *           200:
 *             description: The Historys detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/History'
 *           400:
 *             description: The Historys is Not found
 */

router.get("/history/:id", detailHistory);

// -------------------Get History by userId----------------------
/**
 * @swagger
 *   /api/history/{userId}:
 *     get:
 *       summary: Get History by userId
 *       tags: [Historys]
 *       parameters:
 *           - in: path
 *             name: userId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Historys userId
 *       responses:
 *           200:
 *             description: The Historys detail by userId
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/History'
 *           400:
 *             description: The Historys is Not found
 */

router.get("/history/user/:userId", listHistoryByUser); // Lấy list history theo user

// -------------------Get History by activityId and userId----------------------
/**
 * @swagger
 *   /api/history/{activityId}/{userId}:
 *     get:
 *       summary: Get History by id
 *       tags: [Historys]
 *       parameters:
 *           - in: path
 *             name: activityId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Historys activityId
 *           - in: path
 *             name: userId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Historys userId
 *       responses:
 *           200:
 *             description: The Historys detail by activityId and userId
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/History'
 *           400:
 *             description: The Historys is Not found
 */

router.get("/history/:activityId/:userId", detailHistoryByUserActivity); // Lấy detail history theo activity và user

// -------------------Add History----------------------
/**
 * @swagger
 * /api/history:
 *   post:
 *     summary: Create a History
 *     tags: [Historys]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/History'
 *     responses:
 *       200:
 *         description: History was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/History'
 *       400:
 *         description: Fail to create a History
 */

 router.post("/history", addHistory);


// -------------------Update History----------------------
/**
 * @swagger
 * /api/history/{id}:
 *   put:
 *     summary: Update a History
 *     tags: [Historys]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The History id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/History'
 *     responses:
 *       200:
 *         description: History was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/History'
 *       400:
 *         description: Fail to updated a History
 */

 router.put("/history/:id", editHistory);


// -------------------Remove History----------------------
/**
 * @swagger
 * /api/history/{id}:
 *   delete:
 *     summary: Remove a History by id
 *     tags: [Historys]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The History id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/History'
 *     responses:
 *       200:
 *         description: History was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/History'
 *       400:
 *         description: Fail to removed a History
 */
 router.delete("/history/:id", deleteHistory);

export default router;
