import express from "express";
import {
  addUserNote,
  editUserNote,
  getListUserNote,
} from "../controllers/noteController";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: Notes managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - userId
 *         - dayId
 *         - text
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Notes
 *         userId:
 *           type: string
 *           description: userId of Notes
 *         dayId:
 *           type: string
 *           description: dayId of Notes
 *         text:
 *           type: string
 *           description: text of Notes
 *         createdAt:
 *           type: string
 *           description: Create Time of Notes
 *         updatedAt:
 *           type: string
 *           description: Update Time of Notes
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         userId: 62e8c62b587bcad52fbaf0b
 *         dayId: 62e8c62b587bcad52fbaf0b
 *         text: text
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     NoteId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Note id
 *
 * */

// -------------------Get Note by DayId and UserId----------------------
/**
 * @swagger
 *   /api/noteCouse/{dayId}/{userId}:
 *     get:
 *       summary: Get Note by DayId and UserId
 *       tags: [Notes]
 *       parameters:
 *           - in: path
 *             name: dayId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Notes dayId
 *           - in: path
 *             name: userId
 *             schema:
 *               type: string
 *             required: true
 *             description: The Notes userId
 *       responses:
 *           200:
 *             description: The Notes by DayId and UserId
 *             orders:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Note'
 *           400:
 *             description: The Notes is Not found
 */

router.get("/noteCouse/:dayId/:userId", getListUserNote);

// -------------------Add Note----------------------
/**
 * @swagger
 * /api/noteCouse:
 *   post:
 *     summary: Create a Note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       order:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Note was successfully created
 *         order:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       400:
 *         description: Fail to create a Note
 */

router.post("/noteCouse", addUserNote);

// -------------------Update Note----------------------
/**
 * @swagger
 * /api/noteCouse/{id}:
 *   put:
 *     summary: Update a Note
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Note id
 *     requestBody:
 *       required: true
 *       order:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Note was successfully updated
 *         order:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       400:
 *         description: Fail to updated a Note
 */

router.put("/noteCouse/:id", editUserNote);

export default router;
