import express from "express";
import { addUserListenWrite, detailUserListenWrite, editUserListenWrite, listUserListenWrite } from "../controllers/userListenWrite";


const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: UserListenWrites
 *   description: UserListenWrites managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     UserListenWrite:
 *       type: object
 *       required:
 *         - history
 *         - listenWrite
 *         - score
 *         - idListenWrite
 *         - listAnswer
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of UserListenWrites
 *         history:
 *           type: string
 *           description: history of UserListenWrites
 *         listenWrite:
 *           type: string
 *           description: listenWrite of UserListenWrites
 *         numTrueAnswer:
 *           type: string
 *           description: numTrueAnswer of UserListenWrites
 *         listAnswer:
 *           type: string
 *           description: listAnswer of UserListenWrites
 *         idListenWrite:
 *           type: string
 *           description: idListenWrite of UserListenWrites
 *         score:
 *           type: string
 *           description: score of UserListenWrites
 *         createdAt:
 *           type: string
 *           description: Create Time of UserListenWrites
 *         updatedAt:
 *           type: string
 *           description: Update Time of UserListenWrites
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         listenWrite: 62e8c62b587bcad52fbaf0b
 *         history: 62e8c62b587bcad52fbaf0b
 *         idListenWrite: idListenWrite
 *         numTrueAnswer: 0
 *         listAnswer: [
 *              {
 *                  answerUser: string,
 *                  answerCorrect: string,
 *                  isCorrect: false
 *              }
 *          ]
 *         score: 0
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     UserListenWriteId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The UserListenWrite id
 *
 * */

// -------------------Get List UserListenWrite----------------------
/**
 * @swagger
 *   /api/userListenWrite:
 *     get:
 *       summary: Return the list of all UserListenWrites
 *       tags: [UserListenWrites]
 *       responses:
 *         200:
 *           description: The List of UserListenWrites
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/UserListenWrite'
 *
 * */
 router.get("/userListenWrite", listUserListenWrite )




 // -------------------Get Detail UserListenWrite----------------------
 /**
  * @swagger
  *   /api/userListenWrite/{id}:
  *     get:
  *       summary: Get UserListenWrite by id
  *       tags: [UserListenWrites]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The UserListenWrites id
  *       responses:
  *           200:
  *             description: The UserListenWrites detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/UserListenWrite'
  *           400:
  *             description: The UserListenWrites is Not found
  */
 
  router.get("/userListenWrite/:id", detailUserListenWrite )



 
 // -------------------Add UserListenWrite----------------------
 /**
  * @swagger
  * /api/userListenWrite:
  *   post:
  *     summary: Create a UserListenWrite
  *     tags: [UserListenWrites]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserListenWrite'
  *     responses:
  *       200:
  *         description: UserListenWrite was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserListenWrite'
  *       400:
  *         description: Fail to create a UserListenWrite
  */
 
  router.post("/userListenWrite", addUserListenWrite )



 // -------------------Update UserListenWrite----------------------
 /**
  * @swagger
  * /api/userListenWrite/{id}:
  *   put:
  *     summary: Update a UserListenWrite
  *     tags: [UserListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The UserListenWrite id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserListenWrite'
  *     responses:
  *       200:
  *         description: UserListenWrite was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserListenWrite'
  *       400:
  *         description: Fail to updated a UserListenWrite
  */
 
  router.put("/userListenWrite/:id", editUserListenWrite )

 
 // -------------------Remove UserListenWrite----------------------
 /**
  * @swagger
  * /api/userListenWrite/{id}:
  *   delete:
  *     summary: Remove a UserListenWrite by id
  *     tags: [UserListenWrites]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The UserListenWrite id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/UserListenWrite'
  *     responses:
  *       200:
  *         description: UserListenWrite was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/UserListenWrite'
  *       400:
  *         description: Fail to removed a UserListenWrite
  */

router.delete("/userListenWrite/:id", detailUserListenWrite )

export default router