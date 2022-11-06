import express from "express";
import { addSpeak, deleteSpeak, detailSpeak, editSpeak, listSpeak } from "../controllers/speak";

const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Speaks
 *   description: Speaks managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Speak:
 *       type: object
 *       required:
 *         - category
 *         - vocabulary
 *         - verb
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Speaks
 *         category:
 *           type: string
 *           description: category of Speaks
 *         vocabulary:
 *           type: string
 *           description: vocabulary of Speaks
 *         verb:
 *           type: string
 *           description: verb of Speaks
 *         createdAt:
 *           type: string
 *           description: Create Time of Speaks
 *         updatedAt:
 *           type: string
 *           description: Update Time of Speaks
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         category: 62e8c62b587bcad52fbaf0b
 *         vocabulary: vocabulary
 *         verb: verb
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     SpeakId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Speak id
 *
 * */

// -------------------Get List Speak----------------------
/**
 * @swagger
 *   /api/speak:
 *     get:
 *       summary: Return the list of all Speaks
 *       tags: [Speaks]
 *       responses:
 *         200:
 *           description: The List of Speaks
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Speak'
 *
 * */
 router.get("/speak", listSpeak )



 // -------------------Get Detail Speak----------------------
 /**
  * @swagger
  *   /api/speak/{id}:
  *     get:
  *       summary: Get Speak by id
  *       tags: [Speaks]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Speaks id
  *       responses:
  *           200:
  *             description: The Speaks detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Speak'
  *           400:
  *             description: The Speaks is Not found
  */
 
  router.get("/speak/:id", detailSpeak )


 
 // -------------------Add Speak----------------------
 /**
  * @swagger
  * /api/speak:
  *   post:
  *     summary: Create a Speak
  *     tags: [Speaks]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Speak'
  *     responses:
  *       200:
  *         description: Speak was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Speak'
  *       400:
  *         description: Fail to create a Speak
  */
 
  router.post("/speak", addSpeak )


 // -------------------Update Speak----------------------
 /**
  * @swagger
  * /api/speak/{id}:
  *   put:
  *     summary: Update a Speak
  *     tags: [Speaks]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Speak id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Speak'
  *     responses:
  *       200:
  *         description: Speak was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Speak'
  *       400:
  *         description: Fail to updated a Speak
  */
 
  router.put("/speak/:id", editSpeak )




 
 // -------------------Remove Speak----------------------
 /**
  * @swagger
  * /api/speak/{id}:
  *   delete:
  *     summary: Remove a Speak by id
  *     tags: [Speaks]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Speak id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Speak'
  *     responses:
  *       200:
  *         description: Speak was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Speak'
  *       400:
  *         description: Fail to removed a Speak
  */

router.delete("/speak/:id", deleteSpeak )

export default router