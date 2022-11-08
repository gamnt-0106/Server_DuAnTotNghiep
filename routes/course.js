import express from 'express'
import { addCourse, detailCourse, editCourse, listCourse, removeCourse } from '../controllers/course';


const routeCourse = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Courses managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - title
 *         - price
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Courses
 *         title:
 *           type: string
 *           description: title of Courses
 *         price:
 *           type: Number
 *           description: price of Courses
 *         totalBuy:
 *           type: Number
 *           description: totalBuy of Courses
 *         expiredTime:
 *           type: string
 *           description: expiredTime of Courses
 *         createdAt:
 *           type: string
 *           description: Create Time of Courses
 *         updatedAt:
 *           type: string
 *           description: Update Time of Courses
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         title: title
 *         price: 100000
 *         rating: 1000
 *         totalBuy: 1000
 *         expiredTime: 2022-08-02T06:37:31.665+00:00
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     CourseId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Course id
 *
 * */

// -------------------Get List Course----------------------
/**
 * @swagger
 *   /api/course:
 *     get:
 *       summary: Return the list of all Courses
 *       tags: [Courses]
 *       responses:
 *         200:
 *           description: The List of Courses
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Course'
 *
 * */
 routeCourse.get("/course",listCourse);

 // -------------------Get Detail Course----------------------
 /**
  * @swagger
  *   /api/course/{id}:
  *     get:
  *       summary: Get Course by id
  *       tags: [Courses]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Courses id
  *       responses:
  *           200:
  *             description: The Courses detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Course'
  *           400:
  *             description: The Courses is Not found
  */
 
  routeCourse.get("/course/:id",detailCourse);
 
 // -------------------Add Course----------------------
 /**
  * @swagger
  * /api/course:
  *   post:
  *     summary: Create a Course
  *     tags: [Courses]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Course'
  *     responses:
  *       200:
  *         description: Course was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Course'
  *       400:
  *         description: Fail to create a Course
  */
 
  routeCourse.post("/course",addCourse);

 
 // -------------------Update Course----------------------
 /**
  * @swagger
  * /api/course/{id}:
  *   put:
  *     summary: Update a Course
  *     tags: [Courses]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Course id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Course'
  *     responses:
  *       200:
  *         description: Course was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Course'
  *       400:
  *         description: Fail to updated a Course
  */
 
  routeCourse.put("/course/:id",editCourse);

 
 // -------------------Remove Course----------------------
 /**
  * @swagger
  * /api/course/{id}:
  *   delete:
  *     summary: Remove a Course by id
  *     tags: [Courses]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Course id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Course'
  *     responses:
  *       200:
  *         description: Course was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Course'
  *       400:
  *         description: Fail to removed a Course
  */

routeCourse.delete("/course/:id",removeCourse);


export default routeCourse;