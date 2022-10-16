import express from "express";
import { addLearningProgress, deleteLearningProgress, detailLearningProgress, editLearningProgress, getListLearningProgress } from "../controllers/learningProgress";


const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: LearningProgress
 *   description: LearningProgress managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     LearningProgress:
 *       type: object
 *       required:
 *         - day
 *         - user
 *         - listeningSpeakingScore
 *         - vocabularyScore         
 *         - structureSentencesScore
 *         - conversationScore
 *         - grammarScore
 *         - isPass
 *         - order
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of LearningProgress
 *         day:
 *           type: string
 *           description: day of LearningProgress
 *         user:
 *           type: String
 *           description: user of LearningProgress
 *         listeningSpeakingScore:
 *           type: number
 *           description: listeningSpeakingScore of LearningProgress
 *         vocabularyScore:
 *           type: number
 *           description: vocabularyScore of LearningProgress
 *         structureSentencesScore:
 *           type: number
 *           description: structureSentencesScore of LearningProgress
 *         conversationScore:
 *           type: number
 *           description: conversationScore of LearningProgress
 *         grammarScore:
 *           type: number
 *           description: grammarScore of LearningProgress
 *         isPass:
 *           type: boolean
 *           description: isPass of LearningProgress
 *         order:
 *           type: string
 *           description: order of LearningProgress
 *         createdAt:
 *           type: string
 *           description: Create Time of LearningProgress
 *         updatedAt:
 *           type: string
 *           description: Update Time of LearningProgress
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         day: 62e8c62b587bcad52fbaf0b7
 *         user: 62e8c62b587bcad52fbaf0b7
 *         listeningSpeakingScore: 0
 *         vocabularyScore: 0         
 *         structureSentencesScore: 0
 *         conversationScore: 0
 *         grammarScore: 0
 *         isPass: false
 *         order: "order"
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     classId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The LearningProgress id
 *
 * */

// -------------------Get List LearningProgress----------------------
/**
 * @swagger
 *   /api/learning-progress:
 *     get:
 *       summary: Return the list of all LearningProgress
 *       tags: [LearningProgress]
 *       responses:
 *         200:
 *           description: The List of LearningProgress
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/LearningProgress'
 *
 * */
router.get("/learning-progress", getListLearningProgress);

// -------------------Get Detail LearningProgress----------------------
/**
 * @swagger
 *   /api/learning-progress/{id}:
 *     get:
 *       summary: Get LearningProgress by id
 *       tags: [LearningProgress]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The LearningProgress id
 *       responses:
 *           200:
 *             description: The LearningProgress detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/LearningProgress'
 *           400:
 *             description: The LearningProgress is Not found
 */

router.get("/learning-progress/:id", detailLearningProgress);

// -------------------Add LearningProgress----------------------
/**
 * @swagger
 * /api/learning-progress:
 *   post:
 *     summary: Create a LearningProgress
 *     tags: [LearningProgress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LearningProgress'
 *     responses:
 *       200:
 *         description: LearningProgress was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningProgress'
 *       400:
 *         description: Fail to create a LearningProgress
 */

router.post("/learning-progress", addLearningProgress);

// -------------------Update LearningProgress----------------------
/**
 * @swagger
 * /api/learning-progress/{id}:
 *   put:
 *     summary: Update a LearningProgress
 *     tags: [LearningProgress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The LearningProgress id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LearningProgress'
 *     responses:
 *       200:
 *         description: LearningProgress was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningProgress'
 *       400:
 *         description: Fail to updated a LearningProgress
 */

router.put("/learning-progress/:id", editLearningProgress);

// -------------------Remove LearningProgress----------------------
/**
 * @swagger
 * /api/learning-progress/{id}:
 *   delete:
 *     summary: Remove a LearningProgress by id
 *     tags: [LearningProgress]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The LearningProgress id
 *     responses:
 *       200:
 *         description: LearningProgress was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningProgress'
 *       400:
 *         description: Fail to removed a LearningProgress
 */

router.delete("/learning-progress/:id", deleteLearningProgress);


export default router;
