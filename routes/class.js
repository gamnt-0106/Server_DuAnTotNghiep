import express from "express";
import { detailClass, getListClass } from "../controllers/class";


const router = express.Router()

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: Classes managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger 
 * components:
 *   schemas:
 *     Class:
 *       type: object
 *       required:
 *         - nameClass
 *         - numberOfStudent
 *         - lever
 *       properties:
 *         _id: 
 *           type: string
 *           description: The auto-generated id of Classes
 *         nameClass: 
 *           type: string
 *           description: nameClass of Classes
 *         numberOfStudent: 
 *           type: Number
 *           description: numberOfStudent of Classes
 *         lever: 
 *           type: string
 *           description: lever of Classes
 *         createdAt: 
 *           type: string
 *           description: Create Time of Classes
 *         updatedAt: 
 *           type: string
 *           description: Update Time of Classes
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b7
 *         nameClass: Your friend is tall
 *         numberOfStudent: 20
 *         lever: master
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     classId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Class id
 * 
 * */


// -------------------Get List Class----------------------
/**
 * @swagger
 *   /api/classes:
 *     get:
 *       summary: Return the list of all Classes
 *       tags: [Classes]
 *       responses:
 *         200: 
 *           description: The List of Classes
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Class'
 *              
 * */
router.get("/classes", getListClass)

// -------------------Get Detail Class----------------------
/**
 * @swagger
 *   /api/class/{id}:
 *     get:
 *       summary: Get Class by id
 *       tags: [Classes]
 *       parameters:
 *           - in: path
 *             name: id
 *             schema:
 *               type: string
 *             required: true
 *             description: The Classes id
 *       responses:
 *           200:
 *             description: The Classes detail by id
 *             contents:
 *               application/json:
 *                 schema:
 *                   $ref: '#/components/schemas/Class'
 *           400:
 *             description: The Classes is Not found
 */

router.get("/class/:id", detailClass)

// -------------------Add Class----------------------
/**
 * @swagger
 * /api/class:
 *   post:
 *     summary: Create a Class
 *     tags: [LectureVideos]
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Class'
 *     responses:
 *       200: 
 *         description: LectureVideo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400: 
 *         description: Fail to create a LectureVideo
 */

router.post("/lecture-video", addLectureVideo)

// -------------------Update Lecture Video----------------------
/**
 * @swagger
 * /api/lecture-video/{id}:
 *   put:
 *     summary: Update a LectureVideo
 *     tags: [LectureVideos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Lecture Video id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LectureVideo'
 *     responses:
 *       200: 
 *         description: LectureVideo was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400: 
 *         description: Fail to updated a LectureVideo
 */

router.put("/lecture-video/:id", editLectureVideo)

// -------------------Remove Lecture Video----------------------
/**
 * @swagger
 * /api/lecture-video/{id}:
 *   delete:
 *     summary: Remove a lecture video by id
 *     tags: [LectureVideos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Lecture Video id
 *     requestBody:
 *       required: true
 *       content: 
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LectureVideo'
 *     responses:
 *       200: 
 *         description: Lecture Video was successfully removed
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LectureVideo'
 *       400:
 *         description: Fail to removed a LectureVideo
 */

router.delete("/lecture-video/:id", deleteLectureVideo)

export default router