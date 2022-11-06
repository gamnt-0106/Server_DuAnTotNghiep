import express from 'express'
import { addWeek, detailWeek, editWeek, listWeek, listWeekByMonth, removeWeek } from '../controllers/week';


const routeWeek = express.Router();

// Mỗi thuộc tính cách nhau 2 dòng

// Tag (mục) của router
/**
 * @swagger
 * tags:
 *   name: Weeks
 *   description: Weeks managing API
 */

// Khai báo components để tái sử dụng thuộc tính (VD: schemas, parameters,... )
/**
 * @swagger
 * components:
 *   schemas:
 *     Week:
 *       type: object
 *       required:
 *         - month
 *         - order
 *         - title
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of Weeks
 *         title:
 *           type: string
 *           description: title of Weeks
 *         order:
 *           type: Number
 *           description: order of Weeks
 *         month:
 *           type: string
 *           description: month of Weeks
 *         createdAt:
 *           type: string
 *           description: Create Time of Weeks
 *         updatedAt:
 *           type: string
 *           description: Update Time of Weeks
 *       example:
 *         _id: 62e8c62b587bcad52fbaf0b
 *         title: title
 *         order: 100000
 *         month: 62e8c62b587bcad52fbaf0b
 *         createdAt: 2022-08-02T06:37:31.665+00:00
 *         updatedAt: 2022-08-15T14:13:19.886+00:00
 *   parameters:
 *     WeekId:
 *       in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The Week id
 *
 * */

// -------------------Get List Week----------------------
/**
 * @swagger
 *   /api/week:
 *     get:
 *       summary: Return the list of all Weeks
 *       tags: [Weeks]
 *       responses:
 *         200:
 *           description: The List of Weeks
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Week'
 *
 * */
 routeWeek.get("/week",listWeek);


 // -------------------Get Week by month----------------------
 /**
  * @swagger
  *   /api/week/month/{id}:
  *     get:
  *       summary: Get Week by id
  *       tags: [Weeks]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Weeks id
  *       responses:
  *           200:
  *             description: The Weeks by week
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Week'
  *           400:
  *             description: The Weeks is Not found
  */
  routeWeek.get("/week/month/:id",listWeekByMonth);

 
 // -------------------Get Detail Week----------------------
 /**
  * @swagger
  *   /api/week/{id}:
  *     get:
  *       summary: Get Week by id
  *       tags: [Weeks]
  *       parameters:
  *           - in: path
  *             name: id
  *             schema:
  *               type: string
  *             required: true
  *             description: The Weeks id
  *       responses:
  *           200:
  *             description: The Weeks detail by id
  *             contents:
  *               application/json:
  *                 schema:
  *                   $ref: '#/components/schemas/Week'
  *           400:
  *             description: The Weeks is Not found
  */
 
  routeWeek.get("/week/:id",detailWeek);

 
 // -------------------Add Week----------------------
 /**
  * @swagger
  * /api/week:
  *   post:
  *     summary: Create a Week
  *     tags: [Weeks]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Week'
  *     responses:
  *       200:
  *         description: Week was successfully created
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Week'
  *       400:
  *         description: Fail to create a Week
  */
 
  routeWeek.post("/week",addWeek);

 
 // -------------------Update Week----------------------
 /**
  * @swagger
  * /api/week/{id}:
  *   put:
  *     summary: Update a Week
  *     tags: [Weeks]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Week id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Week'
  *     responses:
  *       200:
  *         description: Week was successfully updated
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Week'
  *       400:
  *         description: Fail to updated a Week
  */
 
  routeWeek.put("/week/:id",editWeek);

 
 // -------------------Remove Week----------------------
 /**
  * @swagger
  * /api/week/{id}:
  *   delete:
  *     summary: Remove a Week by id
  *     tags: [Weeks]
  *     parameters:
  *       - in: path
  *         name: id
  *         schema:
  *           type: string
  *         required: true
  *         description: The Week id
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/Week'
  *     responses:
  *       200:
  *         description: Week was successfully removed
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/Week'
  *       400:
  *         description: Fail to removed a Week
  */

routeWeek.delete("/week/:id",removeWeek);

export default routeWeek;