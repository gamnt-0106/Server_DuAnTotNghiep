import express from "express";
import { addTopicV, detailTopic } from "../controllers/topicVocabulary";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: TopicVocabularys
 *   description: TopicVocabularys managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     TopicVocabulary:
 *       type: object
 *       required:
 *         - name
 *         - vocabulary
 *         - verb
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of TopicVocabularys
 *         name:
 *           type: string
 *           description: name of TopicVocabularys
 *         image:
 *           type: string
 *           description: image of TopicVocabularys
 *         createdAt:
 *           type: string
 *           description: Create Time of TopicVocabularys
 *         updatedAt:
 *           type: string
 *           description: Update Time of TopicVocabularys
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         name: name
 *         image: image
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     TopicVocabularyId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The TopicVocabulary id
 *
 * */

 // -------------------Get Detail TopicVocabulary----------------------
 /**
  * @swagger
  *   /api/topicVocabulary/{id}:
  *     get:
  *       summary: Get TopicVocabulary by id
  *       tags: [TopicVocabularys]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The TopicVocabularys id
  *       responses:
  *           200:
  *             description: The TopicVocabularys detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/TopicVocabulary'
  *           400:
  *             description: The TopicVocabularys is Not found
  */
 
  router.get("/topicVocabulary/:id", detailTopic);




 
 // -------------------Add TopicVocabulary----------------------
 /**
  * @swagger
  * /api/topicVocabulary:
  *   post:
  *     summary: Create a TopicVocabulary
  *     tags: [TopicVocabularys]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/TopicVocabulary'
  *     responses:
  *       200:
  *         description: TopicVocabulary was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/TopicVocabulary'
  *       400:
  *         description: Fail to create a TopicVocabulary
  */

  router.post("/topicVocabulary", addTopicV)

 
export default router;