import express from "express";
import {
  addUserSpeak,
  deleteUserSpeak,
  detailUserSpeak,
  editUserSpeak,
  listUserSpeak,
} from "../controllers/userSpeak";

const router = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: UserSpeaks
 *   description: UserSpeaks managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     UserSpeak:
 *       type: object
 *       required:
 *         - speak
 *         - history
 *         - answerSpeak
 *         - answer
 *         - audio
 *         - score
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of UserSpeaks
 *         speak:
 *           type: string
 *           description: speak of UserSpeaks
 *         history:
 *           type: string
 *           description: history of UserSpeaks
 *         answerSpeak:
 *           type: string
 *           description: answerSpeak of UserSpeaks
 *         score:
 *           type: number
 *           description: score of UserSpeaks
 *         audio:
 *           type: string
 *           description: audio of UserSpeaks
 *         createdAt:
 *           type: string
 *           description: Create Time of UserSpeaks
 *         updatedAt:
 *           type: string
 *           description: Update Time of UserSpeaks
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         speak: 62e8c62b587bcad52fbaf0b
 *         answerSpeak: 62e8c62b587bcad52fbaf0b
 *         history: 62e8c62b587bcad52fbaf0b
 *         audio: time
 *         score: 0
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     UserSpeakId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The UserSpeak id
 *
 * */

// -------------------Get List UserSpeak----------------------
/**
 * @swagger
 *   /api/userSpeak:
 *     get:
 *       summary: Return the list of all UserSpeaks
 *       tags: [UserSpeaks]
 *       responses:
 *         200:
 *           description: The List of UserSpeaks
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/UserSpeak'
 *
 * */
router.get("/userSpeak", listUserSpeak);

// -------------------Get Detail UserSpeak----------------------
/**
 * @swagger
 *   /api/userSpeak/{id}:
 *     get:
 *       summary: Get UserSpeak by id
 *       tags: [UserSpeaks]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The UserSpeaks id
 *       responses:
 *           200:
 *             description: The UserSpeaks detail by id
 *             orders:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/UserSpeak'
 *           400:
 *             description: The UserSpeaks is Not found
 */

router.get("/userSpeak/:id", detailUserSpeak);

// -------------------Add UserSpeak----------------------
/**
 * @swagger
 * /api/userSpeak:
 *   post:
 *     summary: Create a UserSpeak
 *     tags: [UserSpeaks]
 *     requestBody:
 *       required: true
 *       order:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSpeak'
 *     responses:
 *       200:
 *         description: UserSpeak was successfully created
 *         order:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSpeak'
 *       400:
 *         description: Fail to create a UserSpeak
 */

router.post("/userSpeak", addUserSpeak);

// -------------------Update UserSpeak----------------------
/**
 * @swagger
 * /api/userSpeak/{id}:
 *   put:
 *     summary: Update a UserSpeak
 *     tags: [UserSpeaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The UserSpeak id
 *     requestBody:
 *       required: true
 *       order:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSpeak'
 *     responses:
 *       200:
 *         description: UserSpeak was successfully updated
 *         order:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSpeak'
 *       400:
 *         description: Fail to updated a UserSpeak
 */

router.put("/userSpeak/:id", editUserSpeak);

// -------------------Remove UserSpeak----------------------
/**
 * @swagger
 * /api/userSpeak/{id}:
 *   delete:
 *     summary: Remove a UserSpeak by id
 *     tags: [UserSpeaks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The UserSpeak id
 *     requestBody:
 *       required: true
 *       order:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserSpeak'
 *     responses:
 *       200:
 *         description: UserSpeak was successfully removed
 *         order:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserSpeak'
 *       400:
 *         description: Fail to removed a UserSpeak
 */
router.delete("/userSpeak/:id", deleteUserSpeak);

export default router;
