import express from "express";
import { addVocabulary, deleteVocabulary, detailVocabulary, editVocabulary, listVocabulary } from "../controllers/vocabularyController";

const router = express.Router();



// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Vocabularys
 *   description: Vocabularys managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Vocabulary:
 *       type: object
 *       required:
 *         - category
 *         - words
 *         - meaning
 *         - wordForm
 *         - image
 *         - audio
 *         - place
 *         - pa
 *         - example
 *         - sentences
 *         - dayId
 *         - structureSentences
 *         - grammar
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Vocabularys
 *         category:
 *           type: string
 *           description: category of Vocabularys
 *         words:
 *           type: string
 *           description: words of Vocabularys
 *         wordForm:
 *           type: string
 *           description: wordForm of Vocabularys
 *         meaning:
 *           type: string
 *           description: meaning of Vocabularys
 *         place:
 *           type: number
 *           description: place of Vocabularys
 *         audio:
 *           type: string
 *           description: audio of Vocabularys
 *         pa:
 *           type: string
 *           description: pa of Vocabularys
 *         image:
 *           type: string
 *           description: image of Vocabularys
 *         sentences:
 *           type: string
 *           description: sentences of Vocabularys
 *         example:
 *           type: string
 *           description: example of Vocabularys
 *         dayId:
 *           type: string
 *           description: dayId of Vocabularys
 *         structureSentences:
 *           type: string
 *           description: structureSentences of Vocabularys
 *         grammar:
 *           type: string
 *           description: grammar of Vocabularys
 *         createdAt:
 *           type: string
 *           description: Create Time of Vocabularys
 *         updatedAt:
 *           type: string
 *           description: Update Time of Vocabularys
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         category: 62e8c62b587bcad52fbaf0b
 *         sentences: 62e8c62b587bcad52fbaf0b
 *         dayId: 62e8c62b587bcad52fbaf0b
 *         structureSentences: 62e8c62b587bcad52fbaf0b
 *         grammar: 62e8c62b587bcad52fbaf0b
 *         meaning: meaning
 *         words: String
 *         image: image
 *         wordForm: wordForm
 *         audio: audio
 *         place: 0
 *         pa: String
 *         example: example
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     VocabularyId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Vocabulary id
 *
 * */

// -------------------Get List Vocabulary----------------------
/**
 * @swagger
 *   /api/Vocabulary:
 *     get:
 *       summary: Return the list of all Vocabularys
 *       tags: [Vocabularys]
 *       responses:
 *         200:
 *           description: The List of Vocabularys
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Vocabulary'
 *
 * */
 router.get("/vocabulary", listVocabulary);


 // -------------------Get Detail Vocabulary----------------------
 /**
  * @swagger
  *   /api/vocabulary/{id}:
  *     get:
  *       summary: Get Vocabulary by id
  *       tags: [Vocabularys]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Vocabularys id
  *       responses:
  *           200:
  *             description: The Vocabularys detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Vocabulary'
  *           400:
  *             description: The Vocabularys is Not found
  */
 
 router.get("/vocabulary/:id", detailVocabulary);
 
 // -------------------Add Vocabulary----------------------
 /**
  * @swagger
  * /api/vocabulary:
  *   post:
  *     summary: Create a Vocabulary
  *     tags: [Vocabularys]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Vocabulary'
  *     responses:
  *       200:
  *         description: Vocabulary was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Vocabulary'
  *       400:
  *         description: Fail to create a Vocabulary
  */
 
  router.post("/vocabulary", addVocabulary);
 
 // -------------------Update Vocabulary----------------------
 /**
  * @swagger
  * /api/vocabulary/{id}:
  *   put:
  *     summary: Update a Vocabulary
  *     tags: [Vocabularys]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Vocabulary id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Vocabulary'
  *     responses:
  *       200:
  *         description: Vocabulary was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Vocabulary'
  *       400:
  *         description: Fail to updated a Vocabulary
  */
 
  router.put("/vocabulary/:id", editVocabulary);
 
 // -------------------Remove Vocabulary----------------------
 /**
  * @swagger
  * /api/vocabulary/{id}:
  *   delete:
  *     summary: Remove a Vocabulary by id
  *     tags: [Vocabularys]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Vocabulary id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Vocabulary'
  *     responses:
  *       200:
  *         description: Vocabulary was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Vocabulary'
  *       400:
  *         description: Fail to removed a Vocabulary
  */

router.delete("/vocabulary/:id", deleteVocabulary);

export default router;