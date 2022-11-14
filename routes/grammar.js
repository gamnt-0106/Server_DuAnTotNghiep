import express from "express";
import { addGrammar, deleteGrammar, detailGrammar, getDayGrammar, listGrammar, updateGrammar } from "../controllers/grammarController";

const router = express.Router();

router.get("/grammar/:id", detailGrammar);

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Grammars
 *   description: Grammars managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Grammar:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - dayId
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Grammars
 *         name:
 *           type: string
 *           description: name of Grammars
 *         image:
 *           type: string
 *           description: image of Grammars
 *         description:
 *           type: string
 *           description: description of Grammars
 *         summary:
 *           type: string
 *           description: summary of Grammars
 *         dayId:
 *           type: string
 *           description: dayId of Grammars
 *         createdAt:
 *           type: string
 *           description: Create Time of Grammars
 *         updatedAt:
 *           type: string
 *           description: Update Time of Grammars
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         name: name
 *         image: image
 *         description: description
 *         summary: summary
 *         dayId: 62e8c62b587bcad52fbaf0b
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     GrammarId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Grammar id
 *
 * */

// -------------------Get List Grammar----------------------
/**
 * @swagger
 *   /api/grammar:
 *     get:
 *       summary: Return the list of all Grammars
 *       tags: [Grammars]
 *       responses:
 *         200:
 *           description: The List of Grammars
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Grammar'
 *
 * */
 router.get("/grammar", listGrammar);

 // -------------------Get Detail Grammar----------------------
 /**
  * @swagger
  *   /api/grammar/{dayId}:
  *     get:
  *       summary: Get Grammar by dayId
  *       tags: [Grammars]
  *       parameters:
  *           - in: path
  *             name: dayId
  *             schema:
  *               type: string
  *             required: true
  *             description: The Grammars dayId
  *       responses:
  *           200:
  *             description: The Grammars detail by dayId
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Grammar'
  *           400:
  *             description: The Grammars is Not found
  */
 
  router.get("/grammar/:dayId", getDayGrammar);

 
 // -------------------Add Grammar----------------------
 /**
  * @swagger
  * /api/grammar:
  *   post:
  *     summary: Create a Grammar
  *     tags: [Grammars]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Grammar'
  *     responses:
  *       200:
  *         description: Grammar was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Grammar'
  *       400:
  *         description: Fail to create a Grammar
  */
 
  router.post("/grammar", addGrammar);


 
 // -------------------Update Grammar----------------------
 /**
  * @swagger
  * /api/grammar/{id}:
  *   put:
  *     summary: Update a Grammar
  *     tags: [Grammars]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Grammar id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Grammar'
  *     responses:
  *       200:
  *         description: Grammar was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Grammar'
  *       400:
  *         description: Fail to updated a Grammar
  */
 
  router.put("/grammar/:id", updateGrammar);


 
 // -------------------Remove Grammar----------------------
 /**
  * @swagger
  * /api/grammar/{id}:
  *   delete:
  *     summary: Remove a Grammar by id
  *     tags: [Grammars]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Grammar id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Grammar'
  *     responses:
  *       200:
  *         description: Grammar was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Grammar'
  *       400:
  *         description: Fail to removed a Grammar
  */
  router.delete("/grammar/:id", deleteGrammar);


export default router;