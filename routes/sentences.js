
import express  from "express";
import { addSentence, deleteSentence, editSentence, getDetailSentence, getlistSentence, getlistSentenceByIdActivity, getlistSentenceByIdDay } from "../controllers/sentencesController";


const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Sentences
 *   description: Sentences managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Sentence:
 *       type: object
 *       required:
 *         - practiceActivity
 *         - words
 *         - meaning
 *         - phoneticTranscription
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Sentences
 *         practiceActivity:
 *           type: string
 *           description: practiceActivity of Sentences
 *         words:
 *           type: string
 *           description: words of Sentences
 *         meaning:
 *           type: string
 *           description: meaning of Sentences
 *         structuralAnalysis:
 *           type: string
 *           description: structuralAnalysis of Sentences
 *         grammarAnalysis:
 *           type: string
 *           description: grammarAnalysis of Sentences
 *         phoneticTranscription:
 *           type: string
 *           description: phoneticTranscription of Sentences
 *         soundCombinations:
 *           type: Array
 *           description: soundCombinations of Sentences
 *         createdAt:
 *           type: string
 *           description: Create Time of Sentences
 *         updatedAt:
 *           type: string
 *           description: Update Time of Sentences
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         practiceActivity: 62e8c62b587bcad52fbaf0b7
 *         words: words
 *         meaning: meaning of Sentences
 *         datetime: datetime of Sentences
 *         grammarAnalysis: grammarAnalysis of Sentences
 *         avatar: avatar of Sentences
 *         structuralAnalysis: structuralAnalysis of Sentences
 *         phoneticTranscription: phoneticTranscription of Sentences
 *         soundCombinations: [
 *              {
 *                  sound: sound,
 *                  combinations: Array
 *              }
 *          ]
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     SentenceId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Sentence id
 *
 * */

// -------------------Get List Sentence----------------------
/**
 * @swagger
 *   /api/sentences:
 *     get:
 *       summary: Return the list of all Sentences
 *       tags: [Sentences]
 *       responses:
 *         200:
 *           description: The List of Sentences
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Sentence'
 *
 * */
router.get("/sentences", getlistSentence);

// -------------------Get Detail Sentence----------------------
/**
 * @swagger
 *   /api/sentences/{id}:
 *     get:
 *       summary: Get Sentence by id
 *       tags: [Sentences]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Sentences id
 *       responses:
 *           200:
 *             description: The Sentences detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Sentence'
 *           400:
 *             description: The Sentences is Not found
 */

router.get("/sentences/:id", getDetailSentence);

// -------------------Get activity Sentence----------------------
/**
 * @swagger
 *   /api/sentences/activity/{id}:
 *     get:
 *       summary: Get Sentence activity by id
 *       tags: [Sentences]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Sentences id
 *       responses:
 *           200:
 *             description: The Sentences activity by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Sentence'
 *           400:
 *             description: The Sentences is Not found
 */

router.get("/sentences/activity/:id", getlistSentenceByIdActivity);

// -------------------Add Sentence----------------------
/**
 * @swagger
 * /api/sentences:
 *   post:
 *     summary: Create a Sentence
 *     tags: [Sentences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sentence'
 *     responses:
 *       200:
 *         description: Sentence was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sentence'
 *       400:
 *         description: Fail to create a Sentence
 */

router.post("/sentences", addSentence);

// -------------------Update Sentence----------------------
/**
 * @swagger
 * /api/sentences/{id}:
 *   put:
 *     summary: Update a Sentence
 *     tags: [Sentences]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Sentence id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sentence'
 *     responses:
 *       200:
 *         description: Sentence was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sentence'
 *       400:
 *         description: Fail to updated a Sentence
 */

router.put("/sentences/:id", editSentence);


router.get("/sentences/activity/:id", getlistSentenceByIdActivity);
router.get("/sentences/day/:dayId", getlistSentenceByIdDay);

// -------------------Remove Sentence----------------------
/**
 * @swagger
 * /api/sentences/{id}:
 *   delete:
 *     summary: Remove a Sentence by id
 *     tags: [Sentences]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Sentence id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sentence'
 *     responses:
 *       200:
 *         description: Sentence was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sentence'
 *       400:
 *         description: Fail to removed a Sentence
 */

router.delete("/sentences/:id", deleteSentence);


// -------------------Join Sentence----------------------
/**
 * @swagger
 * /api/Sentence/like/{id}:
 *   put:
 *     summary: Join a Sentence by link
 *     tags: [Sentences]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Sentence id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sentence'
 *     responses:
 *       200:
 *         description: Sentence was successfully join
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sentence'
 *       400:
 *         description: Fail to join a Sentence
 */
export default router;
