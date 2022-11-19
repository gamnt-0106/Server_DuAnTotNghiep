import express from 'express'
import { addMonth, detailMonth, editMonth, listMonth, monthBiggest, removeMonth } from '../controllers/month';


const routeMonth = express.Router();


routeMonth.get("/month/monthBiggest",monthBiggest);
// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Months
 *   description: Months managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Month:
 *       type: object
 *       required:
 *         - course
 *         - title
 *         - order
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Months
 *         course:
 *           type: string
 *           description: course of Months
 *         title:
 *           type: string
 *           description: title of Months
 *         order:
 *           type: number
 *           description: order of Months
 *         createdAt:
 *           type: string
 *           description: Create Time of Months
 *         updatedAt:
 *           type: string
 *           description: Update Time of Months
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         course: 62e8c62b587bcad52fbaf0b
 *         title: title
 *         order: 0
 *         audio: audio
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     MonthId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Month id
 *
 * */

// -------------------Get List Month----------------------
/**
 * @swagger
 *   /api/month:
 *     get:
 *       summary: Return the list of all Months
 *       tags: [Months]
 *       responses:
 *         200:
 *           description: The List of Months
 *           order:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Month'
 *
 * */
 routeMonth.get("/month",listMonth);


 // -------------------Get Detail Month----------------------
 /**
  * @swagger
  *   /api/month/{id}:
  *     get:
  *       summary: Get Month by id
  *       tags: [Months]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Months id
  *       responses:
  *           200:
  *             description: The Months detail by id
  *             orders:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Month'
  *           400:
  *             description: The Months is Not found
  */
 
  routeMonth.get("/month/:id",detailMonth);

 
 // -------------------Add Month----------------------
 /**
  * @swagger
  * /api/month:
  *   post:
  *     summary: Create a Month
  *     tags: [Months]
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Month'
  *     responses:
  *       200:
  *         description: Month was successfully created
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Month'
  *       400:
  *         description: Fail to create a Month
  */
 
  routeMonth.post("/month",addMonth);

 // -------------------Update Month----------------------
 /**
  * @swagger
  * /api/month/{id}:
  *   put:
  *     summary: Update a Month
  *     tags: [Months]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Month id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Month'
  *     responses:
  *       200:
  *         description: Month was successfully updated
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Month'
  *       400:
  *         description: Fail to updated a Month
  */
 
  routeMonth.put("/month/:id",editMonth);



 
 // -------------------Remove Month----------------------
 /**
  * @swagger
  * /api/month/{id}:
  *   delete:
  *     summary: Remove a Month by id
  *     tags: [Months]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Month id
  *     requestBody:
  *       required: true
  *       order:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Month'
  *     responses:
  *       200:
  *         description: Month was successfully removed
  *         order:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Month'
  *       400:
  *         description: Fail to removed a Month
  */

routeMonth.delete("/month/:id",removeMonth);


export default routeMonth;